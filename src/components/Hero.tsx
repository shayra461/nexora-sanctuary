import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-brain.jpg";
import brain3d from "@/assets/neuro-brain-3d.png";
import { CinematicCanvas } from "@/components/CinematicCanvas";

export function Hero() {
  const layerImg = useRef<HTMLDivElement>(null);
  const layerBrain = useRef<HTMLDivElement>(null);
  const layerText = useRef<HTMLDivElement>(null);
  const layerStreaks = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const brainTiltRef = useRef<HTMLDivElement>(null);

  // Scroll parallax
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layerImg.current) {
          layerImg.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})`;
          layerImg.current.style.filter = `blur(${Math.min(y * 0.012, 6)}px) brightness(${1 - Math.min(y * 0.0008, 0.5)})`;
        }
        if (layerBrain.current) {
          layerBrain.current.style.transform = `translate3d(0, ${y * -0.18}px, 0) scale(${1 + y * 0.0003})`;
          layerBrain.current.style.filter = `brightness(${1 - Math.min(y * 0.0005, 0.35)})`;
        }
        if (layerStreaks.current) {
          layerStreaks.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
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

  // 3D mouse tilt — text + brain (opposite directions for depth)
  useEffect(() => {
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      tx = -py * 8;
      ty = px * 10;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (tiltRef.current) {
        tiltRef.current.style.transform = `perspective(1400px) rotateX(${cx}deg) rotateY(${cy}deg)`;
      }
      if (brainTiltRef.current) {
        // brain tilts opposite direction + slight translate for parallax depth
        brainTiltRef.current.style.transform = `perspective(1600px) rotateX(${-cx * 1.6}deg) rotateY(${-cy * 1.8}deg) translate3d(${cy * 6}px, ${cx * -6}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Layer 1 — atmospheric base backdrop with parallax + slow zoom */}
      <div ref={layerImg} className="absolute inset-0 will-change-transform">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="h-[120%] w-full object-cover opacity-70"
          style={{ animation: "shimmer 18s ease-in-out infinite" }}
        />
        {/* darkening veil to lift text contrast */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.05 0.005 60 / 0.85) 0%, oklch(0.05 0.005 60 / 0.55) 45%, oklch(0.05 0.005 60 / 0.2) 100%)" }} />
      </div>

      {/* Layer 2 — flowing cinematic canvas, blended */}
      <div className="absolute inset-0 mix-blend-screen opacity-80">
        <CinematicCanvas hue="mixed" intensity={1.1} />
      </div>

      {/* Layer 3 — light streaks (mid parallax) */}
      <div ref={layerStreaks} aria-hidden className="pointer-events-none absolute inset-0 will-change-transform">
        <div className="absolute left-[-15%] top-1/3 h-px w-[60%] origin-left rotate-[8deg] bg-gradient-to-r from-transparent via-gold/70 to-transparent blur-[1px]" />
        <div className="absolute right-[-15%] top-2/3 h-px w-[55%] origin-right -rotate-[6deg] bg-gradient-to-r from-transparent via-amber-glow/60 to-transparent blur-[1px]" />
        <div className="absolute left-1/2 top-1/4 h-[60%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Layer 4 — floating 3D brain (counter-parallax + mouse tilt + float) */}
      <div
        ref={layerBrain}
        className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[58%] items-center justify-center will-change-transform md:flex"
      >
        <div
          ref={brainTiltRef}
          className="relative h-[78%] w-[78%] will-change-transform"
          style={{ transformStyle: "preserve-3d", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <div className="animate-float-slow h-full w-full">
            <img
              src={brain3d}
              alt="Luminous golden 3D neural brain"
              width={1024}
              height={1024}
              className="h-full w-full object-contain drop-shadow-[0_0_80px_oklch(0.78_0.16_60/0.45)]"
            />
          </div>
          {/* gold halo behind */}
          <div className="absolute inset-0 -z-10 rounded-full opacity-80 blur-3xl"
               style={{ background: "radial-gradient(closest-side, oklch(0.78 0.16 60 / 0.45), transparent 70%)" }} />
          {/* orbiting ring */}
          <div className="absolute inset-[10%] rounded-full border border-gold/20 animate-spin-slow" />
          <div className="absolute inset-[22%] rounded-full border border-gold/10 animate-spin-slow-reverse" />
        </div>
      </div>

      {/* Veils */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(60% 70% at 30% 50%, transparent 25%, oklch(0.05 0.005 60 / 0.7) 90%)" }} />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
        <div ref={layerText} className="will-change-transform md:max-w-[58%]" style={{ transformStyle: "preserve-3d" }}>
          <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A New Era of Neuro Wellness
          </div>

          <div ref={tiltRef} className="will-change-transform">
            <h1
              className="font-display mt-8 text-[clamp(2.6rem,7.5vw,7.5rem)] leading-[1.02] tracking-tight text-foreground animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              The Premier <br />
              <span className="text-gold-gradient italic">Neuro Wellness</span> <br />
              Experience.
            </h1>
          </div>

          <p
            className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Where neuroscience, sound, and intentional transformation come together
            to elevate the mind, body, and human experience.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.95s" }}>
            <a href="#waitlist" className="btn-gold">Join The Experience<span aria-hidden>→</span></a>
            <a href="#chapters" className="btn-ghost-gold">Explore The Ecosystem</a>
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
