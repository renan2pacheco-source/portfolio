"use client"

import { useEffect, useRef, useState } from "react"
import { profile } from "@/data/content"
import { EnvelopeDoodle, HeartDoodle } from "@/components/doodles"
import { MapPin, MessageCircle, Mail, Github, Instagram, ArrowRight } from "lucide-react"
import { ViewportTypewriter } from "@/components/viewport-typewriter"

export function ContactSection() {
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
      id="contato"
      ref={ref}
      className="py-20 md:py-28 px-4 md:px-8 relative"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-3 justify-center">
          <EnvelopeDoodle className="text-[var(--ink)]" size={36} />
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-[var(--ink)]">
            {visible ? <ViewportTypewriter text="Contato" speed={60} showCursor={false} /> : "Contato"}
          </h2>
        </div>
        <p className="text-center font-detail text-[var(--ink-muted)] mb-8">
          // aberto a oportunidades em suporte, atendimento, vendas, web, CRM, IA e design
        </p>

        <div
          className={`paper-card p-6 md:p-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
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
                <p className="font-detail text-xs text-[var(--ink-soft)] uppercase tracking-widest">
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
          <ul className="space-y-3 text-[var(--ink-soft)]">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[var(--margin-red)] flex-shrink-0" />
              <a
                href={`mailto:${profile.email}`}
                className="font-detail hover:text-[var(--ink)] transition-colors"
              >
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github className="w-4 h-4 text-[var(--ink)] flex-shrink-0" />
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-detail hover:text-[var(--ink)] transition-colors"
              >
                github.com/renan2pacheco-source
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-4 h-4 text-[var(--margin-red)] flex-shrink-0" />
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
              <MapPin className="w-4 h-4 text-[var(--pen-blue)] flex-shrink-0" />
              <span className="font-detail">{profile.location}</span>
            </li>
          </ul>

          {/* Decoração */}
          <div className="mt-6 flex items-center gap-2 justify-end text-[var(--margin-red)]">
            <span className="font-heading text-lg italic">vou adorar conversar</span>
            <HeartDoodle className="text-[var(--margin-red)]" size={20} />
          </div>
        </div>
      </div>
    </section>
  )
}
