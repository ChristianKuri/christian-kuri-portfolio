export const siteConfig = {
  name: "Christian Kuri",
  title: "Senior Full Stack Engineer — AI Integrations & Automation",
  description:
    "Senior Full Stack Engineer with 10 years of experience building scalable web applications, backend systems, and AI-powered automation workflows.",
  url: "https://christiankuri.dev",
  email: "christian.kuri.martinez@gmail.com",
  links: {
    github: "https://github.com/ChristianKuri",
    linkedin: "https://www.linkedin.com/in/christian-kuri",
    resume: "/Christian%20Kuri%20Resume%20-%20Senior%20Full%20Stack%20Engineer%20-%20AI%20Engineer.pdf",
    email: "mailto:christian.kuri.martinez@gmail.com",
  },
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Astro",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Java",
      "Kafka",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Event-Driven Architecture",
      "Queue-Based Systems",
      "API Integrations",
    ],
  },
  {
    title: "AI / Automation",
    skills: [
      "Vercel AI SDK",
      "OpenAI APIs",
      "Claude",
      "Codex",
      "Cursor",
      "ChatGPT",
      "n8n",
      "AI Agents",
      "Agentic Workflows",
      "Prompt Orchestration",
      "Structured Outputs",
      "Function Calling",
      "Tool Calling",
      "Context Management",
      "LLM Output Validation",
      "Workflow Automation",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Prisma",
      "TypeORM",
    ],
  },
  {
    title: "Cloud / DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel", "Terraform", "CI/CD"],
  },
  {
    title: "Web3 / Blockchain",
    skills: [
      "Solidity",
      "Hardhat",
      "Truffle",
      "Ethers.js",
      "Web3.js",
      "Smart Contract Auditing",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "Cypress", "Playwright", "React Testing Library", "Vitest"],
  },
];

export const projects = [
  {
    title: "AI Research-to-Blog Generation Pipeline",
    description:
      "Multi-stage AI content system using Vercel AI SDK with research, source analysis, summarization, outline generation, structured context passing, validation, and final drafting stages.",
    tags: ["Vercel AI SDK", "LLMs", "Structured Outputs", "Automation"],
  },
  {
    title: "n8n AI Automation Workflows",
    description:
      "Automation workflows connecting APIs and AI-assisted steps to reduce manual work and orchestrate content or business processes.",
    tags: ["n8n", "AI Automation", "APIs", "Workflow Automation"],
  },
  {
    title: "Scalable Backend Systems",
    description:
      "Production backend systems supporting 100,000+ daily active users, Kafka-driven change data capture, database optimization, and zero-downtime endpoint migrations.",
    tags: ["Node.js", "Java", "Kafka", "PostgreSQL", "Microservices"],
  },
  {
    title: "Web3 / Smart Contract Work",
    description:
      "Experience with Solidity, smart contract auditing, EVM tooling, and dApp integrations, supported by practical backend and API integration experience.",
    tags: ["Solidity", "Hardhat", "Ethers.js", "Web3"],
  },
  {
    title: "Legacy Platform Modernization",
    description:
      "Migration and rewrite work across legacy Node.js, TypeScript, Laravel, PHP, and e-commerce platforms to improve maintainability, speed, security, and release safety.",
    tags: ["TypeScript", "Node.js", "Java", "Laravel", "Feature Flags"],
  },
];

export const experienceHighlights = [
  "10 years of software engineering experience",
  "Built systems supporting 100,000+ daily active users",
  "Kafka-based event flows processing 500,000+ events daily",
  "Database restructuring reduced a primary table by 25% and improved query performance up to 10x",
  "Migrated 40+ complex Node.js/TypeScript endpoints to Java with zero-downtime rollouts",
  "Refactored migrated APIs to improve response times by up to 5x",
  "Built admin panels that reduced internal manual data entry by over 50%",
  "Maintained internal REST APIs with 99.9% reliability",
  "AI-assisted development workflow increased productivity up to 3x",
];

export const roles = [
  {
    company: "BuildOps",
    role: "Senior Full Stack Software Engineer",
    period: "May 2024 - April 2026",
    duration: "2 years",
    summary:
      "Built high-scale TypeScript, Node.js, and Java systems with Kafka event flows, database restructuring, legacy endpoint migrations, feature flags, and AI-assisted engineering workflows.",
    details: [
      "Supported systems serving 100,000+ daily active users with scalable TypeScript, Node.js, and Java services.",
      "Restructured a massive monolithic database table into optimized tables, reducing primary table size by 25% and improving query speed up to 10x.",
      "Implemented Kafka listeners and Java consumers for change data capture, processing 500,000+ events daily and reducing pipeline bottlenecks by roughly 40%.",
      "Reverse-engineered and migrated 40+ complex Node.js/TypeScript endpoints to Java with feature-flagged, zero-downtime rollouts.",
      "Used Cursor, Claude, Codex, and ChatGPT for code exploration, debugging, refactoring, documentation, architecture review, and implementation planning.",
    ],
    tools: [
      "TypeScript",
      "Node.js",
      "Java",
      "Kafka",
      "PostgreSQL",
      "Feature Flags",
      "Cursor",
      "Claude",
      "Codex",
      "ChatGPT",
    ],
  },
  {
    company: "Knight Interactive",
    role: "Senior Full Stack Software Engineer",
    period: "July 2018 - August 2023",
    duration: "5 years 2 months",
    summary:
      "Led full lifecycle delivery for websites, web apps, admin panels, REST APIs, third-party integrations, Laravel-to-Node migrations, and e-commerce platform rewrites.",
    details: [
      "Architected, developed, and maintained 15+ websites and high-traffic web applications.",
      "Built secure admin panels that reduced internal manual data entry by more than 50%.",
      "Owned projects from concept and architecture through deployment and long-term maintenance.",
      "Designed REST APIs and third-party integrations that maintained 99.9% reliability.",
      "Migrated a core Laravel/PHP application to a TypeScript/Node.js backend, improving page load speed by 60%.",
      "Led a legacy e-commerce rewrite that improved security, stability, speed, and conversions.",
    ],
    tools: [
      "Node.js",
      "React",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Laravel",
      "PHP",
      "E-commerce",
    ],
  },
  {
    company: "Bonk Studios",
    role: "Mid-level Full Stack Software Engineer",
    period: "February 2017 - July 2018",
    duration: "1 year 6 months",
    summary:
      "Maintained and optimized production Laravel and Bootstrap applications, improving performance and reliability for thousands of monthly visitors.",
    details: [
      "Maintained a production-grade cross-platform website with strong attention to availability and user experience.",
      "Diagnosed and resolved performance bottlenecks with targeted optimizations.",
      "Reduced average load times by 2+ seconds and helped create a more responsive UI.",
    ],
    tools: ["PHP", "Laravel", "Bootstrap 4", "JavaScript", "Performance Optimization"],
  },
  {
    company: "Freelance",
    role: "Full Stack Software Engineer",
    period: "January 2015 - February 2017",
    duration: "2 years 2 months",
    summary:
      "Built and maintained SaaS and CRM applications for clients using PHP and Laravel to streamline business processes.",
    details: [
      "Delivered production-grade SaaS and CRM applications for client business workflows.",
      "Handled full-stack development across data models, backend logic, interface work, and deployment support.",
      "Focused on practical tools that streamlined operations and reduced manual process friction.",
    ],
    tools: ["PHP", "Laravel", "SaaS", "CRM", "MySQL", "Client Delivery"],
  },
];

export const interests = [
  "AI tools and automation",
  "Scalable backend architecture",
  "Web3 and crypto infrastructure",
  "Developer productivity",
  "Content systems",
  "Gaming and gaming knowledge platforms",
  "Remote international work",
];
