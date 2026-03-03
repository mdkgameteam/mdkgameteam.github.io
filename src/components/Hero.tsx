import React from 'react';
import video from '../pantalla.mp4';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-blue via-neon-pink to-black animate-gradient"></div>
      
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Animated floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-pink/30 rounded-full blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-32 right-10 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl animate-float-slow opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main heading with staggered animation */}
        <div className="mb-4 animate-fade-in-scale">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-neon-cyan border border-neon-cyan/50 rounded-full backdrop-blur-sm neon-glow">
            ✨ Bienvenido a MDK GAME TEAM
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 animate-slide-up neon-text">
          MDK GAME TEAM
        </h1>
        
        <p className="text-2xl md:text-3xl text-neon-cyan mb-8 animate-slide-up font-light tracking-widest neon-text">
          #MDKForce
        </p>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up mb-12">
          Creando contenido único y de calidad para Minecraft
        </p>

        {/* CTA Button */}
        <div className="flex justify-center gap-4 mb-12 animate-slide-up">
          <a
            href="/#proyectos"
            className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-cyan text-white font-bold rounded-lg hover-lift transition-all duration-300"
          >
            Explorar Proyectos
          </a>
          <a
            href="/launcher"
            className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/10 transition-all duration-300"
          >
            Descargar Launcher
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 hover-glow">
          <div className="w-1.5 h-3 bg-gradient-to-b from-neon-pink to-neon-cyan rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
