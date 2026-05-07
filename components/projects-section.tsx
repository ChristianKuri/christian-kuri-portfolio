import { ArrowUpRight, Bot, Boxes, Network, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

const projectIcons: LucideIcon[] = [Bot, Network, Boxes, Shield];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work across AI, automation, backend scale, and Web3."
          description="A snapshot of the types of systems and workflows I build."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = projectIcons[index] ?? Boxes;

            return (
              <FadeIn
                key={project.title}
                delay={index * 0.08}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-7 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_34%)] opacity-70 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="grid size-13 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 text-slate-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-200" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 min-h-28 leading-8 text-slate-300">{project.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
