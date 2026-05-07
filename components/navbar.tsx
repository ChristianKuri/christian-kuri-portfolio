import { Code2, Mail, Network } from "lucide-react";

import { navItems, siteConfig } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            CK
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
            Christian Kuri
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            <Code2 className="size-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            <Network className="size-4" />
          </a>
          <a
            href={siteConfig.links.email}
            aria-label="Email"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
