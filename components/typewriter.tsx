"use client"

import { useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  delay?: number        // delay inicial em ms
  speed?: number        // ms por caractere
  className?: string
  showCursor?: boolean
  onComplete?: () => void
  loop?: boolean
  animate?: boolean
}

export function Typewriter({
  text,
  delay = 0,
  speed = 50,
  className = "",
  showCursor = true,
  onComplete,
  loop = false,
  animate = true,
}: TypewriterProps) {
  const shouldReduceMotion = useReducedMotion()
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)

  if (!animate || shouldReduceMotion) {
    return <span className={className}>{text}</span>
  }

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) {
      if (!done) {
        setDone(true)
        onComplete?.()
      }
      if (loop) {
        const resetTimer = setTimeout(() => {
          setDisplayed("")
          setDone(false)
        }, 1800)
        return () => clearTimeout(resetTimer)
      }
      return
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [displayed, text, speed, started, done, loop, onComplete])

  return (
    <span className={className}>
      {displayed}
      {showCursor && <span className="cursor" aria-hidden="true" />}
    </span>
  )
}
