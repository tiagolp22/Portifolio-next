import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    titleKey: 'projects.solutionnet.title',
    subtitleKey: 'projects.solutionnet.subtitle',
    descriptionKey: 'projects.solutionnet.description',
    image: '/images/projects/solutionnet.png',
    type: 'demo',
    architecture: {
      frontend: [
        'HTML5/CSS3',
        'JavaScript (ES6+)',
        'jQuery',
        'Sass',
        'Swiper.js',
        'Tailwind CSS'
      ],
      backend: [
        'Node.js',
        'Express.js',
        'MVC Architecture',
        'RESTful API'
      ],
      database: [
        'MongoDB',
        'Mongoose',
        'Data Validation',
        'Security Middleware'
      ],
      devops: [
        'Docker',
        'CI/CD Pipeline',
        'AWS Deployment'
      ]
    },
    features: [
      'Real-time Appointment Booking System',
      'Automated Time Slot Management',
      'Multilingual Support (FR/EN)',
      'Responsive UI Design',
      'Newsletter System',
      'Blog Integration',
      'Services Management',
      'Automated Email Notifications'
    ],
    testing: {
      types: [
        'Unit Testing',
        'Integration Testing',
        'E2E Testing',
        'Performance Testing'
      ],
      tools: [
        'Jest',
        'Supertest',
        'Cypress'
      ],
      methodology: [
        'TDD',
        'BDD',
        'Regression Testing'
      ]
    },
    metrics: [
      '99.9% Uptime',
      '24/7 Support',
      '+5000 Active Users'
    ],
    demoUrl: 'https://www.solutionnetplus.ca/',
    customDetails: {
      role: 'Front-end Developer at Win Technology',
      contributions: [
        'Developed dynamic JavaScript carousel',
        'Implemented interactive appointment booking system',
        'Created email confirmation system',
        'Integrated multilingual support'
      ]
    }
  },
  {
    titleKey: 'projects.quebecar.title',
    subtitleKey: 'projects.quebecar.subtitle',
    descriptionKey: 'projects.quebecar.description',
    image: '/images/projects/quebecar.home.png',
    type: 'github',
    architecture: {
      frontend: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'i18next'
      ],
      backend: [
        'Laravel',
        'PHP 8',
        'RESTful API',
        'Eloquent ORM'
      ],
      database: [
        'MySQL',
        'Database Migrations',
        'Data Seeding'
      ],
      devops: [
        'GitHub Actions',
        'Docker',
        'Agile/Scrum'
      ]
    },
    features: [
      'Bilingual Interface (EN/FR)',
      'User Authentication & Authorization',
      'Vehicle Listings Management',
      'Secure Payment Processing',
      'Media Management with Cloudinary',
      'PDF Receipt Generation',
      'Advanced Search & Filters'
    ],
    testing: {
      types: [
        'Unit Testing',
        'Feature Testing',
        'Browser Testing'
      ],
      tools: [
        'PHPUnit',
        'Jest',
        'Laravel Dusk'
      ],
      methodology: [
        'TDD',
        'Continuous Integration',
        'Code Review'
      ]
    },
    metrics: [
      'Test Coverage > 80%',
      'Performance Score 95+',
      'Mobile-First Design'
    ],
    github: 'https://github.com/tiagolp22/projet-web-2-tiagolp22'
  },
  {
    titleKey: 'projects.edunova.title',
    subtitleKey: 'projects.edunova.subtitle',
    descriptionKey: 'projects.edunova.description',
    image: '/images/projects/edunova.png',
    type: 'github',
    architecture: {
      frontend: [
        'React',
        'TypeScript',
        'Material-UI',
        'Redux'
      ],
      backend: [
        'Node.js',
        'Express.js',
        'Microservices',
        'Bull Queue'
      ],
      database: [
        'PostgreSQL',
        'Redis',
        'Sequelize ORM'
      ],
      devops: [
        'Docker',
        'AWS Services',
        'CI/CD Pipeline'
      ]
    },
    features: [
      'User Role Management',
      'Course Creation & Management',
      'Video Content Streaming',
      'Payment Processing',
      'Real-time Progress Tracking',
      'Interactive Assessments',
      'Certificate Generation'
    ],
    testing: {
      types: [
        'Unit Testing',
        'Integration Testing',
        'Load Testing'
      ],
      tools: [
        'Jest',
        'Supertest',
        'k6'
      ],
      methodology: [
        'TDD',
        'BDD',
        'Performance Testing'
      ]
    },
    metrics: [
      'Handles 5k+ Concurrent Users',
      'Load Time < 2s',
      'High Availability'
    ],
    github: 'https://github.com/tiagolp22/EDUNOVA'
  }
];
