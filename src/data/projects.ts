import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "tracked-api",
    stage: "featured",
    repoAccess: "public",
    featured: true,
    period: {
      pt: "2026",
      en: "2026",
    },
    techs: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Redis",
      "Observability",
    ],
    links: {
      repoPublic: "https://github.com/dev-queiroz/tracked",
      caseStudy: "/projetos/tracked-api",
    },
    content: {
      title: {
        pt: "Tracked API",
        en: "Tracked API",
      },
      summary: {
        pt: "API de product analytics com ingestão robusta de eventos, autenticação JWT, observabilidade e agregações em tempo real.",
        en: "Product analytics API with robust event ingestion, JWT authentication, observability, and real-time aggregations.",
      },
      problem: {
        pt: "Criar um backend de analytics capaz de receber alto volume de eventos sem perder qualidade de validação, rastreabilidade e velocidade de consulta.",
        en: "Build an analytics backend capable of handling high event volume without losing validation quality, traceability, or query speed.",
      },
      solution: {
        pt: "Modelei uma arquitetura em NestJS com pipeline de ingestão rigorosa, Prisma para consistência de dados, autenticação JWT e estrutura pronta para operação em container e cloud.",
        en: "I designed a NestJS architecture with a strict ingestion pipeline, Prisma-backed data consistency, JWT authentication, and deployment-ready container/cloud support.",
      },
      impact: {
        pt: "Hoje é o case técnico mais forte do portfólio para demonstrar design de APIs, analytics backend e preocupação real com operação.",
        en: "It is currently the strongest technical case in the portfolio for API design, analytics backends, and production-focused execution.",
      },
      status: {
        pt: "Case público e pronto para demonstração técnica.",
        en: "Public case and ready for technical review.",
      },
      domain: {
        pt: "Product Analytics e Event Ingestion",
        en: "Product Analytics and Event Ingestion",
      },
      role: {
        pt: "Arquitetura e implementação completa da API",
        en: "End-to-end API architecture and implementation",
      },
      architecture: {
        pt: [
          "NestJS modular para ingestão, autenticação, analytics e observabilidade.",
          "Prisma + PostgreSQL para modelagem tipada e consultas agregadas.",
          "Docker para execução local e deploy consistente.",
        ],
        en: [
          "Modular NestJS architecture for ingestion, authentication, analytics, and observability.",
          "Prisma + PostgreSQL for typed modeling and aggregated queries.",
          "Docker for consistent local execution and deployment.",
        ],
      },
      highlights: {
        pt: [
          "Validação forte de eventos e metadata JSON flexível.",
          "Consultas por janela temporal e agregações por evento.",
          "Autenticação JWT e documentação para consumo por clientes.",
        ],
        en: [
          "Strong event validation with flexible JSON metadata.",
          "Time-window queries and event-level aggregations.",
          "JWT authentication and client-facing API documentation.",
        ],
      },
      outcomes: {
        pt: [
          "Demonstra domínio de APIs de alta clareza para produto e engenharia.",
          "Serve como prova pública da minha capacidade em NestJS, Prisma e Postgres.",
          "Reposiciona meu portfólio para backend de analytics e dados em tempo real.",
        ],
        en: [
          "Shows clear command of APIs built for both product and engineering needs.",
          "Acts as a public proof point for my NestJS, Prisma, and Postgres work.",
          "Repositions the portfolio around analytics and real-time backend systems.",
        ],
      },
    },
  },
  {
    slug: "pascom-minerolandia",
    stage: "featured",
    repoAccess: "private",
    featured: true,
    period: {
      pt: "Dez 2025 - Atual",
      en: "Dec 2025 - Present",
    },
    techs: [
      "Next.js 15",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Tailwind CSS",
      "Framer Motion",
    ],
    images: ["/images/pascom/pascom-home.jpg", "/images/pascom/pascom-dashboard.jpg"],
    links: {
      demo: "https://pascompnsps.vercel.app/",
      caseStudy: "/projetos/pascom-minerolandia",
    },
    content: {
      title: {
        pt: "PASCOM Mineirolândia",
        en: "PASCOM Mineirolandia",
      },
      summary: {
        pt: "Sistema paroquial com módulos de escalas, comunicação e financeiro, operando em contexto real com usuários recorrentes.",
        en: "Parish operations system covering schedules, communication, and finance in a real recurring-usage environment.",
      },
      problem: {
        pt: "A pastoral precisava centralizar processos operacionais dispersos em papel, mensagens e planilhas sem perder simplicidade para usuários não técnicos.",
        en: "The parish needed to centralize operational workflows spread across paper, chat messages, and spreadsheets without making the product hard for non-technical users.",
      },
      solution: {
        pt: "Estruturei o projeto como portfólio de plataforma real: existe uma variante monolítica em Next.js para deploy integral na Vercel e uma linha separada com frontend Next.js + backend NestJS para evolução arquitetural.",
        en: "I structured the product as a real platform portfolio: a monolithic full Next.js deployment for Vercel reliability and a split Next.js + NestJS path for deeper architectural evolution.",
      },
      impact: {
        pt: "O case mostra produto em uso real, capacidade de adaptar arquitetura ao contexto e preocupação com UX para público não técnico.",
        en: "This case shows a real product in use, architectural adaptability, and UX decisions for non-technical audiences.",
      },
      status: {
        pt: "Sistema em uso, com variantes arquiteturais diferentes no ecossistema do projeto.",
        en: "Live system with multiple architectural variants inside the same product family.",
      },
      domain: {
        pt: "Operations Platform for Community Organizations",
        en: "Operations Platform for Community Organizations",
      },
      role: {
        pt: "Produto full-stack com decisão arquitetural e evolução de plataforma",
        en: "Full-stack product ownership with architecture and platform evolution",
      },
      architecture: {
        pt: [
          "Versão monolítica em Next.js feita para rodar inteira na Vercel sem dependências externas de backend.",
          "Versão separada com frontend Next.js e backend NestJS para ampliar controle de domínio e serviços.",
          "Modelagem orientada a módulos operacionais: escalas, comunicação, membros e financeiro.",
        ],
        en: [
          "Monolithic Next.js version designed to run fully on Vercel without an external backend dependency.",
          "Split Next.js frontend and NestJS backend version for stronger domain control and service boundaries.",
          "Module-oriented modeling for scheduling, communication, membership, and finance.",
        ],
      },
      highlights: {
        pt: [
          "Experiência de uso pensada para coordenadores e voluntários.",
          "Estrutura pronta para autenticação, módulos administrativos e área pública.",
          "Mostra maturidade de produto além do CRUD puro.",
        ],
        en: [
          "UX shaped for coordinators and volunteers.",
          "Structure prepared for authentication, admin modules, and a public-facing area.",
          "Shows product maturity beyond plain CRUD execution.",
        ],
      },
      outcomes: {
        pt: [
          "Caso concreto de software em contexto real e contínuo.",
          "Demonstra flexibilidade entre stack monolítica e stack desacoplada.",
          "Ajuda a equilibrar o portfólio entre backend forte e produto completo.",
        ],
        en: [
          "Concrete example of software in a real and ongoing environment.",
          "Demonstrates flexibility between monolithic and decoupled stack decisions.",
          "Balances the portfolio between strong backend delivery and complete product execution.",
        ],
      },
      privateNote: {
        pt: "O código desta família de projetos está em repositórios privados. O portfólio mostra escopo, decisão técnica e evidências visuais sem expor links inacessíveis.",
        en: "The code for this product family lives in private repositories. The portfolio exposes scope, technical decisions, and visual proof without leaking inaccessible links.",
      },
    },
  },
  {
    slug: "hms-hospitalar",
    stage: "featured",
    repoAccess: "private",
    featured: true,
    period: {
      pt: "2025 - 2026",
      en: "2025 - 2026",
    },
    techs: [
      "Express.js",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "JWT",
      "AI Workflows",
    ],
    images: ["/images/hms/hms-1.jpg"],
    links: {
      caseStudy: "/projetos/hms-hospitalar",
    },
    content: {
      title: {
        pt: "HMS - Gestão Hospitalar com IA",
        en: "HMS - AI-Powered Hospital Management",
      },
      summary: {
        pt: "Plataforma de saúde com backend robusto, frontend dedicado e camada de IA para apoio operacional e clínico.",
        en: "Healthcare platform with a robust backend, dedicated frontend, and an AI layer for operational and clinical support.",
      },
      problem: {
        pt: "Sistemas clínicos exigem segurança, confiabilidade e fluxo rápido para dados sensíveis, enquanto análises e relatórios pesados não podem travar a operação.",
        en: "Clinical systems require security, reliability, and fast handling of sensitive data, while heavy analytics and reports cannot block day-to-day operations.",
      },
      solution: {
        pt: "Organizei o ecossistema com frontend em Next.js, backend em Express/TypeScript e serviços assíncronos para relatórios, IA e processamento operacional.",
        en: "I organized the product ecosystem around a Next.js frontend, an Express/TypeScript backend, and asynchronous services for reporting, AI, and operational processing.",
      },
      impact: {
        pt: "Este case mostra que consigo trabalhar com domínios de alta criticidade, conciliando usabilidade, compliance e arquitetura de serviços.",
        en: "This case shows I can work in high-criticality domains while balancing usability, compliance, and service architecture.",
      },
      status: {
        pt: "Case privado com narrativa técnica consistente e material visual disponível.",
        en: "Private case with a consistent technical narrative and visual material available.",
      },
      domain: {
        pt: "Healthcare Operations and Clinical Intelligence",
        en: "Healthcare Operations and Clinical Intelligence",
      },
      role: {
        pt: "Backend, integração de produto e estrutura para IA aplicada",
        en: "Backend, product integration, and applied AI workflow design",
      },
      architecture: {
        pt: [
          "Frontend em Next.js separado do backend para escalabilidade de produto e times.",
          "Backend em Express.js e TypeScript com autenticação, módulos clínicos e regras de negócio.",
          "Fila assíncrona com Redis e BullMQ para relatórios, IA e processamento pesado.",
        ],
        en: [
          "Next.js frontend separated from the backend for product and team scalability.",
          "Express.js and TypeScript backend with authentication, clinical modules, and business rules.",
          "Asynchronous Redis and BullMQ layer for reporting, AI, and heavy processing.",
        ],
      },
      highlights: {
        pt: [
          "Fluxos clínicos, triagem, prontuários e operação hospitalar em uma única plataforma.",
          "Preocupação com dados sensíveis, auditoria e uso criterioso de IA.",
          "Narrativa mais madura do que um painel administrativo simples.",
        ],
        en: [
          "Clinical workflows, triage, patient records, and hospital operations in a single platform.",
          "Strong concern for sensitive data, auditing, and controlled AI usage.",
          "A more mature story than a simple admin dashboard project.",
        ],
      },
      outcomes: {
        pt: [
          "Mostra profundidade de domínio e responsabilidade técnica.",
          "Ajuda a reforçar meu perfil para sistemas sensíveis e integrações com IA.",
          "Complementa o case de analytics com um case de healthtech operacional.",
        ],
        en: [
          "Shows domain depth and technical responsibility.",
          "Strengthens my profile for sensitive systems and AI-enabled workflows.",
          "Complements the analytics case with an operational health-tech case.",
        ],
      },
      privateNote: {
        pt: "O portfólio não exibe links de repositórios privados desta plataforma, apenas a narrativa técnica e as evidências que podem ser mostradas publicamente.",
        en: "The portfolio does not expose private repository links for this platform, only the technical narrative and evidence safe to share publicly.",
      },
    },
  },
  {
    slug: "arenahub-platform",
    stage: "in_progress",
    repoAccess: "private",
    featured: false,
    period: {
      pt: "Em andamento",
      en: "In progress",
    },
    techs: [
      "NestJS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "React",
      "Vite",
      "TanStack Query",
      "Tailwind CSS",
    ],
    images: ["/images/arenahub/arenahub-login.png", "/images/arenahub/arenahub-dashboard.png", "/images/arenahub/arenahub-reservas.png", "/images/arenahub/arenahub-quadras.png", "/images/arenahub/arenahub-clientes.png"],
    links: {
      caseStudy: "/projetos/arenahub-platform",
    },
    content: {
      title: {
        pt: "ArenaHub",
        en: "ArenaHub",
      },
      summary: {
        pt: "Plataforma SaaS para gestão de arenas esportivas, com backend multi-tenant e painel administrativo dedicado.",
        en: "SaaS platform for sports arena management with a multi-tenant backend and dedicated admin panel.",
      },
      problem: {
        pt: "A operação de arenas exige reserva concorrente, fluxo financeiro e gestão de jogadores sem cair em sistemas genéricos demais.",
        en: "Arena operations require concurrent booking, financial flow, and player management without falling into overly generic systems.",
      },
      solution: {
        pt: "O projeto está sendo estruturado com backend NestJS/Fastify e frontend React para atacar concorrência, performance e isolamento multi-tenant desde o início.",
        en: "The project is being structured around a NestJS/Fastify backend and a React frontend to address concurrency, performance, and multi-tenant isolation from the start.",
      },
      impact: {
        pt: "Mesmo em progresso, já fortalece meu portfólio como alguém que projeta software de nicho com requisitos de negócio reais.",
        en: "Even in progress, it already strengthens my portfolio as someone who designs niche software around real business constraints.",
      },
      status: {
        pt: "Em construção ativa. Ainda sem demo pública ou material visual forte o bastante para destaque principal.",
        en: "Under active development. No public demo or strong enough visual material yet for primary showcase placement.",
      },
      domain: {
        pt: "Sports Venue SaaS",
        en: "Sports Venue SaaS",
      },
      role: {
        pt: "Arquitetura full-stack e modelagem multi-tenant",
        en: "Full-stack architecture and multi-tenant modeling",
      },
      architecture: {
        pt: [
          "Backend NestJS com adaptador Fastify para throughput mais alto.",
          "Modelagem multi-tenant para arenas compartilhando infraestrutura com isolamento de dados.",
          "Frontend React + Vite para painel administrativo rápido e iterável.",
        ],
        en: [
          "NestJS backend with the Fastify adapter for higher throughput.",
          "Multi-tenant modeling so arenas share infrastructure with data isolation.",
          "React + Vite frontend for a fast and iterative admin panel.",
        ],
      },
      highlights: {
        pt: [
          "Reserva de quadras, matchmaking e operação de consumo no mesmo produto.",
          "Pensado para regras de negócio mais profundas do que uma agenda simples.",
          "Boa vitrine de arquitetura B2B em andamento.",
        ],
        en: [
          "Court booking, matchmaking, and POS-linked operations in the same product.",
          "Designed for deeper business rules than a simple calendar.",
          "A strong ongoing showcase for B2B architecture.",
        ],
      },
      outcomes: {
        pt: [
          "Entra no portfólio como projeto em andamento, não como promessa pronta.",
          "Mostra direção arquitetural e intenção de produto.",
          "Mantém honestidade sobre maturidade atual.",
        ],
        en: [
          "Appears in the portfolio as an active build, not as a finished promise.",
          "Shows architectural direction and product intent.",
          "Keeps the maturity story honest.",
        ],
      },
      privateNote: {
        pt: "Repositório privado e ainda em evolução. O portfólio mostra o recorte de produto sem expor código inacessível.",
        en: "Private repository and still evolving. The portfolio shows the product slice without exposing inaccessible code.",
      },
    },
  },
  {
    slug: "financy",
    stage: "in_progress",
    repoAccess: "private",
    featured: false,
    period: {
      pt: "Conceito em definição",
      en: "Concept in definition",
    },
    techs: [
      "Product Design",
      "Next.js",
      "Node.js",
      "Personal Finance",
      "AI Insights",
    ],
    links: {
      caseStudy: "/projetos/financy",
    },
    content: {
      title: {
        pt: "Financy",
        en: "Financy",
      },
      summary: {
        pt: "Projeto de gestão financeira pessoal ainda em definição, com direção para insights assistidos por IA e boa UX.",
        en: "Personal finance management product still being defined, aimed at AI-assisted insights and strong UX.",
      },
      problem: {
        pt: "Ferramentas financeiras pessoais costumam ser pesadas demais, pouco agradáveis ou rasas demais para gerar valor de verdade.",
        en: "Personal finance tools are often too heavy, visually weak, or too shallow to create real value.",
      },
      solution: {
        pt: "Por enquanto existe a visão do produto e uma direção clara de arquitetura e experiência, mas ainda não existe implementação suficiente para posicioná-lo como case pronto.",
        en: "At this point there is a clear product vision and architecture direction, but not enough implementation yet to position it as a finished case.",
      },
      impact: {
        pt: "Serve para mostrar a linha de produtos que estou construindo, sem inflar maturidade que ainda não existe.",
        en: "It helps show the product direction I am building without overstating maturity that does not exist yet.",
      },
      status: {
        pt: "Em design e descoberta. Não deve ser tratado como produto finalizado.",
        en: "In design and discovery. It should not be presented as a finished product.",
      },
      domain: {
        pt: "Personal Finance Product",
        en: "Personal Finance Product",
      },
      role: {
        pt: "Concepção de produto e definição de stack",
        en: "Product conception and stack definition",
      },
      architecture: {
        pt: [
          "Direção para full-stack moderno com foco em leitura clara de dados financeiros.",
          "Pretensão de usar IA como camada de interpretação, não como gimmick visual.",
          "Projeto ainda depende de refinamento de UX e primeira implementação forte.",
        ],
        en: [
          "Direction points to a modern full-stack product focused on clear financial data reading.",
          "AI is intended as an interpretation layer, not a visual gimmick.",
          "The project still depends on UX refinement and a first strong implementation.",
        ],
      },
      highlights: {
        pt: [
          "Boa oportunidade para mostrar produto próprio no futuro.",
          "Hoje entra somente como item em construção.",
          "Mantém transparência sobre o estado real do projeto.",
        ],
        en: [
          "A strong opportunity to showcase a self-owned product in the future.",
          "For now it appears only as a work-in-progress item.",
          "Keeps the portfolio transparent about the project's current state.",
        ],
      },
      outcomes: {
        pt: [
          "Não compromete a credibilidade do portfólio com promessas vazias.",
          "Abre espaço para evolução futura com material melhor.",
          "Ajuda a mostrar pipeline de produtos além de serviços para clientes.",
        ],
        en: [
          "Does not hurt the portfolio's credibility with empty promises.",
          "Leaves room for stronger future evolution.",
          "Shows a product pipeline beyond client-service work.",
        ],
      },
      privateNote: {
        pt: "Ainda sem repositório público ou demo confiável. O portfólio o trata corretamente como trabalho em andamento.",
        en: "There is no public repository or reliable demo yet. The portfolio treats it correctly as work in progress.",
      },
    },
  },
];
