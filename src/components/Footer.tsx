import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import logo from '../MDKby.png';

interface FooterProps {
  onOpenModal?: (name: 'about' | 'terms' | 'security') => void;
}

function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-black bg-gradient-to-t from-slate-900 via-slate-900 to-neon-blue/10 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl animate-float opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float-slow opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-slide-up" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 rounded-full overflow-hidden group-hover:animate-rotate">
                <img src={logo} alt="MDK Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-white font-bold group-hover:text-neon-cyan transition-colors duration-300">MDK GAME TEAM</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creando experiencias únicas en Minecraft desde 2022
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-white font-semibold mb-4 neon-text">Comunidad</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/HC8XpD77Gt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Discord de la comunidad
                </a>
              </li>

            </ul>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-white font-semibold mb-4 neon-text">Equipo</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#contacto"
                  className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="/#equipo"
                  className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  Acerca de
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-white font-semibold mb-4 neon-text">Docs</h3>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal && onOpenModal('terms')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full cursor-pointer"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal && onOpenModal('security')}
                  className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-cyan after:transition-[width] after:duration-300 hover:after:w-full cursor-pointer"
                >
                  Seguridad del Launcher
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-slide-up">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            MDK Game Team - {new Date().getFullYear()} © Todos los derechos reservados
          </p>

          <div className="flex space-x-6">
            <a
              href="https://x.com/mdkgameteam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan hover:scale-125 transition-all duration-300 hover-glow"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://discord.gg/HC8XpD77Gt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-pink hover:scale-125 transition-all duration-300 hover-glow"
              aria-label="Discord"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://github.com/DexRevil/MDK-Launcher/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan hover:scale-125 transition-all duration-300 hover-glow"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
