'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/contexts/I18nContext';
import { skillCategories } from '@/constants/skills';

export const Skills = () => {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setActiveCategory('frontend');
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[rgb(var(--foreground))]">
            {t('sections.skills.title')}
          </h2>
          <p className="text-[rgb(var(--muted))]">
            {t('sections.skills.subtitle')}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center justify-center gap-3 px-6 py-3 rounded-lg w-full
                    transition-all duration-200 ease-in-out min-w-[200px]
                    ${activeCategory === category.id 
                      ? 'bg-[rgb(var(--highlight))] text-white shadow-lg scale-[1.02]'
                      : 'bg-[rgb(var(--card-background))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--button-hover))] border border-[rgb(var(--card-border))]'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${activeCategory === category.id ? 'text-white' : 'text-[rgb(var(--highlight))]'}`} />
                  <span className="whitespace-nowrap">{t(`sections.skills.${category.id}`)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {skillCategories
                  .find(cat => cat.id === activeCategory)
                  ?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-[rgb(var(--card-background))] rounded-xl p-4 border border-[rgb(var(--card-border))] h-full">
                        <div className="bg-[rgb(var(--card-background))] rounded-lg p-3 mb-4 mx-auto flex items-center justify-center">
                          <skill.icon className="w-10 h-10 text-[rgb(var(--highlight))]" />
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
                            {t(getSkillTranslationKey(activeCategory, skill.name))}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const getSkillTranslationKey = (category: string, skillName: string) => {
  const normalizedSkillName = skillName
    .toLowerCase()
    .replace(/[/.]/g, '')
    .replace(/\s+/g, '');
  return `sections.skills.categories.${category}.${normalizedSkillName}.description`;
};