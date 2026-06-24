"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { navLinks, profile } from "@/data/content"

export function PaperNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const lastScrollY = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100)

    const controlNavbar = () => {
      if (typeof window === "undefined") return
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

    window.addEventListener("scroll", controlNavbar, { passive: true })
    return () => {
      window.removeEventListener("scroll", controlNavbar)
      clearTimeout(timer)
    }
  }, [])

  // Scroll spy
  useEffect(() => {
    if (typeof window === "undefined") return
    const sectionIds = ["inicio", ...navLinks.map((l) => l.href.replace("#", ""))]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) return
    const element = document.querySelector(href)
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const targetPosition = Math.max(0, rect.top + currentScrollY - 90)
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        } ${hasLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="px-3 md:px-5 py-2 md:py-2.5 bg-[var(--paper)] border-2 border-[var(--ink)] rounded-full shadow-[3px_3px_0_var(--ink)]">
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-heading text-[var(--ink)] text-xl md:text-2xl font-bold hover:text-[var(--margin-red)] transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              {profile.initials}
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative font-heading text-lg px-3 py-1 transition-colors cursor-pointer ${
                      isActive
                        ? "text-[var(--margin-red)]"
                        : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-1">
                        <svg viewBox="0 0 60 6" preserveAspectRatio="none" className="w-full h-full">
                          <path
                            d="M0 3 Q 15 0, 30 3 T 60 3"
                            fill="none"
                            stroke="var(--margin-red)"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            <a
              href={profile.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 btn-paper btn-paper-primary text-sm px-3 py-1.5"
              style={{ fontSize: "1rem", padding: "0.4rem 0.9rem" }}
            >
              <span>Contato</span>
              <ArrowRight size={14} />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--ink)] hover:text-[var(--margin-red)] transition-colors cursor-pointer p-1"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[var(--ink)]/40 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`md:hidden fixed top-20 left-3 right-3 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[var(--paper)] border-2 border-[var(--ink)] rounded-2xl shadow-[4px_4px_0_var(--ink)] p-3">
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-heading text-lg text-[var(--ink-soft)] hover:text-[var(--margin-red)] hover:bg-[var(--marker-yellow-soft)] rounded-lg px-3 py-2.5 text-left transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <a
              href={profile.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-paper btn-paper-primary mt-2 justify-center"
            >
              <span>WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
