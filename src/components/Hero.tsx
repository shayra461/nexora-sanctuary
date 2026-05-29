import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-brain.jpg";
import brain3d from "@/assets/neuro-brain-3d.png";

export function Hero() {
  const layerImg = useRef<HTMLDivElement>(null);
  const layerBrain = useRef<HTMLDivElement>(null);
  const layerText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layerImg.current) {
          layerImg.current.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
        }
        if (layerBrain.current) {
          layerBrain.current.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
        }
        if (layerText.current) {
          layerText.current.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
          layerText.current.style.opacity = `${Math.max(0, 1 - y / 700)}`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Atmospheric backdrop */}
      <div ref={layerImg} className="absolute inset-0 will-change-transform">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="h-[115%] w-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.13 0.005 270 / 0.92) 0%, oklch(0.16 0.005 270 / 0.6) 50%, oklch(0.16 0.005 270 / 0.3) 100%)" }} />
      </div>

      {/* Floating brain — right side */}
      <div
        ref={layerBrain}
        className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[55%] items-center justify-center will-change-transform md:flex"
      >
        <div className="animate-float-slow relative h-[80%] w-[80%]">
          <img
            src={brain3d}
            alt=""
            width={1024}
            height={1024}
            className="h-full w-full object-contain opacity-80 drop-shadow-[0_0_120px_oklch(0.77_0.13_85/0.45)]"
          />
          <div className="absolute inset-[12%] rounded-full border border-gold/15 animate-spin-slow" />
          <div className="absolute inset-[28%] rounded-full border border-gold/8 animate-spin-slow-reverse" />
        </div>
      </div>

      {/* Veils */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(55% 60% at 25% 50%, transparent 30%, oklch(0.13 0.005 270 / 0.6) 90%)" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
        <div ref={layerText} className="will-change-transform md:max-w-[60%]">
          <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Bridge Healing Alliance
          </div>

          <h1
            className="font-display mt-10 text-[clamp(3rem,9vw,8.5rem)] leading-[0.98] tracking-tight text-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Reset.<br />
            Restore.<br />
            <span className="text-gold-gradient italic">Elevate.</span>
          </h1>

          <p
            className="mt-12 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            The premier neuro-wellness experience —
            where sound, science, and stillness meet.
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.95s" }}>
            <a href="#ecosystem" className="btn-gold">Begin the Journey<span aria-hidden>→</span></a>
            <a href="#waitlist" className="btn-ghost-gold">Join the Experience</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="text-[0.62rem] tracking-[0.5em] uppercase">Scroll</span>
        <span className="relative block h-14 w-px bg-gradient-to-b from-gold/60 to-transparent">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-gold animate-scroll-hint shadow-[0_0_12px_var(--color-gold)]" />
        </span>
      </div>
    </section>
  );
}
