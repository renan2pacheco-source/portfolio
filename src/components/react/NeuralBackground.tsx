import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  getNeuralConfig,
  hasWebGL,
  prefersReducedMotion,
  type NeuralConfig,
} from '../../lib/neural-config';

/**
 * Cérebro neural 3D — background fixo com nós conectados e pulsos.
 * Carregado client-only (Three.js não roda no SSR).
 */
export default function NeuralBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Guards
    if (!hasWebGL()) {
      container.style.display = 'none';
      return;
    }
    if (prefersReducedMotion()) {
      // Versão estática: 1 frame, sem animação
      initStatic(container);
      return;
    }

    const config = getNeuralConfig();
    const cleanup = initAnimated(container, config, pausedRef);

    // Pausa quando off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          pausedRef.current = !entry.isIntersecting;
        }
      },
      { threshold: 0 }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

// =============================================================
// Versão animada
// =============================================================
function initAnimated(
  container: HTMLDivElement,
  config: NeuralConfig,
  pausedRef: React.MutableRefObject<boolean>
): () => void {
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene
  const scene = new THREE.Scene();
  scene.background = null;

  // Camera
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
  camera.position.set(0, 0, 6);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // ============================================================
  // Nós (neurônios) — distribuição fibonacci sphere + ruído
  // ============================================================
  const nodes: { pos: THREE.Vector3; baseSize: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < config.nodeCount; i++) {
    const y = 1 - (i / (config.nodeCount - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;

    // Distorce pra parecer mais orgânico (cérebro, não esfera perfeita)
    const r = 2.8 + Math.random() * 0.4;
    const noise = (Math.random() - 0.5) * 0.5;
    nodes.push({
      pos: new THREE.Vector3(
        x * r + noise,
        y * r + noise * 0.7,
        z * r + noise
      ),
      baseSize: 0.025 + Math.random() * 0.02,
    });
  }

  // Geometria dos nós
  const nodeGeometry = new THREE.BufferGeometry();
  const nodePositions = new Float32Array(nodes.length * 3);
  const nodeSizes = new Float32Array(nodes.length);
  nodes.forEach((n, i) => {
    nodePositions[i * 3] = n.pos.x;
    nodePositions[i * 3 + 1] = n.pos.y;
    nodePositions[i * 3 + 2] = n.pos.z;
    nodeSizes[i] = n.baseSize;
  });
  nodeGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(nodePositions, 3)
  );
  nodeGeometry.setAttribute('size', new THREE.BufferAttribute(nodeSizes, 1));

  // Material dos nós (shader custom — glow phosphor)
  const nodeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#4ade80') },
      uOpacity: { value: config.opacity },
    },
    vertexShader: `
      attribute float size;
      varying float vAlpha;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * 300.0 / -mvPosition.z;
        gl_Position = projectionMatrix * mvPosition;
        vAlpha = 1.0;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        vec2 coord = gl_PointCoord - 0.5;
        float dist = length(coord);
        if (dist > 0.5) discard;
        float glow = 1.0 - smoothstep(0.0, 0.5, dist);
        glow = pow(glow, 2.0);
        gl_FragColor = vec4(uColor, glow * uOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(nodeGeometry, nodeMaterial);
  scene.add(points);

  // ============================================================
  // Conexões (sinapses) — linhas entre nós próximos
  // ============================================================
  const connections: { a: number; b: number; dist: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    // Pega os 3-5 vizinhos mais próximos
    const dists: { idx: number; dist: number }[] = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const d = nodes[i].pos.distanceTo(nodes[j].pos);
      dists.push({ idx: j, dist: d });
    }
    dists.sort((a, b) => a.dist - b.dist);
    const neighborCount = 3 + Math.floor(Math.random() * 3); // 3-5 vizinhos
    for (let k = 0; k < neighborCount; k++) {
      const neighbor = dists[k];
      if (neighbor.dist < config.connectionDistance * 1.5) {
        connections.push({ a: i, b: neighbor.idx, dist: neighbor.dist });
      }
    }
  }
  // Remove duplicatas (mantém a primeira ocorrência)
  const seen = new Set<string>();
  const uniqueConnections = connections.filter((c) => {
    const key = c.a < c.b ? `${c.a}-${c.b}` : `${c.b}-${c.a}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const lineGeometry = new THREE.BufferGeometry();
  const linePositions = new Float32Array(uniqueConnections.length * 6);
  const lineAlphas = new Float32Array(uniqueConnections.length * 2);
  uniqueConnections.forEach((c, i) => {
    const a = nodes[c.a].pos;
    const b = nodes[c.b].pos;
    linePositions[i * 6] = a.x;
    linePositions[i * 6 + 1] = a.y;
    linePositions[i * 6 + 2] = a.z;
    linePositions[i * 6 + 3] = b.x;
    linePositions[i * 6 + 4] = b.y;
    linePositions[i * 6 + 5] = b.z;
    lineAlphas[i * 2] = 1 - c.dist / (config.connectionDistance * 1.5);
    lineAlphas[i * 2 + 1] = 1 - c.dist / (config.connectionDistance * 1.5);
  });
  lineGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(linePositions, 3)
  );
  lineGeometry.setAttribute('alpha', new THREE.BufferAttribute(lineAlphas, 1));

  const lineMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#4ade80') },
      uOpacity: { value: config.opacity * 0.4 },
      uPulseSpeed: { value: config.pulseSpeed },
    },
    vertexShader: `
      attribute float alpha;
      varying float vAlpha;
      varying float vProgress;
      uniform float uTime;
      uniform float uPulseSpeed;
      void main() {
        vAlpha = alpha;
        // Progresso do pulso: 0 a 1 ao longo do segmento
        // Cada linha tem seu próprio offset baseado no índice
        float segId = float(gl_VertexID) * 0.1;
        vProgress = mod(uTime * uPulseSpeed + segId, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      varying float vProgress;
      void main() {
        // Linha com glow centralizado no pulso
        float pulse = 1.0 - abs(vProgress - 0.5) * 2.0;
        pulse = pow(pulse, 4.0);
        float baseAlpha = vAlpha * uOpacity;
        float totalAlpha = baseAlpha + pulse * 0.5;
        gl_FragColor = vec4(uColor, totalAlpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  // ============================================================
  // Cleanup registry (declarado antes de qualquer uso)
  // ============================================================
  const cleanupRefs: (() => void)[] = [];

  // ============================================================
  // Mouse parallax
  // ============================================================
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  if (config.mouseParallax) {
    const handleMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    cleanupRefs.push(() => window.removeEventListener('mousemove', handleMove));
  }

  // ============================================================
  // Resize handler
  // ============================================================
  const handleResize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', handleResize);
  cleanupRefs.push(() => window.removeEventListener('resize', handleResize));

  // ============================================================
  // Animation loop
  // ============================================================
  const clock = new THREE.Clock();
  let animationId: number;

  const tick = () => {
    if (pausedRef.current) {
      animationId = requestAnimationFrame(tick);
      return;
    }

    const elapsed = clock.getElapsedTime();

    // Câmera orbita lentamente
    const angle = elapsed * config.cameraSpeed;
    const camRadius = 6;
    camera.position.x = Math.cos(angle) * camRadius;
    camera.position.z = Math.sin(angle) * camRadius;
    camera.position.y = Math.sin(elapsed * 0.3) * 0.5;

    // Mouse parallax
    if (config.mouseParallax) {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      camera.position.x += mouse.x * 0.5;
      camera.position.y += mouse.y * 0.5;
    }

    camera.lookAt(0, 0, 0);

    // Update shader uniforms
    nodeMaterial.uniforms.uTime.value = elapsed;
    lineMaterial.uniforms.uTime.value = elapsed;

    renderer.render(scene, camera);
    animationId = requestAnimationFrame(tick);
  };
  tick();

  // ============================================================
  // Cleanup
  // ============================================================
  return () => {
    cancelAnimationFrame(animationId);
    cleanupRefs.forEach((fn) => fn());
    nodeGeometry.dispose();
    nodeMaterial.dispose();
    lineGeometry.dispose();
    lineMaterial.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  };
}

// =============================================================
// Versão estática (prefers-reduced-motion): 1 frame
// =============================================================
function initStatic(container: HTMLDivElement): void {
  const width = container.clientWidth;
  const height = container.clientHeight;
  // Placeholder visual: gradient radial sutil (sem canvas)
  container.style.background =
    'radial-gradient(circle at 50% 50%, rgba(74, 222, 128, 0.05) 0%, transparent 60%)';
  void width;
  void height;
}
