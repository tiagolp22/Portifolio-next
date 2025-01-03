'use client'
import { useState } from 'react'
import { useI18n, LANGUAGES, type Locale } from '@/contexts/I18nContext'
import { ChevronDown } from 'lucide-react'

export const LanguageSelector = () => {
  const { locale, setLocale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[rgb(var(--button-hover))] transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Selected language: ${LANGUAGES[locale].name}`}
      >
        <span className="text-lg" aria-hidden="true">
          {LANGUAGES[locale].flag}
        </span>
        <span className="hidden sm:block">{LANGUAGES[locale].code}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 py-2 w-48 bg-[rgb(var(--card-background))] 
                     border border-[rgb(var(--card-border))] rounded-lg shadow-lg"
          role="listbox"
          aria-label="Choose language"
        >
          {(Object.entries(LANGUAGES) as [Locale, typeof LANGUAGES.fr][]).map(
            ([code, language]) => (
              <button
                key={code}
                onClick={() => {
                  setLocale(code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-left flex items-center gap-3 
                           hover:bg-[rgb(var(--button-hover))] transition-colors
                           ${locale === code ? 'text-[rgb(var(--highlight))]' : ''}`}
                role="option"
                aria-selected={locale === code}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}
