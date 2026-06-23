// =============================================================
// CONTEÚDO DO PORTFÓLIO
// Edite aqui pra atualizar o site. Procure por TODO: revisar.
// =============================================================

export const profile = {
  name: 'Renan Pacheco',
  fullName: 'Renan Nunes Pacheco',
  initials: 'RP',
  title: 'Currículo Profissional',
  tagline:
    'Perfil multidisciplinar com experiência em suporte técnico, vendas, atendimento, automação, rotinas operacionais e desenvolvimento humano.',
  location: 'Vale do Anari, RO — Brasil',
  civilStatus: 'Solteiro',
  seeking:
    'Busco oportunidades onde minha capacidade de aprender rápido, organizar processos e aplicar tecnologia gere resultado real para a empresa.',
  value:
    'Posso contribuir melhorando fluxos de trabalho, reduzindo tarefas repetitivas, apoiando clientes e organizando informações para decisões mais rápidas.',
  email: 'renan.nunes.pacheco@gmail.com',
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
  skills: ['Suporte', 'Atendimento', 'Autonomia'],
};

// Bio curta pra seção "Sobre"
export const bio = {
  intro: '22 anos, profissional multidisciplinar com foco em resultado prático.',
  paragraphs: [
    'Tenho experiência com suporte técnico de computadores, vendas, trabalho autônomo/freelancer, atuação como personal trainer e rotina operacional em pavimentação urbana.',
    'Sou estudante de Nutrição e tenho formação em Educação Física, o que reforça disciplina, comunicação com pessoas e visão prática de atendimento, saúde e rotina.',
    'Uso tecnologia como ferramenta de produtividade: organização de dados, automação de tarefas, criação de documentos, atendimento, planilhas, materiais visuais e melhoria de processos internos.',
  ],
};

// Experiência profissional
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
];

// Competências aplicadas em ambiente profissional
export const results = [
  {
    name: 'Melhoria de fluxo de trabalho',
    description:
      'Mapeio tarefas repetitivas, organizo etapas e proponho formas simples de reduzir retrabalho, atrasos e perda de informação.',
    tags: ['Processos', 'Organização', 'Produtividade'],
    link: '',
    featured: true,
  },
  {
    name: 'Suporte técnico e atendimento',
    description:
      'Ajudo pessoas a resolver problemas técnicos com comunicação clara, paciência e foco em continuidade do trabalho.',
    tags: ['Suporte', 'Computadores', 'Clientes'],
    link: '',
    featured: true,
  },
  {
    name: 'Vendas e relacionamento',
    description:
      'Experiência com atendimento, identificação de necessidade, negociação e acompanhamento para melhorar conversão e confiança.',
    tags: ['Vendas', 'Comunicação', 'Pós-atendimento'],
    link: '',
    featured: true,
  },
  {
    name: 'Tecnologia aplicada ao negócio',
    description:
      'Uso planilhas, IA, documentos, páginas simples e automações para apoiar rotinas administrativas, comerciais e operacionais.',
    tags: ['IA', 'Planilhas', 'Automação'],
    link: '',
    featured: true,
  },
];

// Skills (estrutura pro layout terminal `ls`)
export const skills = [
  {
    key: 'suporte',
    label: 'Suporte técnico',
    items: [
      { name: 'Windows', iconKey: 'windows' },
      { name: 'AnyDesk', iconKey: 'anydesk' },
      { name: 'TeamViewer', iconKey: 'teamviewer' },
      { name: 'Hardware', iconKey: 'intel' },
    ],
  },
  {
    key: 'produtividade',
    label: 'Produtividade & Office',
    items: [
      { name: 'Word', iconKey: 'word' },
      { name: 'Excel', iconKey: 'excel' },
      { name: 'PowerPoint', iconKey: 'powerpoint' },
      { name: 'Google Docs', iconKey: 'googledocs' },
      { name: 'Google Sheets', iconKey: 'googlesheets' },
    ],
  },
  {
    key: 'ia',
    label: 'IA Generativa',
    items: [
      { name: 'ChatGPT', iconKey: 'openai' },
      { name: 'Claude', iconKey: 'claude' },
      { name: 'Gemini', iconKey: 'gemini' },
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
    key: 'web',
    label: 'Tecnologia Web',
    items: [
      { name: 'HTML5', iconKey: 'html' },
      { name: 'CSS3', iconKey: 'css' },
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'Python', iconKey: 'python' },
    ],
  },
  {
    key: 'operacional',
    label: 'Rotina operacional',
    items: [
      { name: 'AutoCAD', iconKey: 'autocad' },
      { name: 'Trello', iconKey: 'trello' },
      { name: 'Notion', iconKey: 'notion' },
    ],
  },
];

// Idiomas
export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' }, // TODO: revisar
];
