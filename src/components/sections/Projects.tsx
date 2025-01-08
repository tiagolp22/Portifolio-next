'use client'
import { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Modal } from '@/components/ui/Modal'
import { ProjectDetails } from '@/components/projects/ProjectDetails'
import { Card } from '@/components/ui/Card'
import { useI18n } from '@/contexts/I18nContext'
import { projects } from '@/constants/projects'
import type { Project } from '@/types/project'

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2 }
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
  t: (key: string) => string
}

const ProjectCard = memo(({ project, onClick, t }: ProjectCardProps) => (
  <Card 
    className="h-full group hover:border-[rgb(var(--highlight))] transition-colors"
    onClick={onClick}
    interactive
  >
    <div className="relative w-full h-48">
      <Image 
        src={project.image}
        alt={t(project.titleKey)}
        fill
        className="object-cover rounded-t-lg"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-[rgb(var(--foreground))]">
        {t(project.titleKey)}
      </h3>
      <p className="text-[rgb(var(--highlight))] mb-4">
        {t(project.subtitleKey)}
      </p>
      <p className="text-[rgb(var(--muted))] line-clamp-3">
        {t(project.descriptionKey)}
      </p>
    </div>
  </Card>
))
ProjectCard.displayName = 'ProjectCard'

export const Projects = () => {
  const { t } = useI18n()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const getProjectDetails = useCallback((project: Project) => ({
    ...project,
    title: t(project.titleKey),
    subtitle: t(project.subtitleKey),
    description: t(project.descriptionKey),
  }), [t])

  return (
    <section id="projets" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('sections.projects.title')}
          </h2>
          <p className="text-[rgb(var(--muted))]">
            {t('sections.projects.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.titleKey}
              variants={fadeInUp}
              className="cursor-pointer"
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
                t={t}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={handleCloseModal}
      >
        {selectedProject && (
          <ProjectDetails 
            project={getProjectDetails(selectedProject)} 
          />
        )}
      </Modal>
    </section>
  )
}