"use client"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/data/content"
import { SquiggleDoodle } from "./doodles"

export function Footer() {
  const shouldReduceMotion = useReducedMotion()
  const year = new Date().getFullYear()

  return (
    <footer className="relative pt-8 pb-10 px-4">
      <div className="max-w-3xl mx-auto">
        <SquiggleDoodle
          className="text-[var(--ink-muted)] opacity-40 mx-auto mb-8"
          size={400}
        />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 3 bolinhas pretas (paginação) */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--ink)]" />
            <span className="w-2 h-2 rounded-full bg-[var(--ink)]" />
            <span className="w-2 h-2 rounded-full bg-[var(--ink)]" />
          </div>

          <p className="font-detail text-sm text-[var(--ink-muted)] mb-1">
            feito à mão por
          </p>

          {/* Assinatura manuscrita */}
          <p className="signature text-3xl md:text-4xl mb-1">
            {profile.fullName}
          </p>

          <p className="font-detail text-xs text-[var(--ink-muted)] mt-3">
            © {year} · vale do anari, RO
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
