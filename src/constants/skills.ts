import { 
  Blocks, 
  Terminal, 
  Database, 
  TestTube,
  Code,
  FileCode,
  Globe,
  Layers,
  Server,
  Bot,
  Cloud,
  Container,
  Shield,
  Workflow,
  Binary
} from 'lucide-react';
import type { SkillCategory } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    titleKey: 'sections.skills.frontend',
    icon: Blocks,
    skills: [
      {
        name: 'React',
        icon: Blocks,
        description: 'Advanced proficiency in building scalable React applications with modern practices and performance optimization',
        tags: ['Components', 'Hooks', 'Redux'],
        gradient: {
          from: 'from-blue-500',
          to: 'to-purple-500'
        }
      },
      {
        name: 'TypeScript',
        icon: FileCode,
        description: 'Strong typing and interface design for robust application development',
        tags: ['Types', 'Interfaces', 'Generics'],
        gradient: {
          from: 'from-blue-400',
          to: 'to-blue-600'
        }
      },
      {
        name: 'Next.js',
        icon: Globe,
        description: 'Server-side rendering and optimized React applications',
        tags: ['SSR', 'API Routes', 'App Router'],
        gradient: {
          from: 'from-gray-600',
          to: 'to-gray-900'
        }
      },
      {
        name: 'Angular',
        icon: Layers,
        description: 'Building robust enterprise applications with Angular ecosystem',
        tags: ['Components', 'Services', 'RxJS'],
        gradient: {
          from: 'from-red-500',
          to: 'to-red-700'
        }
      }
    ]
  },
  {
    id: 'backend',
    titleKey: 'sections.skills.backend',
    icon: Terminal,
    skills: [
      {
        name: 'Node.js',
        icon: Server,
        description: 'Building scalable server-side applications and microservices',
        tags: ['Express', 'REST APIs', 'GraphQL'],
        gradient: {
          from: 'from-green-500',
          to: 'to-green-700'
        }
      },
      {
        name: 'PHP/Laravel',
        icon: Code,
        description: 'Developing robust web applications with modern PHP frameworks',
        tags: ['MVC', 'Eloquent', 'Blade'],
        gradient: {
          from: 'from-purple-500',
          to: 'to-purple-700'
        }
      },
      {
        name: 'API Design',
        icon: Cloud,
        description: 'Creating and maintaining scalable RESTful and GraphQL APIs',
        tags: ['REST', 'GraphQL', 'Swagger'],
        gradient: {
          from: 'from-blue-500',
          to: 'to-indigo-700'
        }
      },
      {
        name: 'Microservices',
        icon: Bot,
        description: 'Designing and implementing microservices architecture',
        tags: ['Docker', 'Communication', 'Scaling'],
        gradient: {
          from: 'from-indigo-500',
          to: 'to-indigo-800'
        }
      }
    ]
  },
  {
    id: 'database',
    titleKey: 'sections.skills.database',
    icon: Database,
    skills: [
      {
        name: 'MongoDB',
        icon: Database,
        description: 'NoSQL database design and optimization with MongoDB',
        tags: ['Aggregation', 'Indexing', 'Atlas'],
        gradient: {
          from: 'from-green-500',
          to: 'to-green-700'
        }
      },
      {
        name: 'PostgreSQL',
        icon: Database,
        description: 'Advanced SQL database management and optimization',
        tags: ['Queries', 'Performance', 'Indexing'],
        gradient: {
          from: 'from-blue-500',
          to: 'to-blue-700'
        }
      },
      {
        name: 'Redis',
        icon: Binary,
        description: 'In-memory data structure store for caching and real-time applications',
        tags: ['Caching', 'Pub/Sub', 'Sessions'],
        gradient: {
          from: 'from-red-500',
          to: 'to-red-700'
        }
      },
      {
        name: 'Docker',
        icon: Container,
        description: 'Containerization and orchestration of applications',
        tags: ['Containers', 'Compose', 'CI/CD'],
        gradient: {
          from: 'from-blue-400',
          to: 'to-blue-600'
        }
      }
    ]
  },
  {
    id: 'testing',
    titleKey: 'sections.skills.testing',
    icon: TestTube,
    skills: [
      {
        name: 'Jest',
        icon: TestTube,
        description: 'Unit and integration testing with Jest',
        tags: ['Unit Tests', 'Integration', 'Mocking'],
        gradient: {
          from: 'from-red-500',
          to: 'to-red-700'
        }
      },
      {
        name: 'Testing Library',
        icon: Workflow,
        description: 'Component testing with React Testing Library',
        tags: ['Component', 'Integration', 'E2E'],
        gradient: {
          from: 'from-red-400',
          to: 'to-red-600'
        }
      },
      {
        name: 'Cypress',
        icon: Bot,
        description: 'End-to-end testing and component testing',
        tags: ['E2E', 'Component', 'Integration'],
        gradient: {
          from: 'from-green-500',
          to: 'to-green-700'
        }
      },
      {
        name: 'Security',
        icon: Shield,
        description: 'Application security and best practices',
        tags: ['OWASP', 'Auth', 'Testing'],
        gradient: {
          from: 'from-slate-500',
          to: 'to-slate-700'
        }
      }
    ]
  }
];
