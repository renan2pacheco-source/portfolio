import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Instagram, MessageCircle, Mail } from 'lucide-react';

interface AnimatedHeroProps {
  name: string;
  tagline: string;
  cvUrl: string;
  links: {
    instagram: string;
    whatsapp: string;
    email: string;
  };
}

const ROLES = [
  'Entusiasta em Tecnologia',
  'Designer Gráfico',
  'Dev Full Stack',
  'Estudante de Nutrição',
  'Apaixonado por IA',
];

export default function AnimatedHero({ name, tagline, cvUrl, links }: AnimatedHeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          intervalRef.current = setTimeout(tick, 75);
        } else {
          intervalRef.current = setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
          intervalRef.current = setTimeout(tick, 35);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    intervalRef.current = setTimeout(tick, isDeleting ? 35 : 75);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="relative container-narrow text-center">
        {/* Terminal-style status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 ascii-box"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-accent">
            online // disponível pra conversar
          </span>
        </motion.div>

        {/* Nome com cursor */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-mono"
        >
          <span className="gradient-text">$ {name}</span>
          <span className="cursor text-accent" />
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl text-text-muted mb-6 h-10 flex items-center justify-center gap-2 font-mono"
        >
          <span className="text-accent">{'>'}</span>
          <span className="text-text font-bold">
            {displayedText}
            <span className="inline-block w-0.5 h-7 bg-accent ml-1 animate-cursor-blink" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base text-text-muted max-w-2xl mx-auto mb-12 text-pretty leading-relaxed"
        >
          {tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a href={cvUrl} download className="btn-primary group">
            <Download className="w-4 h-4" />
            Baixar CV em PDF
          </a>
          <button onClick={scrollToProjects} className="btn-secondary group">
            Ver projetos
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          {links.instagram && (
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ascii-box p-3 hover:border-accent hover:text-accent transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
