"use client"

import { ArrowRight, MessageCircle, Download, MapPin } from "lucide-react"
import RotatingText from "./RotatingText"
import { profile, rotatingWords } from "@/data/content"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge de status */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--gold)]/10 backdrop-blur-md border border-[var(--gold)]/30 text-[var(--gold)] text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-[var(--gold)] rounded-full mr-2 animate-pulse-glow"></span>
          Disponível para oportunidades
        </div>

        {/* Heading principal */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading text-[var(--text)]">
          <span className="text-[var(--text)]">{profile.fullName.split(" ")[0]}</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
            <span className="text-[var(--text)]">em</span>
            <RotatingText
              texts={rotatingWords}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[var(--gold)] text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-[0_0_24px_color-mix(in_srgb,var(--gold)_25%,transparent)]"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2200}
            />
          </span>
        </h1>

        {/* Subheadline / Resumo */}
        <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          {profile.tagline}
        </p>

        {/* Localização */}
        <div className="flex items-center justify-center gap-2 text-[var(--text-subtle)] text-xs font-mono mb-8 animate-fade-in-subheading">
          <MapPin className="w-3 h-3" />
          <span>{profile.location}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <a
            href={profile.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            {profile.whatsapp.display}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="btn-secondary group cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Baixar CV
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
