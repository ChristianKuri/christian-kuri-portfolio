"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import {
  siApachekafka,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTypescript,
} from "simple-icons";

type SimpleIcon = {
  hex: string;
  path: string;
  title: string;
};

type FloatingLogo = {
  delay: string;
  depth: number;
  icon: { src: string; type: "image" } | { icon: SimpleIcon; type: "simple" };
  label: string;
  position: string;
};

const floatingLogos: FloatingLogo[] = [
  {
    label: "Claude",
    icon: { type: "image", src: "/brand-icons/claude.svg" },
    position: "left-[8%] top-[12%]",
    delay: "0s",
    depth: 0.7,
  },
  {
    label: "Codex",
    icon: { type: "image", src: "/brand-icons/codex.svg" },
    position: "right-[9%] top-[18%]",
    delay: "-5s",
    depth: 1.05,
  },
  {
    label: "TypeScript",
    icon: { type: "simple", icon: siTypescript },
    position: "left-[42%] top-[9%]",
    delay: "-9s",
    depth: 0.55,
  },
  {
    label: "React",
    icon: { type: "simple", icon: siReact },
    position: "right-[36%] top-[34%]",
    delay: "-2s",
    depth: 0.9,
  },
  {
    label: "Node.js",
    icon: { type: "simple", icon: siNodedotjs },
    position: "left-[4%] bottom-[23%]",
    delay: "-7s",
    depth: 0.8,
  },
  {
    label: "Next.js",
    icon: { type: "simple", icon: siNextdotjs },
    position: "left-[34%] bottom-[12%]",
    delay: "-12s",
    depth: 1.15,
  },
  {
    label: "Kafka",
    icon: { type: "simple", icon: siApachekafka },
    position: "right-[6%] bottom-[28%]",
    delay: "-4s",
    depth: 0.65,
  },
  {
    label: "n8n",
    icon: { type: "simple", icon: siN8n },
    position: "right-[28%] bottom-[8%]",
    delay: "-10s",
    depth: 0.95,
  },
  {
    label: "PostgreSQL",
    icon: { type: "simple", icon: siPostgresql },
    position: "right-[18%] top-[52%]",
    delay: "-16s",
    depth: 0.75,
  },
];

export function FloatingTechLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 12;

        container.style.setProperty("--logo-parallax-x", `${x}px`);
        container.style.setProperty("--logo-parallax-y", `${y}px`);
        animationFrame = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [--logo-parallax-x:0px] [--logo-parallax-y:0px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.1),rgba(2,6,23,0.36))]" />
      {floatingLogos.map((logo) => (
        <div
          key={logo.label}
          style={{ "--logo-depth": logo.depth } as CSSProperties}
          className={`tech-logo-orbit absolute hidden sm:block ${logo.position}`}
        >
          <div
            style={{ animationDelay: logo.delay }}
            className="tech-logo-float grid size-16 place-items-center rounded-3xl border border-white/10 bg-white/[0.055] text-slate-300 shadow-[0_0_46px_rgba(34,211,238,0.12)] backdrop-blur-md md:size-20"
          >
            <LogoIcon logo={logo} />
          </div>
        </div>
      ))}
    </div>
  );
}

function LogoIcon({ logo }: { logo: FloatingLogo }) {
  if (logo.icon.type === "image") {
    return <Image src={logo.icon.src} alt="" width={40} height={40} className="size-9 md:size-11" />;
  }

  return (
    <svg aria-hidden="true" className="size-9 md:size-11" role="img" viewBox="0 0 24 24">
      <path d={logo.icon.icon.path} fill={`#${logo.icon.icon.hex}`} />
    </svg>
  );
}
