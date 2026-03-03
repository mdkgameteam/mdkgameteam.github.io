import React, { useEffect, useState } from 'react';
import zethImg from '../Zettazafio.png';
import uhcImg from '../UHCEXTREMO.png';
import mcexImg from '../MCEX.png';
import patacondorImg from '../Patacondor.png';
import navidadImg from '../NAVIDAD PERDIDA.png';
import eloteImg from '../ELOTECRAFT.png';
import mameImg from '../MAMELAND.png';
import squidImg from '../SQUIDECUGAME.png';
import eternalImg from '../ETERNALUHC.png';

const DEFAULT_PROJECT_CATEGORY = {
  title: 'Proyectos Destacados',
  description: 'Estos son todas la creaciones de MDK',
  subtitle:
    'MDK Se ha propuesto mejorar cada eventualmente que desanda, esto con la finalidad de prestarles a los jugadores o la largo del proyecto, mejorando así la gestión de los servidores, un launcher personalizado, nuevas mecánicas o funciones entre otras más características que podrías observar en nuestros proyectos',
  projects: [
    { id: 1, title: 'ZethSafio', image: zethImg, tags: ['Evento', 'Minecraft'], description: 'Evento especial de Zeth.' },
    { id: 2, title: 'UHC Extremo', image: uhcImg, tags: ['Evento', 'PvP'], description: 'UHC con reglas personalizadas.' },
    { id: 3, title: 'MCEX', image: mcexImg, tags: ['Plugin', 'Minecraft'], description: 'Plugin de minijuegos y features.' },
    { id: 4, title: 'Phoenix Event', image: patacondorImg, tags: ['Evento', 'Minecraft'], description: 'Evento temático Phoenix.' },
    { id: 5, title: 'Navidad Perdida', image: navidadImg, tags: ['Evento', 'Navidad'], description: 'Evento navideño especial.' },
    { id: 6, title: 'EloteCraft', image: eloteImg, tags: ['Plugin', 'Minecraft'], description: 'Mini-plugin divertido.' },
    { id: 7, title: 'Mameland', image: mameImg, tags: ['Servidor', 'Survival'], description: 'Servidor survival con mods.' },
    { id: 8, title: 'Squidecu Game', image: squidImg, tags: ['Minijuego', 'Custom'], description: 'Minijuego inspirado en retos.' },
    { id: 9, title: 'Eternal UHC', image: eternalImg, tags: ['Evento', 'UHC'], description: 'UHC persistente y competitivo.' },
  ],
};
function Projects() {
  const [category, setCategory] = useState(DEFAULT_PROJECT_CATEGORY);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('mdk_projects');
      if (raw) {
        const parsed = JSON.parse(raw);
        // expect same shape as DEFAULT_PROJECT_CATEGORY
        setCategory(parsed);
      }
    } catch (err) {
      console.error('Error loading projects', err);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      try {
        const raw = localStorage.getItem('mdk_projects');
        if (raw) setCategory(JSON.parse(raw));
      } catch (err) {
        console.error(err);
      }
    };
    window.addEventListener('mdk_projects_updated', handler as EventListener);
    return () => window.removeEventListener('mdk_projects_updated', handler as EventListener);
  }, []);

  return (
    <section id="proyectos" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-center mb-16 animate-slideIn">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-glow">
              {category.title}
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">{category.description}</p>
            <p className="text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">{category.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {category.projects.map((project, projectIndex) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                className="cursor-pointer group relative overflow-hidden rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${projectIndex * 100}ms` }}
              >
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3 animate-glow">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string, tagIndex: number) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gradient-to-r from-neon-pink to-neon-cyan text-white text-sm rounded-full shadow-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* lazy modal: simple inline */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setSelected(null)}>
          <div className="bg-slate-900 rounded-lg max-w-3xl w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-md overflow-hidden mb-4">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{selected.title}</h3>
            <p className="text-gray-300 mb-4">{selected.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {selected.tags.map((t: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-r from-neon-pink to-neon-cyan text-white text-sm rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="text-right">
              <button onClick={() => setSelected(null)} className="px-4 py-2 bg-neon-cyan text-black rounded">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default React.memo(Projects);
