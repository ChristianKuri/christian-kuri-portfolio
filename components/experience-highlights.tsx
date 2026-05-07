import { CheckCircle2 } from "lucide-react";

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

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {roles.map((role, index) => (
            <FadeIn
              key={`${role.company}-${role.period}`}
              delay={index * 0.06}
              className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{role.company}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-200">{role.role}</p>
                </div>
                <p className="text-sm text-slate-400">{role.period}</p>
              </div>
              <p className="mt-5 leading-8 text-slate-300">{role.summary}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
