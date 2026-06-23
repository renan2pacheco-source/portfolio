// @ts-check
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Phosphor Green (CRT autêntico)
        bg: {
          DEFAULT: '#000000',
          surface: '#0d0d0d',
          elevated: '#161616',
        },
        text: {
          DEFAULT: '#e5e5e5',
          muted: '#888888',
          subtle: '#5a5a5a',
        },
        accent: {
          DEFAULT: '#4ade80', // verde fósforo
          glow: '#22c55e',
          dim: '#166534',
        },
        primary: {
          DEFAULT: '#60a5fa',
          glow: '#3b82f6',
        },
        border: {
          DEFAULT: '#1f1f1f',
          subtle: '#141414',
        },
        terminal: {
          green: '#4ade80',
          amber: '#fbbf24',
          red: '#f87171',
        },
      },
      fontFamily: {
        sans: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'scanlines':
          'repeating-linear-gradient(0deg, rgba(74, 222, 128, 0.03) 0px, rgba(74, 222, 128, 0.03) 1px, transparent 1px, transparent 3px)',
        'phosphor-glow':
          'radial-gradient(circle at center, rgba(74, 222, 128, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s steps(1) infinite',
        'scanline-drift': 'scanline-drift 8s linear infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        'scanline-drift': {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '0 100%' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97 },
        },
      },
    },
  },
  plugins: [],
};
