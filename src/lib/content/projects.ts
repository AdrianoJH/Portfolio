import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "chronomax",
    title: "ChronoMAX · Plataforma RunKing",
    year: "2024 — Atual",
    highlight: true,
    featured: true,
    image: "/images/chronomax.svg",
    tech: ["Next.js", "TypeScript", "Node.js", "AWS Lambda", "Flutter", "Python"],
    links: { demo: "https://runking.com.br" },
    summary: {
      pt: "Plataforma SaaS de cronometragem e gestão de eventos de corrida, do cadastro ao resultado em tempo real.",
      en: "SaaS platform for race timing and event management — from sign-up to real-time results.",
      es: "Plataforma SaaS de cronometraje y gestión de eventos de carrera, del registro al resultado en tiempo real.",
    },
    description: {
      pt: [
        "A RunKing/ChronoMAX é um ecossistema com cerca de 30 serviços que cobre todo o ciclo de um evento de corrida: inscrição, pagamento, credenciamento, cronometragem por chip, rastreamento GPS ao vivo e resultados.",
        "Atuo em toda a stack: interfaces em React/Next.js, aplicativo em Flutter e serviços de back-end em Node.js/TypeScript e Python sobre arquitetura serverless na AWS (Lambda, S3, DynamoDB, SQS, entre outros).",
        "Também integro pagamentos (PIX, cartão, split), notificações (WhatsApp, push) e recursos de IA generativa, sempre com foco em confiabilidade e tempo real.",
      ],
      en: [
        "RunKing/ChronoMAX is an ecosystem of ~30 services covering the full lifecycle of a running event: registration, payment, check-in, chip timing, live GPS tracking and results.",
        "I work across the whole stack: React/Next.js interfaces, a Flutter app and Node.js/TypeScript and Python back-end services on a serverless AWS architecture (Lambda, S3, DynamoDB, SQS and more).",
        "I also integrate payments (PIX, card, split), notifications (WhatsApp, push) and generative-AI features, always focused on reliability and real time.",
      ],
      es: [
        "RunKing/ChronoMAX es un ecosistema de ~30 servicios que cubre todo el ciclo de un evento de carrera: inscripción, pago, acreditación, cronometraje por chip, rastreo GPS en vivo y resultados.",
        "Trabajo en todo el stack: interfaces en React/Next.js, una app en Flutter y servicios back-end en Node.js/TypeScript y Python sobre arquitectura serverless en AWS (Lambda, S3, DynamoDB, SQS, entre otros).",
        "También integro pagos (PIX, tarjeta, split), notificaciones (WhatsApp, push) y funciones de IA generativa, siempre enfocado en la fiabilidad y el tiempo real.",
      ],
    },
    role: {
      pt: "Desenvolvedor Full Stack — front-end, mobile, back-end e integrações.",
      en: "Full Stack Developer — front-end, mobile, back-end and integrations.",
      es: "Desarrollador Full Stack — front-end, móvil, back-end e integraciones.",
    },
  },
  {
    slug: "dialogue",
    title: "Dialogue",
    year: "2023",
    featured: true,
    image: "/images/dialogue.png",
    tech: ["React", "Firebase", "styled-components"],
    links: { demo: "https://chat-dialogue.vercel.app/" },
    summary: {
      pt: "Aplicativo de chat em tempo real com autenticação e mensagens instantâneas.",
      en: "Real-time chat app with authentication and instant messaging.",
      es: "Aplicación de chat en tiempo real con autenticación y mensajes instantáneos.",
    },
    description: {
      pt: [
        "Chat web construído em React com Firebase (Auth e Realtime Database) e estilização em styled-components.",
        "Login, lista de conversas e troca de mensagens em tempo real, com interface responsiva.",
      ],
      en: [
        "Web chat built with React and Firebase (Auth and Realtime Database), styled with styled-components.",
        "Login, conversation list and real-time messaging with a responsive interface.",
      ],
      es: [
        "Chat web construido con React y Firebase (Auth y Realtime Database), con estilos en styled-components.",
        "Inicio de sesión, lista de conversaciones y mensajería en tiempo real con interfaz responsiva.",
      ],
    },
  },
  {
    slug: "devquiz",
    title: "DevQuiz",
    year: "2022",
    featured: true,
    image: "/images/devquiz.jpeg",
    tech: ["React", "JavaScript", "CSS"],
    links: { demo: "https://dev-quiz-drab.vercel.app/" },
    summary: {
      pt: "Quiz interativo de múltipla escolha sobre Front-end, com pontuação.",
      en: "Interactive multiple-choice Front-end quiz with scoring.",
      es: "Quiz interactivo de opción múltiple sobre Front-end, con puntuación.",
    },
    description: {
      pt: [
        "Quiz de Front-end feito em React, com perguntas de múltipla escolha, controle de estado das respostas e resultado final.",
      ],
      en: [
        "Front-end quiz built in React, with multiple-choice questions, answer state handling and a final score.",
      ],
      es: [
        "Quiz de Front-end hecho en React, con preguntas de opción múltiple, control de estado de las respuestas y resultado final.",
      ],
    },
  },
  {
    slug: "criptomoedas",
    title: "App Criptomoedas",
    year: "2023",
    image: "/images/cripto.jpg",
    tech: ["Flutter", "Dart", "REST API"],
    links: { repo: "https://github.com/AdrianoJH/App_Criptomoedas" },
    summary: {
      pt: "App mobile para consultar cotações de criptomoedas consumindo a API da Coinbase.",
      en: "Mobile app to track crypto prices, consuming the Coinbase API.",
      es: "App móvil para consultar cotizaciones de criptomonedas consumiendo la API de Coinbase.",
    },
    description: {
      pt: [
        "Aplicativo em Flutter/Dart que consome a API da Coinbase para exibir cotações e permitir simulações de compra.",
      ],
      en: [
        "Flutter/Dart app consuming the Coinbase API to show prices and allow purchase simulations.",
      ],
      es: [
        "Aplicación en Flutter/Dart que consume la API de Coinbase para mostrar cotizaciones y permitir simulaciones de compra.",
      ],
    },
  },
  {
    slug: "nurses-help",
    title: "Nurse's Help",
    year: "2022",
    image: "/images/nurses.jpeg",
    tech: ["React Native", "JavaScript"],
    links: { repo: "https://github.com/AdrianoJH/Nurse-s-Help" },
    summary: {
      pt: "App mobile para encontrar profissionais de enfermagem.",
      en: "Mobile app to find nursing professionals.",
      es: "App móvil para encontrar profesionales de enfermería.",
    },
    description: {
      pt: [
        "Aplicativo mobile em React Native para conectar pacientes a profissionais de enfermagem.",
      ],
      en: [
        "React Native mobile app connecting patients to nursing professionals.",
      ],
      es: [
        "Aplicación móvil en React Native para conectar pacientes con profesionales de enfermería.",
      ],
    },
  },
  {
    slug: "mf-fernandes",
    title: "MF Fernande's",
    year: "2023",
    image: "/images/mf.jpeg",
    tech: ["React", "Vite", "styled-components", "EmailJS"],
    links: { demo: "https://mf-fernandes.netlify.app/" },
    summary: {
      pt: "Site institucional de estética automotiva, com formulário de contato.",
      en: "Marketing website for an auto detailing business, with a contact form.",
      es: "Sitio institucional de estética automotriz, con formulario de contacto.",
    },
    description: {
      pt: [
        "Site responsivo em React + Vite, estilizado com styled-components e integração de e-mail via EmailJS.",
      ],
      en: [
        "Responsive site in React + Vite, styled with styled-components and email integration via EmailJS.",
      ],
      es: [
        "Sitio responsivo en React + Vite, estilizado con styled-components e integración de correo vía EmailJS.",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
