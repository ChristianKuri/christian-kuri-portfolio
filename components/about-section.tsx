import { MapPin, Rocket, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

const aboutCards = [
  {
    title: "Production-Minded",
    description:
      "Focused on durable systems, reliable APIs, database performance, and zero-downtime releases.",
    icon: ShieldCheck,
  },
  {
    title: "AI-Enabled",
    description:
      "Uses Cursor, Claude, Codex, ChatGPT, Vercel AI SDK, and n8n to ship faster with strong engineering ownership.",
    icon: Rocket,
  },
  {
    title: "Remote Ready",
    description: "Based in Guadalajara, Mexico and open to fully remote international opportunities.",
    icon: MapPin,
  },
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

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur md:p-10">
            <p className="text-lg leading-9 text-slate-200">
              I am a Senior Full Stack Engineer specializing in practical AI integrations, agentic
              workflows, API design, system migrations, event-driven architecture, microservices,
              and production-grade delivery.
            </p>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              My background spans TypeScript, Node.js, React, Java, cloud infrastructure, Kafka,
              high-traffic systems, database optimization, and developer productivity. I use AI as a
              multiplier while keeping correctness, testing, security, and engineering judgment
              firmly owned by the developer.
            </p>
          </FadeIn>

          <div className="grid gap-4">
            {aboutCards.map((card, index) => (
              <FadeIn
                key={card.title}
                delay={index * 0.08}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20"
              >
                <card.icon className="mb-5 size-6 text-cyan-200" />
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
