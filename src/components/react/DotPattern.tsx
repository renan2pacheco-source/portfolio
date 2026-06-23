export default function DotPattern() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.16]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#FFD700" />
            </pattern>
            <radialGradient id="hero-glow" cx="50%" cy="22%" r="60%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.18" />
              <stop offset="42%" stopColor="#FFD700" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
          <rect width="100%" height="100%" fill="url(#hero-glow)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_78%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/75 to-black" />
    </div>
  );
}
