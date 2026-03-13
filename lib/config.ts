import type { Skill, NavItem, SkillGroup } from "./types";

export const siteConfig = {
  name: "AAYUSHKER SINGH",
  role: "SOFTWARE DEVELOPER",
  signal: "SIGNAL STABLE",
  email: "hello@aayushker.dev",
  github: "https://github.com/aayushker",
  linkedin: "https://linkedin.com/in/aayushker",
  bio: "Aayushker Singh is a full-stack developer focused on backend systems, generative AI applications, and intelligent data architectures. His work combines scalable engineering with modern AI techniques to build tools that solve real-world developer and product challenges.",
  about:
    "Building intelligent systems at the intersection of backend engineering, algorithms, and generative AI. Focused on crafting scalable architectures and AI-powered tools that bridge complexity with usability.",
  tagline:
    "Crafting intricate code to shape digital innovation and push boundaries.",
};

export const skills: Skill[] = [
  { name: "BACKEND SYSTEMS", level: 9 },
  { name: "GENAI", level: 8 },
  { name: "ALGORITHMS", level: 8 },
  { name: "DATABASE SYSTEMS", level: 7 },
  { name: "SYSTEM DESIGN", level: 7 },
  { name: "DEVOPS", level: 6 },
];

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "expertise", label: "Technical Expertise" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Next.js", "Django", "PostgreSQL", "Node.js", "FastAPI"],
  },
  {
    category: "AI / GenAI",
    skills: ["Embeddings", "Vector Search", "RAG", "LLM APIs", "LangChain"],
  },
  {
    category: "Systems",
    skills: ["Neo4j", "Graph Databases", "Architecture", "Docker", "Redis"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
