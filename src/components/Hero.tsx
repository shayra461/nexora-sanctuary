import heroImg from "@/assets/hero-nexora.jpg";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Layered hero image with parallax-feeling scale */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70 animate-shimmer"
          style={{ animationDuration: "16s" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(50% 60% at 50% 45%, transparent 30%, oklch(0.05 0.005 60 / 0.85) 90%)" }} />
      </div>

      {/* Light streaks */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/3 h-px w-[55%] origin-left rotate-[8deg] bg-gradient-to-r from-transparent via-gold/60 to-transparent blur-[1px] animate-float"
             style={{ animationDuration: "12s" }} />
        <div className="absolute right-[-10%] top-2/3 h-px w-[45%] origin-right -rotate-[6deg] bg-gradient-to-r from-transparent via-amber-glow/50 to-transparent blur-[1px] animate-float"
             style={{ animationDuration: "18s", animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 md:px-10">
        <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.2s" }}>
          A New Era of Neuro Wellness
        </div>

        <h1
          className="font-display mt-8 text-[clamp(2.6rem,7.5vw,7rem)] leading-[1.02] tracking-tight text-foreground animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          The Premier <br />
          <span className="text-gold-gradient italic">Neuro Wellness</span> <br />
          Experience.
        </h1>

        <p
          className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Where neuroscience, sound, and intentional transformation come together
          to elevate the mind, body, and human experience.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.95s" }}>
          <a href="#waitlist" className="btn-gold">
            Join The Experience
            <span aria-hidden>→</span>
          </a>
          <a href="#neuro" className="btn-ghost-gold">Explore The Ecosystem</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="text-[0.62rem] tracking-[0.5em] uppercase">Scroll</span>
        <span className="relative block h-10 w-px bg-gradient-to-b from-gold/60 to-transparent">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-gold animate-scroll-hint shadow-[0_0_12px_var(--color-gold)]" />
        </span>
      </div>
    </section>
  );
}
