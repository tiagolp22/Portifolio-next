'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import frTranslations from '@/locales/fr.json';
import enTranslations from '@/locales/en.json';
import ptTranslations from '@/locales/pt.json';
import esTranslations from '@/locales/es.json';

export type Locale = 'fr' | 'en' | 'pt' | 'es';

export const LANGUAGES = {
  fr: {
    name: 'Francais',
    flag: '🇫🇷',
    code: 'FR',
  },
  en: {
    name: 'English',
    flag: '🇬🇧',
    code: 'EN',
  },
  pt: {
    name: 'Portugues',
    flag: '🇧🇷',
    code: 'PT',
  },
  es: {
    name: 'Espanol',
    flag: '🇪🇸',
    code: 'ES',
  },
} as const;

type TranslationValue = string | Record<string, unknown> | unknown[];

type DeepRecord = {
  [key: string]: TranslationValue | DeepRecord;
};

const translations: Record<Locale, DeepRecord> = {
  fr: frTranslations,
  en: enTranslations,
  pt: ptTranslations,
  es: esTranslations,
};

const detectBrowserLanguage = (): Locale => {
  if (typeof window === 'undefined') return 'en';

  const browserLangs = navigator.languages || [navigator.language];
  
  const langMap: Record<string, Locale> = {
    'pt-BR': 'pt',
    'pt-PT': 'pt',
    'pt': 'pt',
    'en-US': 'en',
    'en-GB': 'en',
    'en': 'en',
    'fr-FR': 'fr',
    'fr': 'fr',
    'es-ES': 'es',
    'es': 'es'
  };

  for (const lang of browserLangs) {
    const shortLang = lang.split('-')[0].toLowerCase();
    if (langMap[lang]) return langMap[lang];
    if (langMap[shortLang]) return langMap[shortLang];
  }

  return 'en';
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(
    key: string,
    params?: { returnObjects?: boolean } & Record<string, unknown>
  ) => T;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: DeepRecord, path: string): TranslationValue | undefined {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (
      current === undefined ||
      current === null ||
      typeof current !== 'object'
    ) {
      return undefined;
    }
    return (current as DeepRecord)[key];
  }, obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    
    if (savedLocale && Object.keys(translations).includes(savedLocale)) {
      handleSetLocale(savedLocale);
    } else {
      const browserLocale = detectBrowserLanguage();
      handleSetLocale(browserLocale);
    }
    
    setIsInitialized(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = <T = string>(
    key: string,
    params?: { returnObjects?: boolean } & Record<string, unknown>
  ): T => {
    const value = getNestedValue(translations[locale], key);

    if (value === undefined) {
      console.warn(`Translation missing: ${key}`);
      return key as T;
    }

    if (params?.returnObjects) {
      return value as T;
    }

    if (typeof value === 'string') {
      const result = params 
        ? value.replace(/{(\w+)}/g, (_, k) => String(params[k] ?? ''))
        : value;
      return result as T;
    }

    return value as T;
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}