import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-neuro-brain.jpg";

export function Hero() {
  const brainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Subtle scroll parallax (restrained)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (brainRef.current) {
          brainRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0) scale(${1 + y * 0.00015})`;
        }
        if (textRef.current) {
          textRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
          textRef.current.style.opacity = `${Math.max(0, 1 - y / 700)}`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Right-side glowing brain */}
      <div
        ref={brainRef}
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[58%] items-center justify-center will-change-transform md:flex"
      >
        <div className="animate-float-slow relative h-[80%] w-[80%]">
          <img
            src={heroBg}
            alt="Glowing golden neural brain"
            width={1536}
            height={1536}
            className="h-full w-full object-contain"
            style={{ filter: "drop-shadow(0 0 80px rgba(212,175,55,0.35))" }}
          />
          {/* halo */}
          <div className="absolute inset-[15%] -z-10 rounded-full opacity-70 blur-3xl"
               style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.45), transparent 70%)" }} />
        </div>
      </div>

      {/* Mobile: centered subdued brain backdrop */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,17,21,0.7) 0%, rgba(15,17,21,0.95) 100%)" }} />
      </div>

      {/* Left-side darkening veil so headline sits on near-black */}
      <div className="pointer-events-none absolute inset-0 hidden md:block"
           style={{ background: "linear-gradient(90deg, rgba(15,17,21,0.95) 0%, rgba(15,17,21,0.85) 35%, rgba(15,17,21,0.4) 60%, transparent 80%)" }} />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
        <div ref={textRef} className="will-change-transform md:max-w-[55%]">
          <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Bridge Healing Alliance™ · Coming Soon
          </div>

          <h1
            className="font-display mt-9 text-[clamp(2.6rem,7.6vw,7.4rem)] leading-[1.02] tracking-tight text-foreground animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            The Premier <br />
            <span className="text-gold-gradient italic">Neuro Wellness</span> <br />
            Experience.
          </h1>

          <p
            className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Where neuroscience, sound and intentional transformation meet —
            a quiet sanctuary engineered for the elevated mind.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.85s" }}>
            <a href="#waitlist" className="btn-gold">Join the Experience <span aria-hidden>→</span></a>
            <a href="#ecosystem" className="btn-ghost-gold">Explore the Ecosystem</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="text-[0.62rem] tracking-[0.5em] uppercase">Scroll</span>
        <span className="relative block h-12 w-px bg-gradient-to-b from-gold/60 to-transparent">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-gold animate-scroll-hint shadow-[0_0_12px_var(--color-gold)]" />
        </span>
      </div>
    </section>
  );
}
