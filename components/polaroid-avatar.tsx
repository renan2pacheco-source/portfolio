"use client"

import { profile } from "@/data/content"

interface PolaroidAvatarProps {
  size?: number
}

export function PolaroidAvatar({ size = 220 }: PolaroidAvatarProps) {
  return (
    <div
      className="polaroid inline-block"
      role="img"
      aria-label={`Avatar de ${profile.name}`}
      style={{ width: size, paddingBottom: size * 0.32 }}
    >
      <div
        className="aspect-square flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fdf6e3 0%, #f4e8c1 100%)",
        }}
      >
        {/* Initial grande */}
        <div
          className="font-heading text-[var(--margin-red)] select-none"
          style={{ fontSize: size * 0.55, lineHeight: 1, fontWeight: 700 }}
        >
          {profile.initials}
        </div>
        {/* Label manuscrito embaixo */}
        <div
          className="font-detail text-[var(--ink-soft)] mt-1"
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
  )
}
