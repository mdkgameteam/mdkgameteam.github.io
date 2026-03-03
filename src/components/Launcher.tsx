import React from 'react';
import SectionCard from './ui/SectionCard';
import launcherImg from '../launcher.png';

interface LauncherProps {
  onOpenModal?: (name: 'about' | 'terms' | 'security') => void;
}

const PLATFORM_LINKS = {
  windows: {
    icon: '🪟',
    label: 'Windows',
    url: 'https://github.com/DexRevil/MDK-Launcher/releases/download/2.0.4/MDK-Launcher-win-x64.exe',
  },
  mac: {
    icon: '🍎',
    label: 'Mac',
    url: 'https://github.com/DexRevil/MDK-Launcher/releases/download/2.0.4/MDK-Launcher-mac-universal.dmg',
  },
  linux: {
    icon: '🐧',
    label: 'Linux',
    url: 'https://github.com/DexRevil/MDK-Launcher/releases/download/3.1.5/MDK-Launcher-linux-x86_64.AppImage',
  },
};

function PlatformButton({ platform, index }: { platform: typeof PLATFORM_LINKS[keyof typeof PLATFORM_LINKS]; index: number }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-neon-pink/20 hover:to-neon-cyan/20 transition-all duration-300 border border-slate-700/50 hover:border-neon-pink/80 group hover-lift neon-glow"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-7xl group-hover:scale-125 transition-transform duration-300 animate-float">{platform.icon}</div>
      <span className="text-white font-semibold text-lg group-hover:text-neon-pink transition-colors duration-300">{platform.label}</span>
      <span className="text-xs text-gray-400 group-hover:text-neon-cyan transition-colors duration-300">Descargar</span>
    </a>
  );
}

function Launcher({ onOpenModal }: LauncherProps) {
  return (
    <SectionCard id="launcher" title={<span className="text-white animate-glow">Descargar MDK Launcher</span>}>
      {/* Description */}
      <div className="text-gray-300 space-y-3 mb-8 animate-slide-up">
        <p className="text-base leading-relaxed">
          Presentamos el launcher de MDK, con el cual permitirá facilitar el acceso a nuestros servidores en Minecraft. La mayoría de los eventos serán manejados y ejecutados desde el Launcher de MDK.
        </p>
        <p className="text-xs italic text-gray-500 p-3 bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-lg border border-slate-700 backdrop-blur-sm hover-glow transition-all duration-300">
          ℹ️ El launcher puede contener algunos errores. Por favor, si encuentra alguno reportelo con el staff de MDK.
        </p>
      </div>

      {/* Banner Image */}
      <div className="mb-8 overflow-hidden rounded-lg animate-slide-up">
        <img
          src={launcherImg}
          alt="MDK Launcher"
          className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-2xl hover:shadow-neon-pink/30 transition-all duration-500 transform hover:scale-105 neon-glow"
        />
      </div>

      {/* Divider */}
      <hr className="border-slate-700 my-8 animate-slide-up" />

      {/* Platform Downloads Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 animate-slide-up">
        {Object.values(PLATFORM_LINKS).map((platform, index) => (
          <PlatformButton key={platform.label} platform={platform} index={index} />
        ))}
      </div>

      {/* Footer Info */}
      <div className="text-center pt-6 border-t border-slate-700 animate-slide-up">
        <p className="text-sm text-gray-500 mb-2">Los enlaces usados son seguros ✓</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
          <button
            type="button"
            onClick={() => onOpenModal && onOpenModal('terms')}
            className="px-4 py-2 bg-transparent border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-colors duration-300 hover:neon-glow"
          >
            Términos y Condiciones
          </button>
          <button
            type="button"
            onClick={() => onOpenModal && onOpenModal('security')}
            className="px-4 py-2 bg-transparent border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-colors duration-300 hover:neon-glow"
          >
            Seguridad del Launcher
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

export default React.memo(Launcher);
