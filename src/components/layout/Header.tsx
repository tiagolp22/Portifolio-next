'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '#competences', label: 'Compétences' },
    { href: '#projets', label: 'Projets' },
    { href: '#experience', label: 'Expérience' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-primary-light dark:text-primary-dark"
          >
            TB
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
