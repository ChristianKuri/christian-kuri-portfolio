import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

const categoryAccent: Record<
  string,
  { dot: string; text: string; gradient: string; hoverBg: string }
> = {
  "AI Pipeline": {
    dot: "bg-purple-300",
    text: "text-purple-200",
    gradient: "from-purple-300 via-cyan-200 to-cyan-300",
    hoverBg:
      "group-hover:bg-[radial-gradient(circle_at_15%_50%,rgba(216,180,254,0.07),transparent_60%)]",
  },
  Automation: {
    dot: "bg-cyan-300",
    text: "text-cyan-200",
    gradient: "from-cyan-300 via-cyan-200 to-blue-300",
    hoverBg:
      "group-hover:bg-[radial-gradient(circle_at_15%_50%,rgba(34,211,238,0.07),transparent_60%)]",
  },
  Backend: {
    dot: "bg-emerald-300",
    text: "text-emerald-200",
    gradient: "from-emerald-300 via-cyan-200 to-cyan-300",
    hoverBg:
      "group-hover:bg-[radial-gradient(circle_at_15%_50%,rgba(110,231,183,0.07),transparent_60%)]",
  },
  Web3: {
    dot: "bg-yellow-300",
    text: "text-yellow-200",
    gradient: "from-yellow-200 via-orange-200 to-pink-200",
    hoverBg:
      "group-hover:bg-[radial-gradient(circle_at_15%_50%,rgba(253,224,71,0.07),transparent_60%)]",
  },
  Migration: {
    dot: "bg-orange-300",
    text: "text-orange-200",
    gradient: "from-orange-200 via-pink-200 to-purple-200",
    hoverBg:
      "group-hover:bg-[radial-gradient(circle_at_15%_50%,rgba(253,186,116,0.07),transparent_60%)]",
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work across AI, automation, backend scale, and Web3."
          description="A snapshot of the types of systems and workflows I build."
        />

        <FadeIn>
          <div className="border-t border-white/10">
            {projects.map((project, index) => {
              const accent = categoryAccent[project.category];

              return (
                <article
                  key={project.title}
                  className={`group relative grid grid-cols-[3.5rem_1fr_auto] items-start gap-x-4 border-b border-white/10 px-2 py-10 transition duration-500 hover:bg-white/[0.025] sm:grid-cols-[5rem_1fr_auto] sm:gap-x-8 sm:px-4 sm:py-12 ${accent?.hoverBg ?? ""}`}
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-sm tracking-wider text-slate-500 transition group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${accent?.text ?? "text-cyan-200"}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`size-1.5 rounded-full ${accent?.dot ?? "bg-cyan-300"}`}
                      />
                      {project.category}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold tracking-tight text-white transition duration-300 sm:text-3xl md:text-4xl">
                      <span
                        className={`bg-gradient-to-r bg-clip-text transition duration-300 group-hover:text-transparent ${accent?.gradient ?? "from-cyan-200 to-purple-200"}`}
                      >
                        {project.title}
                      </span>
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tag} className="inline-flex items-center gap-2">
                          {tag}
                          {tagIndex < project.tags.length - 1 ? (
                            <span aria-hidden="true" className="text-slate-700">
                              ·
                            </span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="self-center">
                    <span
                      className={`grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-500 transition duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white sm:size-14 ${accent?.text ? `group-hover:${accent.text}` : ""}`}
                    >
                      <ArrowUpRight className="size-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
