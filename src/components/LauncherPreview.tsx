import React from 'react';
import SectionCard from './ui/SectionCard';
import launcherImg from '../launcher.png';

function LauncherPreview() {
  return (
    <SectionCard id="launcher" title={<span className="text-white animate-glow">Descargar MDK Launcher</span>}>
      {/* Description */}
      <div className="text-gray-300 space-y-3 mb-8 animate-slide-up">
        <p className="text-base leading-relaxed">
          Presentamos el launcher de MDK, con el cual permitirá facilitar el acceso a nuestros servidores en Minecraft. La mayoría de los eventos serán manejados y ejecutados desde el Launcher de MDK.
        </p>
        <p className="text-xs italic text-gray-500 p-3 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm hover-glow transition-all duration-300">
          ℹ️ El launcher puede contener algunos errores. Por favor, si encuentra alguno reportelo con el staff de MDK.
        </p>
      </div>

      {/* Banner Image */}
      <div className="mb-8 overflow-hidden rounded-lg animate-slide-up">
        <img
          src={launcherImg}
          alt="MDK Launcher"
          className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-2xl hover:shadow-neon-pink/30 transition-all duration-500 transform hover:scale-105"
        />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8 animate-slide-up">
        <a
          href="/#/launcher"
          className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-cyan text-white font-semibold rounded-lg hover-lift neon-glow-strong transition-all duration-300 group"
        >
          <span className="flex items-center gap-2">
            Ver todas las descargas
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </a>
      </div>
    </SectionCard>
  );
}

export default React.memo(LauncherPreview);
