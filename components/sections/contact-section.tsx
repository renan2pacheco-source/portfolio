"use client"

import { motion } from "motion/react"
import { profile } from "@/data/content"
import { EnvelopeDoodle, HeartDoodle } from "@/components/doodles"
import { MapPin, MessageCircle, Mail, Instagram, ArrowRight } from "lucide-react"
import { ViewportTypewriter } from "@/components/viewport-typewriter"

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-16 md:py-24 px-4 md:px-8 relative"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-3 justify-center">
          <EnvelopeDoodle className="text-[var(--ink)]" size={40} />
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-[var(--ink)]">
            <ViewportTypewriter text="Contato" speed={60} showCursor={false} />
          </h2>
        </div>
        <p className="text-center font-detail text-[var(--ink-muted)] mb-8 text-[1.12rem] md:text-xl max-w-2xl mx-auto">
          // aberto a oportunidades em suporte, atendimento, vendas, web, CRM, IA e design
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="paper-card p-6 md:p-8"
        >
          {/* CTA WhatsApp grande */}
          <a
            href={profile.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6 p-4 md:p-5 border-2 border-[var(--ink)] rounded-2xl bg-[var(--marker-yellow-soft)] hover:bg-[var(--marker-yellow)] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-[var(--ink)]" />
              <div className="flex-1">
                <p className="font-detail text-[0.95rem] md:text-base text-[var(--ink-soft)] uppercase tracking-wide">
                  whatsapp
                </p>
                <p className="font-heading text-2xl md:text-3xl text-[var(--ink)] font-bold">
                  {profile.whatsapp.display}
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-[var(--ink)] group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Links secundários */}
          <ul className="space-y-3.5 text-[var(--ink-soft)] text-[1.12rem] md:text-xl">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[var(--margin-red)] flex-shrink-0" />
              <a
                href={`mailto:${profile.email}`}
                className="font-detail hover:text-[var(--ink)] transition-colors"
              >
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-[var(--margin-red)] flex-shrink-0" />
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-detail hover:text-[var(--ink)] transition-colors"
              >
                @nucleo_digit4l
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[var(--pen-blue)] flex-shrink-0" />
              <span className="font-detail">{profile.location}</span>
            </li>
          </ul>

          {/* Decoração */}
          <div className="mt-6 flex items-center gap-2 justify-end text-[var(--margin-red)]">
            <span className="font-heading text-xl italic">vou adorar conversar</span>
            <HeartDoodle className="text-[var(--margin-red)]" size={22} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
