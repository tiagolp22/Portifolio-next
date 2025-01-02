'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Developpeur Full Stack",
    company: "Win Technologie",
    period: "aout 2024 - Present",
    achievements: [
      { icon: "📊", text: "Augmentation de 25% de l'engagement utilisateur" },
      { icon: "⚡", text: "Reduction de 30% du temps de reponse API" },
      { icon: "💻", text: "Optimisation MongoDB avec 40% moins de requetes" }
    ]
  },
  {
    role: "Developpeur Back-End (Stage)",
    company: "Artur.Art",
    period: "juillet 2024 - septembre 2024",
    achievements: [
      { icon: "📈", text: "Amelioration de 40% du taux de conversion" },
      { icon: "🤝", text: "Attraction de +100 artistes locaux" },
      { icon: "📱", text: "Augmentation de 35% de l'engagement" }
    ]
  }
]

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400">Mon parcours professionnel</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-16 border-l-2 border-blue-500 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-blue-500 rounded-full" />
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <p className="text-blue-400 mb-4">
                  {exp.company} | {exp.period}
                </p>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="text-gray-300">{achievement.text}</span>
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