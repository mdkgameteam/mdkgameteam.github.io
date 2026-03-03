import React, { useRef, useState, useEffect } from 'react';

type SectionCardProps = {
  id?: string;
  title?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

const SectionCard: React.FC<SectionCardProps> = ({ id, title, image, imageAlt, children }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className="bg-black py-24 px-6 font-sans relative overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float-slow opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid gap-12 items-center ${image ? 'md:grid-cols-2' : ''}`}>
          <div className={`space-y-6 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {title && (
              <div className="border-l-4 border-gradient-to-b from-neon-pink to-neon-cyan pl-6 py-2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 neon-text">{title}</h2>
              </div>
            )}

            <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
          </div>

          {image && (
            <div className={`relative transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="absolute -inset-1 bg-gradient-to-br from-neon-pink via-neon-cyan to-neon-pink rounded-lg blur-lg opacity-50 animate-pulse"></div>
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-2xl neon-glow hover-lift">
                <img
                  src={image}
                  alt={imageAlt || 'section image'}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SectionCard);
