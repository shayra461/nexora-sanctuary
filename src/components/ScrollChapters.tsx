import { useScrollProgress } from "@/hooks/use-scroll-parallax";
import { CinematicCanvas } from "@/components/CinematicCanvas";
import { useEffect, useRef } from "react";

import imgMystery from "@/assets/neuro-synapse.jpg";
import imgCalmness from "@/assets/neuro-waves.jpg";
import imgElevation from "@/assets/hero-brain.jpg";
import imgTransformation from "@/assets/neuro-brain-3d.png";

const chapters = [
  {
    eyebrow: "Chapter I",
    title: "Mystery",
    body: "Step into a stillness you'd forgotten was possible.",
    hue: "teal" as const,
    image: imgMystery,
    contain: false,
  },
  {
    eyebrow: "Chapter II",
    title: "Calmness",
    body: "Let your whole self soften into the stillness of the moment.",
    hue: "amber" as const,
    image: imgCalmness,
    contain: false,
  },
  {
    eyebrow: "Chapter III",
    title: "Elevation",
    body: "Frequencies meet attention — coherence rises through the body.",
    hue: "gold" as const,
    image: imgElevation,
    contain: false,
  },
  {
    eyebrow: "Chapter IV",
    title: "Rising",
    body: "Designed around how the mind heals, adapts, and thrives.",
    hue: "mixed" as const,
    image: imgTransformation,
    contain: true,
  },
];

export function ScrollChapters() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const idx = Math.min(chapters.length - 1, Math.floor(progress * chapters.length * 0.999));
  const localProgress = (progress * chapters.length) % 1;

  // Mouse 3D tilt
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      tx = -(e.clientY / window.innerHeight - 0.5) * 10;
      ty = (e.clientX / window.innerWidth - 0.5) * 14;
    };
    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      if (stageRef.current) {
        stageRef.current.style.setProperty("--rx", `${cx}deg`);
        stageRef.current.style.setProperty("--ry", `${cy}deg`);
        stageRef.current.style.setProperty("--mx", `${cy * 8}px`);
        stageRef.current.style.setProperty("--my", `${cx * -8}px`);
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  // local depth from chapter progress
  const depthY = (localProgress - 0.5) * 80;
  const depthScale = 1.05 + localProgress * 0.08;
  const fgY = (localProgress - 0.5) * -140;

  return (
    <section
      id="chapters"
      ref={ref}
      className="relative"
      style={{ height: `${chapters.length * 100}vh` }}
      aria-label="Cinematic chapters"
    >
      <div
        ref={stageRef}
        className="sticky top-0 flex h-screen items-center overflow-hidden"
        style={{ perspective: "1600px" }}
      >
        {/* Animated environments per chapter — image only (lightweight) */}
        {chapters.map((c, i) => {
          const active = i === idx;
          return (
            <div
              key={c.title}
              aria-hidden
              className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
              style={{ opacity: active ? 1 : 0 }}
            >
              <div
                className="absolute inset-0 will-change-transform"
                style={{
                  transform: active
                    ? `translate3d(var(--mx,0), calc(var(--my,0px) + ${depthY}px), 0) scale(${depthScale}) rotateX(var(--rx,0)) rotateY(var(--ry,0))`
                    : "scale(1.1)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <img
                  src={c.image}
                  alt=""
                  loading={active ? "eager" : "lazy"}
                  className={`h-full w-full ${c.contain ? "object-contain opacity-60" : "object-cover opacity-45"}`}
                />
              </div>
            </div>
          );
        })}

        {/* Single shared canvas — only for the active chapter (perf) */}
        <div className="absolute inset-0 mix-blend-screen opacity-70 pointer-events-none">
          <CinematicCanvas hue={chapters[idx].hue} intensity={1.1} />
        </div>

        {/* Strong vignette + darken so text is legible */}
        <div className="pointer-events-none absolute inset-0"
             style={{ background: "radial-gradient(70% 70% at 50% 55%, oklch(0.05 0.005 60 / 0.55) 0%, oklch(0.04 0.005 60 / 0.92) 80%)" }} />
        {/* Center dark ellipse behind text for guaranteed contrast */}
        <div className="pointer-events-none absolute inset-0"
             style={{ background: "radial-gradient(40% 30% at 50% 60%, oklch(0.03 0.005 60 / 0.75), transparent 70%)" }} />

        {/* Progress rail */}
        <div className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-6 md:flex">
          {chapters.map((c, i) => (
            <div key={c.title} className="flex items-center gap-3">
              <span className={`h-px transition-all duration-700 ${i === idx ? "w-12 bg-gold" : "w-6 bg-gold/30"}`} />
              <span className={`text-[0.62rem] tracking-[0.4em] uppercase transition-colors ${i === idx ? "text-gold" : "text-muted-foreground/60"}`}>
                {c.eyebrow}
              </span>
            </div>
          ))}
        </div>

        {/* Active chapter content */}
        <div
          className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center md:px-10"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {chapters.map((c, i) => {
            const active = i === idx;
            return (
              <div
                key={c.title}
                className="absolute inset-x-0 will-change-transform"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active
                    ? `perspective(1400px) rotateX(calc(var(--rx,0) * -0.4)) rotateY(calc(var(--ry,0) * -0.4)) translateY(${(localProgress - 0.5) * 30}px) scale(${1 + localProgress * 0.02})`
                    : "perspective(1400px) translateY(60px) scale(0.96)",
                  filter: active ? "blur(0)" : "blur(14px)",
                  transition: "opacity 1100ms ease-out, filter 1100ms ease-out",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="eyebrow justify-center" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}>{c.eyebrow}</div>
                <h3
                  className="font-display mt-8 text-[clamp(3rem,11vw,10rem)] leading-[0.95] tracking-tight"
                  style={{ textShadow: "0 4px 28px rgba(0,0,0,0.95), 0 0 80px oklch(0.78 0.16 60 / 0.4)" }}
                >
                  <span className="italic text-gold-gradient">{c.title}</span>
                </h3>
                <p className="mx-auto mt-10 max-w-xl text-base text-foreground/90 md:text-lg" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.9)" }}>
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
