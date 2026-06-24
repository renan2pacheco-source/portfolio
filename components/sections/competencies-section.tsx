"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb } from "lucide-react"
import { competencies } from "@/data/content"

const iconMap = ['💡', '🛠️', '🤝', '⚡']

export function CompetenciesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      id="competencias"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Competências
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] text-balance mb-4 sm:mb-6">
            Onde posso <span className="gradient-text">gerar resultado</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
            Não é vitrine de projeto pessoal: é onde minhas habilidades reduzem atrito, melhoram atendimento e
            organizam a rotina da empresa.
          </p>
        </div>

        {/* Grid de competências */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {competencies.map((c, i) => (
            <div
              key={c.name}
              className={`group bg-black/40 backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 sm:p-8 hover:border-[var(--gold)]/50 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--gold)_10%,transparent)] transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms`, transitionDuration: "1000ms" }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="text-3xl sm:text-4xl">{iconMap[i % iconMap.length]}</div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-subtle)] border border-[var(--border)] rounded-full px-2.5 py-1 bg-black/30">
                  0{i + 1}/04
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-300">
                {c.name}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-4">
                {c.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] border border-[var(--border)] rounded-full px-2 py-0.5 bg-black/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
