"use client"

import { useEffect, useRef, useState } from "react"
import { about, education, languages } from "@/data/content"
import { LightbulbDoodle, CheckDoodle, PencilDoodle } from "@/components/doodles"
import { ViewportTypewriter } from "@/components/viewport-typewriter"

export function AboutSection() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-20 md:py-28 px-4 md:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título manuscrito */}
        <div className="flex items-center gap-3 mb-12">
          <LightbulbDoodle className="text-[var(--ink)]" size={42} />
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[var(--ink)]">
            <span className="underline-squiggle">
              {visible ? <ViewportTypewriter text="Sobre mim" speed={60} showCursor={false} /> : "Sobre mim"}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Texto corrido à esquerda */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="font-heading text-2xl md:text-4xl text-[var(--ink-soft)] italic mb-6">
              {about.intro}
            </p>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[var(--ink-soft)] leading-relaxed mb-4 text-lg md:text-[1.15rem]"
              >
                {p}
              </p>
            ))}

            {/* Formação + idiomas (post-it) */}
            <div className="sticky-note sticky-note-yellow mt-6 inline-block max-w-md">
              <h3 className="font-heading text-2xl text-[var(--ink)] mb-2 flex items-center gap-2">
                <PencilDoodle className="text-[var(--ink-soft)]" size={20} />
                <span>Formação</span>
              </h3>
              <ul className="space-y-1.5 text-base text-[var(--ink-soft)]">
                {education.map((ed, i) => (
                  <li key={i}>
                    <span className="font-medium">{ed.course}</span>
                    <span className="text-[var(--ink-muted)]"> · {ed.institution}</span>
                    <span className="tag-hand ml-1.5">{ed.period}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading text-2xl text-[var(--ink)] mt-4 mb-2">
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang.name} className="tag-hand">
                    {lang.name} <span className="text-[var(--margin-red)]">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lista de qualidades (post-it) à direita */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="sticky-note sticky-note-pink max-w-md md:ml-auto">
              <h3 className="font-heading text-2xl md:text-3xl text-[var(--ink)] mb-4">
                O que levo comigo
              </h3>
              <ul className="space-y-2.5">
                {about.qualities.map((q, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-[var(--ink-soft)] text-lg"
                  >
                    <CheckDoodle className="text-[var(--margin-red)] flex-shrink-0" size={20} />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
