import React from 'react';
import SectionCard from './ui/SectionCard';
import launcherImg from '../launcher.png';
import { useLanguage } from '../context/LanguageContext';

function LauncherPreview() {
  const { t } = useLanguage();

  return (
    <SectionCard id="launcher" title={<span className="text-white animate-glow">{t.launcher.title}</span>}>
      {/* Description */}
      <div className="text-gray-300 space-y-3 mb-8 animate-slide-up">
        <p className="text-base leading-relaxed">
          {t.launcher.description1}
        </p>
        <p className="text-xs italic text-gray-400 p-3 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm hover-glow transition-all duration-300">
          {t.launcher.disclaimer}
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
          href="/launcher"
          className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-cyan text-white font-semibold rounded-lg hover-lift neon-glow-strong transition-all duration-300 group"
        >
          <span className="flex items-center gap-2">
            {t.launcher.viewAllBtn}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </a>
      </div>
    </SectionCard>
  );
}

export default React.memo(LauncherPreview);
