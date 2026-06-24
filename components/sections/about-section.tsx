"use client"

import { motion } from "motion/react"
import { about, education, languages } from "@/data/content"
import { LightbulbDoodle, CheckDoodle, PencilDoodle } from "@/components/doodles"

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-16 md:py-24 px-4 md:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-14">
          <div className="inline-flex items-center gap-3 tape-title tape-title-pink">
            <h2 className="font-heading text-[2.1rem] md:text-[3.2rem] font-bold text-[var(--ink)] leading-none">
              Sobre mim
            </h2>
            <LightbulbDoodle className="text-[var(--ink)] flex-shrink-0" size={34} />
          </div>
          <div className="section-rule mt-5 max-w-[220px] md:max-w-[280px]" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Texto corrido à esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <p className="font-heading text-[1.9rem] md:text-4xl text-[var(--ink-soft)] italic mb-5 leading-[1.2]">
              {about.intro}
            </p>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[var(--ink-soft)] leading-relaxed mb-4 text-[1.06rem] md:text-[1.15rem]"
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
              <ul className="space-y-2 text-[1.02rem] text-[var(--ink-soft)]">
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
            <div className="sticky-note sticky-note-pink max-w-md md:ml-auto md:mt-6">
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
