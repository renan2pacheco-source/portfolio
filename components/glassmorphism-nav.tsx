"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { navLinks, profile } from "@/data/content"

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 100)

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
            setIsVisible(false)
          } else if (lastScrollY.current - currentScrollY > 5) {
            setIsVisible(true)
          }
        } else {
          setIsVisible(true)
        }

        lastScrollY.current = currentScrollY
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })

      return () => {
        window.removeEventListener("scroll", controlNavbar)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return

    const element = document.querySelector(href)
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const elementAbsoluteTop = rect.top + currentScrollY
      const navbarHeight = 100
      const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight)

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 md:-translate-y-24 opacity-0"
      } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{
        transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      <div className="w-[90vw] max-w-xs md:max-w-4xl mx-auto">
        <div className="bg-black/40 backdrop-blur-md border border-[var(--gold)]/20 rounded-full px-4 py-3 md:px-6 md:py-2 shadow-[0_0_30px_color-mix(in_srgb,var(--gold)_8%,transparent)]">
          <div className="flex items-center justify-between">
            {/* Logo / Iniciais */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-[var(--gold)]/40 bg-black/60">
                <span className="text-[var(--gold)] font-bold text-sm font-mono">{profile.initials}</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-7">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[var(--text)]/70 hover:text-[var(--gold)] hover:scale-105 transition-all duration-200 text-sm font-medium cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <a
              href={profile.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-[var(--gold)] hover:bg-[var(--gold-glow)] text-black font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--gold)_30%,transparent)] group text-sm"
            >
              <span className="mr-2">Contato</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--text)] hover:scale-110 transition-transform duration-200 cursor-pointer"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden relative">
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
          style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
        />

        <div
          className={`mt-2 w-[90vw] max-w-xs mx-auto transition-all duration-500 ease-out transform-gpu ${
            isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-black/60 backdrop-blur-md border border-[var(--gold)]/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-[var(--text)]/80 hover:text-[var(--gold)] hover:bg-[var(--gold)]/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer ${
                    isOpen ? "animate-mobile-menu-item" : ""
                  }`}
                  style={{
                    animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms",
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div className="h-px bg-[var(--gold)]/15 my-2" />
              <a
                href={profile.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[var(--gold)] text-black font-semibold px-5 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--gold-glow)] ${
                  isOpen ? "animate-mobile-menu-item" : ""
                }`}
                style={{
                  animationDelay: isOpen ? `${navLinks.length * 80 + 150}ms` : "0ms",
                }}
              >
                <span className="mr-2">WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
