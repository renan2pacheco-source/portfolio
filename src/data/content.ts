// =============================================================
// CONTEÚDO DO PORTFÓLIO
// Edite aqui pra atualizar o site. Procure por TODO: revisar.
// =============================================================

export const profile = {
  name: 'Renan Pacheco',
  fullName: 'Renan Nunes Pacheco',
  initials: 'RP',
  title: 'Entusiasta em Tecnologia',
  tagline:
    'Estudante multidisciplinar, curioso por tecnologia. Programação, design, IA e os mundos paralelos de nutrição e educação física.',
  location: 'Maringá, PR — Brasil',
  email: 'renan.nunes.pacheco@gmail.com', // TODO: revisar
  whatsapp: {
    number: '5569992114236', // DDI 55 + DDD 69 + número
    display: '(69) 99211-4236',
    link: 'https://wa.me/5569992114236',
  },
  links: {
    instagram: 'https://instagram.com/nucleo_digit4l',
    whatsapp: 'https://wa.me/5569992114236',
    email: 'mailto:renan.nunes.pacheco@gmail.com',
  },
  cvUrl: '/cv-renan-nunes-pacheco.pdf',
};

// Bio curta pra seção "Sobre"
export const bio = {
  intro: '22 anos, estudante multidisciplinar e entusiasta de tecnologia.',
  paragraphs: [
    'Curso programação full stack na UniCesumar, ao mesmo tempo que mergulho em design gráfico, IA generativa e criação de conteúdo visual na Núcleo Digital — meu laboratório de ideias.',
    'Carrego também a experiência prática de trabalhar com pavimentação urbana na Runas, onde engenharia civil me ensinou a ler plantas e entregar sob prazo.',
    'TDAH diagnosticado: pra mim, hiperfoco é superpoder em problemas mal-definidos. Mergulho fundo, não largo até resolver.',
  ],
};

// Experiência profissional
export const experience = [
  {
    role: 'Engenharia Civil / Pavimentação',
    company: 'Runas',
    period: 'Atual',
    location: 'Maringá, PR',
    highlights: [
      'Projetos de pavimentação urbana para prefeituras',
      'Leitura crítica de plantas e medições',
      'Acompanhamento de obras e comunicação com contratantes',
    ],
  },
];

// Formação acadêmica
export const education = [
  {
    course: 'Educação Física',
    institution: 'Curso Livre',
    period: 'Concluído',
    status: 'Concluído',
    note: 'Base pra entender corpo, movimento e processo.',
  },
  {
    course: 'Nutrição',
    institution: 'UniCesumar',
    period: 'Cursando',
    status: 'Em andamento',
    note: 'Formação fora da área tech — traz olhar de saúde e rotina.',
  },
  {
    course: 'Programação Full Stack',
    institution: 'UniCesumar',
    period: 'Cursando',
    status: 'Em andamento',
    note: 'TypeScript, React, Node.js, Python. Foco em web e IA.',
  },
];

// Projetos (tech/IA/lazer)
export const projects = [
  {
    name: 'Núcleo Digital',
    description:
      'Meu laboratório de conteúdo visual, identidade de marca e IA aplicada. Carrosséis para Instagram com prompt pack proprietário.',
    tags: ['IA Generativa', 'Design', 'Branding'],
    link: 'https://instagram.com/nucleo_digit4l',
    featured: true,
  },
  {
    name: 'Segundo Cérebro (Obsidian Vault)',
    description:
      'Vault pessoal no Obsidian como centro de comando: memória, projetos, IA, automações. Skills customizadas e workflows.',
    tags: ['Obsidian', 'Markdown', 'IA', 'Automação'],
    link: '',
    featured: true,
  },
  {
    name: 'Hermes TUI',
    description:
      'Terminal UI estilo Claude Code com paleta retrô. 4 layouts responsivos e handlers de input estabilizados.',
    tags: ['TypeScript', 'React', 'Ink', 'TUI'],
    link: '',
    featured: true,
  },
  {
    name: 'Gerador de Relatórios Fotográficos',
    description:
      'Automatiza a geração de relatórios fotográficos de obras de pavimentação a partir de fotos georreferenciadas.',
    tags: ['Python', 'Pillow', 'PDF', 'Engenharia'],
    link: '',
    featured: false,
  },
];

// Skills (estrutura pro layout terminal `ls`)
export const skills = [
  {
    key: 'programacao',
    label: 'Programação',
    items: [
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'React', iconKey: 'react' },
      { name: 'Python', iconKey: 'python' },
      { name: 'Node.js', iconKey: 'node' },
      { name: 'HTML5', iconKey: 'html' },
      { name: 'CSS3', iconKey: 'css' },
      { name: 'JavaScript', iconKey: 'javascript' },
    ],
  },
  {
    key: 'design',
    label: 'Design & Criação',
    items: [
      { name: 'Canva', iconKey: 'canva' },
      { name: 'Figma', iconKey: 'figma' },
      { name: 'Illustrator', iconKey: 'illustrator' },
    ],
  },
  {
    key: 'office',
    label: 'Pacote Office',
    items: [
      { name: 'Word', iconKey: 'word' },
      { name: 'Excel', iconKey: 'excel' },
      { name: 'PowerPoint', iconKey: 'powerpoint' },
    ],
  },
  {
    key: 'engenharia',
    label: 'Engenharia',
    items: [
      { name: 'AutoCAD', iconKey: 'autocad' },
    ],
  },
  {
    key: 'ia',
    label: 'IA Generativa',
    items: [
      { name: 'OpenAI', iconKey: 'openai' },
      { name: 'Prompt Eng.', iconKey: 'prompt' },
      { name: 'LangChain', iconKey: 'langchain' },
    ],
  },
];

// Idiomas
export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' }, // TODO: revisar
];
