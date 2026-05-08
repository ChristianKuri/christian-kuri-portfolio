"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/site-data";
import { ToolGlyph } from "@/lib/tool-icons";

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
                      <ToolGlyph name={skill} className="size-7" imageSize={28} />
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
