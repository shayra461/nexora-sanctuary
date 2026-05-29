import poster from "@/assets/video-poster.jpg";

export function VideoShowcase() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">A Cinematic Glimpse</div>
          <h2 className="font-display mt-6 text-[clamp(2rem,5vw,4.2rem)] leading-[1.05]">
            An invitation to <span className="italic text-gold-gradient">stillness</span> in motion.
          </h2>
        </div>

        <div className="reveal group relative mt-20 overflow-hidden rounded-3xl border border-gold/20"
             style={{ transitionDelay: "0.2s" }}>
          {/* Glowing frame */}
          <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
               style={{ background: "linear-gradient(135deg, oklch(0.82 0.14 78 / 0.4), transparent 40%, oklch(0.78 0.09 195 / 0.3))" }} />

          <div className="relative">
            <img
              src={poster}
              alt="Nexora cinematic showcase"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-[55vh] w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-[1.04] md:h-[75vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

            {/* Play */}
            <button
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-ink/40 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-gold hover:bg-ink/20 md:h-32 md:w-32"
              aria-label="Play showcase reel"
            >
              <span className="absolute inset-0 rounded-full bg-gold/20 animate-pulse-glow" />
              <svg width="28" height="32" viewBox="0 0 28 32" fill="none" className="relative ml-1">
                <path d="M2 2L26 16L2 30V2Z" fill="url(#playGold)" />
                <defs>
                  <linearGradient id="playGold" x1="0" y1="0" x2="28" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F4D9A0" />
                    <stop offset="1" stopColor="#C68A3C" />
                  </linearGradient>
                </defs>
              </svg>
            </button>

            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap items-end justify-between gap-4 md:bottom-12 md:left-12 md:right-12">
              <div>
                <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold/80">Chapter 01</div>
                <h3 className="font-display mt-3 text-2xl text-foreground md:text-4xl">Genesis of a New Mind</h3>
              </div>
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground">04:12</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
