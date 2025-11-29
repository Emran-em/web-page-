export interface Skill {
  name: string;
  category: 'Cloud' | 'Containerization' | 'IaC' | 'CI/CD' | 'OS' | 'Monitoring';
  iconName?: string; 
  description?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CONTACT = 'contact'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}