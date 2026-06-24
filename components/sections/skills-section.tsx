"use client"

import { useEffect, useRef, useState } from "react"
import { skills } from "@/data/content"
import { IconSvg } from "@/lib/icons"
import { SquiggleDoodle, HeartDoodle } from "@/components/doodles"
import { ViewportTypewriter } from "@/components/viewport-typewriter"

export function SkillsSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const current = skills.filter((s) => s.current)
  const experience = skills.filter((s) => !s.current)

  return (
    <section
      id="habilidades"
      ref={ref}
      className="py-20 md:py-28 px-4 md:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título centralizado com setas */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-3xl text-[var(--ink-soft)]">≣</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[var(--ink)] text-center">
            {visible ? <ViewportTypewriter text="Habilidades" speed={60} showCursor={false} /> : "Habilidades"}
          </h2>
          <span className="text-3xl text-[var(--ink-soft)]">≣</span>
        </div>
        <p className="font-detail text-center text-[var(--ink-muted)] mb-12 text-lg">
          // o que uso no dia a dia + o que já trabalhei
        </p>

        {/* Stack atual — em uso */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <HeartDoodle className="text-[var(--margin-red)]" size={24} />
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--ink)]">
              <span className="underline-squiggle">Em uso</span>
            </h3>
            <span className="tag-hand tag-hand-accent ml-2">daily driver</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {current.map((skill, i) => (
              <div
                key={skill.name}
                className={`paper-card p-3 flex items-center gap-3 group transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
                title={skill.description}
              >
                <div className="icon-wrap w-10 h-10 flex-shrink-0">
                  <IconSvg iconKey={skill.iconKey} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-detail text-base text-[var(--ink)] truncate">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor manuscrito */}
        <div className="my-10">
          <SquiggleDoodle className="text-[var(--ink-muted)] opacity-40 mx-auto" size={400} />
        </div>

        {/* Experiência anterior */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--ink-soft)]">
              Já trabalhei ou tive contato
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {experience.map((skill, i) => (
              <div
                key={skill.name}
                className={`bg-[var(--paper-light)]/50 border border-dashed border-[var(--rule-blue)] rounded p-2.5 flex items-center gap-2.5 group hover:border-[var(--ink-muted)] transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(i + current.length) * 30}ms` }}
              >
                <div className="icon-wrap w-8 h-8 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                  <IconSvg iconKey={skill.iconKey} />
                </div>
                <span className="font-detail text-[15px] text-[var(--ink-muted)] truncate group-hover:text-[var(--ink-soft)]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
