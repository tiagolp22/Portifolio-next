'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Code, Server, Database } from 'lucide-react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const categories = {
  frontend: {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Development",
    skills: [
      { name: 'React', level: 'Expert', focus: 'Performance, Hooks avancés' },
      { name: 'TypeScript', level: 'Expert', focus: 'Types, Optimisation' },
      { name: 'HTML/CSS', level: 'Expert', focus: 'Responsive, SASS' },
      { name: 'Angular', level: 'Intermédiaire', focus: 'Composants, Services' }
    ]
  },
  backend: {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    skills: [
      { name: 'Node.js', level: 'Expert', focus: 'API REST, Microservices' },
      { name: 'Express', level: 'Expert', focus: 'Middleware, Security' },
      { name: 'PHP/Laravel', level: 'Avancé', focus: 'MVC, Eloquent' },
      { name: 'Java', level: 'Intermédiaire', focus: 'Spring Boot' }
    ]
  },
  database: {
    icon: <Database className="w-6 h-6" />,
    title: "Database & DevOps",
    skills: [
      { name: 'MongoDB', level: 'Expert', focus: 'Aggregation, Performance' },
      { name: 'MySQL/PostgreSQL', level: 'Avancé', focus: 'Query Optimization' },
      { name: 'Docker', level: 'Avancé', focus: 'Containerization' },
      { name: 'Redis', level: 'Intermédiaire', focus: 'Caching' }
    ]
  }
}

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  return (
    <section id="competences" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences</h2>
          <p className="text-gray-400">Expertise technique et technologies maîtrisées</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeCategory === key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 max-w-4xl mx-auto"
        >
          {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    {skill.level}
                  </span>
                </div>
                <p className="text-gray-400">{skill.focus}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
