import { Code2, Mail, Network, Send } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-data";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.links.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Network,
  },
  {
    label: "GitHub",
    value: "View GitHub profile",
    href: siteConfig.links.github,
    icon: Code2,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Reach out for senior full-stack engineering, backend systems, AI automation, or remote international opportunities."
        />

        <FadeIn className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-cyan-950/20 backdrop-blur">
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 bg-cyan-300/10 p-8 md:border-b-0 md:border-r">
              <Send className="mb-8 size-8 text-cyan-200" />
              <h3 className="text-3xl font-semibold tracking-tight text-white">
                Have a project, role, or automation idea?
              </h3>
              <p className="mt-5 leading-8 text-slate-300">
                I am open to conversations about product engineering, backend platforms, AI
                workflows, and high-leverage internal tools.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:p-8">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/55 p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-200">
                    <link.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">{link.label}</span>
                    <span className="mt-1 block font-medium text-white transition group-hover:text-cyan-100">
                      {link.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
