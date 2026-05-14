import { useScrollProgress } from "@/hooks/use-scroll-parallax";
import { CinematicCanvas } from "@/components/CinematicCanvas";

const chapters = [
  {
    eyebrow: "Chapter I",
    title: "Mystery",
    body: "Step into a stillness you'd forgotten was possible.",
    hue: "teal" as const,
  },
  {
    eyebrow: "Chapter II",
    title: "Calmness",
    body: "Let the nervous system soften into the design of the room.",
    hue: "amber" as const,
  },
  {
    eyebrow: "Chapter III",
    title: "Elevation",
    body: "Frequencies meet attention — coherence rises through the body.",
    hue: "gold" as const,
  },
  {
    eyebrow: "Chapter IV",
    title: "Transformation",
    body: "The architecture of the mind quietly rearranges itself.",
    hue: "mixed" as const,
  },
];

export function ScrollChapters() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const idx = Math.min(chapters.length - 1, Math.floor(progress * chapters.length * 0.999));
  const localProgress = (progress * chapters.length) % 1;

  return (
    <section
      id="chapters"
      ref={ref}
      className="relative"
      style={{ height: `${chapters.length * 100}vh` }}
      aria-label="Cinematic chapters"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Animated environment per chapter */}
        {chapters.map((c, i) => (
          <div
            key={c.title}
            aria-hidden
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: i === idx ? 1 : 0 }}
          >
            <CinematicCanvas hue={c.hue} intensity={1.4} />
          </div>
        ))}

        {/* Veil */}
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(60% 60% at 50% 50%, transparent 30%, oklch(0.05 0.005 60 / 0.9))" }} />

        {/* Progress rail */}
        <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-6 md:flex">
          {chapters.map((c, i) => (
            <div key={c.title} className="flex items-center gap-3">
              <span className={`h-px transition-all duration-700 ${i === idx ? "w-12 bg-gold" : "w-6 bg-gold/30"}`} />
              <span className={`text-[0.62rem] tracking-[0.4em] uppercase transition-colors ${i === idx ? "text-gold" : "text-muted-foreground/60"}`}>
                {c.eyebrow}
              </span>
            </div>
          ))}
        </div>

        {/* Active chapter content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center md:px-10">
          {chapters.map((c, i) => {
            const active = i === idx;
            return (
              <div
                key={c.title}
                className="absolute inset-x-0 transition-all duration-[1100ms]"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active
                    ? `translateY(${(localProgress - 0.5) * 30}px) scale(${1 + localProgress * 0.02})`
                    : "translateY(60px) scale(0.96)",
                  filter: active ? "blur(0)" : "blur(12px)",
                }}
              >
                <div className="eyebrow justify-center">{c.eyebrow}</div>
                <h3 className="font-display mt-8 text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tight">
                  <span className="italic text-gold-gradient">{c.title}</span>
                </h3>
                <p className="mx-auto mt-10 max-w-xl text-base text-muted-foreground md:text-lg">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
