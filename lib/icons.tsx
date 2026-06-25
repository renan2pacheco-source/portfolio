// =============================================================
// ÍCONES DO PORTFÓLIO
// Usa simple-icons para logos oficiais + raw SVGs para custom
// =============================================================

import {
  siAnydesk,
  siAutocad,
  siClaude,
  siFigma,
  siGithub,
  siGoogledocs,
  siGooglegemini,
  siGooglesheets,
  siHtml5,
  siJavascript,
  siPostgresql,
  siPython,
  siSqlite,
  siTeamviewer,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from 'simple-icons'

export interface IconDef {
  svg: string
  color: string
  src?: string
}

type IconMap = Record<string, IconDef>

const fromSimpleIcon = (icon: SimpleIcon, color?: string): IconDef => {
  const fill = color ?? `#${icon.hex}`
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="${icon.title}"><path d="${icon.path}" fill="${fill}"/></svg>`,
    color: fill,
  }
}

// SVGs raw para ícones não disponíveis em simple-icons ou que precisam de fidelidade maior
const RAW_SVG = (path: string, color: string, label: string): IconDef => ({
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label="${label}"><path d="${path}" fill="${color}"/></svg>`,
  color,
})

// Microsoft Word
const WORD_PATH =
  'M23.004 1.5q.41 0 .703.293t.293.703v19.008q0 .41-.293.703t-.703.293H6.996q-.41 0-.703-.293T6 21.504V18H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H6V2.496q0-.41.293-.703t.703-.293zM6.035 11.203l1.442 4.735h1.64l1.57-7.876H9.036l-.937 4.653-1.325-4.5H5.38l-1.406 4.523-.938-4.675H1.312l1.57 7.874h1.641zM22.5 21v-3h-15v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3h-15v3Z'
// Microsoft Excel
const EXCEL_PATH =
  'M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z'
// Microsoft PowerPoint
const POWERPOINT_PATH =
  'M13.5 1.5q1.453 0 2.795.375 1.342.375 2.508 1.06 1.166.686 2.12 1.641.956.955 1.641 2.121.686 1.166 1.061 2.508Q24 10.547 24 12q0 1.453-.375 2.795-.375 1.342-1.06 2.508-.686 1.166-1.641 2.12-.955.956-2.121 1.641-1.166.686-2.508 1.061-1.342.375-2.795.375-1.29 0-2.52-.305-1.23-.304-2.337-.884-1.108-.58-2.063-1.418-.955-.838-1.693-1.893H.997q-.411 0-.704-.293T0 17.004V6.996q0-.41.293-.703T.996 6h3.89q.739-1.055 1.694-1.893.955-.837 2.063-1.418 1.107-.58 2.337-.884Q12.21 1.5 13.5 1.5zm.75 1.535v8.215h8.215q-.14-1.64-.826-3.076-.686-1.436-1.782-2.531-1.095-1.096-2.537-1.782-1.441-.685-3.07-.826zm-5.262 7.57q0-.68-.228-1.166-.229-.486-.627-.79-.399-.305-.938-.446-.539-.14-1.172-.14H2.848v7.863h1.84v-2.742H5.93q.574 0 1.119-.17t.978-.493q.434-.322.698-.802.263-.48.263-1.114zM13.5 21q1.172 0 2.262-.287t2.056-.82q.967-.534 1.776-1.278.808-.744 1.418-1.664.61-.92.984-1.986.375-1.067.469-2.227h-9.703V3.035q-1.735.14-3.27.908T6.797 6h4.207q.41 0 .703.293t.293.703v10.008q0 .41-.293.703t-.703.293H6.797q.644.715 1.412 1.271.768.557 1.623.944.855.387 1.781.586Q12.54 21 13.5 21zM5.812 9.598q.575 0 .915.228.34.229.34.838 0 .27-.124.44-.123.17-.31.275-.188.105-.422.146-.234.041-.445.041H4.687V9.598Z'
// Windows 11 (4 quadrantes)
const WINDOWS11_PATH =
  'M0,0H11.377V11.372H0ZM12.623,0H24V11.372H12.623ZM0,12.623H11.377V24H0Zm12.623,0H24V24H12.623'
// Adobe Illustrator
const ILLUSTRATOR_PATH =
  'M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z'

// VS Code — logo oficial (adaptado de 100×100 para 24×24, monocromático)
const VSCODE_PATH =
  'M17.0189 23.8361C17.3969 23.9834 17.8279 23.9739 18.2094 23.7903L23.1506 21.4127C23.6698 21.1629 24.0 20.6374 24.0 20.0609V3.9392C24.0 3.3627 23.6698 2.8372 23.1506 2.5874L18.2094 0.2097C17.7087 -0.0312 17.1227 0.0278 16.6832 0.3473C16.6205 0.3929 16.5607 0.4439 16.5046 0.5L7.0452 9.13L2.9249 6.0023C2.5414 5.7112 2.0049 5.735 1.6486 6.0591L0.3271 7.2612C-0.1086 7.6575 -0.1091 8.343 0.326 8.7401L3.8993 12.0L0.326 15.26C-0.1091 15.657 -0.1086 16.3425 0.3271 16.7389L1.6486 17.941C2.0049 18.265 2.5414 18.2889 2.9249 17.9977L7.0452 14.8701L16.5046 23.5C16.6542 23.6497 16.8299 23.7625 17.0189 23.8361ZM18.0036 6.5517L10.8262 12.0L18.0036 17.4483V6.5517Z'
const VSCODE_COLOR = '#007ACC'

// OpenCode CLI — logo oficial (simple-icons)
const OPENCODE_PATH =
  'M22 24H2V0h20zM17 4.8H7v14.4h10z'
const OPENCODE_COLOR = '#FFD700'

// Hermes — logo oficial da marca (simple-icons)
const HERMES_PATH =
  'm21.818 4.516-1.05 4.148h2.175L24 4.516M19.41 14.04h2.17l1.04-4.08h-2.178m-2.41 9.523h2.154l1.056-4.147h-2.16m.193-5.377H5.55v.92l3.341 3.161h9.349m2.41-9.525H0v1.116l3.206 3.032H19.6m-8.372 7.58 3.43 3.24h2.205l1.05-4.147h-6.685'
const HERMES_COLOR = '#FFD700'

// CachyOS — logo oficial (simple-icons)
const CACHYOS_PATH =
  'M5.301 2.646 0 11.771l5.541 9.583h11.486l2.904-5.017H8.102l-2.56-4.429L8.067 7.54h6.063l2.83-4.893ZM20.058 4.12a.748.748 0 0 0 0 1.496.748.748 0 0 0 0-1.496m-1.983 4.303a1.45 1.45 0 0 0 0 2.9 1.45 1.45 0 0 0 0-2.9m4.02 3.98a1.904 1.904 0 0 0 0 3.809 1.904 1.904 0 0 0 0-3.81'
const CACHYOS_COLOR = '#1793D1'

// Hardware (chip/microprocessador genérico)
const HARDWARE_PATH =
  'M9 2v2H5v2H3v14h2v2h14v-2h2V6h-2V4h-4V2zm0 2h6v2h2v12H7V6h2zM9 8h6v2H9zm0 4h6v2H9z'
const HARDWARE_COLOR = '#3B82F6'

// ChatGPT (logo oficial — entrelaçamento hexagonal)
const CHATGPT_PATH =
  'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.998-2.9 6.056 6.056 0 0 0-.748-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.471 4.471 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.499 4.499 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855 2.02-1.168a.08.08 0 0 1 .038-.052V5.089a.79.79 0 0 0-.408-.667l-5.83-3.39-2.02 1.168a.076.076 0 0 0-.038.052v5.582a.79.79 0 0 0 .407.667zm2.01-3.023-.142-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.499 4.499 0 0 1 6.682 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.056V6.074a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z'
const CHATGPT_COLOR = '#10A37F'

export const icons: IconMap = {
  // Stack atual
  opencode: RAW_SVG(OPENCODE_PATH, OPENCODE_COLOR, 'OpenCode CLI'),
  hermes: RAW_SVG(HERMES_PATH, HERMES_COLOR, 'Hermes Agent'),
  cachyos: RAW_SVG(CACHYOS_PATH, CACHYOS_COLOR, 'CachyOS Linux'),
  vscode: RAW_SVG(VSCODE_PATH, VSCODE_COLOR, 'VS Code'),
  github: fromSimpleIcon(siGithub),
  vercel: fromSimpleIcon(siVercel),
  typescript: fromSimpleIcon(siTypescript),
  python: fromSimpleIcon(siPython),
  html: fromSimpleIcon(siHtml5),
  javascript: fromSimpleIcon(siJavascript),

  // Experiência
  windows: { svg: '', color: '#000000', src: '/portfolio/sticker-icons/windows.png' },
  anydesk: { svg: '', color: '#e74b3c', src: '/portfolio/sticker-icons/anydesk.png' },
  teamviewer: fromSimpleIcon(siTeamviewer),
  hardware: RAW_SVG(HARDWARE_PATH, HARDWARE_COLOR, 'Hardware'),
  word: { svg: '', color: '#2B579A', src: '/portfolio/sticker-icons/word.png' },
  excel: { svg: '', color: '#217346', src: '/portfolio/sticker-icons/excel.png' },
  powerpoint: { svg: '', color: '#B7472A', src: '/portfolio/sticker-icons/powerpoint.png' },
  googledocs: { svg: '', color: '#4285F4', src: '/portfolio/sticker-icons/googledocs.png' },
  googlesheets: fromSimpleIcon(siGooglesheets),
  chatgpt: { svg: '', color: CHATGPT_COLOR, src: '/portfolio/sticker-icons/chatgpt.png' },
  claude: fromSimpleIcon(siClaude),
  gemini: fromSimpleIcon(siGooglegemini),
  canva: { svg: '', color: '#00C4CC', src: '/portfolio/sticker-icons/canva.png' },
  figma: { svg: '', color: '#A259FF', src: '/portfolio/sticker-icons/figma.png' },
  illustrator: RAW_SVG(ILLUSTRATOR_PATH, '#FF9A00', 'Adobe Illustrator'),
  css: { svg: '', color: '#1572B6', src: '/portfolio/sticker-icons/css.png' },
  postgresql: fromSimpleIcon(siPostgresql),
  sqlite: { svg: '', color: '#003B57', src: '/portfolio/sticker-icons/sqlite.png' },
  autocad: { svg: '', color: '#E54B3B', src: '/portfolio/sticker-icons/autocad.png' },
}

export function IconSvg({
  iconKey,
  className,
  ariaHidden = false,
}: {
  iconKey: string
  className?: string
  ariaHidden?: boolean
}) {
  const def = icons[iconKey]
  if (!def) return null

  if (def.src) {
    return <img src={def.src} alt="" aria-hidden={ariaHidden} className={className} />
  }

  let svg = def.svg
  if (ariaHidden) {
    // Força o SVG interno a ficar invisível para leitores de tela,
    // já que o nome da skill já é lido pelo texto adjacente.
    svg = svg.replace(/<svg\b/i, '<svg aria-hidden="true" ')
  }

  return (
    <span
      className={className}
      role="img"
      aria-label=""
      aria-hidden={ariaHidden}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
