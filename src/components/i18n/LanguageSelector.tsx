'use client'
import { useI18n } from '@/contexts/I18nContext'

export const LanguageSelector = () => {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLocale('fr')}
        className={`px-2 py-1 rounded ${
          locale === 'fr' 
            ? 'bg-[rgb(var(--highlight))] text-white' 
            : 'hover:bg-[rgb(var(--button-hover))]'
        }`}
        aria-label="Changer la langue en français"
      >
        FR
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-2 py-1 rounded ${
          locale === 'en' 
            ? 'bg-[rgb(var(--highlight))] text-white' 
            : 'hover:bg-[rgb(var(--button-hover))]'
        }`}
        aria-label="Change language to English"
      >
        EN
      </button>
    </div>
  )
}
