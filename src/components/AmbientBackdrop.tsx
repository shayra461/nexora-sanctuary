import { useEffect, useRef } from "react";
import bgNeural from "@/assets/neuro-synapse.jpg";
import bgSound from "@/assets/neuro-waves.jpg";
import bgWellness from "@/assets/neuro-brain-3d.png";

/**
 * Cinematic atmospheric backdrop:
 * - Animated radial gold glow that follows the cursor
 * - Drifting particle canvas
 * - Soft noise/grain overlay
 */
export function AmbientBackdrop() {
  const glowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Scroll parallax for themed background images
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const el = parallaxRef.current;
        if (!el) return;
        const layers = el.querySelectorAll<HTMLElement>("[data-depth]");
        layers.forEach((l) => {
          const d = parseFloat(l.dataset.depth || "0");
          l.style.transform = `translate3d(0, ${y * d}px, 0)`;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  // Mouse-reactive lighting
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.background = `radial-gradient(600px circle at ${cx}px ${cy}px, oklch(0.78 0.16 60 / 0.18), transparent 60%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -Math.random() * 0.3 - 0.05,
      a: Math.random() * 0.6 + 0.2,
      teal: Math.random() > 0.85,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        if (p.teal) {
          grd.addColorStop(0, `rgba(150, 220, 220, ${p.a})`);
          grd.addColorStop(1, "rgba(150, 220, 220, 0)");
        } else {
          grd.addColorStop(0, `rgba(255, 200, 120, ${p.a})`);
          grd.addColorStop(1, "rgba(255, 200, 120, 0)");
        }
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* deep base */}
      <div className="absolute inset-0 bg-[var(--color-ink)]" />

      {/* themed parallax image stack — drifts on scroll */}
      <div ref={parallaxRef} className="absolute inset-0">
        <div data-depth="-0.15" className="absolute -left-[10%] top-[10vh] h-[70vh] w-[55vw] opacity-[0.18] will-change-transform">
          <img src={bgNeural} alt="" className="h-full w-full object-cover" style={{ maskImage: "radial-gradient(closest-side, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(closest-side, black 30%, transparent 75%)" }} />
        </div>
        <div data-depth="-0.08" className="absolute right-[-8%] top-[110vh] h-[80vh] w-[60vw] opacity-[0.16] will-change-transform">
          <img src={bgSound} alt="" className="h-full w-full object-cover" style={{ maskImage: "radial-gradient(closest-side, black 25%, transparent 75%)", WebkitMaskImage: "radial-gradient(closest-side, black 25%, transparent 75%)" }} />
        </div>
        <div data-depth="-0.12" className="absolute left-[-5%] top-[230vh] h-[80vh] w-[60vw] opacity-[0.15] will-change-transform">
          <img src={bgWellness} alt="" className="h-full w-full object-cover" style={{ maskImage: "radial-gradient(closest-side, black 25%, transparent 75%)", WebkitMaskImage: "radial-gradient(closest-side, black 25%, transparent 75%)" }} />
        </div>
      </div>

      {/* slow rotating ambient gold blob */}
      <div className="absolute -top-1/3 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full opacity-50 animate-pulse-glow"
           style={{ background: "radial-gradient(closest-side, oklch(0.74 0.16 55 / 0.35), transparent 70%)" }} />
      <div className="absolute bottom-[-20%] left-[-10%] h-[80vh] w-[80vh] rounded-full opacity-40 animate-pulse-glow"
           style={{ background: "radial-gradient(closest-side, oklch(0.78 0.09 195 / 0.25), transparent 70%)", animationDelay: "1.5s" }} />
      {/* particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* mouse glow */}
      <div ref={glowRef} className="absolute inset-0" />
      {/* grain */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
           }}
      />
      {/* vignette */}
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(120% 80% at 50% 50%, transparent 50%, oklch(0 0 0 / 0.7) 100%)" }} />
    </div>
  );
}
