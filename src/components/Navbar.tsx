import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../MDKby.png';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenModal?: (name: 'about' | 'terms' | 'security') => void;
}

function Navbar(props: NavbarProps) {
  void props.onOpenModal;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl shadow-md border-b border-neon-pink/30 neon-glow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 group">
            <div className="w-10 h-10 rounded-full overflow-hidden group-hover:animate-rotate">
              <img src={logo} alt="MDK Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-bold text-xl group-hover:text-neon-cyan transition-colors duration-300">MDK GAME TEAM</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/#proyectos"
              className="relative text-white hover:text-neon-cyan transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full text-sm font-medium"
            >
              {t.nav.projects}
            </a>
            <a
              href="/#equipo"
              className="relative text-white hover:text-neon-cyan transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full text-sm font-medium"
            >
              {t.nav.about}
            </a>
            <a
              href="/#contacto"
              className="relative text-white hover:text-neon-cyan transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full text-sm font-medium"
            >
              {t.nav.contact}
            </a>

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-neon-cyan/40 bg-slate-900/80 hover:bg-neon-cyan/20 text-white text-xs font-semibold tracking-wider transition-all duration-300 hover:border-neon-cyan hover-lift neon-glow"
              title={language === 'es' ? 'Cambiar a English' : 'Switch to Español'}
              aria-label="Toggle language"
            >
              <Globe size={14} className="text-neon-cyan" />
              <span>{language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}</span>
            </button>

            <a
              href="/launcher"
              className="bg-gradient-to-r from-neon-pink to-neon-cyan hover:from-neon-cyan hover:to-neon-pink text-white px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover-lift neon-glow-strong"
            >
              {t.nav.launcher}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            {/* Quick Language Toggle on Mobile Bar */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center space-x-1 px-2.5 py-1 rounded-full border border-neon-cyan/40 bg-slate-900/80 text-white text-xs font-semibold"
              title={language === 'es' ? 'English' : 'Español'}
            >
              <span>{language === 'es' ? '🇪🇸' : '🇺🇸'}</span>
              <span className="text-neon-cyan text-[11px]">{language.toUpperCase()}</span>
            </button>

            <button
              className="text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a
              href="/#proyectos"
              className="block relative text-white hover:text-neon-cyan transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.projects}
            </a>
            <a
              href="/#equipo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block relative text-white hover:text-neon-cyan transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {t.nav.about}
            </a>
            <a
              href="/#contacto"
              className="block relative text-white hover:text-neon-cyan transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>

            {/* Mobile Language Switcher Row */}
            <div className="pt-2 pb-1 flex items-center justify-between border-t border-white/10">
              <span className="text-sm text-gray-400 flex items-center gap-1.5">
                <Globe size={16} className="text-neon-cyan" />
                {language === 'es' ? 'Idioma actual:' : 'Current language:'}
              </span>
              <button
                onClick={toggleLanguage}
                type="button"
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-neon-cyan/50 bg-slate-900 text-white text-xs font-bold"
              >
                <span>{language === 'es' ? '🇪🇸 Español' : '🇺🇸 English'}</span>
                <span className="text-neon-pink text-[11px]">⇄ {language === 'es' ? 'EN' : 'ES'}</span>
              </button>
            </div>

            <a
              href="/launcher"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full relative overflow-hidden text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 block text-center bg-gradient-to-r from-neon-pink to-neon-cyan"
            >
              <span className="relative z-10">{t.nav.launcher}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default React.memo(Navbar);
