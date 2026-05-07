"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  Cable,
  Code2,
  Coffee,
  Database,
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
  siJest,
  siKubernetes,
  siMongodb,
  siMui,
  siMysql,
  siN8n,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
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

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/site-data";

type SimpleIcon = {
  hex: string;
  path: string;
  title: string;
};

type SkillIcon =
  | { type: "simple"; icon: SimpleIcon }
  | { type: "image"; src: string }
  | { type: "lucide"; icon: LucideIcon; color: string };

const skillIcons: Record<string, SkillIcon> = {
  // Frontend
  React: { type: "simple", icon: siReact },
  "Next.js": { type: "simple", icon: siNextdotjs },
  TypeScript: { type: "simple", icon: siTypescript },
  "Tailwind CSS": { type: "simple", icon: siTailwindcss },
  "Vue.js": { type: "simple", icon: siVuedotjs },
  Astro: { type: "simple", icon: siAstro },
  "Material UI": { type: "simple", icon: siMui },
  Bootstrap: { type: "simple", icon: siBootstrap },

  // Backend
  "Node.js": { type: "simple", icon: siNodedotjs },
  Express: { type: "simple", icon: siExpress },
  NestJS: { type: "simple", icon: siNestjs },
  Java: { type: "lucide", icon: Coffee, color: "text-orange-300" },
  Kafka: { type: "simple", icon: siApachekafka },
  "REST APIs": { type: "lucide", icon: Plug, color: "text-cyan-200" },
  GraphQL: { type: "simple", icon: siGraphql },
  Microservices: { type: "lucide", icon: Boxes, color: "text-cyan-200" },
  "Event-Driven Architecture": { type: "lucide", icon: Radio, color: "text-purple-200" },
  "Queue-Based Systems": { type: "lucide", icon: Cable, color: "text-purple-200" },
  "API Integrations": { type: "lucide", icon: Network, color: "text-cyan-200" },

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
};

const categoryAccent: Record<
  string,
  { ring: string; dot: string; pill: string }
> = {
  Frontend: {
    ring: "hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]",
    dot: "bg-cyan-300",
    pill: "data-[active=true]:border-cyan-300/40 data-[active=true]:bg-cyan-300/10 data-[active=true]:text-cyan-100",
  },
  Backend: {
    ring: "hover:border-emerald-300/40 hover:shadow-[0_0_30px_rgba(110,231,183,0.18)]",
    dot: "bg-emerald-300",
    pill: "data-[active=true]:border-emerald-300/40 data-[active=true]:bg-emerald-300/10 data-[active=true]:text-emerald-100",
  },
  "AI / Automation": {
    ring: "hover:border-purple-300/40 hover:shadow-[0_0_30px_rgba(216,180,254,0.18)]",
    dot: "bg-purple-300",
    pill: "data-[active=true]:border-purple-300/40 data-[active=true]:bg-purple-300/10 data-[active=true]:text-purple-100",
  },
  Databases: {
    ring: "hover:border-blue-300/40 hover:shadow-[0_0_30px_rgba(147,197,253,0.18)]",
    dot: "bg-blue-300",
    pill: "data-[active=true]:border-blue-300/40 data-[active=true]:bg-blue-300/10 data-[active=true]:text-blue-100",
  },
  "Cloud / DevOps": {
    ring: "hover:border-orange-300/40 hover:shadow-[0_0_30px_rgba(253,186,116,0.18)]",
    dot: "bg-orange-300",
    pill: "data-[active=true]:border-orange-300/40 data-[active=true]:bg-orange-300/10 data-[active=true]:text-orange-100",
  },
  "Web3 / Blockchain": {
    ring: "hover:border-yellow-300/40 hover:shadow-[0_0_30px_rgba(253,224,71,0.18)]",
    dot: "bg-yellow-300",
    pill: "data-[active=true]:border-yellow-300/40 data-[active=true]:bg-yellow-300/10 data-[active=true]:text-yellow-100",
  },
  Testing: {
    ring: "hover:border-pink-300/40 hover:shadow-[0_0_30px_rgba(249,168,212,0.18)]",
    dot: "bg-pink-300",
    pill: "data-[active=true]:border-pink-300/40 data-[active=true]:bg-pink-300/10 data-[active=true]:text-pink-100",
  },
};

const allCategories = ["All", ...skillGroups.map((g) => g.title)];

const flatSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({ skill, category: group.title })),
);

export function SkillsSection() {
  const [active, setActive] = useState<string>("All");

  const visible = useMemo(
    () => (active === "All" ? flatSkills : flatSkills.filter((s) => s.category === active)),
    [active],
  );

  return (
    <section id="skills" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit for modern product engineering."
          description="Frontend polish, backend depth, automation fluency, and cloud-ready delivery."
        />

        <FadeIn className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12">
          {allCategories.map((category) => {
            const accent = categoryAccent[category];
            const count =
              category === "All"
                ? flatSkills.length
                : flatSkills.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                type="button"
                data-active={active === category}
                onClick={() => setActive(category)}
                className={`group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:text-white ${accent?.pill ?? "data-[active=true]:border-cyan-300/40 data-[active=true]:bg-cyan-300/10 data-[active=true]:text-cyan-100"}`}
              >
                {category !== "All" ? (
                  <span
                    aria-hidden="true"
                    className={`size-1.5 rounded-full ${accent?.dot ?? "bg-cyan-300"}`}
                  />
                ) : null}
                <span>{category}</span>
                <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[0.65rem] font-semibold text-slate-200">
                  {count}
                </span>
              </button>
            );
          })}
        </FadeIn>

        <FadeIn>
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          >
            <AnimatePresence mode="popLayout">
              {visible.map(({ skill, category }) => {
                const accent = categoryAccent[category];
                const icon = skillIcons[skill];

                return (
                  <motion.div
                    key={`${category}:${skill}`}
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 px-3 py-5 text-center transition hover:-translate-y-1 hover:bg-slate-900/80 ${accent?.ring ?? ""}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute right-3 top-3 size-1.5 rounded-full ${accent?.dot ?? "bg-cyan-300"} opacity-50 transition group-hover:opacity-100`}
                    />
                    <span className="grid size-12 place-items-center rounded-2xl bg-white/[0.04] text-slate-200">
                      <SkillGlyph icon={icon} skill={skill} />
                    </span>
                    <span className="text-sm font-medium leading-tight text-white">{skill}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

function isDarkHex(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.4;
}

function SkillGlyph({ icon, skill }: { icon: SkillIcon | undefined; skill: string }) {
  if (!icon) {
    return <FallbackInitial skill={skill} />;
  }

  if (icon.type === "simple") {
    const fill = isDarkHex(icon.icon.hex) ? "#ffffff" : `#${icon.icon.hex}`;
    return (
      <svg aria-hidden="true" className="size-7" role="img" viewBox="0 0 24 24">
        <path d={icon.icon.path} fill={fill} />
      </svg>
    );
  }

  if (icon.type === "image") {
    return <Image src={icon.src} alt="" width={28} height={28} className="size-7" />;
  }

  const Lucide = icon.icon;
  return <Lucide className={`size-7 ${icon.color}`} />;
}

function FallbackInitial({ skill }: { skill: string }) {
  return (
    <span className="text-base font-semibold text-cyan-200">{skill.charAt(0).toUpperCase()}</span>
  );
}
