import { FadeIn } from "@/components/fade-in";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <FadeIn className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </FadeIn>
  );
}
