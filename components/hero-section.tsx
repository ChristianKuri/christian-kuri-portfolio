import { ArrowRight, ArrowUpRight, Briefcase, Download, MapPin, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { FloatingTechLogos } from "@/components/floating-tech-logos";
import { HeroChatbotDemo } from "@/components/hero-chatbot-demo";
import { siteConfig } from "@/lib/site-data";

const heroFacts = [
  { icon: MapPin, label: "Guadalajara, MX" },
  { icon: Briefcase, label: "Recent: BuildOps" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pb-20 pt-24 sm:px-6 md:pb-28 md:pt-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.26),transparent_32%),radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(34,211,238,0.14),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <FloatingTechLogos />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <FadeIn>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)] transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
            >
              <span className="relative flex size-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              Open to remote international opportunities
              <ArrowUpRight className="size-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </a>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-[5rem] lg:leading-[1.02]">
              Christian Kuri.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 text-2xl font-medium tracking-tight text-slate-200 md:text-3xl">
              Senior Full Stack Engineer
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                building AI integrations &amp; scalable systems.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
              I ship production web apps, backend platforms, and AI-powered automation
              that move fast without breaking things — across TypeScript, Node.js, React,
              Java, and modern AI tooling.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(34,211,238,0.25)] transition hover:bg-cyan-200 hover:shadow-[0_20px_60px_rgba(34,211,238,0.35)]"
              >
                View Projects
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Get in touch
              </a>
              <a
                href={siteConfig.links.resume}
                className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                <Download className="size-4 text-purple-200 transition group-hover:translate-y-0.5" />
                Resume (PDF)
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
              {heroFacts.map((fact) => (
                <span key={fact.label} className="inline-flex items-center gap-2">
                  <fact.icon className="size-4 text-cyan-200" />
                  {fact.label}
                </span>
              ))}
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4 text-purple-200" />
                AI-assisted workflow
              </span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-cyan-300/15 via-transparent to-purple-300/15 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-2 shadow-[0_40px_120px_rgba(2,6,23,0.6)] backdrop-blur">
            <HeroChatbotDemo />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
