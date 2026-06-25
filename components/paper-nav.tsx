"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"
import { Menu, X, ArrowRight } from "lucide-react"
import { navLinks, profile } from "@/data/content"

export function PaperNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("inicio")
  const lastScrollY = useRef(0)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMenuItemRef = useRef<HTMLButtonElement | null>(null)
  const shouldRestoreFocusRef = useRef(false)
  const wasOpenRef = useRef(false)
  const mobileMenuId = "mobile-site-menu"

  useEffect(() => {
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
        { rootMargin: "-18% 0px -68% 0px", threshold: 0.05 }
      )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        shouldRestoreFocusRef.current = true
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (!wasOpenRef.current && isOpen) {
      firstMenuItemRef.current?.focus()
    }

    if (wasOpenRef.current && !isOpen && shouldRestoreFocusRef.current) {
      menuButtonRef.current?.focus()
      shouldRestoreFocusRef.current = false
    }

    wasOpenRef.current = isOpen
  }, [isOpen])

  const closeMenu = (restoreFocus = false) => {
    shouldRestoreFocusRef.current = restoreFocus
    setIsOpen(false)
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) return
    const element = document.querySelector(href)
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const navOffset = window.innerWidth < 768 ? 92 : 118
      const targetPosition = Math.max(0, rect.top + currentScrollY - navOffset)
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
    closeMenu(true)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          x: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-4 md:top-6 lg:top-7 left-1/2 z-50"
      >
        <div className="px-4 md:px-6 lg:px-7 py-2.5 md:py-3 bg-[var(--paper)] border-2 border-[var(--ink)] rounded-full shadow-[4px_4px_0_var(--ink)]">
          <div className="flex items-center gap-4 md:gap-7 lg:gap-8">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-heading text-[var(--ink)] text-2xl md:text-[2rem] lg:text-[2.2rem] font-bold hover:text-[var(--margin-red)] transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              {profile.initials}
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <button
                    type="button"
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative font-heading text-xl lg:text-[1.45rem] px-3.5 lg:px-4 py-1.5 transition-colors cursor-pointer ${
                      isActive
                        ? "text-[var(--margin-red)]"
                        : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute left-3.5 right-3.5 bottom-0 h-[6px] pointer-events-none">
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
              className="hidden md:inline-flex items-center gap-2 btn-paper btn-paper-primary"
              style={{ fontSize: "1.1rem", padding: "0.55rem 1rem" }}
            >
              <span>Contato</span>
              <ArrowRight size={16} />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => (isOpen ? closeMenu(true) : setIsOpen(true))}
              className="md:hidden text-[var(--ink)] hover:text-[var(--margin-red)] transition-colors cursor-pointer p-1.5"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[var(--ink)]/40 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => closeMenu(true)}
          aria-hidden="true"
        />
      )}
      <div
        id={mobileMenuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`md:hidden fixed top-24 left-4 right-4 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[var(--paper)] border-2 border-[var(--ink)] rounded-2xl shadow-[4px_4px_0_var(--ink)] p-4">
          <div className="flex flex-col">
            {navLinks.map((item, index) => (
              <button
                ref={index === 0 ? firstMenuItemRef : undefined}
                type="button"
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-heading text-xl text-[var(--ink-soft)] hover:text-[var(--margin-red)] hover:bg-[var(--marker-yellow-soft)] rounded-lg px-4 py-3 text-left transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
              <a
                href={profile.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-paper btn-paper-primary mt-2 justify-center"
                onClick={() => closeMenu(true)}
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
