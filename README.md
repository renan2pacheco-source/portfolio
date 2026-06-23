# Portfólio — Renan Pacheco (v2 — Enthusiast Edition)

> Site pessoal/currículo com cérebro neural 3D de fundo. Dark retrô, monospace, animações cinematográficas. Hospedado no GitHub Pages.

🌐 **URL produção:** `https://<github-user>.github.io/portfolio/`

## Onde está o código

- **Código fonte:** `/home/renan/projetos/portfolio/`
- **Vault:** apenas este README + decisões. Build artifacts ficam no repo.

## Stack (v2)

| Camada | Tech | Por quê |
|---|---|---|
| Framework | Astro 5 | Estático, ilhas React, deploy GitHub Pages |
| Animação 2D | Framer Motion | Typewriter, scroll reveal, hover |
| Animação 3D | **Three.js** | Cérebro neural com shaders custom |
| UI | React 19 (em ilhas) | Componentes interativos |
| Estilo | **Tailwind CSS 4** | Design system via @theme |
| Linguagem | TypeScript | Type safety |
| Ícones | Lucide React + SVGs inline | Leve, tree-shakeable |
| Fonte | **Space Mono** | Monospace retrô NASA |
| Deploy | GitHub Actions → Pages | Grátis, sem config |

## Estrutura

```
portfolio/
├── src/
│   ├── components/
│   │   ├── react/
│   │   │   ├── NeuralBackground.tsx  ← Three.js, cérebro 3D
│   │   │   ├── AnimatedHero.tsx      ← typewriter, CTAs
│   │   │   ├── AnimatedSection.tsx   ← scroll reveal
│   │   │   ├── Navbar.tsx
│   │   │   └── ProjectCard.tsx
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro              ← layout terminal `ls`
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── lib/
│   │   ├── icons.ts                  ← SVGs oficiais (Simple Icons)
│   │   └── neural-config.ts          ← params do cérebro
│   ├── data/
│   │   └── content.ts                ← EDITE AQUI: bio, projetos, skills
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css                ← Tailwind 4 + scanline
├── public/
│   ├── cv-renan-nunes-pacheco.pdf    (placeholder)
│   └── favicon.svg
├── astro.config.mjs
├── postcss.config.cjs                ← Tailwind 4 via @tailwindcss/postcss
├── tailwind.config.mjs               (legado, mantido pra ref)
├── tsconfig.json
└── .github/workflows/deploy.yml
```

## MVP (v2 — Enthusiast Edition)

5 features, todas com tom "entusiasta em tecnologia" (não dev):

1. **Hero retrô** com typewriter (5 roles rotacionando) + **botão "Baixar CV em PDF"** + cursor piscando
2. **Sobre** com bio + avatar RP em ASCII box + status `// online`
3. **Trajetória** — Experiência (Runas) + Formação (3 cursos: Educação Física, Nutrição, Programação)
4. **Projetos** — 4 cards (Núcleo Digital, Segundo Cérebro, Hermes TUI, Gerador de Relatórios)
5. **Skills** — layout terminal `ls` com ícones oficiais + **WhatsApp como CTA principal**

## Cérebro Neural 3D (Three.js)

- **~110 nós** (desktop) / **~60 nós** (mobile) distribuídos em fibonacci sphere + ruído
- **~400 linhas** (sinapses) entre vizinhos mais próximos
- **Câmera orbitando** lentamente
- **Mouse parallax** sutil (desktop only)
- **Onda de ativação** pulsando ao longo das linhas
- **Pausa quando off-screen** (IntersectionObserver)
- **Fallback estático** se `prefers-reduced-motion`
- **Guard pra WebGL ausente** (esconde)
- Bundle: **472KB** (gzip 119KB) carregado via dynamic import

## Paleta — Phosphor Green (CRT autêntico)

```
--bg: #000000       (preto puro)
--bg-surface: #0d0d0d
--accent: #4ade80   (verde fósforo)
--primary: #60a5fa  (azul secundário)
--text: #e5e5e5
```

## Animações implementadas

- Typewriter cíclico (5 roles)
- Cursor piscando (`_` verde)
- Fade-in escalonado dos elementos
- **Cérebro neural 3D** com nós pulsando e sinapses animadas
- Scroll reveal em cada seção
- Hover lift + glow nos cards
- Hide-on-scroll na navbar
- Status pill pulsante
- Scroll indicator terminal
- Animações de scanline CRT (overlay sutil)

## Custo

| Item | Mensal |
|---|---|
| GitHub Pages | R$ 0 |
| Domínio próprio (depois) | ~R$ 50/ano (opcional) |
| **Total v2** | **R$ 0** |

## Build time

~2h com Claude Code (incluindo debug de Tailwind 3→4 e Three.js integration).

## Maior risco (resolvido)

**Tailwind 3.4 + Vite 6** quebra o build com erro de sucrase ao processar CSS. **Solução:** migrar pra **Tailwind 4** com `@tailwindcss/postcss` separado (sem `@astrojs/tailwind`). Tailwind 4 não suporta `@apply` em classes custom do mesmo `@layer` — duplicar estilos.

## Como rodar

```bash
cd /home/renan/projetos/portfolio
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve dist/
```

## Como fazer deploy

1. Criar repo `portfolio` no GitHub
2. Ajustar `astro.config.mjs`: `site` e `base`
3. GitHub: Settings → Pages → Source: GitHub Actions
4. `git push origin main` → deploy automático em ~2min

## TODO pessoal (Renan)

- [ ] Substituir placeholders em `src/data/content.ts` (buscar por `TODO: revisar`):
  - [ ] Email real
  - [ ] Username GitHub (se quiser voltar a mostrar)
  - [ ] Bio mais pessoal
  - [ ] Projetos com links verdadeiros
- [ ] Colocar PDF em `public/cv-renan-nunes-pacheco.pdf`
- [ ] (Opcional) Trocar avatar "RP" por foto real
- [ ] (Opcional) Domínio próprio (`renan.dev`)

## Lições aprendidas

- **Tailwind 3.4 + Vite 6 + sucrase 3.35** tem bug de "Unterminated string constant". Migrar pra **Tailwind 4** via `@tailwindcss/postcss`.
- **Tailwind 4** não suporta `@apply` em classes custom do mesmo layer — duplicar estilos nos componentes.
- **Three.js + Astro client:only** funciona bem, mas cuidado com **temporal dead zone**: declare `cleanupRefs` ANTES de usá-lo.
- **Acessibilidade**: sempre verificar `prefers-reduced-motion` antes de animar.
- **Performance**: 472KB de Three.js parece muito, mas carrega via dynamic import — só impacta após LCP.
