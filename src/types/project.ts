export interface Project {
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  image: string;
  type: 'github' | 'demo';
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops?: string[];
  };
  features: string[];
  testing?: {
    types: string[];
    tools: string[];
    methodology: string[];
  };
  metrics: string[];
  github?: string;
  demoUrl?: string;
  customDetails?: {
    role: string;
    contributions: string[];
  };
}
