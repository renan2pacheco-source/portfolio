"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Sparkles } from "lucide-react"
import { profile, bio } from "@/data/content"

const highlights = [
  'Suporte técnico de computadores',
  'Vendas, atendimento e pós-venda',
  'Rotinas operacionais em pavimentação urbana',
  'Trabalho autônomo e freelance',
  'Atuação como Personal Trainer',
  'Cursando Nutrição e Educação Física',
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Resumo profissional
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] text-balance mb-4 sm:mb-6">
            Quem é o <span className="gradient-text">Renan</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
            {bio.intro}
          </p>
        </div>

        {/* Conteúdo principal */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Card bio */}
          <div className="bg-black/40 backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 sm:p-8 hover:border-[var(--gold)]/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 flex items-center justify-center">
                <span className="text-[var(--gold)] font-mono font-bold">{profile.initials}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">Perfil</h3>
                <p className="text-xs text-[var(--text-subtle)] font-mono">// about-me</p>
              </div>
            </div>

            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
              {bio.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--border)] grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <p className="text-[var(--text-subtle)] mb-1">// localização</p>
                <p className="text-[var(--text)]">{profile.location}</p>
              </div>
              <div>
                <p className="text-[var(--text-subtle)] mb-1">// status</p>
                <p className="text-[var(--gold)]">Aberto a oportunidades</p>
              </div>
            </div>
          </div>

          {/* Card destaques */}
          <div className="bg-black/40 backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 sm:p-8 hover:border-[var(--gold)]/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[var(--gold)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">Experiências</h3>
                <p className="text-xs text-[var(--text-subtle)] font-mono">// onde atuei</p>
              </div>
            </div>

            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm md:text-base text-[var(--text-muted)]"
                >
                  <CheckCircle className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
