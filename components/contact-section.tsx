import { ArrowUpRight, Clock, Code2, Download, Globe2, Mail, MapPin, Network, Zap } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site-data";

const secondaryActions = [
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Network,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: Code2,
  },
  {
    label: "Download Resume",
    href: siteConfig.links.resume,
    icon: Download,
  },
];

const specs = [
  { label: "Location", value: "Guadalajara, MX", icon: MapPin },
  { label: "Timezone", value: "GMT−6 / CST", icon: Clock },
  { label: "Response", value: "Within 24 hours", icon: Zap },
  { label: "Setup", value: "Remote-first, international", icon: Globe2 },
];

export function ContactSection() {
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-[-10%] h-[400px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:32px_32px]"
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <FadeIn>
          {/* Availability pulse */}
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-300" />
            </span>
            Available for new projects
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          {/* Eyebrow */}
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>

          {/* Headline */}
          <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Let&apos;s build
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              something useful.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Open to senior full-stack roles, backend platform work, AI integrations, and
            remote international collaborations. Drop a line — I read everything.
          </p>
        </FadeIn>

        {/* Primary CTA: email */}
        <FadeIn delay={0.12}>
          <a
            href={siteConfig.links.email}
            className="group mt-12 flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.07] hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.4)] sm:px-7 sm:py-6"
          >
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-300/40 group-hover:bg-cyan-300/15 sm:size-12">
                <Mail className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Send an email
                </p>
                <p className="mt-1 truncate text-base font-medium text-white sm:text-xl md:text-2xl">
                  {siteConfig.email}
                </p>
              </div>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 group-hover:rotate-45 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10 group-hover:text-cyan-100 sm:size-12">
              <ArrowUpRight className="size-5" />
            </span>
          </a>
        </FadeIn>

        {/* Secondary actions */}
        <FadeIn delay={0.16}>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {secondaryActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={isExternal(action.href) ? "_blank" : undefined}
                rel={isExternal(action.href) ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.07] hover:text-white"
              >
                <action.icon className="size-4 text-slate-400 transition group-hover:text-cyan-200" />
                {action.label}
                <ArrowUpRight className="size-3.5 text-slate-500 transition group-hover:text-cyan-200" />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Tech specs strip */}
        <FadeIn delay={0.22}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4 md:mt-20 md:pt-12">
            {specs.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <spec.icon className="size-3.5 text-cyan-300/70" />
                  {spec.label}
                </div>
                <p className="text-sm font-medium text-white md:text-base">{spec.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
