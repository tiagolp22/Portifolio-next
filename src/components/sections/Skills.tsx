'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Code, Server, Database } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = {
  frontend: {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Development",
    skills: [
      { 
        name: 'React', 
        level: 'Expert', 
        description: 'Performance, Hooks avancés'
      },
      { 
        name: 'TypeScript', 
        level: 'Expert', 
        description: 'Types, Optimisation'
      },
      { 
        name: 'HTML/CSS', 
        level: 'Expert', 
        description: 'Responsive, SASS'
      },
      { 
        name: 'Angular', 
        level: 'Intermédiaire', 
        description: 'Composants, Services'
      }
    ]
  },
  backend: {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    skills: [
      { 
        name: 'Node.js', 
        level: 'Expert', 
        description: 'API REST, Microservices'
      },
      { 
        name: 'Express', 
        level: 'Expert', 
        description: 'Middleware, Security'
      },
      { 
        name: 'PHP/Laravel', 
        level: 'Avancé', 
        description: 'MVC, Eloquent'
      },
      { 
        name: 'Java', 
        level: 'Intermédiaire', 
        description: 'Spring Boot'
      }
    ]
  },
  database: {
    icon: <Database className="w-6 h-6" />,
    title: "Database & DevOps",
    skills: [
      { 
        name: 'MongoDB', 
        level: 'Expert', 
        description: 'Aggregation, Performance'
      },
      { 
        name: 'MySQL/PostgreSQL', 
        level: 'Avancé', 
        description: 'Query Optimization'
      },
      { 
        name: 'Docker', 
        level: 'Avancé', 
        description: 'Containerization'
      },
      { 
        name: 'Redis', 
        level: 'Intermédiaire', 
        description: 'Caching'
      }
    ]
  }
}

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences</h2>
          <p className="text-[rgb(var(--muted))]">
            Expertise technique et technologies maîtrisées
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(skills).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                ${activeCategory === key 
                  ? 'bg-[rgb(var(--highlight))] text-white'
                  : 'border border-[rgb(var(--card-border))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--button-hover))]'
                }
              `}
            >
              <span className={activeCategory === key ? 'text-white' : 'text-[rgb(var(--highlight))]'}>
                {category.icon}
              </span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {skills[activeCategory as keyof typeof skills].skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:border-[rgb(var(--highlight))] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[rgb(var(--foreground))]">
                      {skill.name}
                    </h3>
                    <span className="text-[rgb(var(--highlight))]">
                      {skill.description}
                    </span>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${skill.level === 'Expert' 
                      ? 'bg-blue-500 text-white' 
                      : skill.level === 'Avancé'
                      ? 'bg-blue-400 text-white'
                      : 'bg-blue-300 text-white'}
                  `}>
                    {skill.level}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
