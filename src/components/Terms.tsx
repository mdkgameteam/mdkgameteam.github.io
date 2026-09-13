import React from 'react';
import SectionCard from './ui/SectionCard';
import { useLanguage } from '../context/LanguageContext';

function Terms() {
  const { t } = useLanguage();

  return (
    <SectionCard title={t.terms.title}>
      <div className="max-w-4xl mx-auto text-gray-300">
        <p className="mb-6">{t.terms.intro}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">{t.terms.s1Title}</h3>
        <p className="mb-4">{t.terms.s1Text}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">{t.terms.s2Title}</h3>
        <p className="mb-4">{t.terms.s2Text}</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>{t.terms.s2Event}</li>
          <li>{t.terms.s2Series}</li>
          <li>{t.terms.s2Tournament}</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">{t.terms.s3Title}</h3>
        <p className="mb-4">{t.terms.s3Text}</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>{t.terms.s3Forge}</li>
          <li>{t.terms.s3Mojang}</li>
          <li>{t.terms.s3Perf}</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">{t.terms.s4Title}</h3>
        <p className="mb-4">{t.terms.s4Text}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">{t.terms.s5Title}</h3>
        <p className="mb-4">{t.terms.s5Text}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">{t.terms.s6Title}</h3>
        <p className="mb-6">{t.terms.s6Text}</p>
      </div>
    </SectionCard>
  );
}

export default React.memo(Terms);
