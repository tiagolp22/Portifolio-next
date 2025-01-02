import { Button } from '@/components/ui/Button'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectDetailsProps {
  project: {
    title: string
    subtitle: string
    description: string
    image: string
    tech: string[]
    features: string[]
    metrics: string[]
    github: string
    demo?: string
  }
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="space-y-6">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-blue-400 mb-4">{project.subtitle}</p>
        <p className="text-gray-300">{project.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Fonctionnalités clés</h3>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Métriques</h3>
          <ul className="space-y-2">
            {project.metrics.map((metric, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Technologies utilisées</h3>
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

      <div className="flex gap-4">
        <Button 
          onClick={() => window.open(project.github)}
        >
          <Github className="w-5 h-5 mr-2" />
          Code source
        </Button>
        {project.demo && (
          <Button 
            variant="outline"
            onClick={() => window.open(project.demo)}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo live
          </Button>
        )}
      </div>
    </div>
  )
}
