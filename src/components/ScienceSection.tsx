import neuroImg from "@/assets/neuro-synapse.jpg";

export function ScienceSection() {
  return (
    <section id="science" className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        {/* Image */}
        <div className="reveal relative" style={{ perspective: "1400px" }}>
          <div className="relative overflow-hidden rounded-2xl border border-gold/15 shadow-[0_60px_140px_-40px_oklch(0_0_0/0.95)]">
            <img
              src={neuroImg}
              alt="Neural network in golden light"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-[60vh] w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/30" />
            <div className="absolute left-6 top-6 font-display text-sm tracking-[0.4em] text-gold/85">
              01 / Philosophy
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full opacity-60 blur-3xl"
               style={{ background: "radial-gradient(closest-side, oklch(0.77 0.13 85 / 0.28), transparent 70%)" }} />
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="eyebrow">The Science of Stillness</div>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] text-foreground">
            Built around the{" "}
            <span className="italic text-gold-gradient">architecture of the mind.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            Every experience is sculpted with neuroscientists and sound architects —
            translating measurable brain states into deeply felt human moments.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { k: "Coherence", v: "Frequency-tuned soundscapes" },
              { k: "Restoration", v: "Nervous system protocols" },
            ].map((s) => (
              <div key={s.k} className="border-l border-gold/30 pl-5">
                <div className="text-[0.62rem] tracking-[0.4em] uppercase text-gold/80">{s.k}</div>
                <div className="font-display mt-2 text-lg text-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
