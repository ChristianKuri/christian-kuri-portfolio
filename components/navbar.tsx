"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, Mail, Menu, Network, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navItems, siteConfig } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(navItems[0]?.href ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  // Scroll-driven state: solid background past threshold + reading progress
  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

      setProgress(ratio);
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Position the sliding active-pill indicator behind the nav items
  useEffect(() => {
    const update = () => {
      const el = itemRefs.current.get(activeId);
      if (!el) {
        setIndicator(null);
        return;
      }
      const parent = el.parentElement;
      if (!parent) return;
      const parentRect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setIndicator({ left: rect.left - parentRect.left, width: rect.width });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeId]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Reading-progress rail at the very top of the viewport */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px"
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Floating capsule navbar */}
      <header
        className={`fixed inset-x-0 top-3 z-50 flex justify-center px-4 transition-all duration-300 sm:top-4 ${
          scrolled ? "[--nav-scale:0.985]" : "[--nav-scale:1]"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`relative flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-slate-950/80 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.8)] backdrop-blur-2xl"
              : "border-white/[0.07] bg-slate-950/45 backdrop-blur-xl"
          }`}
          style={{
            transform: `scale(var(--nav-scale, 1))`,
            transformOrigin: "top center",
          }}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-2.5 pl-1.5 pr-2"
          >
            <span className="relative grid size-8 place-items-center rounded-lg border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-purple-400/10 text-[0.7rem] font-bold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
              CK
              <span
                aria-hidden="true"
                className="absolute -inset-px rounded-lg bg-gradient-to-br from-cyan-300/30 to-purple-300/20 opacity-0 blur-md transition group-hover:opacity-100"
              />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">
              Christian Kuri
            </span>
          </a>

          {/* Desktop nav with sliding active indicator */}
          <div className="relative hidden items-center lg:flex">
            {indicator ? (
              <motion.span
                aria-hidden="true"
                layoutId="nav-indicator"
                className="pointer-events-none absolute inset-y-1 rounded-full bg-white/10 ring-1 ring-inset ring-cyan-300/20"
                animate={{ left: indicator.left, width: indicator.width }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}
            {navItems.map((item) => {
              const isActive = activeId === item.href;
              return (
                <a
                  key={item.href}
                  ref={(el) => {
                    if (el) itemRefs.current.set(item.href, el);
                    else itemRefs.current.delete(item.href);
                  }}
                  href={item.href}
                  className={`relative z-10 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right side: socials + CTA + mobile toggle */}
          <div className="flex items-center gap-1.5">
            <div className="hidden items-center gap-1 md:flex">
              <IconLink
                href={siteConfig.links.github}
                external
                label="GitHub"
                icon={<Code2 className="size-3.5" />}
              />
              <IconLink
                href={siteConfig.links.linkedin}
                external
                label="LinkedIn"
                icon={<Network className="size-3.5" />}
              />
            </div>

            <a
              href={siteConfig.links.email}
              className="group hidden items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_8px_24px_rgba(34,211,238,0.35)] md:inline-flex"
            >
              <Mail className="size-3.5" />
              Get in touch
              <ArrowUpRight className="size-3.5 transition group-hover:rotate-45" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="grid size-9 place-items-center rounded-full border border-white/10 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 lg:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-x-4 top-20 rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:inset-x-6"
            >
              <ul className="flex flex-col">
                {navItems.map((item, index) => {
                  const isActive = activeId === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-baseline justify-between rounded-2xl px-4 py-4 text-lg font-medium transition ${
                          isActive
                            ? "bg-white/[0.06] text-white"
                            : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-xs text-slate-500">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item.label}
                        </span>
                        {isActive ? (
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                          />
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                <MobileSocial
                  href={siteConfig.links.github}
                  external
                  label="GitHub"
                  icon={<Code2 className="size-4" />}
                />
                <MobileSocial
                  href={siteConfig.links.linkedin}
                  external
                  label="LinkedIn"
                  icon={<Network className="size-4" />}
                />
                <MobileSocial
                  href={siteConfig.links.email}
                  label="Email"
                  icon={<Mail className="size-4" />}
                />
              </div>

              <a
                href={siteConfig.links.email}
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                <Mail className="size-4" />
                Get in touch
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function IconLink({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="grid size-8 place-items-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-cyan-100"
    >
      {icon}
    </a>
  );
}

function MobileSocial({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
    >
      {icon}
      {label}
    </a>
  );
}
