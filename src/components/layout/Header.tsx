'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageSelector } from '@/components/i18n/LanguageSelector'
import { useI18n } from '@/contexts/I18nContext'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()

  const menuItems = [
    { href: '#competences', label: t('nav.skills') },
    { href: '#projets', label: t('nav.projects') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#contact', label: t('nav.contact') }
  ]

  return (
    <header className="fixed top-0 w-full backdrop-blur-sm z-50 border-b border-[rgb(var(--card-border))]" 
      style={{ backgroundColor: 'rgb(var(--navbar-background))' }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-[rgb(var(--highlight))] hover:opacity-80 transition-opacity"
          >
            Tiago Barros Cavalcanti
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[rgb(var(--foreground))] hover:text-[rgb(var(--highlight))] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />
            <button
              className="hover:bg-[rgb(var(--button-hover))] p-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[rgb(var(--foreground))] hover:text-[rgb(var(--highlight))] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
