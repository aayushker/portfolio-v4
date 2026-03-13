export interface Skill {
  name: string;
  level: number;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  description: string;
  highlights: string[];
  slug: string;
}

export interface ProjectEntry {
  title: string;
  type: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  slug: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export type SectionId =
  | "about"
  | "experience"
  | "projects"
  | "expertise"
  | "contact"
  | "resume";
