import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../MDKby.png';

// Props are currently unused but kept for consistency with parent pages.
interface NavbarProps {
  onOpenModal?: (name: 'about' | 'terms' | 'security') => void;
}

function Navbar(props: NavbarProps) {
  // consume prop to avoid unused-variable warning; no-op for now
  void props.onOpenModal;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#proyectos"
              className="relative text-white hover:text-neon-cyan transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Proyectos
            </a>
            <a
              href="/#equipo"
              className="relative text-white hover:text-neon-cyan transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Acerca
            </a>
            <a
              href="/#contacto"
              className="relative text-white hover:text-neon-cyan transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Contacto
            </a>
            <a href="/launcher" className="bg-gradient-to-r from-neon-pink to-neon-cyan hover:from-neon-cyan hover:to-neon-pink text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-110 hover-lift neon-glow-strong">
              MDK Launcher
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              Proyectos
            </a>
            <a
              href="/#equipo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block relative text-white hover:text-neon-cyan transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Acerca
            </a>
            <a
              href="/#contacto"
              className="block relative text-white hover:text-neon-cyan transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <a href="/#/launcher" className="w-full relative overflow-hidden text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 block text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient"></span>
              <span className="relative z-10">MDK Launcher</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default React.memo(Navbar);
