"use client"

import { motion } from "motion/react"
import { profile } from "@/data/content"

interface PolaroidAvatarProps {
  size?: number
}

export function PolaroidAvatar({ size = 220 }: PolaroidAvatarProps) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="inline-block"
      style={{ transformOrigin: "center" }}
    >
      <div
        className="polaroid inline-block"
        role="img"
        aria-label={`Avatar de ${profile.name}`}
        style={{ width: size }}
      >
        {/* Estrelas decorativas atrás/ao redor da foto */}
        <span
          className="absolute -top-3 -right-3 text-[var(--pen-blue)] z-0 pointer-events-none"
          style={{ fontSize: size * 0.12 }}
          aria-hidden="true"
        >
          ★
        </span>
        <span
          className="absolute -bottom-1 -left-3 text-[var(--margin-red)] z-0 pointer-events-none"
          style={{ fontSize: size * 0.09 }}
          aria-hidden="true"
        >
          ✦
        </span>

        {/* Área da foto */}
        <div
          className="aspect-square relative overflow-hidden z-10"
          style={{
            background: "linear-gradient(135deg, #fdf6e3 0%, #f4e8c1 100%)",
          }}
        >
          <img
            src="/portfolio/sticker-icons/profile-photo.png"
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Faixa branca inferior com label e nome */}
        <div className="relative z-10 pt-2 pb-1 text-center">
          <div
            className="font-detail text-[var(--ink-soft)] leading-none mb-0.5"
            style={{ fontSize: size * 0.07 }}
          >
            // user
          </div>
          <div
            className="font-heading text-[var(--ink-soft)] leading-none"
            style={{ fontSize: size * 0.09 }}
          >
            {profile.name.split(" ")[0]}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
