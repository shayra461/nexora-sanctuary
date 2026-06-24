import jazzImg from "@/assets/card-jazz.jpg";
import flowImg from "@/assets/card-flow.jpg";

type Card = {
  name: string;
  tag: string;
  title: string;
  body: string;
  image: string;
  accent: "gold" | "teal";
};

const cards: Card[] = [
  {
    name: "NeuroSmooth Jazz™",
    tag: "Sound · Atmosphere",
    title: "Decompress. Reawaken. Rise.",
    body: "Cinematic compositions that quiet the noise of the world and re-tune you to your own pulse of purpose.",
    image: jazzImg,
    accent: "gold",
  },
  {
    name: "NeuroSmooth Flow™",
    tag: "Method · Resilience",
    title: "Reclaim your strength.",
    body: "A guided rebuilding path to help you reclaim clarity and step into your next chapter — one grounded step at a time.",
    image: flowImg,
    accent: "teal",
  },
];

export function ImmersiveExperience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="eyebrow-teal justify-center">The Bridge Healing Method</div>
          <h2 className="font-display mt-7 text-[clamp(2rem,5vw,4.2rem)] leading-[1.05]">
            Rebuild strength. <span className="italic text-teal-gold-gradient">Reclaim possibility.</span>
          </h2>
          <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              The <span className="text-foreground/90">Bridge Healing Method™</span> is
              the guiding philosophy behind everything we create.
            </p>
            <p>
              Built upon lived experience and informed by resilience,
              reflection, and growth, it offers a holistic approach to
              rebuilding life after adversity.
            </p>
            <p>
              Rather than focusing solely on recovery, the Method encourages
              individuals to strengthen the mind, restore confidence, cultivate
              resilience, and move forward with renewed purpose.
            </p>
            <p className="font-display text-lg italic text-foreground/95 md:text-xl">
              Because healing is not simply about returning to where we were.
              <br />
              It is about building what comes next.
            </p>
          </div>
          <div className="divider-teal mx-auto mt-10 w-32" />
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => {
            const isGold = c.accent === "gold";
            return (
              <article
                key={c.name}
                className="reveal group relative overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-2"
                style={{
                  border: isGold ? "1px solid rgba(212,175,55,0.22)" : "1px solid rgba(20,184,166,0.28)",
                  boxShadow: isGold
                    ? "0 40px 100px -30px rgba(0,0,0,0.95), 0 0 60px -20px rgba(212,175,55,0.35)"
                    : "0 40px 100px -30px rgba(0,0,0,0.95), 0 0 60px -20px rgba(20,184,166,0.45)",
                  transitionDelay: `${i * 0.15}s`,
                }}
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
                      ? "radial-gradient(80% 60% at 50% 100%, rgba(212,175,55,0.55), transparent 70%)"
                      : "radial-gradient(80% 60% at 50% 100%, rgba(20,184,166,0.6), transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative flex h-[60vh] flex-col justify-end p-9 md:h-[68vh] md:p-12">
                  <div className={`text-[0.62rem] tracking-[0.4em] uppercase ${isGold ? "text-gold" : "text-teal-soft"}`}>
                    {c.tag}
                  </div>
                  <h3 className="font-display mt-5 text-3xl leading-[1.1] text-foreground md:text-[2.4rem]">
                    {c.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    {c.body}
                  </p>
                  <div className={`mt-8 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-foreground/85 transition-colors ${isGold ? "group-hover:text-gold" : "group-hover:text-teal-soft"}`}>
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
