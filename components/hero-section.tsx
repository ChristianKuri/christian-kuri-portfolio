import { ArrowRight, Cpu, Download, Sparkles, Terminal, Workflow } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.26),transparent_32%),radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_50%_95%,rgba(34,211,238,0.14),transparent_32%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
            <Sparkles className="size-4" />
            Available for fully remote international opportunities
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Christian Kuri
          </h1>
          <p className="mt-5 text-2xl font-medium text-cyan-100 md:text-3xl">
            Senior Full Stack Engineer
          </p>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-200 md:text-2xl md:leading-10">
            AI Integrations, Automation, Scalable Backend Systems, TypeScript, Node.js, React
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            I build scalable web applications, backend systems, AI-powered workflows, and
            automation tools.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(34,211,238,0.22)] transition hover:bg-cyan-200"
            >
              View Projects
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/15"
            >
              Contact Me
            </a>
            <a
              href={siteConfig.links.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-300/30 bg-purple-300/10 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:border-purple-200/50 hover:bg-purple-300/15"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-300" />
                <span className="size-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs text-slate-500">systems.ts</span>
              </div>
              <div className="space-y-4 font-mono text-sm text-slate-300">
                <p>
                  <span className="text-purple-300">const</span>{" "}
                  <span className="text-cyan-200">focus</span> = [
                </p>
                <p className="pl-5 text-slate-100">{`"AI workflows",`}</p>
                <p className="pl-5 text-slate-100">{`"automation platforms",`}</p>
                <p className="pl-5 text-slate-100">{`"backend architecture",`}</p>
                <p className="pl-5 text-slate-100">{`"Web3 infrastructure"`}</p>
                <p>];</p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Backend", icon: Cpu },
                  { label: "AI Agents", icon: Sparkles },
                  { label: "Automation", icon: Workflow },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <item.icon className="mb-3 size-5 text-cyan-200" />
                    <p className="text-sm font-medium text-white">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <Terminal className="size-5 text-emerald-300" />
              <p className="text-sm text-slate-300">
                Shipping production systems with practical AI leverage.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
