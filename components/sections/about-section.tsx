"use client"

import { motion } from "motion/react"
import { about, education, languages } from "@/data/content"
import { LightbulbDoodle, CheckDoodle, PencilDoodle } from "@/components/doodles"
import { ViewportTypewriter } from "@/components/viewport-typewriter"

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28 px-4 md:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título manuscrito */}
        <div className="flex items-center gap-3 mb-12">
          <LightbulbDoodle className="text-[var(--ink)]" size={42} />
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[var(--ink)] leading-[1.15]">
            <span className="underline-squiggle">
              <ViewportTypewriter text="Sobre mim" speed={60} showCursor={false} />
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Texto corrido à esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0 }}
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
          </motion.div>

          {/* Lista de qualidades (post-it) à direita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky-note sticky-note-pink max-w-md md:ml-auto">
              <h3 className="font-heading text-2xl md:text-3xl text-[var(--ink)] mb-4">
                O que levo comigo
              </h3>
              <ul className="space-y-2.5">
                {about.qualities.map((q, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-2.5 text-[var(--ink-soft)] text-lg"
                  >
                    <CheckDoodle className="text-[var(--margin-red)] flex-shrink-0" size={20} />
                    <span>{q}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
