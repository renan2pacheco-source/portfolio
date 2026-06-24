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
        style={{ width: size, paddingBottom: size * 0.32 }}
      >
        <div
          className="aspect-square relative overflow-hidden"
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
          {/* Label manuscrito embaixo */}
          <div
            className="absolute bottom-2 left-0 right-0 text-center font-detail text-[var(--ink-soft)]"
            style={{ fontSize: size * 0.085 }}
          >
            // user
          </div>
          {/* Estrelinhas decorativas */}
          <span
            className="absolute top-2 right-2 text-[var(--pen-blue)]"
            style={{ fontSize: size * 0.1 }}
          >
            ★
          </span>
          <span
            className="absolute bottom-3 left-2 text-[var(--margin-red)]"
            style={{ fontSize: size * 0.08 }}
          >
            ✦
          </span>
        </div>
        <div
          className="absolute bottom-3 left-0 right-0 text-center font-heading text-[var(--ink-soft)]"
          style={{ fontSize: size * 0.085 }}
        >
          {profile.name.split(" ")[0]}
        </div>
      </div>
    </motion.div>
  )
}
