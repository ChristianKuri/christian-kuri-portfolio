import { Fragment } from "react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { experienceHighlights, roles } from "@/lib/site-data";
import { ToolGlyph } from "@/lib/tool-icons";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

export function ExperienceHighlights() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="A decade of shipping production software."
          description="Roles, responsibilities, and the systems I built — across product engineering, backend platforms, AI-assisted delivery, and legacy modernization."
        />

        {/* Timeline */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-3 bottom-16 w-px bg-gradient-to-b from-cyan-300/70 via-purple-300/30 to-transparent"
          />

          {roles.map((role, index) => (
            <FadeIn
              key={`${role.company}-${role.years}`}
              delay={index * 0.06}
              className={`relative pl-10 sm:pl-12 ${
                index === roles.length - 1 ? "" : "pb-24 md:pb-28"
              }`}
            >
              {/* Rail node + ping */}
              <span
                aria-hidden="true"
                className="absolute left-3 top-2 size-3.5 -translate-x-1/2 rounded-full border-2 border-cyan-300/80 bg-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              />
              <span
                aria-hidden="true"
                className="absolute left-3 top-2 size-3.5 -translate-x-1/2 animate-ping rounded-full bg-cyan-300/40 [animation-duration:3s]"
              />

              {/* Header */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
                <span className="text-cyan-200/90">{role.years}</span>
                <span aria-hidden="true" className="text-slate-700">
                  ·
                </span>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-0.5 text-[0.65rem] text-cyan-100">
                  {role.duration}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {role.company}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-cyan-200 md:text-base">
                {role.role}
              </p>
              <p className="mt-1 text-xs text-slate-500 md:text-sm">{role.period}</p>

              {/* Summary */}
              <p className="mt-5 text-base italic leading-7 text-slate-400 md:text-lg md:leading-8">
                {role.summary}
              </p>

              {/* Bullet details */}
              <ul className="mt-6 space-y-3.5">
                {role.details.map((detail) => (
                  <li
                    key={detail}
                    className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-7 text-slate-300 md:text-[0.95rem] md:leading-8"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 size-1.5 rounded-full bg-cyan-300/70"
                    />
                    <span>
                      <RichText text={detail} />
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="mt-9 border-t border-white/5 pt-6">
                <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Stack & Tools
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {role.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.07] hover:text-white"
                    >
                      <ToolGlyph name={tool} className="size-4" imageSize={16} />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Highlights stat reel */}
        <div className="mt-24 border-t border-white/10 pt-16 md:mt-28 md:pt-20">
          <FadeIn>
            <div className="mb-12 flex flex-col items-center text-center md:mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                Engineering Impact
              </p>
              <p className="mt-3 max-w-2xl text-base text-slate-400 md:text-lg">
                A few measurable outcomes from the work above.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-14">
            {experienceHighlights.map((highlight, index) => (
              <FadeIn
                key={highlight.label}
                delay={index * 0.04}
                className="group flex flex-col gap-3 border-l border-white/10 pl-5 transition hover:border-cyan-300/50"
              >
                <span className="bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  {highlight.value}
                </span>
                <span className="text-sm leading-6 text-slate-400 md:text-base md:leading-7">
                  {highlight.label}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
