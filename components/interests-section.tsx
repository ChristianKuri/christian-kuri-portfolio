import { Gamepad2, Globe2, Layers3, Lightbulb, RadioTower, Sparkles, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/lib/site-data";

const interestIcons: LucideIcon[] = [Sparkles, Layers3, RadioTower, Zap, Lightbulb, Gamepad2, Globe2];

export function InterestsSection() {
  return (
    <section id="interests" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interests"
          title="The areas that keep me curious."
          description="A mix of engineering depth, emerging technology, and the tools that make teams more effective."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((interest, index) => {
            const Icon = interestIcons[index] ?? Lightbulb;

            return (
              <FadeIn
                key={interest}
                delay={index * 0.05}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-purple-300/35 hover:bg-purple-300/10"
              >
                <Icon className="mb-4 size-5 text-purple-200" />
                <p className="font-medium leading-7 text-slate-100">{interest}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
