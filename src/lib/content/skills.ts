import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Redux", "styled-components", "Tailwind CSS", "Material-UI", "Three.js", "Vite", "SASS", "HTML", "CSS"],
  },
  {
    key: "backend",
    items: ["Node.js", "Express", "Prisma", "Python", "Flask", "Socket.io", "REST APIs"],
  },
  {
    key: "cloud",
    items: ["AWS", "Lambda", "S3", "DynamoDB", "Serverless", "Supabase", "Vercel", "Docker", "CI/CD", "Git"],
  },
  {
    key: "mobile",
    items: ["Flutter", "Dart", "React Native"],
  },
  {
    key: "data",
    items: ["MySQL", "PostgreSQL", "Firebase", "OpenSearch"],
  },
  {
    key: "practices",
    items: ["Scrum", "Kanban", "Clean Code", "Code Review", "PWA", "SEO"],
  },
];
