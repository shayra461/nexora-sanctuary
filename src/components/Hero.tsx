import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-neuro-brain.png";
import { useMouseTilt } from "@/hooks/use-scroll-parallax";

export function Hero() {
  const stageRef = useMouseTilt<HTMLDivElement>(10);
  const brainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Scroll parallax (restrained but layered)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (brainRef.current) {
          brainRef.current.style.transform = `translate3d(0, ${y * -0.09}px, 0) scale(${1 + y * 0.0002})`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(0, ${y * -0.04}px, 0) rotate(${y * 0.04}deg)`;
        }
        if (textRef.current) {
          textRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
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
      {/* Right-side glowing 3D brain stage with mouse tilt */}
      <div
        ref={brainRef}
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[58%] items-center justify-center will-change-transform md:flex"
      >
        <div
          ref={stageRef}
          className="pointer-events-auto relative h-[80%] w-[80%]"
          style={{ transformStyle: "preserve-3d" as const, transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        >
          {/* Orbiting rings — teal + gold layered */}
          <div ref={ringRef} className="absolute inset-[8%] will-change-transform" style={{ transformStyle: "preserve-3d" as const }}>
            <div className="absolute inset-0 rounded-full border animate-spin-slow"
                 style={{ transform: "rotateX(72deg)", borderColor: "rgba(94,234,212,0.22)" }} />
            <div className="absolute inset-[6%] rounded-full border"
                 style={{ transform: "rotateX(72deg) rotateZ(45deg)", animation: "spin-slow 90s linear infinite reverse", borderColor: "rgba(212,175,55,0.16)" }} />
            <div className="absolute inset-[14%] rounded-full border border-gold-soft/20"
                 style={{ transform: "rotateX(60deg) rotateY(20deg)", animation: "spin-slow 120s linear infinite" }} />
          </div>

          {/* Expanding energy waves — alternating teal & gold */}
          {[0, 1, 2].map((i) => (
            <div
              key={`wave-${i}`}
              className="absolute inset-[10%] rounded-full border"
              style={{
                borderColor: i % 2 === 0 ? "rgba(94,234,212,0.35)" : "rgba(212,175,55,0.30)",
                animation: `energy-wave 5s ease-out ${i * 1.6}s infinite`,
                boxShadow: i % 2 === 0
                  ? "0 0 50px rgba(20,184,166,0.35) inset, 0 0 50px rgba(20,184,166,0.35)"
                  : "0 0 40px rgba(212,175,55,0.25) inset, 0 0 40px rgba(212,175,55,0.25)",
              }}
            />
          ))}

          {/* Brain image — breathing + tilted, teal-gold dual glow */}
          <img
            src={heroBg}
            alt="Glowing golden neural brain"
            width={1536}
            height={1536}
            className="relative h-full w-full object-contain animate-brain-breathe"
            style={{
              filter: "drop-shadow(0 0 60px rgba(20,184,166,0.55)) drop-shadow(0 0 90px rgba(212,175,55,0.45))",
              transform: "translateZ(40px)",
            }}
          />

          {/* Halo pulse — teal */}
          <div className="absolute inset-[12%] -z-10 rounded-full animate-pulse-glow"
               style={{ background: "radial-gradient(closest-side, rgba(20,184,166,0.55), transparent 70%)" }} />

          {/* Halo pulse — gold */}
          <div className="absolute inset-[18%] -z-10 rounded-full animate-pulse-glow"
               style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.55), transparent 70%)", animationDelay: "1.2s" }} />

          {/* Inner core glow */}
          <div className="absolute inset-[32%] -z-10 rounded-full"
               style={{
                 background: "radial-gradient(closest-side, rgba(94,234,212,0.65), transparent 70%)",
                 animation: "pulse-glow 4s ease-in-out infinite",
                 filter: "blur(30px)",
               }} />

          {/* Floating particle dots — teal + gold alternating */}
          {[...Array(16)].map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const r = 40 + (i % 4) * 6;
            const left = 50 + Math.cos(angle) * r;
            const top = 50 + Math.sin(angle) * r;
            const isTeal = i % 2 === 0;
            return (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  background: isTeal ? "var(--color-teal-soft)" : "var(--color-gold)",
                  boxShadow: isTeal
                    ? "0 0 14px var(--color-teal), 0 0 30px rgba(20,184,166,0.7)"
                    : "0 0 14px var(--color-gold), 0 0 30px rgba(212,175,55,0.6)",
                  animation: `synapse-spark ${3 + (i % 5) * 0.7}s ease-in-out ${i * 0.25}s infinite`,
                  transform: "translateZ(60px)",
                }}
              />
            );
          })}

          {/* Drifting outer sparks */}
          {[...Array(10)].map((_, i) => {
            const angle = (i / 10) * Math.PI * 2 + 0.4;
            const r = 58 + (i % 2) * 4;
            const left = 50 + Math.cos(angle) * r;
            const top = 50 + Math.sin(angle) * r;
            const isTeal = i % 3 !== 0;
            return (
              <span
                key={`out-${i}`}
                className="absolute h-1 w-1 rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  background: isTeal ? "var(--color-teal-soft)" : "var(--color-gold-soft)",
                  boxShadow: isTeal
                    ? "0 0 12px var(--color-teal-soft)"
                    : "0 0 10px var(--color-gold-soft)",
                  animation: `float-slow ${10 + (i % 3) * 2}s ease-in-out ${i * 0.5}s infinite`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile: centered subdued brain backdrop */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30 animate-float-slow" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,17,21,0.7) 0%, rgba(15,17,21,0.95) 100%)" }} />
      </div>

      {/* Left-side darkening veil */}
      <div className="pointer-events-none absolute inset-0 hidden md:block"
           style={{ background: "linear-gradient(90deg, rgba(15,17,21,0.95) 0%, rgba(15,17,21,0.85) 35%, rgba(15,17,21,0.4) 60%, transparent 80%)" }} />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
        <div ref={textRef} className="will-change-transform md:max-w-[58%]">
          <div className="eyebrow-teal animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Bridge Healing Alliance™ · A Rebuilding Movement
          </div>

          {/* Brief summary — top-of-page clarity */}
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            I lived through a devastating physical challenge, rebuilt my life,
            and created a path to help others do the same.
          </p>

          <h1
            className="font-display mt-7 text-[clamp(2.5rem,7.4vw,7.2rem)] leading-[1.02] tracking-tight text-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            I rebuilt my life. <br />
            Now I help others <br />
            <span className="text-teal-gold-gradient italic">rise again.</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Born from a journey of resilience and recovery, the Bridge Healing
            Alliance and the NeuroSmooth Ecosystem were created to help people
            reconnect with calm, clarity, and possibility — and step into who
            they were meant to become.
          </p>


          {/* Trust strip — answers "Who is this for? Why trust it?" instantly */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.66rem] tracking-[0.3em] uppercase text-muted-foreground/85 animate-fade-up" style={{ animationDelay: "0.75s" }}>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-teal-soft)", boxShadow: "0 0 10px var(--color-teal)" }} />
              Lived Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-gold)", boxShadow: "0 0 10px var(--color-gold)" }} />
              Proven Path
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-teal-soft)", boxShadow: "0 0 10px var(--color-teal)" }} />
              Global Movement
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.95s" }}>
            <a href="#waitlist" className="btn-teal">Begin Your Journey <span aria-hidden>→</span></a>
            <a href="#ecosystem" className="btn-ghost-gold">Explore the Vision</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="text-[0.62rem] tracking-[0.5em] uppercase">Scroll</span>
        <span className="relative block h-12 w-px" style={{ background: "linear-gradient(to bottom, var(--color-teal), transparent)" }}>
          <span className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full animate-scroll-hint" style={{ background: "var(--color-teal-soft)", boxShadow: "0 0 14px var(--color-teal)" }} />
        </span>
      </div>
    </section>
  );
}
