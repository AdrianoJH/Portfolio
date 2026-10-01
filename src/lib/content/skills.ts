import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "styled-components", "SASS", "HTML", "CSS"],
  },
  {
    key: "backend",
    items: ["Node.js", "Express", "Prisma", "Python", "Flask", "REST APIs"],
  },
  {
    key: "cloud",
    items: ["AWS", "Lambda", "S3", "DynamoDB", "Serverless", "Docker", "CI/CD", "Git"],
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
    items: ["Scrum", "Kanban", "Clean Code", "Code Review"],
  },
];
