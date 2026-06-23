import {
  siAnydesk,
  siAutocad,
  siAutodesk,
  siCanva,
  siClaude,
  siCss,
  siFigma,
  siGoogledocs,
  siGooglegemini,
  siGooglesheets,
  siHtml5,
  siIntel,
  siJavascript,
  siNotion,
  siOpenai,
  siPython,
  siTeamviewer,
  siTrello,
  type SimpleIcon,
} from 'simple-icons';

export interface IconDef {
  svg: string;
  color: string;
}

type IconMap = Record<string, IconDef>;

const fromSimpleIcon = (icon: SimpleIcon, color?: string): IconDef => {
  const fill = color ?? `#${icon.hex}`;
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="${icon.title}"><path d="${icon.path}" fill="${fill}"/></svg>`,
    color: fill,
  };
};

// SVGs oficiais removidos do pacote simple-icons (commit ce334b5b).
// Mantidos aqui para preservar a fidelidade do logo nas marcas Microsoft/Adobe.
const RAW_SVG = (path: string, color: string, label: string) =>
  ({
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="${label}"><path d="${path}" fill="${color}"/></svg>`,
    color,
  }) as IconDef;

const WORD_PATH =
  'M23.004 1.5q.41 0 .703.293t.293.703v19.008q0 .41-.293.703t-.703.293H6.996q-.41 0-.703-.293T6 21.504V18H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H6V2.496q0-.41.293-.703t.703-.293zM6.035 11.203l1.442 4.735h1.64l1.57-7.876H9.036l-.937 4.653-1.325-4.5H5.38l-1.406 4.523-.938-4.675H1.312l1.57 7.874h1.641zM22.5 21v-3h-15v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3h-15v3Z';
const EXCEL_PATH =
  'M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z';
const POWERPOINT_PATH =
  'M13.5 1.5q1.453 0 2.795.375 1.342.375 2.508 1.06 1.166.686 2.12 1.641.956.955 1.641 2.121.686 1.166 1.061 2.508Q24 10.547 24 12q0 1.453-.375 2.795-.375 1.342-1.06 2.508-.686 1.166-1.641 2.12-.955.956-2.121 1.641-1.166.686-2.508 1.061-1.342.375-2.795.375-1.29 0-2.52-.305-1.23-.304-2.337-.884-1.108-.58-2.063-1.418-.955-.838-1.693-1.893H.997q-.411 0-.704-.293T0 17.004V6.996q0-.41.293-.703T.996 6h3.89q.739-1.055 1.694-1.893.955-.837 2.063-1.418 1.107-.58 2.337-.884Q12.21 1.5 13.5 1.5zm.75 1.535v8.215h8.215q-.14-1.64-.826-3.076-.686-1.436-1.782-2.531-1.095-1.096-2.537-1.782-1.441-.685-3.07-.826zm-5.262 7.57q0-.68-.228-1.166-.229-.486-.627-.79-.399-.305-.938-.446-.539-.14-1.172-.14H2.848v7.863h1.84v-2.742H5.93q.574 0 1.119-.17t.978-.493q.434-.322.698-.802.263-.48.263-1.114zM13.5 21q1.172 0 2.262-.287t2.056-.82q.967-.534 1.776-1.278.808-.744 1.418-1.664.61-.92.984-1.986.375-1.067.469-2.227h-9.703V3.035q-1.735.14-3.27.908T6.797 6h4.207q.41 0 .703.293t.293.703v10.008q0 .41-.293.703t-.703.293H6.797q.644.715 1.412 1.271.768.557 1.623.944.855.387 1.781.586Q12.54 21 13.5 21zM5.812 9.598q.575 0 .915.228.34.229.34.838 0 .27-.124.44-.123.17-.31.275-.188.105-.422.146-.234.041-.445.041H4.687V9.598Z';
const WINDOWS11_PATH =
  'M0,0H11.377V11.372H0ZM12.623,0H24V11.372H12.623ZM0,12.623H11.377V24H0Zm12.623,0H24V24H12.623';
const ILLUSTRATOR_PATH =
  'M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z';

export const icons: IconMap = {
  windows: RAW_SVG(WINDOWS11_PATH, '#0078D4', 'Windows 11'),
  anydesk: fromSimpleIcon(siAnydesk),
  teamviewer: fromSimpleIcon(siTeamviewer),
  intel: fromSimpleIcon(siIntel),

  word: RAW_SVG(WORD_PATH, '#2B579A', 'Microsoft Word'),
  excel: RAW_SVG(EXCEL_PATH, '#217346', 'Microsoft Excel'),
  powerpoint: RAW_SVG(POWERPOINT_PATH, '#B7472A', 'Microsoft PowerPoint'),
  googledocs: fromSimpleIcon(siGoogledocs),
  googlesheets: fromSimpleIcon(siGooglesheets),

  openai: fromSimpleIcon(siOpenai),
  claude: fromSimpleIcon(siClaude),
  gemini: fromSimpleIcon(siGooglegemini),

  canva: fromSimpleIcon(siCanva),
  figma: fromSimpleIcon(siFigma),
  illustrator: RAW_SVG(ILLUSTRATOR_PATH, '#FF9A00', 'Adobe Illustrator'),

  html: fromSimpleIcon(siHtml5),
  css: fromSimpleIcon(siCss),
  javascript: fromSimpleIcon(siJavascript),
  python: fromSimpleIcon(siPython),

  autocad: fromSimpleIcon(siAutocad),
  trello: fromSimpleIcon(siTrello),
  notion: fromSimpleIcon(siNotion, '#FFFFFF'),
};
