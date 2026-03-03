import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error('Error loading projects', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="proyectos" className="bg-black py-24 px-6">
        <div className="text-center text-gray-400">Cargando proyectos...</div>
      </section>
    );
  }

  // limit the number of 'destacados' to two and render the rest in a separate section
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section id="proyectos" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-center mb-16 animate-slideIn">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-glow">
              Proyectos Destacados
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">Estos son todas la creaciones de MDK</p>
            <p className="text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">MDK Se ha propuesto mejorar cada eventualmente que desanda, esto con la finalidad de prestarles a los jugadores o la largo del proyecto, mejorando así la gestión de los servidores, un launcher personalizado, nuevas mecánicas o funciones entre otras más características que podrías observar en nuestros proyectos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, projectIndex) => (
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

        {otherProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Otros Proyectos</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {otherProjects.map((project, projectIndex) => (
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
        )}
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
