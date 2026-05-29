import jazzImg from "@/assets/card-jazz.jpg";
import flowImg from "@/assets/card-flow.jpg";

type Card = {
  name: string;
  tag: string;
  title: string;
  body: string;
  image: string;
  accent: "gold" | "blue";
};

const cards: Card[] = [
  {
    name: "NeuroSmooth Jazz™",
    tag: "Sound · Atmosphere",
    title: "Decompress into a smoother frequency.",
    body: "Cinematic, moody soundscapes that quiet the noise and invite you back into yourself.",
    image: jazzImg,
    accent: "gold",
  },
  {
    name: "NeuroSmooth Flow™",
    tag: "Wellness · Regulation",
    title: "A calm return to the body.",
    body: "Guided nervous system protocols designed to ground, restore and gently regulate.",
    image: flowImg,
    accent: "blue",
  },
];

export function ImmersiveExperience() {
  return (
    <section id="experience" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">The Immersion</div>
          <h2 className="font-display mt-7 text-[clamp(2rem,5vw,4.2rem)] leading-[1.05]">
            Two doors into <span className="italic text-gold-gradient">stillness</span>.
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => {
            const isGold = c.accent === "gold";
            return (
              <article
                key={c.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-gold/12 transition-all duration-700 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Image background */}
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  width={1080}
                  height={1536}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2400ms] ease-out group-hover:scale-[1.05]"
                />
                {/* Darken */}
                <div className="absolute inset-0"
                     style={{ background: "linear-gradient(180deg, rgba(15,17,21,0.55) 0%, rgba(15,17,21,0.92) 80%)" }} />
                {/* Accent glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background: isGold
                      ? "radial-gradient(80% 60% at 50% 100%, rgba(212,175,55,0.5), transparent 70%)"
                      : "radial-gradient(80% 60% at 50% 100%, rgba(120,160,210,0.45), transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative flex h-[60vh] flex-col justify-end p-9 md:h-[68vh] md:p-12">
                  <div className={`text-[0.62rem] tracking-[0.4em] uppercase ${isGold ? "text-gold" : "text-[#9DB3D6]"}`}>
                    {c.tag}
                  </div>
                  <h3 className="font-display mt-5 text-3xl leading-[1.1] text-foreground md:text-[2.4rem]">
                    {c.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    {c.body}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-foreground/85 transition-colors group-hover:text-gold">
                    {c.name} <span aria-hidden>→</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
