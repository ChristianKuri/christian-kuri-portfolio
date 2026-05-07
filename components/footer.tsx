import { navItems, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Christian Kuri. Built with Next.js and TypeScript.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cyan-200">
              {item.label}
            </a>
          ))}
          <a href={siteConfig.links.resume} className="transition hover:text-cyan-200">
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
}
