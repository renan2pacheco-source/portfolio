"use client"

import { useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Typewriter } from "./typewriter"

interface ViewportTypewriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  showCursor?: boolean
  as?: "span" | "h1" | "h2" | "h3" | "p"
}

export function ViewportTypewriter({
  text,
  delay = 0,
  speed = 40,
  className = "",
  showCursor = true,
  as = "span",
}: ViewportTypewriterProps) {
  const ref = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldReduceMotion])

  const Tag = as as any
  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{ minHeight: "1.2em" }}
    >
      {shouldAnimate ? (
        <>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            <Typewriter text={text} delay={delay} speed={speed} showCursor={showCursor} />
          </span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </Tag>
  )
}
