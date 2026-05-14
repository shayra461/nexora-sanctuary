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
}

export function PillarSection({
  id, index, eyebrow, title, italic, body, bullets, image, imageAlt, reverse,
}: Props) {
  return (
    <section id={id} className="relative py-32 md:py-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        {/* Image */}
        <div className={`reveal relative ${reverse ? "md:order-2" : ""}`}>
          <div className="relative overflow-hidden rounded-2xl border border-gold/15 shadow-[0_50px_120px_-40px_oklch(0_0_0/0.9)]">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1600}
              height={1200}
              className="h-[60vh] w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute left-6 top-6 font-display text-sm tracking-[0.4em] text-gold/80">
              {index}
            </div>
          </div>
          {/* glow halo */}
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
               style={{ background: "radial-gradient(closest-side, oklch(0.78 0.16 60 / 0.25), transparent 70%)" }} />
        </div>

        {/* Text */}
        <div className={`reveal ${reverse ? "md:order-1" : ""}`} style={{ transitionDelay: "0.2s" }}>
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
