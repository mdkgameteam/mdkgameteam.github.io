import React from 'react';
import SectionCard from './ui/SectionCard';
import aboutImg from '../acerca_de1.png';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onShowMore?: () => void;
}

function About({ onShowMore }: AboutProps) {
  const { t } = useLanguage();

  return (
    <SectionCard
      id="equipo"
      title={
        <>
          {t.about.titlePrefix}
          <br />
          <span className="text-neon-pink">{t.about.teamName}</span>
        </>
      }
      image={aboutImg}
      imageAlt="Gaming Team"
    >
      <p className="mb-4">{t.about.p1}</p>
      <p className="mb-4">{t.about.p2}</p>
      {onShowMore && (
        <button
          onClick={onShowMore}
          className="mt-6 bg-neon-cyan hover:bg-neon-pink text-white px-5 py-2 rounded-full font-semibold transition-colors"
        >
          {t.about.readMore}
        </button>
      )}
    </SectionCard>
  );
}

export default React.memo(About);