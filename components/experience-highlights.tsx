import { CheckCircle2 } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { experienceHighlights } from "@/lib/site-data";

export function ExperienceHighlights() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Concise highlights from production engineering work."
          description="Practical results across systems design, migrations, performance, event flows, and AI-assisted delivery."
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
      </div>
    </section>
  );
}
