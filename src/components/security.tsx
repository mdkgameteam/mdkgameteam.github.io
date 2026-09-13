import React from 'react';
import SectionCard from './ui/SectionCard';
import { useLanguage } from '../context/LanguageContext';

function Security() {
  const { t } = useLanguage();

  return (
    <SectionCard title={t.security.title}>
      <div className="max-w-4xl mx-auto text-gray-300">
        <p className="mb-4">{t.security.p1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">{t.security.h2}</h3>
        <p className="mb-4">{t.security.p2}</p>

        <p className="mb-6 font-semibold">{t.security.p3}</p>
      </div>
    </SectionCard>
  );
}

export default React.memo(Security);
