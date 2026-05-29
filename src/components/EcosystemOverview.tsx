import bridgeImg from "@/assets/card-bridge.jpg";
import jazzImg from "@/assets/card-jazz.jpg";
import flowImg from "@/assets/card-flow.jpg";

type Brand = {
  name: string;
  tag: string;
  role: string;
  body: string;
  image: string;
  accent: "gold" | "amber" | "blue";
};

const brands: Brand[] = [
  {
    name: "Bridge Healing Alliance™",
    tag: "The Mission",
    role: "A movement of healing & advocacy",
    body: "A global movement built around trust, transformation and emotional strength — bridging people to the support they deserve.",
    image: bridgeImg,
    accent: "gold",
  },
  {
    name: "NeuroSmooth Jazz™",
    tag: "The Sound",
    role: "Sound-based emotional wellness",
    body: "Immersive, moody compositions designed to decompress the nervous system and dissolve the noise of the day.",
    image: jazzImg,
    accent: "amber",
  },
  {
    name: "NeuroSmooth Flow™",
    tag: "The Experience",
    role: "Guided nervous system wellness",
    body: "Calm, restorative protocols engineered to regulate the body — a grounding return to safety, focus and clarity.",
    image: flowImg,
    accent: "blue",
  },
];

const accentMap = {
  gold: { glow: "rgba(212,175,55,0.45)", border: "rgba(212,175,55,0.35)", text: "text-gold" },
  amber: { glow: "rgba(232,200,112,0.45)", border: "rgba(232,200,112,0.32)", text: "text-gold-soft" },
  blue: { glow: "rgba(120,160,210,0.45)", border: "rgba(120,160,210,0.32)", text: "text-[#9DB3D6]" },
};

export function EcosystemOverview() {
  return (
    <section id="ecosystem" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">The Ecosystem</div>
          <h2 className="font-display mt-7 text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05]">
            One universe, <span className="italic text-gold-gradient">three doors</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            A connected family of brands — a mission, a sound, and an experience —
            woven into a single emotional landscape.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3 md:gap-7">
          {brands.map((b, i) => {
            const a = accentMap[b.accent];
            return (
              <article
                key={b.name}
                className="reveal group relative overflow-hidden rounded-2xl surface-card transition-all duration-700 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Glow halo on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: `radial-gradient(60% 60% at 50% 0%, ${a.glow}, transparent 70%)` }}
                />

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={b.image}
                    alt=""
                    loading="lazy"
                    width={1080}
                    height={1536}
                    className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(35,40,49,0.95) 100%)" }} />
                </div>

                {/* Body */}
                <div className="relative px-8 pb-10 pt-7">
                  <div className={`text-[0.62rem] tracking-[0.4em] uppercase ${a.text}`}>{b.tag}</div>
                  <h3 className="font-display mt-4 text-2xl leading-tight text-foreground md:text-[1.7rem]">
                    {b.name}
                  </h3>
                  <div className="mt-3 text-[0.75rem] tracking-[0.18em] uppercase text-muted-foreground/80">
                    {b.role}
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>

                  {/* Accent rule */}
                  <div className="mt-8 h-px w-full origin-left scale-x-50 transition-transform duration-700 group-hover:scale-x-100"
                       style={{ background: `linear-gradient(90deg, ${a.border}, transparent)` }} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
