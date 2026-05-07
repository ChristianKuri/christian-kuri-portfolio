import { Braces, BrainCircuit, Bug, Cloud, Code2, Database, Hexagon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/site-data";

const skillIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Braces,
  "AI / Automation": BrainCircuit,
  Databases: Database,
  "Cloud / DevOps": Cloud,
  "Web3 / Blockchain": Hexagon,
  Testing: Bug,
};

export function SkillsSection() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit for modern product engineering."
          description="Frontend polish, backend depth, automation fluency, and cloud-ready delivery."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[group.title];

            return (
              <FadeIn
                key={group.title}
                delay={index * 0.05}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
