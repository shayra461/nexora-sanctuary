import communityImg from "@/assets/section-community.jpg";

export function CommunitySection() {
  return (
    <section id="community" className="relative overflow-hidden py-32 md:py-44">
      {/* Background image with strong veil */}
      <div className="absolute inset-0 -z-10">
        <img
          src={communityImg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--color-ink) 0%, oklch(0.13 0.005 270 / 0.55) 40%, var(--color-ink) 100%)" }} />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <div className="reveal eyebrow justify-center">The Movement</div>
        <h2 className="reveal font-display mt-8 text-[clamp(2.4rem,6vw,5.4rem)] leading-[1.02]"
            style={{ transitionDelay: "0.15s" }}>
          A constellation of <span className="italic text-gold-gradient">elevated minds.</span>
        </h2>
        <p className="reveal mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
           style={{ transitionDelay: "0.3s" }}>
          Healers, artists, founders and seekers — connected through shared inquiry
          and a quiet commitment to live at a higher resolution.
        </p>

        <div className="reveal mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/10 sm:grid-cols-3"
             style={{ transitionDelay: "0.4s" }}>
          {[
            { v: "12K+", k: "Founding members" },
            { v: "27", k: "Countries" },
            { v: "∞", k: "Shared elevation" },
          ].map((s) => (
            <div key={s.k} className="bg-card/80 px-6 py-10 backdrop-blur-md">
              <div className="font-display text-4xl text-gold-gradient md:text-5xl">{s.v}</div>
              <div className="mt-3 text-[0.65rem] tracking-[0.35em] uppercase text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
