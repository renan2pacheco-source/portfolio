"use client"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { Instagram, Github, Mail, MessageCircle } from "lucide-react"
import { profile, navLinks } from "@/data/content"

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}) {
  const shouldReduceMotion = useReducedMotion()
  if (shouldReduceMotion) return <>{children}</>
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,color-mix(in_srgb,var(--gold)_10%,transparent),transparent)] px-6 py-12 lg:py-16 mt-12">
      <div className="bg-[var(--gold)]/30 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[var(--gold)]/40 bg-black/60 flex items-center justify-center">
              <span className="text-[var(--gold)] font-bold text-sm font-mono">{profile.initials}</span>
            </div>
            <div>
              <p className="text-[var(--text)] font-semibold">{profile.name}</p>
              <p className="text-xs text-[var(--text-subtle)] font-mono">// currículo profissional</p>
            </div>
          </div>
          <p className="text-sm text-[var(--text-muted)] max-w-xs">{profile.tagline}</p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
          {/* Navegação */}
          <AnimatedContainer delay={0.1}>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-subtle)]">Navegação</h3>
              <ul className="text-[var(--text-muted)] mt-4 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[var(--gold)] inline-flex items-center transition-all duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContainer>

          {/* Contato */}
          <AnimatedContainer delay={0.2}>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-subtle)]">Contato</h3>
              <ul className="text-[var(--text-muted)] mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={profile.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--gold)] inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-[var(--gold)] inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </li>
                <li>
                  <span className="text-xs">{profile.location}</span>
                </li>
              </ul>
            </div>
          </AnimatedContainer>

          {/* Social */}
          <AnimatedContainer delay={0.3}>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-subtle)]">Social</h3>
              <ul className="text-[var(--text-muted)] mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--gold)] inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--gold)] inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedContainer>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[var(--border)] w-full text-center">
        <p className="text-xs text-[var(--text-subtle)] font-mono">
          © {year} {profile.fullName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
