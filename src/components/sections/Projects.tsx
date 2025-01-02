'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from '@/components/ui/Modal'
import { ProjectDetails } from '@/components/projects/ProjectDetails'
import { Card } from '@/components/ui/Card'

const projects = [
  {
    title: 'Québecar',
    subtitle: 'E-commerce Automobile',
    description: 'Plateforme bilingue innovante qui révolutionne l\'achat et la vente de voitures.',
    image: '/api/placeholder/600/400',
    tech: ['Laravel', 'React', 'MySQL', 'Stripe', 'Cloudinary'],
    features: [
      'Architecture microservices scalable',
      'Intégration Stripe sécurisée',
      'Système de gestion média cloud',
      'Interface bilingue (FR/EN)'
    ],
    metrics: [
      'Temps de réponse < 200ms',
      'Conversion +25%',
      'Satisfaction client 4.8/5'
    ],
    github: 'https://github.com/tiagolp22/projet-web-2-tiagolp22'
  },
  {
    title: 'Edunova',
    subtitle: 'Plateforme E-learning',
    description: 'Solution moderne d\'apprentissage en ligne avec fonctionnalités avancées.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
    features: [
      'Architecture événementielle',
      'Streaming video optimisé',
      'Analytics en temps réel',
      'Cache distribué'
    ],
    metrics: [
      'Support 5k+ utilisateurs simultanés',
      'Temps de chargement -40%',
      'Engagement +35%'
    ],
    github: 'https://github.com/tiagolp22/EDUNOVA'
  }
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)

  return (
    <section id="projets" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Phares</h2>
          <p className="text-gray-400">Découvrez mes dernières réalisations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Card className="h-full hover:transform hover:scale-105 transition-all">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-400 mb-4">{project.subtitle}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </section>
  )
}
