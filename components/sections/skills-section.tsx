"use client"

import { motion } from "motion/react"
import { skills } from "@/data/content"
import { IconSvg } from "@/lib/icons"
import { SquiggleDoodle, HeartDoodle } from "@/components/doodles"
import { ViewportTypewriter } from "@/components/viewport-typewriter"

export function SkillsSection() {
  const current = skills.filter((s) => s.current)
  const experience = skills.filter((s) => !s.current)

  return (
    <section
      id="habilidades"
      className="py-20 md:py-28 px-4 md:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título centralizado com setas */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-3xl text-[var(--ink-soft)]">≣</span>
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[var(--ink)] text-center">
            <ViewportTypewriter text="Habilidades" speed={60} showCursor={false} />
          </h2>
          <span className="text-3xl text-[var(--ink-soft)]">≣</span>
        </div>
        <p className="font-detail text-center text-[var(--ink-muted)] mb-12 text-[1.15rem] md:text-xl">
          // o que uso no dia a dia + o que já trabalhei
        </p>

        {/* Stack atual — em uso */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-8 overflow-visible">
            <HeartDoodle className="text-[var(--margin-red)]" size={24} />
            <h3 className="font-heading text-3xl md:text-4xl text-[var(--ink)] leading-[1.22] pb-1 overflow-visible">
              <span className="underline-squiggle">Em uso</span>
            </h3>
            <span className="tag-hand tag-hand-accent ml-2">daily driver</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {current.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="paper-card p-3 flex items-center gap-3 group cursor-default"
                title={skill.description}
              >
                <div className="icon-wrap w-10 h-10 flex-shrink-0">
                  <IconSvg iconKey={skill.iconKey} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-detail text-base sm:text-[1.08rem] text-[var(--ink)] leading-tight break-words">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
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
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[var(--paper-light)]/50 border border-dashed border-[var(--rule-blue)] rounded p-2.5 flex items-center gap-2.5 group hover:border-[var(--ink-muted)] cursor-default"
              >
                <div className="icon-wrap w-8 h-8 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                  <IconSvg iconKey={skill.iconKey} />
                </div>
                <span className="font-detail text-[0.95rem] sm:text-base text-[var(--ink-muted)] leading-tight break-words group-hover:text-[var(--ink-soft)]">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
