import { Button } from '@/components/ui/Button'
import { Github, ExternalLink, Layout, Shield, Database, TestTube } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProjectDetailsProps {
  project: {
    title: string
    subtitle: string
    description: string
    image: string
    type: 'github' | 'demo'
    architecture?: {
      frontend: string[]
      backend: string[]
      database: string[]
      devops?: string[]
    }
    features: string[]
    testing?: {
      types: string[]
      tools: string[]
      methodology: string[]
    }
    security?: string[]
    metrics: string[]
    github?: string
    demoUrl?: string
    customDetails?: {
      role: string
      contributions: string[]
    }
  }
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const isSolutionNet = project.title.includes('SolutionNet')

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="relative rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-blue-300">{project.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-[rgb(var(--muted))]">{project.description}</p>
      </div>

      {/* Architecture */}
      {project.architecture && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Layout className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-2">
              {project.architecture.frontend.map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold">Backend</h3>
            </div>
            <ul className="space-y-2">
              {project.architecture.backend.map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-400">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {project.architecture.database && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold">Database & Security</h3>
              </div>
              <ul className="space-y-2">
                {project.architecture.database.map((tech, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.testing && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <TestTube className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold">Testing & QA</h3>
              </div>
              <ul className="space-y-2">
                {project.testing.types.map((type, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      )}

      {/* Key Features */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-2"
            >
              <span className="text-[rgb(var(--highlight))] mt-1">•</span>
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        {project.metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[rgb(var(--card-background))] p-4 rounded-lg border border-[rgb(var(--card-border))]"
          >
            <p className="text-center text-[rgb(var(--highlight))]">{metric}</p>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        {!isSolutionNet && (
          <Button onClick={() => window.open(project.github)}>
            <Github className="w-5 h-5 mr-2" />
            View Source
          </Button>
        )}
        {isSolutionNet && (
          <Button 
            variant="outline"
            onClick={() => window.open('https://www.solutionnetplus.ca/')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit Website
          </Button>
        )}
      </div>
    </div>
  )
}