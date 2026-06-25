import type React from "react"
import type { Metadata } from "next"
import { Caveat, Inter, Architects_Daughter } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "700"],
})

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://renan2pacheco-source.github.io"),
  title: "Renan Nunes Pacheco — Currículo",
  description:
    "Currículo profissional de Renan Nunes Pacheco — Suporte técnico, atendimento, vendas, criação de websites, CRM, agentes de IA e design gráfico. Vale do Anari, RO.",
  alternates: {
    canonical: "/portfolio/",
  },
  authors: [{ name: "Renan Nunes Pacheco" }],
  keywords: [
    "Renan Pacheco",
    "currículo",
    "suporte técnico",
    "Vale do Anari",
    "RO",
    "atendimento",
    "vendas",
    "agentes de IA",
    "CRM",
    "criação de websites",
    "design gráfico",
  ],
  openGraph: {
    title: "Renan Nunes Pacheco — Currículo",
    description:
      "Suporte técnico, atendimento, vendas, criação de websites, CRM, agentes de IA e design gráfico. Vale do Anari, RO.",
    type: "website",
    url: "/portfolio/",
    siteName: "Renan Nunes Pacheco — Currículo",
    locale: "pt_BR",
    images: [
      {
        url: "/portfolio/sticker-icons/profile-photo.png",
        width: 600,
        height: 600,
        alt: "Foto de perfil de Renan Nunes Pacheco",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Renan Nunes Pacheco — Currículo",
    description:
      "Suporte técnico, atendimento, vendas, criação de websites, CRM, agentes de IA e design gráfico. Vale do Anari, RO.",
    images: ["/portfolio/sticker-icons/profile-photo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${caveat.variable} ${architectsDaughter.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
