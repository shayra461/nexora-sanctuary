import { useScrollProgress, useMouseTilt } from "@/hooks/use-scroll-parallax";
import { CinematicCanvas } from "@/components/CinematicCanvas";

interface Props {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  italic?: string;
  body: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  hue?: "gold" | "amber" | "teal" | "mixed";
}

export function PillarSection({
  id, index, eyebrow, title, italic, body, bullets, image, imageAlt, reverse, hue = "gold",
}: Props) {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const tiltRef = useMouseTilt<HTMLDivElement>(7);

  // Map progress (0..1) → parallax transforms
  const imgY = (progress - 0.5) * -120;        // image moves slower & opposite
  const imgScale = 1 + Math.abs(progress - 0.5) * 0.08;
  const textY = (progress - 0.5) * 60;
  const bgY = (progress - 0.5) * -200;

  return (
    <section ref={ref} id={id} className="relative overflow-hidden py-32 md:py-48">
      {/* Atmospheric moving canvas backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{ transform: `translate3d(0, ${bgY}px, 0)` }}
      >
        <CinematicCanvas hue={hue} intensity={0.9} />
      </div>

      {/* Top + bottom seamless veils so sections blend cinematically */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 -z-10"
           style={{ background: "linear-gradient(to bottom, var(--color-ink), transparent)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 -z-10"
           style={{ background: "linear-gradient(to top, var(--color-ink), transparent)" }} />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        {/* Image stack */}
        <div className={`relative ${reverse ? "md:order-2" : ""}`} style={{ perspective: "1400px" }}>
          <div
            ref={tiltRef}
            className="relative will-change-transform"
            style={{ transformStyle: "preserve-3d", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <div
              className="relative overflow-hidden rounded-2xl border border-gold/15 shadow-[0_60px_140px_-40px_oklch(0_0_0/0.95)]"
              style={{ transform: `translate3d(0, ${imgY}px, 0) scale(${imgScale})`, transition: "transform 0.1s linear" }}
            >
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                width={1600}
                height={1200}
                className="h-[60vh] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <div className="absolute left-6 top-6 font-display text-sm tracking-[0.4em] text-gold/85">
                {index}
              </div>
            </div>

            {/* Floating glass chip — depth element */}
            <div
              className="absolute -bottom-6 -right-6 hidden h-28 w-44 rounded-xl glass-panel md:flex md:flex-col md:justify-center md:px-5"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="text-[0.6rem] tracking-[0.35em] uppercase text-gold/80">Signal</div>
              <div className="font-display mt-1 text-xl text-foreground">Coherence</div>
              <div className="mt-1 text-[0.7rem] text-muted-foreground">Calibrated · Live</div>
            </div>
          </div>

          {/* Halo */}
          <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full opacity-70 blur-3xl"
               style={{ background: "radial-gradient(closest-side, oklch(0.78 0.16 60 / 0.3), transparent 70%)" }} />
        </div>

        {/* Text */}
        <div
          className={`reveal ${reverse ? "md:order-1" : ""} will-change-transform`}
          style={{ transitionDelay: "0.15s", transform: `translate3d(0, ${textY}px, 0)` }}
        >
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="font-display mt-6 text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] text-foreground">
            {title}{" "}
            {italic && <span className="italic text-gold-gradient">{italic}</span>}
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            {body}
          </p>
          {bullets && (
            <ul className="mt-10 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4 text-sm text-foreground/80">
                  <span className="mt-2 inline-block h-px w-8 bg-gold/70" />
                  <span className="tracking-wide">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
