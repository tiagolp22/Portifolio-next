'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Modal } from '@/components/ui/Modal'
import { ProjectDetails } from '@/components/projects/ProjectDetails'
import { Card } from '@/components/ui/Card'
import { useI18n } from '@/contexts/I18nContext'

const projects = [
 {
   titleKey: 'projects.quebecar.title',
   subtitleKey: 'projects.quebecar.subtitle', 
   descriptionKey: 'projects.quebecar.description',
   image: '/images/projects/quebecar.home.png',
   techKey: 'projects.quebecar.tech',
   featuresKey: 'projects.quebecar.features',
   metricsKey: 'projects.quebecar.metrics', 
   github: 'https://github.com/tiagolp22/projet-web-2-tiagolp22',
 },
 {
   titleKey: 'projects.solutionnet.title',
   subtitleKey: 'projects.solutionnet.subtitle',
   descriptionKey: 'projects.solutionnet.description', 
   image: '/images/projects/solutionnet.png',
   techKey: 'projects.solutionnet.tech',
   featuresKey: 'projects.solutionnet.features',
   metricsKey: 'projects.solutionnet.metrics',
   github: 'https://github.com/tiagolp22/solution-net',
 },
 {
   titleKey: 'projects.edunova.title',
   subtitleKey: 'projects.edunova.subtitle',
   descriptionKey: 'projects.edunova.description',
   image: '/images/projects/edunova.png', 
   techKey: 'projects.edunova.tech',
   featuresKey: 'projects.edunova.features',
   metricsKey: 'projects.edunova.metrics',
   github: 'https://github.com/tiagolp22/EDUNOVA',
 },
]

export const Projects = () => {
  const { t } = useI18n()
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null)

  const getProjectDetails = (project: typeof projects[0]) => ({
    title: t(project.titleKey),
    subtitle: t(project.subtitleKey),
    description: t(project.descriptionKey),
    image: project.image,
    tech: t(project.techKey, { returnObjects: true }) as unknown as string[],
    features: t(project.featuresKey, { returnObjects: true }) as unknown as string[],
    metrics: t(project.metricsKey, { returnObjects: true }) as unknown as string[],
    github: project.github,
  })

  return (
    <section id="projets" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('sections.projects.title')}
          </h2>
          <p className="text-[rgb(var(--muted))]">
            {t('sections.projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Card className="h-full group">
                <Image 
                  src={project.image}
                  alt={t(project.titleKey)}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[rgb(var(--foreground))]">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-[rgb(var(--highlight))] mb-4">
                    {t(project.subtitleKey)}
                  </p>
                  <p className="text-[rgb(var(--muted))] mb-4">
                    {t(project.descriptionKey)}
                  </p>
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
        {selectedProject && (
          <ProjectDetails project={getProjectDetails(selectedProject)} />
        )}
      </Modal>
    </section>
  )
}
