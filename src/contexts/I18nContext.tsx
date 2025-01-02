'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

type Locale = 'fr' | 'en'
type Translations = typeof fr

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations: Record<Locale, Translations> = { fr, en }

const flattenObject = (obj: any, prefix = ''): Record<string, string> => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : ''
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flattenObject(obj[k], `${pre}${k}`))
    } else {
      acc[`${pre}${k}`] = obj[k]
    }
    return acc
  }, {} as Record<string, string>)
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr')
  const flatTranslations = flattenObject(translations[locale])

  useEffect(() => {
    const browserLocale = navigator.language.split('-')[0] as Locale
    if (['fr', 'en'].includes(browserLocale)) {
      setLocale(browserLocale)
    }
  }, [])

  const t = (key: string) => {
    return flatTranslations[key] || key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
