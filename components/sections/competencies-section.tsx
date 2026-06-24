"use client"

import { useEffect, useRef, useState } from "react"
import { competencies } from "@/data/content"
import { StarDoodle, SquiggleDoodle } from "@/components/doodles"
import { ViewportTypewriter } from "@/components/viewport-typewriter"

const colorClass: Record<string, string> = {
  yellow: "sticky-note-yellow",
  pink: "sticky-note-pink",
  green: "sticky-note-green",
  blue: "sticky-note-blue",
}

export function CompetenciesSection() {
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

  return (
    <section id="entrego" ref={ref} className="py-20 md:py-28 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <StarDoodle className="text-[var(--margin-red)]" size={32} />
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[var(--ink)] text-center">
            {visible ? <ViewportTypewriter text="O que eu entrego" speed={50} showCursor={false} /> : "O que eu entrego"}
          </h2>
          <StarDoodle className="text-[var(--pen-blue)]" size={32} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {competencies.map((c, i) => (
            <div
              key={c.name}
              className={`sticky-note ${colorClass[c.color] || "sticky-note-yellow"} transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-[var(--ink-soft)] font-detail text-sm mb-1.5">
                0{i + 1}
              </div>
              <h3 className="font-heading text-2xl md:text-[1.5rem] font-bold text-[var(--ink)] mb-2.5 leading-tight">
                {c.name}
              </h3>
              <p className="text-base text-[var(--ink-soft)] leading-relaxed mb-3">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span key={tag} className="tag-hand text-[0.78rem]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SquiggleDoodle className="text-[var(--ink-muted)] opacity-40 mx-auto" size={300} />
        </div>
      </div>
    </section>
  )
}
