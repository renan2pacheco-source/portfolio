"use client"

import { motion } from "motion/react"
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
  return (
    <section id="entrego" className="py-16 md:py-24 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <StarDoodle className="text-[var(--margin-red)] animate-float" size={32} />
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[var(--ink)] text-center">
            <ViewportTypewriter text="O que eu entrego" speed={50} showCursor={false} />
          </h2>
          <StarDoodle className="text-[var(--pen-blue)] animate-float" size={32} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {competencies.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`sticky-note ${colorClass[c.color] || "sticky-note-yellow"}`}
            >
               <div className="text-[var(--ink-soft)] font-detail text-[0.95rem] mb-1.5">
                0{i + 1}
              </div>
              <h3 className="font-heading text-2xl md:text-[1.5rem] font-bold text-[var(--ink)] mb-2.5 leading-tight">
                {c.name}
              </h3>
               <p className="text-[1.02rem] text-[var(--ink-soft)] leading-relaxed mb-3">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span key={tag} className="tag-hand text-[0.9rem]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <SquiggleDoodle className="text-[var(--ink-muted)] opacity-40 mx-auto" size={300} />
        </div>
      </div>
    </section>
  )
}
