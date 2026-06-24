"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MessageCircle, Mail, MapPin, Instagram, Github } from "lucide-react"
import { profile } from "@/data/content"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center p-8 md:p-12 rounded-3xl border border-[var(--gold)]/25 bg-[radial-gradient(35%_128px_at_50%_0%,color-mix(in_srgb,var(--gold)_12%,transparent),color-mix(in_srgb,var(--gold)_3%,transparent))] shadow-[0_0_40px_color-mix(in_srgb,var(--gold)_10%,transparent)] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--text)] mb-4 text-balance leading-tight">
            Vamos conversar sobre uma{" "}
            <span className="font-semibold italic gradient-text">oportunidade</span>?
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Aberto a oportunidades em suporte técnico, atendimento, vendas, rotinas operacionais, produtividade e
            tecnologia aplicada ao negócio.
          </p>

          {/* CTA primário: WhatsApp */}
          <a
            href={profile.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-[var(--gold)] text-black rounded-full font-semibold text-base md:text-lg hover:bg-[var(--gold-glow)] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_color-mix(in_srgb,var(--gold)_25%,transparent)] mb-8"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            {profile.whatsapp.display}
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Links secundários */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 border border-[var(--border)] bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full text-sm text-[var(--text-muted)] hover:border-[var(--gold)]/50 hover:text-[var(--text)] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            {profile.links.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-[var(--border)] bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full text-sm text-[var(--text-muted)] hover:border-[var(--gold)]/50 hover:text-[var(--text)] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {profile.links.instagram && (
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-[var(--border)] bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full text-sm text-[var(--text-muted)] hover:border-[var(--gold)]/50 hover:text-[var(--text)] transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            )}
          </div>

          {/* Localização */}
          <div className="flex items-center justify-center gap-2 text-[var(--text-subtle)] text-xs font-mono pt-4 border-t border-[var(--border)]/50">
            <MapPin className="w-3 h-3" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
