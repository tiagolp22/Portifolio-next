'use client'
import { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/contexts/I18nContext'
import { skillCategories } from '@/constants/skills'
import type { SkillCategory, Skill } from '@/types/skill'

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2 }
}

interface SkillCardProps {
  skill: Skill
  category: string
  t: (key: string) => string
}

const SkillCard = memo(({ skill, category, t }: SkillCardProps) => {
  const Icon = skill.icon
  
  return (
    <div className="group relative">
      <div className="bg-[rgb(var(--card-background))] rounded-xl p-4 border border-[rgb(var(--card-border))] h-full">
        <div className="bg-[rgb(var(--card-background))] rounded-lg p-3 mb-4 mx-auto flex items-center justify-center">
          <Icon className="w-10 h-10 text-[rgb(var(--highlight))]" />
        </div>

        <h3 className="text-lg font-bold text-center mb-2">
          {skill.name}
        </h3>

        <div className="flex flex-wrap gap-2 justify-center">
          {skill.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-sm ${
                idx === 1
                  ? 'bg-[rgb(var(--highlight))] text-white'
                  : 'bg-[rgb(var(--card-background))] border border-[rgb(var(--card-border))]'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[rgb(var(--highlight))] rounded-xl transition-opacity duration-200 p-4 flex items-center justify-center">
          <p className="text-white text-center text-sm">
            {t(`sections.skills.categories.${category}.${skill.name.toLowerCase().replace(/[/.]/g, '').replace(/\s+/g, '')}.description`)}
          </p>
        </div>
      </div>
    </div>
  )
})
SkillCard.displayName = 'SkillCard'

interface CategoryButtonProps {
  category: SkillCategory
  isActive: boolean
  onClick: () => void
  t: (key: string) => string
}

const CategoryButton = memo(({ category, isActive, onClick, t }: CategoryButtonProps) => {
  const Icon = category.icon
  
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-3 px-6 py-3 rounded-lg
        transition-all duration-200 ease-in-out
        w-full min-w-[220px] h-[52px]
        ${isActive 
          ? 'bg-[rgb(var(--highlight))] text-white shadow-lg scale-[1.02]'
          : 'bg-[rgb(var(--card-background))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--button-hover))] border border-[rgb(var(--card-border))]'
        }
      `}
    >
      <Icon 
        className={`w-5 h-5 flex-shrink-0 ${
          isActive 
            ? 'text-white' 
            : 'text-[rgb(var(--highlight))]'
        }`} 
      />
      <span className="whitespace-nowrap text-base font-medium">
        {t(`sections.skills.${category.id}`)}
      </span>
    </button>
  )
})
CategoryButton.displayName = 'CategoryButton'

export const Skills = () => {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState('frontend')

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId)
  }, [])

  return (
    <section id="competences" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('sections.skills.title')}
          </h2>
          <p className="text-[rgb(var(--muted))]">
            {t('sections.skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto mb-12">
          {skillCategories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
              t={t}
            />
          ))}
        </div>

        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          {...fadeInUp}
        >
          {skillCategories
            .find(cat => cat.id === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                {...fadeInUp}
                transition={{ 
                  duration: 0.2,
                  delay: Math.min(index * 0.05, 0.2)
                }}
              >
                <SkillCard 
                  skill={skill} 
                  category={activeCategory}
                  t={t}
                />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}