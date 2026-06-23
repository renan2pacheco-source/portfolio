import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Resultado', href: '#resultados' },
  { label: 'Ferramentas', href: '#skills' },
  { label: 'Contato', href: '#contato' },
];

export default function GlassmorphismNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const loadTimer = setTimeout(() => setHasLoaded(true), 100);
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      if (y > 50) {
        if (y > lastScrollY.current && y - lastScrollY.current > 5) {
          setIsVisible(false);
        } else if (lastScrollY.current - y > 5) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!href.startsWith('#')) return;
    const el = document.querySelector(href);
    if (el) {
      const rect = el.getBoundingClientRect();
      const y = rect.top + window.pageYOffset - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? (hasLoaded ? 1 : 0) : 0,
      }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 px-6 transition-all duration-500 ${
        isScrolled ? 'top-3 md:top-4' : 'top-4 md:top-6'
      }`}
    >
      <div className="w-[92vw] max-w-3xl">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 md:px-6 md:py-2 transition-all duration-500 ${
            isScrolled
              ? 'bg-black/70 border-accent/30 backdrop-blur-xl shadow-2xl shadow-black/40'
              : 'bg-black/40 border-border-subtle backdrop-blur-md'
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="text-base md:text-lg font-bold text-text hover:scale-105 transition-transform duration-200"
          >
            <span className="gradient-text">RP</span>
            <span className="text-accent">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-1.5 text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contato');
            }}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full bg-accent text-bg hover:bg-accent-glow hover:scale-105 transition-all duration-200"
          >
            Contato
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-6 h-6 text-text hover:scale-110 transition-transform"
            aria-label="Menu"
          >
            <Menu
              size={22}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              size={22}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -8,
            scale: isOpen ? 1 : 0.95,
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="md:hidden mt-2 rounded-2xl border border-border-subtle bg-black/80 backdrop-blur-xl p-2"
        >
          <div className="flex flex-col">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-3 text-sm text-text-muted hover:text-accent hover:bg-white/5 rounded-lg transition-all"
                style={{
                  animation: isOpen ? `navItemIn 0.4s ${i * 0.05}s both` : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contato');
              }}
              className="mt-1 px-4 py-2.5 text-sm font-medium text-center rounded-full bg-accent text-bg hover:bg-accent-glow transition-colors"
              style={{
                animation: isOpen ? `navItemIn 0.4s ${NAV_ITEMS.length * 0.05}s both` : 'none',
              }}
            >
              Falar comigo
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
