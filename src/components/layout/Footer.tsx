'use client'
import { useI18n } from '@/contexts/I18nContext'

export const Footer = () => {
  const { t } = useI18n()
  
  return (
    <footer className="py-8 border-t border-[rgb(var(--card-border))] bg-[rgb(var(--card-background))]">
      <div className="container mx-auto px-4 text-center text-[rgb(var(--muted))]">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  )
}
