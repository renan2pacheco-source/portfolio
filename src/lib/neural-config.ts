// =============================================================
// Parâmetros do cérebro neural 3D (Three.js)
// =============================================================

export interface NeuralConfig {
  nodeCount: number;
  connectionDistance: number;
  cameraSpeed: number; // rad/s (rotação automática)
  mouseParallax: boolean;
  opacity: number; // 0-1
  pulseSpeed: number; // velocidade da onda de ativação
}

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const hasWebGL = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    ));
  } catch {
    return false;
  }
};

export const getNeuralConfig = (): NeuralConfig => {
  const mobile = isMobile();
  if (mobile) {
    return {
      nodeCount: 60,
      connectionDistance: 1.7,
      cameraSpeed: 0.025,
      mouseParallax: false,
      opacity: 0.18,
      pulseSpeed: 0.4,
    };
  }
  return {
    nodeCount: 110,
    connectionDistance: 1.85,
    cameraSpeed: 0.045,
    mouseParallax: true,
    opacity: 0.32,
    pulseSpeed: 0.5,
  };
};
