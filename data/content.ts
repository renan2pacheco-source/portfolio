// =============================================================
// CONTEÚDO DO PORTFÓLIO — Renan Nunes Pacheco
// Edite aqui pra atualizar o site.
// =============================================================

export const profile = {
  name: 'Renan Pacheco',
  fullName: 'Renan Nunes Pacheco',
  initials: 'RP',
  title: 'Currículo',
  tagline: 'Currículo profissional',
  location: 'Vale do Anari, RO — Brasil',
  email: 'renan2pacheco@gmail.com',
  whatsapp: {
    number: '5569992114236',
    display: '(69) 99211-4236',
    link: 'https://wa.me/5569992114236',
  },
  links: {
    github: 'https://github.com/renan2pacheco-source',
    instagram: 'https://instagram.com/nucleo_digit4l',
    whatsapp: 'https://wa.me/5569992114236',
    email: 'mailto:renan2pacheco@gmail.com',
  },
  cvUrl: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/Curriculo_Renan_Nunes_Pacheco_Visual.pdf`,
}

// Hero — texto exibido na capa
export const hero = {
  greeting: 'Olá, eu sou',
  subtitle: 'Desenvolvedor | Criativo | Solucionador',
  description:
    'Transformo ideias em soluções digitais com criatividade, foco em detalhes e paixão pelo que faço.',
  ctaPrimary: 'Ver meu trabalho',
  ctaSecondary: 'Baixar CV',
  availableBadge: 'Disponível para oportunidades',
}

// Sobre — texto corrido, sem repetir skills
export const about = {
  intro: 'Sou um profissional apaixonado por tecnologia e por resolver problemas reais.',
  paragraphs: [
    'Cursando Nutrição e Educação Física, com perfil autodidata em tecnologia. Aprendi a usar ferramentas de produtividade, IA, design, planilhas e programação básica de forma independente.',
    'Tecnologia, pra mim, é ferramenta de trabalho: uso pra organizar informações, automatizar tarefas, criar documentos, apoiar atendimento e melhorar processos do dia a dia.',
  ],
  qualities: [
    'Comunicação clara',
    'Pensamento analítico',
    'Organização',
    'Aprendizado contínuo',
    'Foco em resultado',
  ],
}

// Palavras que giram no hero (verbos curtos, sem duplicar competências)
export const rotatingRoles = [
  'Suporte',
  'Vendas',
  'Web',
  'IA',
  'Automação',
]

// Navegação principal
export const navLinks = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'O que entrego', href: '#entrego' },
  { name: 'Contato', href: '#contato' },
]

// =============================================================
// HABILIDADES — Stack atual (com tag "atual") + experiência
// =============================================================
export const skills = [
  // --- Em uso atual (daily driver) ---
  {
    name: 'OpenCode CLI',
    description: 'Coding agent via terminal',
    iconKey: 'opencode',
    current: true,
  },
  {
    name: 'Hermes Agent',
    description: 'Agente de IA local com TUI',
    iconKey: 'hermes',
    current: true,
  },
  {
    name: 'CachyOS Linux',
    description: 'Arch-based, otimizado p/ performance',
    iconKey: 'cachyos',
    current: true,
  },
  {
    name: 'VS Code',
    description: 'Editor principal',
    iconKey: 'vscode',
    current: true,
  },
  {
    name: 'GitHub',
    description: 'Versionamento e deploy',
    iconKey: 'github',
    current: true,
  },
  {
    name: 'Vercel',
    description: 'Hosting e preview deploys',
    iconKey: 'vercel',
    current: true,
  },
  {
    name: 'TypeScript',
    description: 'Linguagem principal',
    iconKey: 'typescript',
    current: true,
  },
  {
    name: 'Python',
    description: 'Scripts e automação',
    iconKey: 'python',
    current: true,
  },
  {
    name: 'HTML',
    description: 'Estruturação',
    iconKey: 'html',
    current: true,
  },
  {
    name: 'JavaScript',
    description: 'Lógica de front',
    iconKey: 'javascript',
    current: true,
  },

  // --- Experiência anterior ---
  { name: 'Windows',       iconKey: 'windows',     current: false },
  { name: 'AnyDesk',       iconKey: 'anydesk',     current: false },
  { name: 'TeamViewer',    iconKey: 'teamviewer',  current: false },
  { name: 'Hardware',      iconKey: 'hardware',    current: false },
  { name: 'Word',          iconKey: 'word',        current: false },
  { name: 'Excel',         iconKey: 'excel',       current: false },
  { name: 'PowerPoint',    iconKey: 'powerpoint',  current: false },
  { name: 'Google Docs',   iconKey: 'googledocs',  current: false },
  { name: 'Google Sheets', iconKey: 'googlesheets',current: false },
  { name: 'ChatGPT',       iconKey: 'chatgpt',     current: false },
  { name: 'Claude',        iconKey: 'claude',      current: false },
  { name: 'Gemini',        iconKey: 'gemini',      current: false },
  { name: 'Canva',         iconKey: 'canva',       current: false },
  { name: 'Figma',         iconKey: 'figma',       current: false },
  { name: 'Illustrator',   iconKey: 'illustrator', current: false },
  { name: 'CSS',           iconKey: 'css',         current: false },
  { name: 'PostgreSQL',    iconKey: 'postgresql',  current: false },
  { name: 'SQLite',        iconKey: 'sqlite',      current: false },
  { name: 'AutoCAD',       iconKey: 'autocad',     current: false },
]

// =============================================================
// COMPETÊNCIAS — onde gero resultado pra empresa
// =============================================================
export const competencies = [
  {
    name: 'Suporte técnico & atendimento',
    description:
      'Resolvo problemas técnicos de pessoas com comunicação clara, paciência e foco em continuidade do trabalho.',
    tags: ['Comunicação', 'Paciência', 'Resolução'],
    color: 'yellow',
  },
  {
    name: 'Vendas & relacionamento',
    description:
      'Identifico necessidade, conduzo negociação e faço pós-atendimento pra melhorar conversão e confiança.',
    tags: ['Vendas', 'Negociação', 'Pós-venda'],
    color: 'pink',
  },
  {
    name: 'Criação de websites',
    description:
      'Desenvolvo sites estáticos e portfólios com TypeScript, React, Astro e Next.js — do design ao deploy.',
    tags: ['Astro', 'Next.js', 'TypeScript'],
    color: 'blue',
  },
  {
    name: 'CRM & automação',
    description:
      'Organizo contatos, oportunidades e rotinas em CRMs. Automatizo fluxos pra reduzir trabalho manual.',
    tags: ['CRM', 'Automação', 'Planilhas'],
    color: 'green',
  },
  {
    name: 'Agentes de IA',
    description:
      'Crio agentes especializados com LLMs e TUIs, integrando ao fluxo real de trabalho com Hermes e OpenCode.',
    tags: ['IA Generativa', 'TUI', 'Integração'],
    color: 'yellow',
  },
  {
    name: 'Design gráfico',
    description:
      'Crio materiais visuais com Canva, Figma e Illustrator — peças para redes, apresentação e identidade.',
    tags: ['Canva', 'Figma', 'Illustrator'],
    color: 'pink',
  },
  {
    name: 'Melhoria de processos',
    description:
      'Mapeio tarefas repetitivas, organizo etapas e proponho formas simples de reduzir retrabalho e atrasos.',
    tags: ['Processos', 'Organização', 'Produtividade'],
    color: 'blue',
  },
  {
    name: 'Rotinas operacionais',
    description:
      'Apoio operação de campo: leitura de plantas, medições, pavimentação urbana e acompanhamento de demandas.',
    tags: ['Operação', 'Pavimentação', 'Campo'],
    color: 'green',
  },
]

// =============================================================
// FORMAÇÃO ACADÊMICA
// =============================================================
export const education = [
  {
    course: 'Nutrição',
    institution: 'UniCesumar',
    period: 'Cursando',
    note: 'Foco em saúde, alimentação e rotina.',
  },
  {
    course: 'Educação Física',
    institution: 'Curso Livre',
    period: 'Cursando',
    note: 'Movimento, treino e acompanhamento de pessoas.',
  },
]

// =============================================================
// IDIOMAS
// =============================================================
export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' },
]
