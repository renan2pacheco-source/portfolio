import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geist = GeistSans
const geistMono = GeistMono

export const metadata: Metadata = {
  title: "Renan Pacheco — Currículo",
  description:
    "Currículo profissional de Renan Nunes Pacheco — Suporte técnico, atendimento, vendas, automação e rotina operacional. Vale do Anari, RO.",
  authors: [{ name: "Renan Nunes Pacheco" }],
  keywords: [
    "Renan Pacheco",
    "currículo",
    "suporte técnico",
    "Vale do Anari",
    "RO",
    "atendimento",
    "vendas",
    "automação",
  ],
  openGraph: {
    title: "Renan Pacheco — Currículo",
    description: "Suporte técnico, atendimento, vendas e automação. Vale do Anari, RO.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
