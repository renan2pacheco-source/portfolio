"use client"

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
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as any
  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{ minHeight: "1.2em" }}
    >
      {visible ? (
        <Typewriter text={text} delay={delay} speed={speed} showCursor={showCursor} />
      ) : (
        <span style={{ opacity: 0 }}>{text}</span>
      )}
    </Tag>
  )
}
