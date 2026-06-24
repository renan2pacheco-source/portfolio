"use client"

import { ArrowRight, Download, MapPin, MessageCircle, Sparkles } from "lucide-react"
import { profile, hero, rotatingRoles } from "@/data/content"
import { PolaroidAvatar } from "./polaroid-avatar"
import { Typewriter } from "./typewriter"
import { StarDoodle, ArrowDoodle, SquiggleDoodle } from "./doodles"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      id="inicio"
      className="min-h-[100svh] flex items-center justify-center pt-24 md:pt-32 lg:pt-36 pb-20 md:pb-24 px-5 md:px-8 lg:px-10 relative"
    >
      <div className="max-w-6xl xl:max-w-7xl w-full mx-auto">
        {/* Badge "Site Currículo" manuscrito */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-[var(--paper-light)] border-2 border-dashed border-[var(--margin-red)] rounded-full font-detail text-[1.05rem] md:text-[1.12rem] text-[var(--margin-red)] transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>site currículo</span>
        </div>

        <div className="grid md:grid-cols-[minmax(0,1.2fr)_auto] gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Texto à esquerda */}
          <div className="order-2 md:order-1">
            <p
              className={`font-detail text-[1.7rem] sm:text-[2rem] md:text-[2.2rem] text-[var(--ink-soft)] mb-3 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {hero.greeting}
            </p>

            <h1 className="font-heading text-[3.8rem] sm:text-[4.8rem] md:text-[6.4rem] xl:text-[7.2rem] leading-[1.02] md:leading-[0.92] font-bold text-[var(--ink)] mb-4">
              {mounted ? (
                <Typewriter
                  text={profile.fullName}
                  speed={70}
                  showCursor={false}
                />
              ) : (
                <span className="opacity-0">{profile.fullName}</span>
              )}
            </h1>

            {/* Cargo / função manuscrito */}
            <div className="relative inline-block mb-7 pb-3 overflow-visible">
              <SquiggleDoodle
                className="subtitle-squiggle absolute left-0 bottom-0 text-[var(--margin-red)] opacity-70"
                size={300}
              />
              <p className="font-heading text-[1.9rem] sm:text-[2.2rem] md:text-[3.2rem] lg:text-[3.6rem] text-[var(--ink-soft)] italic relative leading-[1.1]">
                {mounted ? (
                  <Typewriter
                    text={hero.subtitle}
                    delay={1500}
                    speed={40}
                    showCursor={false}
                  />
                ) : (
                  <span className="opacity-0">{hero.subtitle}</span>
                )}
              </p>
            </div>

            <p
              className={`text-[var(--ink-muted)] leading-relaxed text-[1.15rem] sm:text-[1.22rem] md:text-[1.35rem] lg:text-[1.45rem] max-w-2xl mb-7 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {hero.description}
            </p>

            <div
              className={`flex items-center gap-2 text-[1.08rem] sm:text-[1.12rem] md:text-[1.18rem] text-[var(--ink-muted)] font-detail mb-9 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <MapPin className="w-4.5 h-4.5" />
              <span>{profile.location}</span>
            </div>

            <div
              className={`flex flex-wrap items-center gap-3.5 md:gap-4 transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <a
                href="#habilidades"
                className="btn-paper btn-paper-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#habilidades")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowRight size={22} />
              </a>

              {profile.cvUrl && (
                <a href={profile.cvUrl} download="Curriculo_Renan_Nunes_Pacheco_Visual.pdf" className="btn-paper">
                  <Download size={20} />
                  <span>{hero.ctaSecondary}</span>
                </a>
              )}
            </div>

            <div
              className={`mt-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-600/30 bg-green-50/40 transition-all duration-700 delay-500 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-pulse-ripple"></span>
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 ring-2 ring-green-200"></span>
              </span>
              <span className="font-detail text-[var(--ink-soft)] text-[1.05rem] sm:text-[1.1rem] font-medium">
                {hero.availableBadge}
              </span>
            </div>
          </div>

          {/* Polaroid à direita */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <StarDoodle
              className="absolute -top-2 md:-top-2 right-0 md:-right-2 text-[var(--pen-blue)] animate-wobble"
              size={36}
            />
            <StarDoodle
              className="absolute bottom-4 left-0 md:-left-4 text-[var(--margin-red)] animate-float"
              size={28}
            />

            <div
              className={`transition-all duration-1000 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <PolaroidAvatar size={320} />
            </div>

            {/* Seta riscada apontando pra polaroid */}
            <ArrowDoodle
              className="absolute -bottom-12 left-0 text-[var(--ink-soft)] hidden md:block"
              size={110}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
