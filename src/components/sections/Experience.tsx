'use client'
import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'

interface Achievement {
  icon: string
  text: string
}

const experiences = [
  {
    roleKey: 'experience.win.role',
    companyKey: 'experience.win.company',
    periodKey: 'experience.win.period',
    achievementsKey: 'experience.win.achievements',
  },
  {
    roleKey: 'experience.artur.role',
    companyKey: 'experience.artur.company',
    periodKey: 'experience.artur.period',
    achievementsKey: 'experience.artur.achievements',
  },
]

export const Experience = () => {
  const { t } = useI18n()

  const getAchievements = (key: string): Achievement[] => {
    const achievements = t(key, { returnObjects: true })
    return Array.isArray(achievements) ? achievements : []
  }

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('sections.experience.title')}
          </h2>
          <p className="text-[rgb(var(--muted))]">{t('sections.experience.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-16 border-l-2 border-[rgb(var(--highlight))] last:pb-0"
            >
              <div 
                className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-[rgb(var(--highlight))] rounded-full" 
              />
              <div 
                className="bg-[rgb(var(--card-background))] border border-[rgb(var(--card-border))] rounded-lg p-6 hover:scale-[1.02] transition-all"
              >
                <h3 className="text-2xl font-bold mb-2">{t(exp.roleKey)}</h3>
                <p className="text-[rgb(var(--highlight))] mb-4">
                  {t(exp.companyKey)} | {t(exp.periodKey)}
                </p>
                <ul className="space-y-4">
                  {getAchievements(exp.achievementsKey).map((achievement, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="text-[rgb(var(--muted))]">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
