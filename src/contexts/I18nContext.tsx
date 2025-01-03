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

export type TranslationValue = string | { [key: string]: TranslationValue } | TranslationValue[];

type DeepRecord = {
  [key: string]: TranslationValue;
};

const translations: Record<Locale, DeepRecord> = {
  fr: frTranslations,
  en: enTranslations,
  pt: ptTranslations,
  es: esTranslations,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(key: string, params?: { returnObjects?: boolean } & Record<string, unknown>) => T;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: DeepRecord, path: string): TranslationValue {
  return path.split('.').reduce((current: TranslationValue, key: string) => {
    if (current === undefined || typeof current !== 'object' || current === null) {
      return undefined as unknown as TranslationValue;
    }
    return (current as Record<string, TranslationValue>)[key];
  }, obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && Object.keys(translations).includes(savedLocale)) {
      handleSetLocale(savedLocale);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = <T = string>(key: string, params?: { returnObjects?: boolean } & Record<string, unknown>): T => {
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
        ? value.replace(/{(\w+)}/g, (_, k) => String(params[k] || ''))
        : value;
      return result as T;
    }

    return value as T;
  };

  const contextValue: I18nContextType = {
    locale,
    setLocale: handleSetLocale,
    t,
  };

  return (
    <I18nContext.Provider value={contextValue}>
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
