import { CalendarDays, CheckCircle2, ChevronDown, Timer, Wrench } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { experienceHighlights, roles } from "@/lib/site-data";

export function ExperienceHighlights() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Production experience with measurable engineering outcomes."
          description="Practical results across high-scale systems, migrations, performance, event flows, AI-assisted delivery, and full lifecycle product engineering."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experienceHighlights.map((highlight, index) => (
            <FadeIn
              key={highlight}
              delay={index * 0.06}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"
            >
              <CheckCircle2 className="mb-5 size-6 text-emerald-300" />
              <p className="text-lg font-medium leading-8 text-slate-100">{highlight}</p>
            </FadeIn>
          ))}
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-[1.125rem] hidden w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-300/70 via-purple-300/40 to-transparent md:block lg:left-1/2" />

          {roles.map((role, index) => (
            <FadeIn
              key={`${role.company}-${role.period}`}
              delay={index * 0.08}
              className={`relative mb-6 md:pl-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0 ${
                index % 2 === 0 ? "lg:[&>article]:col-start-1" : "lg:[&>article]:col-start-2"
              }`}
            >
              <div className="absolute left-[1.125rem] top-7 z-10 hidden size-5 -translate-x-1/2 rounded-full border border-cyan-200/70 bg-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.45)] md:block lg:left-1/2" />

              <article
                tabIndex={0}
                className="group rounded-[1.75rem] border border-white/10 bg-slate-900/75 p-6 outline-none transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/95 focus-visible:-translate-y-1 focus-visible:border-cyan-300/50 focus-visible:ring-2 focus-visible:ring-cyan-300/30"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      {role.company}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-cyan-200">{role.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300">
                      <CalendarDays className="size-4 text-purple-200" />
                      {role.period}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100">
                      <Timer className="size-4" />
                      {role.duration}
                    </div>
                  </div>
                </div>

                <p className="mt-5 leading-8 text-slate-300">{role.summary}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition group-hover:text-cyan-200 group-focus-visible:text-cyan-200">
                  <ChevronDown className="size-4 transition group-hover:rotate-180 group-focus-visible:rotate-180" />
                  Hover or focus to reveal details and tools
                </div>

                <div className="grid max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-6 group-hover:max-h-[42rem] group-hover:opacity-100 group-focus-visible:mt-6 group-focus-visible:max-h-[42rem] group-focus-visible:opacity-100">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Key Work
                    </p>
                    <ul className="space-y-3">
                      {role.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                        <Wrench className="size-4 text-purple-200" />
                        Tools Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {role.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
