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
          textRef.current.style.transform = `translate3d(0, 0, 0)`;
          textRef.current.style.opacity = `1`;
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
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[45%] items-center justify-center will-change-transform lg:flex xl:w-[50%]"
      >
        <div
          ref={stageRef}
          className="pointer-events-auto relative h-[80%] w-[80%]"
          style={{ transformStyle: "preserve-3d" as const, transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        >
          {/* Brain image — subdued, warm glow only */}
          <img
            src={heroBg}
            alt="Bridge Healing Alliance symbolic visual"
            width={1536}
            height={1536}
            className="relative h-full w-full object-contain animate-brain-breathe"
            style={{
              filter: "drop-shadow(0 0 40px rgba(212,175,55,0.28))",
              opacity: 0.9,
            }}
          />

          {/* Soft warm halo */}
          <div className="absolute inset-[18%] -z-10 rounded-full"
               style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.28), transparent 70%)", filter: "blur(20px)" }} />
        </div>
      </div>

      {/* Mobile + tablet: centered subdued brain backdrop */}
      <div className="pointer-events-none absolute inset-0 lg:hidden">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-25 animate-float-slow" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,17,21,0.7) 0%, rgba(15,17,21,0.95) 100%)" }} />
      </div>

      {/* Left-side darkening veil */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block"
           style={{ background: "linear-gradient(90deg, rgba(15,17,21,0.96) 0%, rgba(15,17,21,0.88) 40%, rgba(15,17,21,0.45) 62%, transparent 82%)" }} />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-44 pb-24 md:px-10 md:pt-52 md:pb-32">
        <div ref={textRef} className="will-change-transform lg:max-w-[55%]">
          <div className="eyebrow-teal animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Bridge Healing Alliance™ · A Movement for Healing, Resilience & Renewal
          </div>

          <h1
            className="font-display mt-6 text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.05] tracking-tight text-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Healing <span className="text-teal-gold-gradient italic">Beyond Recovery.</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            We believe healing is more than what we overcome.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            It is the lifelong process of rebuilding strength, restoring confidence, rediscovering purpose, and creating new possibilities for the future.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Through advocacy, education, meaningful experiences, and community, Bridge Healing Alliance exists to help individuals move forward with resilience, renewal, and hope.
          </p>


          {/* Trust strip — answers "Who is this for? Why trust it?" instantly */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.66rem] tracking-[0.3em] uppercase text-muted-foreground/85 animate-fade-up" style={{ animationDelay: "0.8s" }}>
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
            <a href="#ecosystem" className="btn-teal">Begin Your Journey <span aria-hidden>→</span></a>
            <a href="#founder-story" className="btn-ghost-gold">Read the Founder's Story</a>
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
