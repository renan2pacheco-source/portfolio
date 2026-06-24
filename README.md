# Currículo — Renan Nunes Pacheco

> Site/currículo profissional sério, com foco em habilidades, ferramentas e resultado para empresas. Hospedado no GitHub Pages.

🌐 **URL produção:** `https://renan2pacheco-source.github.io/portfolio/`

## Código

- **Projeto:** `/home/renan/projetos/portfolio/`
- **Conteúdo principal:** `data/content.ts`
- **Stack atual vs Experiência:** `data/content.ts` (separados em `currentStack` e `experienceStack`)

## Stack

| Camada | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | React 19 + TypeScript |
| Animações | Motion (framer-motion v12) |
| Estilo | Tailwind CSS 4 |
| Ícones | Simple Icons + Lucide + SVGs custom (OpenCode, Hermes, CachyOS, VS Code) |
| Fonte | Geist + Geist Mono |
| Efeitos | Aurora background, Glassmorphism Nav, RotatingText |
| Deploy | GitHub Actions → Pages (Next.js static export) |

## Estrutura do currículo

1. **Hero** — nome completo + RotatingText ("Suporte Técnico", "Atendimento", "Vendas", "Automação", "Operação") + CTA WhatsApp + botão de download CV
2. **Sobre** — resumo profissional, perfil, experiências
3. **Trajetória** — timeline com experiência profissional + formação + idiomas
4. **Stack** — separado em dois:
   - **Stack Atual** (em uso, com badge "Em uso"): OpenCode CLI, Hermes Agent, CachyOS, VS Code, GitHub, Vercel, TypeScript, Astro, Python, HTML, JavaScript
   - **Experiência anterior** (já usei): suporte, office, IA, design, web (CSS), linux, banco de dados, rotina operacional
5. **Competências** — onde gero resultado pra empresa (4 cards)
6. **Contato** — WhatsApp, email, GitHub, Instagram + localização
7. **Footer** — navegação + contato + social

## Como rodar

```bash
npm install --legacy-peer-deps
npm run dev
npm run build
```

A build gera um site estático em `out/` (Next.js static export).

## Estrutura do projeto

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Layout root (fontes Geist, metadata)
│   ├── page.tsx            # Home: ordem das seções
│   └── globals.css         # Tema dark-gold
├── components/
│   ├── glassmorphism-nav.tsx   # Nav fixa com hide/show on scroll
│   ├── hero-section.tsx        # Hero com RotatingText
│   ├── Aurora.tsx              # Background effect
│   ├── RotatingText.tsx        # Animação de texto rotativo
│   ├── footer.tsx              # Footer com social/contact
│   ├── ui/                     # shadcn/ui components
│   └── sections/               # Seções custom do currículo
│       ├── about-section.tsx
│       ├── experience-section.tsx
│       ├── stack-section.tsx
│       ├── competencies-section.tsx
│       └── contact-section.tsx
├── data/
│   └── content.ts          # TODO o conteúdo do site
├── lib/
│   └── icons.tsx           # Simple Icons + custom SVGs
├── public/                 # Assets estáticos
└── out/                    # Build output (gerado)
```

## Diretrizes de conteúdo

- Não tratar o site como vitrine de projetos pessoais.
- Não vender Renan como desenvolvedor profissional.
- Foco em resultado: suporte, atendimento, produtividade, organização, vendas, automação e melhoria de fluxo de trabalho.
- Manter tom sério e profissional.
- **Stack Atual** (em uso) é separado de **Experiência** (já trabalhou/contato) para deixar claro o que Renan usa no dia a dia vs. o que conhece.
