'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Code, Server, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'

interface Skill {
  name: string
  level: string
  description: string
}

interface CategoryData {
  title: string
  skills: Skill[]
}

interface CategorySkills {
  title: string
  skills: Array<{
    name: string
    level: string
    description: string
  }>
}

export const Skills = () => {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState('frontend')

  const getCategoryData = (key: string): CategoryData | null => {
    try {
      const title = t<string>(`sections.skills.categories.${key}.title`)
      const data = t<CategorySkills>(`sections.skills.categories.${key}`, { returnObjects: true })
      
      if (title && data.skills?.length > 0) {
        return {
          title,
          skills: data.skills.map(skill => ({
            name: skill.name || '',
            level: skill.level || '',
            description: skill.description || ''
          }))
        }
      }
      
      return null
    } catch (error) {
      console.error(`Error loading data for ${key}:`, error)
      return null
    }
  }

  const categories = {
    frontend: {
      icon: <Code className="w-6 h-6" />,
      data: getCategoryData('frontend')
    },
    backend: {
      icon: <Server className="w-6 h-6" />,
      data: getCategoryData('backend')
    },
    database: {
      icon: <Database className="w-6 h-6" />,
      data: getCategoryData('database')
    }
  }

  const activeCategoryData = categories[activeCategory as keyof typeof categories].data

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t<string>('sections.skills.title')}
          </h2>
          <p className="text-[rgb(var(--muted))]">
            {t<string>('sections.skills.subtitle')}
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeCategory === key
                  ? 'bg-[rgb(var(--highlight))] text-white'
                  : 'border border-[rgb(var(--card-border))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--button-hover))]'
              }`}
            >
              <span
                className={activeCategory === key ? 'text-white' : 'text-[rgb(var(--highlight))]'}
              >
                {category.icon}
              </span>
              <span>{category.data?.title || t<string>('sections.skills.noData')}</span>
            </button>
          ))}
        </div>

        {activeCategoryData?.skills ? (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {activeCategoryData.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:border-[rgb(var(--highlight))] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[rgb(var(--foreground))]">
                        {skill.name}
                      </h3>
                      <span className="text-[rgb(var(--highlight))]">{skill.description}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        skill.level === 'Expert' || skill.level === 'Experto' || skill.level === 'Avancé'
                          ? 'bg-blue-500 text-white'
                          : skill.level === 'Advanced' || skill.level === 'Avanzado' || skill.level === 'Avançado'
                          ? 'bg-blue-400 text-white'
                          : 'bg-blue-300 text-white'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-[rgb(var(--muted))]">
            {t<string>('sections.skills.noData')}
          </p>
        )}
      </div>
    </section>
  )
}
