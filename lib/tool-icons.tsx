import Image from "next/image";
import {
  Boxes,
  Briefcase,
  BrainCircuit,
  Cable,
  Cloud,
  Code2,
  Coffee,
  Database,
  Flag,
  Gauge,
  GitBranch,
  Hexagon,
  Layers,
  type LucideIcon,
  MessageSquareCode,
  Network,
  Plug,
  Radio,
  Server,
  ShieldCheck,
  ShoppingCart,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  siApachekafka,
  siAstro,
  siBootstrap,
  siCypress,
  siDocker,
  siEthers,
  siExpress,
  siGithubactions,
  siGraphql,
  siJavascript,
  siJest,
  siKubernetes,
  siLaravel,
  siMongodb,
  siMui,
  siMysql,
  siN8n,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siSolidity,
  siTailwindcss,
  siTerraform,
  siTypeorm,
  siTypescript,
  siVercel,
  siVitest,
  siVuedotjs,
  siWeb3dotjs,
} from "simple-icons";

export type SimpleIcon = {
  hex: string;
  path: string;
  title: string;
};

export type ToolIcon =
  | { type: "simple"; icon: SimpleIcon }
  | { type: "image"; src: string }
  | { type: "lucide"; icon: LucideIcon; color: string };

export const toolIcons: Record<string, ToolIcon> = {
  // Frontend
  React: { type: "simple", icon: siReact },
  "Next.js": { type: "simple", icon: siNextdotjs },
  TypeScript: { type: "simple", icon: siTypescript },
  JavaScript: { type: "simple", icon: siJavascript },
  "Tailwind CSS": { type: "simple", icon: siTailwindcss },
  "Vue.js": { type: "simple", icon: siVuedotjs },
  Astro: { type: "simple", icon: siAstro },
  "Material UI": { type: "simple", icon: siMui },
  Bootstrap: { type: "simple", icon: siBootstrap },
  "Bootstrap 4": { type: "simple", icon: siBootstrap },

  // Backend
  "Node.js": { type: "simple", icon: siNodedotjs },
  Express: { type: "simple", icon: siExpress },
  NestJS: { type: "simple", icon: siNestjs },
  Java: { type: "lucide", icon: Coffee, color: "text-orange-300" },
  PHP: { type: "simple", icon: siPhp },
  Laravel: { type: "simple", icon: siLaravel },
  Kafka: { type: "simple", icon: siApachekafka },
  "REST APIs": { type: "lucide", icon: Plug, color: "text-cyan-200" },
  GraphQL: { type: "simple", icon: siGraphql },
  Microservices: { type: "lucide", icon: Boxes, color: "text-cyan-200" },
  "Event-Driven Architecture": { type: "lucide", icon: Radio, color: "text-purple-200" },
  "Queue-Based Systems": { type: "lucide", icon: Cable, color: "text-purple-200" },
  "API Integrations": { type: "lucide", icon: Network, color: "text-cyan-200" },
  "Feature Flags": { type: "lucide", icon: Flag, color: "text-purple-200" },

  // AI / Automation
  "Vercel AI SDK": { type: "simple", icon: siVercel },
  "OpenAI APIs": { type: "image", src: "/brand-icons/openai.svg" },
  Claude: { type: "image", src: "/brand-icons/claude.svg" },
  Codex: { type: "image", src: "/brand-icons/codex.svg" },
  Cursor: { type: "image", src: "/brand-icons/cursor.svg" },
  ChatGPT: { type: "image", src: "/brand-icons/openai.svg" },
  n8n: { type: "simple", icon: siN8n },
  "AI Agents": { type: "lucide", icon: BrainCircuit, color: "text-purple-200" },
  "Agentic Workflows": { type: "lucide", icon: Workflow, color: "text-purple-200" },
  "Prompt Orchestration": { type: "lucide", icon: MessageSquareCode, color: "text-cyan-200" },
  "Structured Outputs": { type: "lucide", icon: Layers, color: "text-cyan-200" },
  "Function Calling": { type: "lucide", icon: Code2, color: "text-cyan-200" },
  "Tool Calling": { type: "lucide", icon: Wrench, color: "text-cyan-200" },
  "Context Management": { type: "lucide", icon: Layers, color: "text-purple-200" },
  "LLM Output Validation": { type: "lucide", icon: ShieldCheck, color: "text-emerald-200" },
  "Workflow Automation": { type: "lucide", icon: Workflow, color: "text-cyan-200" },

  // Databases
  PostgreSQL: { type: "simple", icon: siPostgresql },
  MySQL: { type: "simple", icon: siMysql },
  MongoDB: { type: "simple", icon: siMongodb },
  Redis: { type: "simple", icon: siRedis },
  Elasticsearch: { type: "lucide", icon: Database, color: "text-yellow-200" },
  Prisma: { type: "simple", icon: siPrisma },
  TypeORM: { type: "simple", icon: siTypeorm },

  // Cloud / DevOps
  AWS: { type: "image", src: "/brand-icons/aws.svg" },
  Docker: { type: "simple", icon: siDocker },
  Kubernetes: { type: "simple", icon: siKubernetes },
  "GitHub Actions": { type: "simple", icon: siGithubactions },
  Vercel: { type: "simple", icon: siVercel },
  Terraform: { type: "simple", icon: siTerraform },
  "CI/CD": { type: "lucide", icon: GitBranch, color: "text-cyan-200" },

  // Web3 / Blockchain
  Solidity: { type: "simple", icon: siSolidity },
  Hardhat: { type: "lucide", icon: Hexagon, color: "text-yellow-200" },
  Truffle: { type: "lucide", icon: Hexagon, color: "text-orange-300" },
  "Ethers.js": { type: "simple", icon: siEthers },
  "Web3.js": { type: "simple", icon: siWeb3dotjs },
  "Smart Contract Auditing": { type: "lucide", icon: ShieldCheck, color: "text-emerald-200" },

  // Testing
  Jest: { type: "simple", icon: siJest },
  Cypress: { type: "simple", icon: siCypress },
  Playwright: { type: "lucide", icon: Server, color: "text-emerald-200" },
  "React Testing Library": { type: "simple", icon: siReact },
  Vitest: { type: "simple", icon: siVitest },

  // Domain / Practice
  "E-commerce": { type: "lucide", icon: ShoppingCart, color: "text-pink-200" },
  "Performance Optimization": { type: "lucide", icon: Gauge, color: "text-emerald-200" },
  SaaS: { type: "lucide", icon: Cloud, color: "text-cyan-200" },
  CRM: { type: "lucide", icon: Users, color: "text-purple-200" },
  "Client Delivery": { type: "lucide", icon: Briefcase, color: "text-amber-200" },
};

export function isDarkHex(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.4;
}

type ToolGlyphProps = {
  name: string;
  className?: string;
  imageSize?: number;
};

export function ToolGlyph({ name, className = "size-7", imageSize = 32 }: ToolGlyphProps) {
  const icon = toolIcons[name];

  if (!icon) {
    return (
      <span
        aria-hidden="true"
        className={`grid place-items-center text-[0.7rem] font-semibold text-cyan-200 ${className}`}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  if (icon.type === "simple") {
    const fill = isDarkHex(icon.icon.hex) ? "#ffffff" : `#${icon.icon.hex}`;
    return (
      <svg aria-hidden="true" className={className} role="img" viewBox="0 0 24 24">
        <path d={icon.icon.path} fill={fill} />
      </svg>
    );
  }

  if (icon.type === "image") {
    return (
      <Image
        src={icon.src}
        alt=""
        width={imageSize}
        height={imageSize}
        className={className}
      />
    );
  }

  const Lucide = icon.icon;
  return <Lucide aria-hidden="true" className={`${className} ${icon.color}`} />;
}
