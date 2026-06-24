// =============================================================
// CONTEÚDO DO PORTFÓLIO — Renan Nunes Pacheco
// Edite aqui pra atualizar o site.
// =============================================================

export const profile = {
  name: 'Renan Pacheco',
  fullName: 'Renan Nunes Pacheco',
  initials: 'RP',
  title: 'Currículo Profissional',
  tagline:
    'Estudante de Nutrição e Educação Física. Perfil autodidata, com experiência em suporte técnico, vendas, atendimento e rotinas operacionais.',
  location: 'Vale do Anari, RO — Brasil',
  email: 'renan.nunes.pacheco@gmail.com',
  whatsapp: {
    number: '5569992114236',
    display: '(69) 99211-4236',
    link: 'https://wa.me/5569992114236',
  },
  links: {
    github: 'https://github.com/renan2pacheco-source',
    instagram: 'https://instagram.com/nucleo_digit4l',
    whatsapp: 'https://wa.me/5569992114236',
    email: 'mailto:renan.nunes.pacheco@gmail.com',
  },
  cvUrl: '/cv-renan-nunes-pacheco.pdf',
}

// Bio curta pra seção "Sobre"
export const bio = {
  intro: '22 anos, estudante de Nutrição e Educação Física, autodidata em tecnologia.',
  paragraphs: [
    'Tenho experiência com suporte técnico de computadores, vendas, trabalho autônomo/freelancer, atuação como personal trainer e rotina operacional em pavimentação urbana.',
    'Cursando Nutrição e Educação Física. Sou autodidata em tecnologia: aprendi a usar ferramentas de produtividade, IA, design, planilhas e programação básica de forma independente.',
    'Tecnologia, pra mim, é ferramenta de trabalho: uso pra organizar informações, automatizar tarefas, criar documentos, apoiar atendimento e melhorar processos do dia a dia.',
  ],
}

// Palavras que giram no hero
export const rotatingWords = [
  'Suporte Técnico',
  'Atendimento',
  'Vendas',
  'Automação',
  'Operação',
]

// Navegação principal
export const navLinks = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Trajetória', href: '#trajetoria' },
  { name: 'Stack', href: '#stack' },
  { name: 'Competências', href: '#competencias' },
  { name: 'Contato', href: '#contato' },
]

// =============================================================
// STACK ATUAL — ferramentas que uso no dia a dia
// =============================================================
export const currentStack = [
  {
    name: 'OpenCode CLI',
    description: 'Coding agent via terminal',
    iconKey: 'opencode',
  },
  {
    name: 'Hermes Agent',
    description: 'Agente de IA local com TUI',
    iconKey: 'hermes',
  },
  {
    name: 'CachyOS Linux',
    description: 'Arch-based, otimizado p/ performance',
    iconKey: 'cachyos',
  },
  {
    name: 'VS Code',
    description: 'Editor principal',
    iconKey: 'vscode',
  },
  {
    name: 'GitHub',
    description: 'Versionamento e deploy',
    iconKey: 'github',
  },
  {
    name: 'Vercel',
    description: 'Hosting e preview deploys',
    iconKey: 'vercel',
  },
  {
    name: 'TypeScript',
    description: 'Linguagem principal',
    iconKey: 'typescript',
  },
  {
    name: 'Astro',
    description: 'Framework de sites estáticos',
    iconKey: 'astro',
  },
  {
    name: 'Python',
    description: 'Scripts e automação',
    iconKey: 'python',
  },
  {
    name: 'HTML',
    description: 'Estruturação',
    iconKey: 'html',
  },
  {
    name: 'JavaScript',
    description: 'Lógica de front',
    iconKey: 'javascript',
  },
]

// =============================================================
// STACK DE EXPERIÊNCIA — ferramentas que já usei/trabalhei
// =============================================================
export const experienceStack = [
  {
    category: 'Suporte Técnico',
    items: [
      { name: 'Windows', iconKey: 'windows' },
      { name: 'AnyDesk', iconKey: 'anydesk' },
      { name: 'TeamViewer', iconKey: 'teamviewer' },
      { name: 'Hardware', iconKey: 'intel' },
    ],
  },
  {
    category: 'Produtividade & Office',
    items: [
      { name: 'Word', iconKey: 'word' },
      { name: 'Excel', iconKey: 'excel' },
      { name: 'PowerPoint', iconKey: 'powerpoint' },
      { name: 'Google Docs', iconKey: 'googledocs' },
      { name: 'Google Sheets', iconKey: 'googlesheets' },
    ],
  },
  {
    category: 'IA Generativa',
    items: [
      { name: 'ChatGPT', iconKey: 'openai' },
      { name: 'Claude', iconKey: 'claude' },
      { name: 'Gemini', iconKey: 'gemini' },
    ],
  },
  {
    category: 'Design & Criação',
    items: [
      { name: 'Canva', iconKey: 'canva' },
      { name: 'Figma', iconKey: 'figma' },
      { name: 'Illustrator', iconKey: 'illustrator' },
    ],
  },
  {
    category: 'Tecnologia Web',
    items: [
      { name: 'CSS', iconKey: 'css' },
    ],
  },
  {
    category: 'Linux & Shell',
    items: [
      { name: 'Linux', iconKey: 'linux' },
      { name: 'Ubuntu', iconKey: 'ubuntu' },
    ],
  },
  {
    category: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', iconKey: 'postgresql' },
      { name: 'SQLite', iconKey: 'sqlite' },
    ],
  },
  {
    category: 'Rotina Operacional',
    items: [
      { name: 'AutoCAD', iconKey: 'autocad' },
      { name: 'Trello', iconKey: 'trello' },
      { name: 'Notion', iconKey: 'notion' },
    ],
  },
]

// =============================================================
// COMPETÊNCIAS — onde gero resultado pra empresa
// =============================================================
export const competencies = [
  {
    name: 'Melhoria de fluxo de trabalho',
    description:
      'Mapeio tarefas repetitivas, organizo etapas e proponho formas simples de reduzir retrabalho, atrasos e perda de informação.',
    tags: ['Processos', 'Organização', 'Produtividade'],
  },
  {
    name: 'Suporte técnico e atendimento',
    description:
      'Ajudo pessoas a resolver problemas técnicos com comunicação clara, paciência e foco em continuidade do trabalho.',
    tags: ['Suporte', 'Computadores', 'Clientes'],
  },
  {
    name: 'Vendas e relacionamento',
    description:
      'Experiência com atendimento, identificação de necessidade, negociação e acompanhamento para melhorar conversão e confiança.',
    tags: ['Vendas', 'Comunicação', 'Pós-atendimento'],
  },
  {
    name: 'Tecnologia aplicada ao negócio',
    description:
      'Uso planilhas, IA, documentos, páginas simples e automações para apoiar rotinas administrativas, comerciais e operacionais.',
    tags: ['IA', 'Planilhas', 'Automação'],
  },
]

// =============================================================
// TRAJETÓRIA PROFISSIONAL
// =============================================================
export const experience = [
  {
    role: 'Rotina Operacional / Pavimentação Urbana',
    company: 'Runas',
    period: 'Atual',
    location: 'Vale do Anari, RO',
    highlights: [
      'Apoio em projetos e rotinas de pavimentação urbana',
      'Leitura de plantas, medições e organização de informações técnicas',
      'Acompanhamento de demandas com foco em prazo, clareza e responsabilidade',
    ],
  },
  {
    role: 'Suporte Técnico de Computadores',
    company: 'Atendimento técnico',
    period: 'Experiência prática',
    location: 'RO',
    highlights: [
      'Diagnóstico e resolução de problemas em computadores e sistemas',
      'Formatação, instalação, manutenção básica e orientação ao usuário',
      'Atendimento claro para pessoas com diferentes níveis de conhecimento técnico',
    ],
  },
  {
    role: 'Vendas e Atendimento',
    company: 'Experiência comercial',
    period: 'Experiência prática',
    location: 'RO',
    highlights: [
      'Comunicação direta com clientes e identificação de necessidades',
      'Apoio ao processo de venda, negociação e pós-atendimento',
      'Organização de informações para melhorar acompanhamento e conversão',
    ],
  },
  {
    role: 'Freelancer Autônomo',
    company: 'Serviços independentes',
    period: 'Experiência prática',
    location: 'Remoto / presencial',
    highlights: [
      'Entrega de serviços com autonomia, responsabilidade e adaptação ao cliente',
      'Criação de materiais digitais, organização de demandas e suporte operacional',
      'Uso de ferramentas digitais para resolver problemas com baixo custo e agilidade',
    ],
  },
  {
    role: 'Personal Trainer',
    company: 'Atendimento individual',
    period: 'Experiência prática',
    location: 'RO',
    highlights: [
      'Planejamento e acompanhamento de treinos com foco em objetivo e rotina',
      'Comunicação, disciplina e adaptação conforme perfil de cada pessoa',
      'Visão prática de saúde, constância e evolução mensurável',
    ],
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
