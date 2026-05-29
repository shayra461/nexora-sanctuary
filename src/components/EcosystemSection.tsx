const brands = [
  {
    eyebrow: "The Mission",
    name: "Bridge Healing Alliance",
    mark: "BHA",
    body: "Healing, advocacy, and elevation — a movement for the modern human seeking depth.",
    cta: "Explore the Mission",
    href: "#science",
    accent: "from-gold/30 to-transparent",
  },
  {
    eyebrow: "The Sound",
    name: "NeuroSmooth Jazz",
    mark: "NSJ",
    body: "Immersive sound experiences engineered for emotional regulation and inner stillness.",
    cta: "Enter the Sound",
    href: "#experience",
    accent: "from-[oklch(0.40_0.04_250)/0.4] to-transparent",
  },
  {
    eyebrow: "The Experience",
    name: "NeuroSmooth Flow",
    mark: "NSF",
    body: "Guided journeys that restore the nervous system and rewire the architecture of calm.",
    cta: "Find Your Flow",
    href: "#experience",
    accent: "from-gold/20 to-transparent",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">The Ecosystem</div>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,5.2vw,4.4rem)] leading-[1.04]">
            Three worlds. <span className="italic text-gold-gradient">One signal.</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            A connected universe of mission, sound, and experience.
          </p>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-3">
          {brands.map((b, i) => (
            <a
              key={b.name}
              href={b.href}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-card/60 p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_30px_80px_-30px_oklch(0.77_0.13_85/0.35)] md:p-10"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* hover glow */}
              <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${b.accent} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-80`} />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold/80">{b.eyebrow}</div>
                  <div className="font-display text-xs tracking-[0.3em] text-gold/40">{b.mark}</div>
                </div>

                <h3 className="font-display mt-10 text-[clamp(1.6rem,2.4vw,2.2rem)] leading-[1.1] text-foreground">
                  {b.name.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="italic text-gold-gradient">{b.name.split(" ").slice(-1)}</span>
                </h3>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                  {b.body}
                </p>

                <div className="mt-12 flex items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase text-gold transition-all duration-500 group-hover:gap-5">
                  <span>{b.cta}</span>
                  <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
