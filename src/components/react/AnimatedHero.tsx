import { motion } from 'framer-motion';
import { Download, ArrowDown, MapPin, MessageCircle, Mail } from 'lucide-react';

interface AnimatedHeroProps {
  name: string;
  tagline: string;
  location: string;
  civilStatus: string;
  seeking: string;
  value: string;
  cvUrl: string;
  links: {
    instagram: string;
    whatsapp: string;
    email: string;
  };
}

export default function AnimatedHero({
  name,
  tagline,
  location,
  civilStatus,
  seeking,
  value,
  cvUrl,
  links,
}: AnimatedHeroProps) {
  const scrollToResults = () => {
    document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      <div className="relative container-narrow text-center">
        <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 mb-8 ascii-box">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-accent">
            Currículo · {location} · {civilStatus}
          </span>
        </div>

        <h1
          className="text-6xl md:text-8xl lg:text-[112px] font-black tracking-[-0.08em] leading-[0.86] mb-8"
          aria-label={name}
        >
          <span className="block text-text">Renan</span>
          <span className="block gradient-text">Pacheco</span>
        </h1>

        <p className="text-base md:text-xl text-text mb-5 max-w-4xl mx-auto font-semibold leading-relaxed text-pretty">
          {tagline}
        </p>

        <p className="text-sm md:text-base text-text-muted max-w-3xl mx-auto mb-6 text-pretty leading-relaxed">
          {seeking}
        </p>

        <p className="text-xs md:text-sm text-accent max-w-3xl mx-auto mb-12 text-pretty leading-relaxed uppercase tracking-[0.12em]">
          {value}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href={cvUrl} download className="btn-primary group">
            <Download className="w-4 h-4" />
            Baixar CV em PDF
          </a>
          <button onClick={scrollToResults} className="btn-secondary group">
            Como gero resultado
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {links.whatsapp && (
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="ascii-box p-3 hover:border-accent hover:text-accent transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          )}
          <a
            href={links.email}
            className="ascii-box p-3 hover:border-accent hover:text-accent transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-accent text-xs"
      >
        <div className="flex flex-col items-center gap-1">
          <span>scroll</span>
          <span>↓</span>
        </div>
      </motion.div>
    </section>
  );
}
