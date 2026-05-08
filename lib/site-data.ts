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
    category: "AI Pipeline",
    description:
      "Multi-stage AI content system using Vercel AI SDK with research, source analysis, summarization, outline generation, structured context passing, validation, and final drafting stages.",
    tags: ["Vercel AI SDK", "LLMs", "Structured Outputs", "Automation"],
  },
  {
    title: "n8n AI Automation Workflows",
    category: "Automation",
    description:
      "Automation workflows connecting APIs and AI-assisted steps to reduce manual work and orchestrate content or business processes.",
    tags: ["n8n", "AI Automation", "APIs", "Workflow Automation"],
  },
  {
    title: "Scalable Backend Systems",
    category: "Backend",
    description:
      "Production backend systems supporting Kafka-driven change data capture, database optimization, and zero-downtime endpoint migrations across TypeScript, Node.js, and Java.",
    tags: ["Node.js", "Java", "Kafka", "PostgreSQL", "Microservices"],
  },
  {
    title: "Web3 / Smart Contract Work",
    category: "Web3",
    description:
      "Experience with Solidity, smart contract auditing, EVM tooling, and dApp integrations, supported by practical backend and API integration experience.",
    tags: ["Solidity", "Hardhat", "Ethers.js", "Web3"],
  },
  {
    title: "Legacy Platform Modernization",
    category: "Migration",
    description:
      "Migration and rewrite work across legacy Node.js, TypeScript, Laravel, PHP, and e-commerce platforms to improve maintainability, speed, security, and release safety.",
    tags: ["TypeScript", "Node.js", "Java", "Laravel", "Feature Flags"],
  },
];

export const experienceHighlights = [
  { value: "10+", label: "Years building production software" },
  { value: "100K+", label: "Daily active users on systems I built" },
  { value: "500K+", label: "Events per day through Kafka pipelines I shipped" },
  { value: "10×", label: "Faster queries after database restructuring" },
  { value: "40+", label: "Legacy endpoints migrated with zero downtime" },
  { value: "5×", label: "Faster API responses after refactoring" },
  { value: "50%", label: "Less manual data entry in admin tools I built" },
  { value: "99.9%", label: "API reliability maintained on production systems" },
  { value: "3×", label: "Productivity boost with AI-assisted workflow" },
];

export const roles = [
  {
    company: "BuildOps",
    role: "Senior Full Stack Software Engineer",
    period: "May 2024 – April 2026",
    years: "2024 — 2026",
    duration: "2Y",
    summary:
      "Built high-scale TypeScript, Node.js, and Java systems — Kafka event flows, database restructuring, legacy endpoint migrations, feature-flagged rollouts, and AI-assisted engineering workflows.",
    details: [
      "Used **AI engineering tools** including Cursor, Claude, Codex, and ChatGPT in my daily workflow for code exploration, debugging, refactoring, documentation, architecture review, and implementation planning, increasing measured productivity by **up to 3x**.",
      "Improved delivery speed and code quality by treating AI as a productivity multiplier while maintaining full ownership of correctness, testing, security, and final engineering decisions.",
      "Architected and developed scalable, high-performance applications using **JavaScript, TypeScript, and Node.js**, supporting **100,000+ daily active users** and contributing to a more robust and efficient system.",
      "Spearheaded a critical **database infrastructure migration**, architecting the restructuring of a massive monolithic table into multiple optimized tables. This reduced the primary table size by **25%** and accelerated query execution speeds by **up to 10x**.",
      "Engineered and implemented multiple **Kafka listeners** for real-time database change data capture, processing **over 500,000 events daily** and enabling sub-second event-driven architectures.",
      "Developed robust **Java consumers** to process and integrate data streams from Kafka, enhancing data processing capabilities and reducing data pipeline bottlenecks by an estimated **40%**.",
      "Successfully reverse-engineered and migrated **40+ highly complex legacy Node.js/TypeScript endpoints to Java**, completely refactoring the underlying logic, eliminating significant technical debt, and accelerating API response times by **5x**.",
      "Utilized **feature flags** to ensure seamless rollouts and maintain backward compatibility during the migration process, achieving **100% zero-downtime deployments** and minimizing disruption for users.",
    ],
    tools: [
      "TypeScript",
      "JavaScript",
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
    period: "July 2018 – August 2023",
    years: "2018 — 2023",
    duration: "5Y 2M",
    summary:
      "Led full-lifecycle delivery for websites, web apps, admin panels, REST APIs, third-party integrations, Laravel-to-Node migrations, and a ground-up e-commerce platform rewrite.",
    details: [
      "Architected, developed, and maintained **15+ dynamic websites and high-traffic web applications** using Node.js, React, Vue.js, TypeScript, and Tailwind CSS.",
      "Engineered and launched multiple secure, scalable **admin panels** using Tailwind and TypeScript, reducing internal manual data entry time by **over 50%**.",
      "Served as the **lead and sole developer** on various projects, taking full ownership of the entire development lifecycle from concept and architecture to deployment and maintenance for mission-critical client applications.",
      "Designed and implemented robust internal **RESTful APIs** and successfully integrated numerous third-party services, enhancing application functionality and maintaining **99.9% API reliability**.",
      "Spearheaded the complete migration of a core application from a legacy **Laravel/PHP stack to a modern TypeScript/Node.js backend**, resulting in a **60% faster page load time** and major improvements in maintainability.",
      "Led the ground-up rewrite of a legacy **e-commerce platform**, modernizing the tech stack to dramatically improve security, stability, and speed, contributing to an estimated **45% increase in user conversions**.",
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
    period: "February 2017 – July 2018",
    years: "2017 — 2018",
    duration: "1Y 6M",
    summary:
      "Maintained and optimized production Laravel and Bootstrap applications, improving performance and reliability for thousands of monthly visitors.",
    details: [
      "Maintained and enhanced a **production-grade, cross-platform website** built with PHP, Laravel, and Bootstrap 4, ensuring high availability and a seamless user experience for **thousands of monthly visitors**.",
      "Diagnosed and resolved complex **performance bottlenecks**, implementing targeted optimizations that **reduced average load times by 2+ seconds** and created a highly responsive UI.",
    ],
    tools: ["PHP", "Laravel", "Bootstrap 4", "JavaScript", "Performance Optimization"],
  },
  {
    company: "Freelance",
    role: "Full Stack Software Engineer",
    period: "January 2015 – February 2017",
    years: "2015 — 2017",
    duration: "2Y 2M",
    summary:
      "Built and maintained SaaS and CRM applications for clients with PHP and Laravel, focused on practical tools that streamlined business processes.",
    details: [
      "Engineered and maintained robust, **production-grade SaaS and CRM applications** for various clients using PHP and Laravel, delivering solutions that streamlined business processes.",
      "Owned end-to-end full-stack delivery across data modeling, backend logic, interface implementation, and deployment, focused on tools that reduced manual process friction.",
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
