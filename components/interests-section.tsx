import {
  Bot,
  Coins,
  Gamepad2,
  Globe2,
  Layers3,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/lib/site-data";

type AccentKey = "purple" | "cyan" | "amber" | "emerald" | "blue" | "pink" | "orange";

const accents: Record<
  AccentKey,
  {
    text: string;
    softText: string;
    border: string;
    glow: string;
    grad: string;
    dot: string;
  }
> = {
  purple: {
    text: "text-purple-200",
    softText: "text-purple-200/80",
    border: "hover:border-purple-300/40",
    glow: "hover:shadow-[0_0_60px_-12px_rgba(216,180,254,0.35)]",
    grad: "from-purple-500/15 via-purple-500/5 to-transparent",
    dot: "bg-purple-300",
  },
  cyan: {
    text: "text-cyan-200",
    softText: "text-cyan-200/80",
    border: "hover:border-cyan-300/40",
    glow: "hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.35)]",
    grad: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    dot: "bg-cyan-300",
  },
  amber: {
    text: "text-amber-200",
    softText: "text-amber-200/80",
    border: "hover:border-amber-300/40",
    glow: "hover:shadow-[0_0_60px_-12px_rgba(252,211,77,0.35)]",
    grad: "from-amber-500/15 via-amber-500/5 to-transparent",
    dot: "bg-amber-300",
  },
  emerald: {
    text: "text-emerald-200",
    softText: "text-emerald-200/80",
    border: "hover:border-emerald-300/40",
    glow: "hover:shadow-[0_0_60px_-12px_rgba(110,231,183,0.35)]",
    grad: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    dot: "bg-emerald-300",
  },
  blue: {
    text: "text-blue-200",
    softText: "text-blue-200/80",
    border: "hover:border-blue-300/40",
    glow: "hover:shadow-[0_0_60px_-12px_rgba(147,197,253,0.35)]",
    grad: "from-blue-500/15 via-blue-500/5 to-transparent",
    dot: "bg-blue-300",
  },
  pink: {
    text: "text-pink-200",
    softText: "text-pink-200/80",
    border: "hover:border-pink-300/40",
    glow: "hover:shadow-[0_0_60px_-12px_rgba(249,168,212,0.35)]",
    grad: "from-pink-500/15 via-pink-500/5 to-transparent",
    dot: "bg-pink-300",
  },
  orange: {
    text: "text-orange-200",
    softText: "text-orange-200/80",
    border: "hover:border-orange-300/40",
    glow: "hover:shadow-[0_0_60px_-12px_rgba(253,186,116,0.35)]",
    grad: "from-orange-500/15 via-orange-500/5 to-transparent",
    dot: "bg-orange-300",
  },
};

const iconBySignature: Record<string, LucideIcon> = {
  chat: Bot,
  graph: Layers3,
  hex: Coins,
  terminal: Terminal,
  doc: Sparkles,
  controller: Gamepad2,
  globe: Globe2,
};

// 7 interests, asymmetric bento on a 6-column grid:
// Row 1: 3 + 3
// Row 2: 2 + 2 + 2
// Row 3: 4 + 2
const tileSpans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
  "lg:col-span-2",
];

const tileSizes = ["lg", "lg", "sm", "sm", "sm", "lg", "sm"] as const;

export function InterestsSection() {
  return (
    <section id="interests" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interests"
          title="The areas that keep me curious."
          description="Engineering depth, emerging technology, and the practices that make small teams move with the leverage of much larger ones."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {interests.map((interest, index) => {
            const accent = accents[interest.accent as AccentKey];
            const Icon = iconBySignature[interest.signature] ?? Sparkles;
            const span = tileSpans[index] ?? "lg:col-span-2";
            const size = tileSizes[index] ?? "sm";

            return (
              <FadeIn
                key={interest.title}
                delay={index * 0.04}
                className={`group relative flex overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900/70 ${accent.border} ${accent.glow} ${span}`}
              >
                {/* Background accent gradient */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.grad} opacity-60 transition duration-500 group-hover:opacity-100`}
                />

                {/* Signature pattern */}
                <SignatureGraphic signature={interest.signature} accent={accent} />

                <div
                  className={`relative flex w-full flex-col ${
                    size === "lg" ? "gap-5 p-7 md:p-8" : "gap-4 p-6"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid place-items-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm ${
                        size === "lg" ? "size-11" : "size-10"
                      } ${accent.text}`}
                    >
                      <Icon className={size === "lg" ? "size-5" : "size-[1.05rem]"} />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${accent.softText}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`size-1 rounded-full ${accent.dot}`}
                      />
                      {String(index + 1).padStart(2, "0")} / {interests.length}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3
                      className={`font-semibold tracking-tight text-white ${
                        size === "lg" ? "text-xl md:text-2xl" : "text-lg"
                      }`}
                    >
                      {interest.title}
                    </h3>
                    <p
                      className={`mt-2 italic ${accent.softText} ${
                        size === "lg" ? "text-sm md:text-base" : "text-sm"
                      }`}
                    >
                      {interest.tagline}
                    </p>
                    <p
                      className={`mt-3 leading-7 text-slate-400 ${
                        size === "lg" ? "text-sm md:text-base" : "text-sm"
                      }`}
                    >
                      {interest.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SignatureGraphic({
  signature,
  accent,
}: {
  signature: string;
  accent: { text: string };
}) {
  const stroke = "currentColor";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -bottom-6 -right-6 size-40 opacity-20 transition duration-500 group-hover:opacity-40 ${accent.text}`}
    >
      {signature === "chat" ? (
        <svg viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="0.6">
          <rect x="10" y="20" width="58" height="32" rx="6" />
          <rect x="32" y="50" width="58" height="32" rx="6" />
          <circle cx="22" cy="36" r="1.5" fill={stroke} />
          <circle cx="32" cy="36" r="1.5" fill={stroke} />
          <circle cx="42" cy="36" r="1.5" fill={stroke} />
          <line x1="44" y1="66" x2="80" y2="66" />
          <line x1="44" y1="72" x2="74" y2="72" />
        </svg>
      ) : null}

      {signature === "graph" ? (
        <svg viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="0.6">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" />
          ))}
          <polyline
            points="5,80 20,55 35,65 50,30 65,40 80,18 95,28"
            strokeWidth="1.5"
          />
          <circle cx="50" cy="30" r="2" fill={stroke} />
          <circle cx="80" cy="18" r="2" fill={stroke} />
        </svg>
      ) : null}

      {signature === "hex" ? (
        <svg viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="0.6">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((__, col) => {
              const x = 10 + col * 18 + (row % 2 === 0 ? 0 : 9);
              const y = 12 + row * 16;
              const points = [
                [x, y - 8],
                [x + 7, y - 4],
                [x + 7, y + 4],
                [x, y + 8],
                [x - 7, y + 4],
                [x - 7, y - 4],
              ]
                .map((p) => p.join(","))
                .join(" ");
              return <polygon key={`hex-${row}-${col}`} points={points} />;
            }),
          )}
        </svg>
      ) : null}

      {signature === "terminal" ? (
        <svg viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="0.6">
          <rect x="6" y="14" width="88" height="72" rx="6" />
          <line x1="6" y1="26" x2="94" y2="26" />
          <circle cx="14" cy="20" r="1.5" fill={stroke} />
          <circle cx="20" cy="20" r="1.5" fill={stroke} />
          <circle cx="26" cy="20" r="1.5" fill={stroke} />
          <text x="14" y="42" fontSize="6" fill={stroke}>
            $ ai run
          </text>
          <text x="14" y="54" fontSize="6" fill={stroke}>
            ✓ scaffold
          </text>
          <text x="14" y="66" fontSize="6" fill={stroke}>
            ✓ deploy
          </text>
          <rect x="14" y="72" width="6" height="6" fill={stroke} />
        </svg>
      ) : null}

      {signature === "doc" ? (
        <svg viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="0.6">
          <rect x="14" y="10" width="60" height="80" rx="3" />
          <rect x="22" y="20" width="60" height="80" rx="3" fillOpacity="0" />
          <line x1="30" y1="34" x2="74" y2="34" />
          <line x1="30" y1="42" x2="74" y2="42" />
          <line x1="30" y1="50" x2="64" y2="50" />
          <line x1="30" y1="58" x2="74" y2="58" />
          <line x1="30" y1="66" x2="58" y2="66" />
          <circle cx="74" cy="78" r="6" />
          <path d="M71 78 l2 2 l4 -4" strokeWidth="1" />
        </svg>
      ) : null}

      {signature === "controller" ? (
        <svg viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="0.6">
          <path d="M20 35 Q10 35 10 50 Q10 75 25 75 Q35 75 38 65 L62 65 Q65 75 75 75 Q90 75 90 50 Q90 35 80 35 L20 35 Z" />
          <circle cx="28" cy="50" r="3" />
          <line x1="22" y1="50" x2="34" y2="50" strokeWidth="1.5" />
          <line x1="28" y1="44" x2="28" y2="56" strokeWidth="1.5" />
          <circle cx="68" cy="46" r="2.5" fill={stroke} />
          <circle cx="76" cy="54" r="2.5" fill={stroke} />
          <circle cx="68" cy="54" r="2.5" />
          <circle cx="76" cy="46" r="2.5" />
        </svg>
      ) : null}

      {signature === "globe" ? (
        <svg viewBox="0 0 100 100" fill="none" stroke={stroke} strokeWidth="0.6">
          <circle cx="50" cy="50" r="38" />
          <ellipse cx="50" cy="50" rx="38" ry="14" />
          <ellipse cx="50" cy="50" rx="38" ry="28" />
          <ellipse cx="50" cy="50" rx="14" ry="38" />
          <ellipse cx="50" cy="50" rx="28" ry="38" />
          <line x1="12" y1="50" x2="88" y2="50" />
          <line x1="50" y1="12" x2="50" y2="88" />
        </svg>
      ) : null}
    </div>
  );
}
