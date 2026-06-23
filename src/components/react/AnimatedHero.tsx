import { motion } from 'framer-motion';
import { Download, ArrowDown, MapPin, MessageCircle, Mail } from 'lucide-react';
import RotatingText from './RotatingText';

interface AnimatedHeroProps {
  name: string;
  tagline: string;
  location: string;
  cvUrl: string;
  skills: string[];
  links: {
    instagram: string;
    whatsapp: string;
    email: string;
  };
}

export default function AnimatedHero({
  tagline,
  location,
  cvUrl,
  skills,
  links,
}: AnimatedHeroProps) {
  const scrollToResults = () => {
    document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      <div className="relative container-narrow text-center">
        {/* Badge — fade-up staggered */}
        <div className="animate-fade-in-badge inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 mb-8 ascii-box">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-accent">
            Currículo · {location}
          </span>
        </div>

        {/* Heading com RotatingText */}
        <h1
          className="animate-fade-in-heading text-5xl md:text-7xl lg:text-[96px] font-black tracking-[-0.05em] leading-[0.95] mb-6"
        >
          <span className="block text-text">Renan</span>
          <span className="block text-text">
            <RotatingText
              texts={skills}
              mainClassName="ml-1 md:ml-2 px-3 md:px-4 py-1 md:py-2 bg-accent text-bg rounded-xl shadow-[0_0_40px_rgba(255,215,0,0.25)] align-baseline"
              staggerDuration={0.025}
              interval={2400}
            />
          </span>
        </h1>

        <p className="animate-fade-in-sub text-base md:text-xl text-text mb-12 max-w-4xl mx-auto font-semibold leading-relaxed text-pretty">
          {tagline}
        </p>

        <div className="animate-fade-in-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href={cvUrl} download className="btn-primary group">
            <Download className="w-4 h-4" />
            Baixar CV em PDF
          </a>
          <button onClick={scrollToResults} className="btn-secondary group">
            Habilidades
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        <div className="animate-fade-in-trust flex items-center justify-center gap-2">
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
