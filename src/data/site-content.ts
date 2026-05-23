import { Language, LocalizedText } from "@/types/projects";

export interface ExperienceEntry {
  title: LocalizedText;
  company: string;
  period: LocalizedText;
  description: LocalizedText;
  techs: string[];
}

export interface MetricEntry {
  value: string;
  label: LocalizedText;
}

export const navigationLabels = {
  brand: "Douglas Queiroz",
  projects: { pt: "Projetos", en: "Projects" },
  about: { pt: "Sobre", en: "About" },
  contact: { pt: "Contato", en: "Contact" },
  cta: { pt: "Falar comigo", en: "Book a call" },
};

export const heroContent = {
  eyebrow: {
    pt: "Backend e full-stack para produtos reais",
    en: "Backend and full-stack systems for real products",
  },
  title: {
    pt: "Eu projeto APIs, plataformas e fluxos de dados que precisam funcionar em produção.",
    en: "I build APIs, platforms, and data workflows that have to hold up in production.",
  },
  subtitle: {
    pt: "Foco em Node.js, NestJS, Next.js, analytics, tempo real e experiências com IA aplicada ao produto.",
    en: "Focused on Node.js, NestJS, Next.js, analytics, real-time systems, and AI-enabled product workflows.",
  },
  description: {
    pt: "Meu trabalho combina arquitetura pragmatica, clareza de produto e implementação de ponta a ponta. Hoje eu priorizo sistemas com regras reais de negócio, boa observabilidade e narrativa técnica defendível.",
    en: "My work combines pragmatic architecture, product clarity, and end-to-end implementation. I focus on systems with real business rules, solid observability, and a defensible technical story.",
  },
  primaryCta: {
    pt: "Ver estudos de caso",
    en: "View case studies",
  },
  secondaryCta: {
    pt: "Entrar em contato",
    en: "Get in touch",
  },
  availability: {
    pt: "Disponível para produtos, APIs e plataformas SaaS",
    en: "Available for products, APIs, and SaaS platforms",
  },
};

export const heroMetrics: MetricEntry[] = [
  {
    value: "5",
    label: {
      pt: "cases principais no portfolio",
      en: "core cases in the portfolio",
    },
  },
  {
    value: "3",
    label: {
      pt: "cases fortes prontos para destaque",
      en: "strong showcase-ready case studies",
    },
  },
  {
    value: "2",
    label: {
      pt: "projetos em evolução com narrativa honesta",
      en: "ongoing projects with honest positioning",
    },
  },
];

export const homepageSections = {
  featuredTitle: {
    pt: "Cases em destaque",
    en: "Featured case studies",
  },
  featuredDescription: {
    pt: "Projetos que melhor representam meu nível atual em backend, arquitetura e entrega de produto.",
    en: "Projects that best represent my current level in backend, architecture, and product delivery.",
  },
  buildingTitle: {
    pt: "Em construção",
    en: "Currently building",
  },
  buildingDescription: {
    pt: "Trabalhos promissores que entram no portfólio com o nível de maturidade correto.",
    en: "Promising work that enters the portfolio with the right maturity framing.",
  },
  proofTitle: {
    pt: "O que você encontra aqui",
    en: "What you will find here",
  },
  proofItems: {
    pt: [
      "APIs e backends com NestJS, Express e PostgreSQL.",
      "Produtos com narrativa clara entre problema, solução e impacto.",
      "Projetos privados mostrados com segurança, sem links quebrados.",
    ],
    en: [
      "APIs and backends built with NestJS, Express, and PostgreSQL.",
      "Products framed with a clear problem, solution, and impact story.",
      "Private projects presented safely, without broken or inaccessible links.",
    ],
  },
};

export const aboutContent = {
  title: {
    pt: "Sobre",
    en: "About",
  },
  intro: {
    pt: "Sou um engenheiro backend/full-stack focado em Node.js, NestJS, Next.js e arquitetura de produto. Gosto de sistemas que exigem critério técnico de verdade: analytics, plataformas operacionais, workflows com IA e integrações em domínios sensíveis.",
    en: "I am a backend/full-stack engineer focused on Node.js, NestJS, Next.js, and product architecture. I like systems that demand real technical judgment: analytics, operational platforms, AI workflows, and integrations in sensitive domains.",
  },
  body: {
    pt: "Meu diferencial está em conectar narrativa de produto com rigor de implementação. Não trabalho para inflar stack ou listar palavras-chave; prefiro mostrar casos onde a arquitetura, a entrega e o contexto de negócio se sustentam juntos.",
    en: "My advantage is connecting product narrative with implementation rigor. I do not optimize for inflated stacks or buzzword lists; I prefer cases where architecture, delivery, and business context hold up together.",
  },
  skillsTitle: {
    pt: "Stack atual",
    en: "Current stack",
  },
  experienceTitle: {
    pt: "Experiência selecionada",
    en: "Selected experience",
  },
};

export const contactContent = {
  title: {
    pt: "Vamos conversar sobre o seu produto?",
    en: "Want to talk about your product?",
  },
  description: {
    pt: "Se você precisa de backend, integração, produto interno ou uma plataforma mais séria do que um CRUD comum, eu posso ajudar. O canal mais rápido para falar diretamente comigo é o WhatsApp.",
    en: "If you need backend work, integration, an internal product, or a platform that goes beyond ordinary CRUD, I can help. WhatsApp remains the main contact channel.",
  },
  button: {
    pt: "Abrir conversa no WhatsApp",
    en: "Open WhatsApp conversation",
  },
};

export const footerContent = {
  note: {
    pt: "Portfolio bilíngue com foco em backend, produto e sistemas em produção.",
    en: "Bilingual portfolio focused on backend, product, and production-grade systems.",
  },
};

export const skills = [
  "Node.js",
  "NestJS",
  "Next.js",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Express.js",
  "React",
  "Docker",
  "JWT",
  "Redis",
  "BullMQ",
  "TanStack Query",
  "Zod",
  "Observability",
  "AI Workflows",
];

export const experiences: ExperienceEntry[] = [
  {
    title: {
      pt: "Desenvolvedor full-stack",
      en: "Full-stack developer",
    },
    company: "SIS88 / Ensina 360",
    period: {
      pt: "2025",
      en: "2025",
    },
    description: {
      pt: "Entrega de funcionalidades de ponta a ponta com NestJS, React, Prisma e testes automatizados, em contexto de produto educacional real.",
      en: "Delivered end-to-end features with NestJS, React, Prisma, and automated tests in a real education product environment.",
    },
    techs: ["NestJS", "React", "Prisma", "PostgreSQL", "Docker", "Jest"],
  },
  {
    title: {
      pt: "Backend freelancer",
      en: "Freelance backend developer",
    },
    company: "Arcade Lunar",
    period: {
      pt: "2025",
      en: "2025",
    },
    description: {
      pt: "Contribuição para a base backend de um sistema realtime, com foco em API e estrutura inicial de produto.",
      en: "Contributed to the backend foundation of a real-time system, focusing on API design and early product structure.",
    },
    techs: ["Node.js", "Express.js", "Realtime APIs"],
  },
  {
    title: {
      pt: "Produto voluntário em operação real",
      en: "Volunteer product in real operation",
    },
    company: "PASCOM Mineirolândia",
    period: {
      pt: "2025 - Atual",
      en: "2025 - Present",
    },
    description: {
      pt: "Evolução de um sistema usado de forma recorrente, equilibrando decisão de arquitetura, experiência de uso e operação do produto.",
      en: "Evolving a product used on a recurring basis, balancing architecture decisions, user experience, and real-world product operation.",
    },
    techs: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
  },
];

export const projectLabels = {
  stage: {
    pt: "Estágio",
    en: "Stage",
  },
  domain: {
    pt: "Domínio",
    en: "Domain",
  },
  role: {
    pt: "Papel",
    en: "Role",
  },
  stack: {
    pt: "Stack",
    en: "Stack",
  },
  architecture: {
    pt: "Arquitetura",
    en: "Architecture",
  },
  highlights: {
    pt: "Destaques técnicos",
    en: "Technical highlights",
  },
  outcomes: {
    pt: "Resultados e sinal de maturidade",
    en: "Outcomes and maturity signals",
  },
  links: {
    pt: "Links",
    en: "Links",
  },
  demo: {
    pt: "Ver demo",
    en: "View demo",
  },
  publicRepo: {
    pt: "Repositório público",
    en: "Public repository",
  },
  privateCodebase: {
    pt: "Código privado",
    en: "Private codebase",
  },
  privateDescription: {
    pt: "Este projeto é apresentado como estudo de caso sem expor repositórios privados.",
    en: "This project is presented as a case study without exposing private repositories.",
  },
  backToProjects: {
    pt: "Voltar para projetos",
    en: "Back to projects",
  },
  caseStudiesTitle: {
    pt: "Estudos de caso",
    en: "Case studies",
  },
  caseStudiesDescription: {
    pt: "Uma seleção de produtos e plataformas organizados pelo nível real de maturidade.",
    en: "A selection of products and platforms organized by their real maturity level.",
  },
};

export const stageLabels: Record<Language, Record<string, string>> = {
  pt: {
    featured: "Destaque",
    production: "Em produção",
    in_progress: "Em construção",
  },
  en: {
    featured: "Featured",
    production: "Production",
    in_progress: "In progress",
  },
};
