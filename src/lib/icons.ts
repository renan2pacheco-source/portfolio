import {
  siAnydesk,
  siAutodesk,
  siClaude,
  siCss,
  siFigma,
  siGooglegemini,
  siGoogledocs,
  siGooglesheets,
  siHtml5,
  siIntel,
  siJavascript,
  siNotion,
  siPython,
  siTeamviewer,
  siTrello,
  type SimpleIcon,
} from 'simple-icons';

// Ícones oficiais quando disponíveis no Simple Icons.
// Fallback textual só é usado para marcas ausentes no pacote instalado.

export interface IconDef {
  svg: string;
  color: string;
}

type IconMap = Record<string, IconDef>;

const fromSimpleIcon = (icon: SimpleIcon, color?: string): IconDef => {
  const fill = color ?? `#${icon.hex}`;
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="${icon.title}" fill="${fill}"><path d="${icon.path}" /></svg>`,
    color: fill,
  };
};

const badge = (label: string, color: string): IconDef => ({
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="${label}"><rect width="24" height="24" rx="5" fill="${color}"/><text x="12" y="15" text-anchor="middle" font-size="7" font-family="Arial, sans-serif" font-weight="700" fill="#fff">${label}</text></svg>`,
  color,
});

export const icons: IconMap = {
  windows: badge('Win', '#0078D4'),
  anydesk: fromSimpleIcon(siAnydesk),
  teamviewer: fromSimpleIcon(siTeamviewer),
  intel: fromSimpleIcon(siIntel),

  word: badge('W', '#2B579A'),
  excel: badge('X', '#217346'),
  powerpoint: badge('P', '#B7472A'),
  googledocs: fromSimpleIcon(siGoogledocs),
  googlesheets: fromSimpleIcon(siGooglesheets),

  openai: badge('GPT', '#10A37F'),
  claude: fromSimpleIcon(siClaude),
  gemini: fromSimpleIcon(siGooglegemini),

  canva: badge('Can', '#00C4CC'),
  figma: fromSimpleIcon(siFigma),
  illustrator: badge('Ai', '#FF9A00'),

  html: fromSimpleIcon(siHtml5),
  css: fromSimpleIcon(siCss),
  javascript: fromSimpleIcon(siJavascript),
  python: fromSimpleIcon(siPython),

  autocad: fromSimpleIcon(siAutodesk),
  trello: fromSimpleIcon(siTrello),
  notion: fromSimpleIcon(siNotion, '#FFFFFF'),
};
