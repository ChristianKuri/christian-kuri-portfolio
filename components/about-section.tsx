import { MapPin, Rocket, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

const aboutCards = [
  {
    title: "Production-Minded",
    description:
      "Focused on durable systems, reliable APIs, database performance, and zero-downtime releases.",
    icon: ShieldCheck,
    accent: "from-cyan-300/40 to-cyan-300/0",
    iconColor: "text-cyan-200",
    iconBg: "bg-cyan-300/10",
  },
  {
    title: "AI-Enabled",
    description:
      "Uses Cursor, Claude, Codex, ChatGPT, Vercel AI SDK, and n8n to ship faster with strong engineering ownership.",
    icon: Rocket,
    accent: "from-purple-300/40 to-purple-300/0",
    iconColor: "text-purple-200",
    iconBg: "bg-purple-300/10",
  },
  {
    title: "Remote Ready",
    description: "Based in Guadalajara, Mexico and open to fully remote international opportunities.",
    icon: MapPin,
    accent: "from-emerald-300/40 to-emerald-300/0",
    iconColor: "text-emerald-200",
    iconBg: "bg-emerald-300/10",
  },
];

const quickFacts = [
  { value: "10+", label: "Years building" },
  { value: "100K+", label: "Daily active users" },
  { value: "Remote", label: "Global friendly" },
];

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Senior engineering across product, platform, AI, and automation."
          description="I bring 10 years of experience building scalable applications, backend systems, internal tools, event-driven platforms, and AI-powered workflows."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <FadeIn className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-px top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300/60 via-purple-300/30 to-transparent md:block"
            />

            <div className="md:pl-8">
              <p className="text-2xl font-medium leading-10 tracking-tight text-white md:text-3xl md:leading-[3rem]">
                I&apos;m a Senior Full Stack Engineer specializing in practical{" "}
                <span className="text-cyan-200">AI integrations</span>, agentic workflows, API
                design, system migrations, event-driven architecture, microservices, and
                production-grade delivery.
              </p>
              <p className="mt-8 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                My background spans TypeScript, Node.js, React, Java, cloud infrastructure, Kafka,
                high-traffic systems, database optimization, and developer productivity. I use AI as
                a multiplier while keeping correctness, testing, security, and engineering judgment
                firmly owned by the developer.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col">
                    <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      {fact.value}
                    </span>
                    <span className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-400">
                      {fact.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {aboutCards.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.08}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900/80"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${card.accent}`}
                />
                <div className="flex items-start gap-4">
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-2xl ${card.iconBg} ${card.iconColor}`}
                  >
                    <card.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{card.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
