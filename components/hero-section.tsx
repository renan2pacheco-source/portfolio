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
      className="min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-16 px-4 md:px-8 relative"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Badge "Site Currículo" manuscrito */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-[var(--paper-light)] border-2 border-dashed border-[var(--margin-red)] rounded-full font-detail text-sm text-[var(--margin-red)] transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>site currículo</span>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          {/* Texto à esquerda */}
          <div className="order-2 md:order-1">
            <p
              className={`font-detail text-xl text-[var(--ink-soft)] mb-2 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {hero.greeting}
            </p>

            <h1 className="font-heading text-[3.2rem] sm:text-[4rem] md:text-[5.5rem] leading-[0.95] font-bold text-[var(--ink)] mb-3">
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
            <div className="relative inline-block mb-6">
              <SquiggleDoodle
                className="absolute -bottom-1 left-0 right-0 text-[var(--margin-red)] opacity-70"
                size={300}
              />
              <p className="font-heading text-2xl md:text-3xl text-[var(--ink-soft)] italic relative">
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
              className={`text-[var(--ink-muted)] leading-relaxed text-base md:text-lg max-w-xl mb-6 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {hero.description}
            </p>

            <div
              className={`flex items-center gap-1.5 text-sm text-[var(--ink-muted)] font-detail mb-8 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{profile.location}</span>
            </div>

            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 delay-400 ${
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
                <ArrowRight size={18} />
              </a>

              {profile.cvUrl && (
                <a href={profile.cvUrl} download className="btn-paper">
                  <Download size={16} />
                  <span>{hero.ctaSecondary}</span>
                </a>
              )}
            </div>

            <div
              className={`mt-8 flex items-center gap-2 text-sm transition-all duration-700 delay-500 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="font-detail text-[var(--ink-muted)]">
                {hero.availableBadge}
              </span>
            </div>
          </div>

          {/* Polaroid à direita */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <StarDoodle
              className="absolute -top-2 -right-2 text-[var(--pen-blue)] animate-wobble"
              size={32}
            />
            <StarDoodle
              className="absolute bottom-4 -left-4 text-[var(--margin-red)]"
              size={24}
            />

            <div
              className={`transition-all duration-1000 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <PolaroidAvatar size={240} />
            </div>

            {/* Seta riscada apontando pra polaroid */}
            <ArrowDoodle
              className="absolute -bottom-12 left-0 text-[var(--ink-soft)] hidden md:block"
              size={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
