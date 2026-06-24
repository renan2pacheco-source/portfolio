"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"
import { experience, education } from "@/data/content"

export function ExperienceSection() {
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
      id="trajetoria"
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
            <Briefcase className="w-4 h-4 mr-2" />
            Trajetória
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] text-balance mb-4 sm:mb-6">
            Onde <span className="gradient-text">atuei</span> e o que <span className="gradient-text">aprendi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
            Experiências práticas em operação, suporte, vendas, atendimento, trabalho autônomo e desenvolvimento físico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experiência profissional */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-[var(--gold)]" />
              <h3 className="text-sm uppercase tracking-widest text-[var(--text-muted)] font-mono">// experiência</h3>
            </div>

            <div className="relative border-l-2 border-[var(--border)] pl-6 space-y-6">
              {experience.map((job, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  {/* Dot na timeline */}
                  <div className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-[var(--gold)] border-4 border-[var(--background)] shadow-[0_0_12px_color-mix(in_srgb,var(--gold)_60%,transparent)]" />

                  <div className="bg-black/40 backdrop-blur-md border border-[var(--border)] rounded-xl p-5 hover:border-[var(--gold)]/30 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div>
                        <h4 className="text-base font-semibold text-[var(--text)]">{job.role}</h4>
                        <p className="text-sm text-[var(--text-muted)]">{job.company}</p>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--gold)] bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-2 py-1 rounded">
                        {job.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[var(--text-subtle)] mb-3 font-mono">
                      <MapPin className="w-3 h-3" />
                      <span>{job.location}</span>
                    </div>

                    <ul className="space-y-1.5 text-xs md:text-sm text-[var(--text-muted)]">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 leading-relaxed">
                          <span className="text-[var(--gold)] flex-shrink-0">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formação */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-[var(--gold)]" />
              <h3 className="text-sm uppercase tracking-widest text-[var(--text-muted)] font-mono">// formação</h3>
            </div>

            <div className="space-y-4">
              {education.map((ed, i) => (
                <div
                  key={i}
                  className="bg-black/40 backdrop-blur-md border border-[var(--border)] rounded-xl p-5 hover:border-[var(--gold)]/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                    <div>
                      <h4 className="text-base font-semibold text-[var(--text)]">{ed.course}</h4>
                      <p className="text-sm text-[var(--text-muted)]">{ed.institution}</p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--gold)] bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-2 py-1 rounded">
                      {ed.period}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-subtle)] mt-2">{ed.note}</p>
                </div>
              ))}

              {/* Idiomas */}
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <p className="text-xs text-[var(--text-subtle)] font-mono uppercase tracking-widest mb-3">// idiomas</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Português', level: 'Nativo' },
                    { name: 'Inglês', level: 'Intermediário' },
                  ].map((lang) => (
                    <span
                      key={lang.name}
                      className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] rounded-full px-3 py-1.5 bg-black/30"
                    >
                      {lang.name} · <span className="text-[var(--gold)]">{lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
