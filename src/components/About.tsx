import React from 'react';
import SectionCard from './ui/SectionCard';
import aboutImg from '../acerca de1.png';

interface AboutProps {
  onShowMore?: () => void;
}

function About({ onShowMore }: AboutProps) {
  return (
    <SectionCard
      id="equipo"
      title={
        <>
          Conoce a:
          <br />
          <span className="text-neon-pink">MDK Game Team</span>
        </>
      }
      image={aboutImg}
      imageAlt="Gaming Team"
    >
      <p className="mb-4">Nos complace darles la bienvenida al equipo de <span className="text-neon-cyan font-semibold">MDK</span>, un grupo apasionado dedicado al desarrollo de contenido en Minecraft para creadores y la comunidad. 🌟</p>
      <p className="mb-4">Con una amplia experiencia en la configuración de plugins, mods y cinemáticas, nos enorgullece ofrecer un contenido único y de calidad.</p>
      {onShowMore && (
        <button
          onClick={onShowMore}
          className="mt-6 bg-neon-cyan hover:bg-neon-pink text-white px-5 py-2 rounded-full font-semibold transition-colors"
        >
          Ver más
        </button>
      )}
    </SectionCard>
  );
}

export default React.memo(About);
