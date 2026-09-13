import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { translations, TranslationSchema } from '../i18n/translations';

export type Language = 'es' | 'en';
export type DeviceOS = 'windows' | 'mac' | 'linux' | 'android' | 'ios' | 'unknown';

export interface DeviceInfo {
  os: DeviceOS;
  osName: string;
  isMobile: boolean;
  recommendedPlatform: 'windows' | 'mac' | 'linux' | null;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
  device: DeviceInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SPANISH_TIMEZONES = /Madrid|Ceuta|Canary|Bogota|Buenos_Aires|Cordoba|Catamarca|Jujuy|Mendoza|Santiago|Lima|Caracas|Mexico_City|Cancun|Merida|Monterrey|Mazatlan|Chihuahua|Hermosillo|Tijuana|Montevideo|Guayaquil|Galapagos|La_Paz|Asuncion|Costa_Rica|Panama|Guatemala|Tegucigalpa|Managua|El_Salvador|Havana|Santo_Domingo|Puerto_Rico/i;

function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  // 1. Manual user override stored in localStorage
  try {
    const saved = localStorage.getItem('mdk_lang');
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
  } catch (e) {
    // localStorage might be unavailable or restricted
  }

  // 2. Check browser language preferences (e.g. en-US, es-ES, es-419)
  const navLanguages = navigator.languages || [navigator.language || ''];
  const primaryLang = (navLanguages[0] || navigator.language || '').toLowerCase();

  if (primaryLang.startsWith('es')) {
    return 'es';
  }

  if (primaryLang.startsWith('en')) {
    return 'en';
  }

  // 3. Fallback: check device timezone
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (SPANISH_TIMEZONES.test(tz)) {
      return 'es';
    }
  } catch (e) {
    // ignore
  }

  // Default international visitors (US, EU, global) to English so they don't bounce
  return 'en';
}

function detectDevice(): DeviceInfo {
  if (typeof window === 'undefined') {
    return {
      os: 'unknown',
      osName: 'Desktop',
      isMobile: false,
      recommendedPlatform: 'windows',
    };
  }

  const ua = navigator.userAgent || '';
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } })?.userAgentData?.platform || navigator.platform || '';

  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isMobile = isAndroid || isIOS || /Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  let os: DeviceOS = 'unknown';
  let osName = 'Desktop';
  let recommendedPlatform: 'windows' | 'mac' | 'linux' | null = null;

  if (isAndroid) {
    os = 'android';
    osName = 'Android';
  } else if (isIOS) {
    os = 'ios';
    osName = 'iOS';
  } else if (/Win/i.test(platform) || /Windows/i.test(ua)) {
    os = 'windows';
    osName = 'Windows';
    recommendedPlatform = 'windows';
  } else if (/Mac/i.test(platform) || /Macintosh|Mac OS X/i.test(ua)) {
    os = 'mac';
    osName = 'macOS';
    recommendedPlatform = 'mac';
  } else if (/Linux/i.test(platform) || /Linux/i.test(ua)) {
    os = 'linux';
    osName = 'Linux';
    recommendedPlatform = 'linux';
  }

  return {
    os,
    osName,
    isMobile,
    recommendedPlatform,
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectInitialLanguage());
  const device = useMemo(() => detectDevice(), []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('mdk_lang', lang);
    } catch (e) {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
      device,
    }),
    [language, device]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
