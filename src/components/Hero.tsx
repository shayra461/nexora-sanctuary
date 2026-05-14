import { useEffect, useRef, useState } from "react";
import { CinematicCanvas } from "@/components/CinematicCanvas";
import { NeuralSphere3D } from "@/components/NeuralSphere3D";

export function Hero() {
  const layerSphere = useRef<HTMLDivElement>(null);
  const layerStreaks = useRef<HTMLDivElement>(null);
  const layerText = useRef<HTMLDivElement>(null);
  const layerOrbits = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Scroll parallax
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layerSphere.current) {
          layerSphere.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0006})`;
          layerSphere.current.style.opacity = `${Math.max(0, 1 - y / 900)}`;
        }
        if (layerOrbits.current) {
          layerOrbits.current.style.transform = `translate3d(0, ${y * 0.15}px, 0) rotate(${y * 0.02}deg)`;
        }
        if (layerStreaks.current) {
          layerStreaks.current.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
        }
        if (layerText.current) {
          layerText.current.style.transform = `translate3d(0, ${y * 0.55}px, 0)`;
          layerText.current.style.opacity = `${Math.max(0, 1 - y / 600)}`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  // 3D mouse tilt on headline
  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      tx = -py * 5;
      ty = px * 5;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.transform = `perspective(1400px) rotateX(${cx}deg) rotateY(${cy}deg)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Layer 1 — flowing cinematic canvas */}
      <div className="absolute inset-0 opacity-80">
        <CinematicCanvas hue="mixed" intensity={1.1} />
      </div>

      {/* Layer 2 — orbital rings, slowly rotating */}
      <div ref={layerOrbits} aria-hidden className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center will-change-transform">
        <div className="relative h-[110vh] w-[110vh] max-h-[1100px] max-w-[1100px]">
          <div className="absolute inset-0 rounded-full border border-gold/15 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-[8%] rounded-full border border-amber-glow/10 animate-[spin_90s_linear_infinite_reverse]" />
          <div className="absolute inset-[18%] rounded-full border border-teal-neural/15 animate-[spin_120s_linear_infinite]" />
          <div className="absolute inset-[28%] rounded-full border border-gold/10" />
        </div>
      </div>

      {/* Layer 3 — 3D neural sphere (centerpiece) */}
      <div
        ref={layerSphere}
        className="absolute inset-0 z-[3] flex items-center justify-center will-change-transform"
      >
        <div className="relative aspect-square h-[95vh] max-h-[1000px]">
          {/* radial halo */}
          <div className="absolute inset-0 rounded-full opacity-70 blur-3xl"
               style={{ background: "radial-gradient(closest-side, oklch(0.78 0.16 60 / 0.4), transparent 70%)" }} />
          {mounted && <NeuralSphere3D />}
        </div>
      </div>

      {/* Layer 4 — light streaks (front parallax) */}
      <div ref={layerStreaks} aria-hidden className="pointer-events-none absolute inset-0 z-[4] will-change-transform">
        <div className="absolute left-[-15%] top-1/3 h-px w-[60%] origin-left rotate-[8deg] bg-gradient-to-r from-transparent via-gold/70 to-transparent blur-[1px]" />
        <div className="absolute right-[-15%] top-2/3 h-px w-[55%] origin-right -rotate-[6deg] bg-gradient-to-r from-transparent via-amber-glow/60 to-transparent blur-[1px]" />
      </div>

      {/* Cinematic veils that frame the sphere and ground the text */}
      <div className="absolute inset-0 z-[5]"
           style={{ background: "radial-gradient(70% 80% at 50% 50%, transparent 30%, oklch(0.05 0.005 60 / 0.55) 70%, oklch(0.05 0.005 60 / 0.92) 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 z-[5] h-[40%]"
           style={{ background: "linear-gradient(to bottom, transparent, oklch(0.05 0.005 60))" }} />

      {/* Foreground content — centered cinematic copy */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center md:px-10">
        <div ref={layerText} className="will-change-transform" style={{ transformStyle: "preserve-3d" }}>
          <div className="eyebrow mx-auto inline-flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="h-px w-10 bg-gold/60" />
            A New Era of Neuro Wellness
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <div ref={tiltRef} className="will-change-transform">
            <h1
              className="font-display mt-8 text-[clamp(2.8rem,8.5vw,8.5rem)] leading-[0.98] tracking-tight text-foreground animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              Awaken the <span className="text-gold-gradient italic">Architecture</span> <br className="hidden md:block" />
              of the Mind.
            </h1>
          </div>

          <p
            className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            A cinematic sanctuary where neuroscience, sound, and intentional
            transformation converge — engineered for the elevated mind.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.9s" }}>
            <a href="#waitlist" className="btn-gold">Join The Experience<span aria-hidden>→</span></a>
            <a href="#chapters" className="btn-ghost-gold">Explore The Ecosystem</a>
          </div>

          {/* glass stat row */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "1.15s" }}>
            {[
              { k: "5", l: "Pillars" },
              { k: "∞", l: "States" },
              { k: "01", l: "Sanctuary" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-5 backdrop-blur-md">
                <div className="font-display text-3xl text-gold-gradient">{s.k}</div>
                <div className="mt-1 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
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
