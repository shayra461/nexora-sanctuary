import musicImg from "@/assets/neuro-waves.jpg";
import flowImg from "@/assets/section-wellness.jpg";

const cards = [
  {
    eyebrow: "The Sound",
    name: "NeuroSmooth Jazz",
    tag: "NSJ™",
    body: "Atmospheric soundscapes engineered to dissolve tension and awaken the senses.",
    cta: "Enter the Sound",
    image: musicImg,
    glow: "oklch(0.77 0.13 85 / 0.35)",
    accent: "linear-gradient(135deg, oklch(0.77 0.13 85 / 0.35), transparent 60%)",
  },
  {
    eyebrow: "The Flow",
    name: "NeuroSmooth Flow",
    tag: "NSF™",
    body: "Guided journeys that restore the nervous system and return you to ground.",
    cta: "Find Your Flow",
    image: flowImg,
    glow: "oklch(0.55 0.06 240 / 0.4)",
    accent: "linear-gradient(135deg, oklch(0.40 0.04 250 / 0.45), transparent 60%)",
  },
];

export function VideoShowcase() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">The Experience</div>
          <h2 className="font-display mt-6 text-[clamp(2rem,5vw,4.2rem)] leading-[1.05]">
            Two doorways into <span className="italic text-gold-gradient">stillness.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <a
              key={c.name}
              href="#waitlist"
              className="reveal group relative block overflow-hidden rounded-3xl border border-gold/15 bg-card/40 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-gold/40"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* halo */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                   style={{ background: c.accent }} />

              <div className="relative">
                <div className="relative h-[42vh] overflow-hidden md:h-[58vh]">
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-transform duration-[2400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, var(--color-ink) 95%)" }} />
                  <div className="absolute left-7 top-7 flex items-center justify-between gap-4">
                    <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold/85">{c.eyebrow}</div>
                  </div>
                  <div className="absolute right-7 top-7 font-display text-xs tracking-[0.3em] text-gold/50">{c.tag}</div>

                  {/* glow orb */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full opacity-60 blur-3xl animate-pulse-glow"
                       style={{ background: `radial-gradient(closest-side, ${c.glow}, transparent 70%)` }} />
                </div>

                <div className="px-7 pb-8 pt-6 md:px-10 md:pb-10">
                  <h3 className="font-display text-[clamp(1.8rem,2.6vw,2.6rem)] leading-[1.1] text-foreground">
                    {c.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="italic text-gold-gradient">{c.name.split(" ").slice(-1)}</span>
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                    {c.body}
                  </p>
                  <div className="mt-10 flex items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase text-gold transition-all duration-500 group-hover:gap-5">
                    <span>{c.cta}</span>
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
