'use client'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useI18n } from '@/contexts/I18nContext'

export const Hero = () => {
  const { t } = useI18n()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t('hero.name')}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-[rgb(var(--foreground))]">
          {t('hero.title')}
        </h2>
        <p className="text-[rgb(var(--muted))] max-w-2xl mx-auto mb-12">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta.projects')}
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta.contact')}
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-[rgb(var(--muted))]" />
      </motion.div>
    </section>
  )
}
