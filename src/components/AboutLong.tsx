import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function AboutLong() {
  const { t } = useLanguage();

  return (
    <div className="prose prose-invert text-gray-300">
      <h2 className="border-l-4 border-neon-pink pl-6 text-2xl font-extrabold">
        {t.aboutLong.title}
      </h2>
      <p>{t.aboutLong.p1}</p>
      <p>{t.aboutLong.p2}</p>
      <p>{t.aboutLong.p3}</p>
      <h3>{t.aboutLong.historyTitle}</h3>
      <p>{t.aboutLong.historyP1}</p>
      <p>{t.aboutLong.historyP2}</p>
    </div>
  );
}

export default React.memo(AboutLong);
