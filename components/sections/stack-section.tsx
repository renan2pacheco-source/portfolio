"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Wrench, Zap } from "lucide-react"
import { currentStack, experienceStack } from "@/data/content"
import { IconSvg } from "@/lib/icons"

export function StackSection() {
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
      id="stack"
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
            <Wrench className="w-4 h-4 mr-2" />
            Stack & Ferramentas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] text-balance mb-4 sm:mb-6">
            O que <span className="gradient-text">uso hoje</span> vs o que já <span className="gradient-text">trabalhei</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
            Ferramentas do dia a dia, separadas daquelas com as quais já tive contato ou trabalho.
          </p>
        </div>

        {/* Stack atual */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-gradient-to-br from-[var(--gold)]/8 via-black/40 to-black/40 backdrop-blur-md border border-[var(--gold)]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_color-mix(in_srgb,var(--gold)_8%,transparent)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/15 border border-[var(--gold)]/40 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--gold)]">Stack Atual</h3>
                <p className="text-xs text-[var(--text-subtle)] font-mono">// daily-driver · 2026</p>
              </div>
              <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[var(--gold)] bg-[var(--gold)]/15 border border-[var(--gold)]/30 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                Em uso
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {currentStack.map((tool, i) => (
                <div
                  key={tool.name}
                  className="group flex items-start gap-3 bg-black/40 border border-[var(--border)] rounded-xl p-3 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/5 transition-all duration-300"
                  style={{ transitionDelay: `${300 + i * 50}ms` }}
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-black/60 border border-[var(--border)] flex items-center justify-center p-2 group-hover:scale-110 transition-transform [&>svg]:w-full [&>svg]:h-full">
                    <IconSvg iconKey={tool.iconKey} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[var(--text)] truncate">{tool.name}</p>
                    <p className="text-[10px] text-[var(--text-subtle)] font-mono truncate">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-black/40 backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text)]">Experiência anterior</h3>
                <p className="text-xs text-[var(--text-subtle)] font-mono">// já trabalhei ou tive contato</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              {experienceStack.map((group) => (
                <div key={group.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[var(--gold)] text-xs font-mono">[~/]</span>
                    <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono">
                      {group.category}
                    </span>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                    <span className="text-[10px] text-[var(--text-subtle)] font-mono">
                      {group.items.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="group flex items-center gap-2 border border-[var(--border)] bg-black/30 rounded-md px-2 py-1.5 hover:border-[var(--gold)]/40 transition-all"
                        title={item.name}
                      >
                        <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full opacity-80 group-hover:opacity-100">
                          <IconSvg iconKey={item.iconKey} />
                        </span>
                        <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text)] font-mono">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
