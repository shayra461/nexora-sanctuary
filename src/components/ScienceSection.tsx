import scienceImg from "@/assets/science-architecture.jpg";

const bullets = [
  "Protocols calibrated to the nervous system",
  "Frequency-tuned soundscapes for state shifts",
  "Developed with neuroscientists and sound architects",
];

export function ScienceSection() {
  return (
    <section id="science" className="relative py-32 md:py-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        {/* Image */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-2xl border border-gold/15 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.95)]">
            <img
              src={scienceImg}
              alt="Glowing golden neural architecture"
              loading="lazy"
              width={1536}
              height={1536}
              className="h-[60vh] w-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(15,17,21,0.7) 100%)" }} />
          </div>
          {/* gold halo */}
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
               style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.3), transparent 70%)" }} />
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="eyebrow">The Science</div>
          <h2 className="font-display mt-7 text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.05] text-foreground">
            Engineered around the{" "}
            <span className="italic text-gold-gradient">architecture of the mind.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            Every experience inside the ecosystem is sculpted with measurable
            brain states in mind — translating neuroscience into something the
            body can feel.
          </p>
          <ul className="mt-12 space-y-5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-4 text-sm text-foreground/85 md:text-base">
                <span className="mt-2.5 inline-block h-px w-9 bg-gold/70" />
                <span className="tracking-wide">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
