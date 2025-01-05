import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  gradient: {
    from: string;
    to: string;
  };
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  icon: LucideIcon;
  skills: Skill[];
}
