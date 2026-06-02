import { useEffect, useRef } from "react";

/**
 * Restrained cinematic backdrop — soft gold/blue ambient orbs + slow gold
 * particle drift. No heavy image parallax. Premium and quiet.
 */
export function AmbientBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const count = window.innerWidth < 768 ? 14 : 28;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.08,
      vy: -Math.random() * 0.18 - 0.03,
      a: Math.random() * 0.5 + 0.2,
      teal: Math.random() > 0.55,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 9);
        if (p.teal) {
          grd.addColorStop(0, `rgba(94, 234, 212, ${p.a})`);
          grd.addColorStop(1, "rgba(94, 234, 212, 0)");
        } else {
          grd.addColorStop(0, `rgba(232, 200, 112, ${p.a})`);
          grd.addColorStop(1, "rgba(212, 175, 55, 0)");
        }
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 9, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-ink)]" />
      {/* slow gold halo top */}
      <div className="absolute -top-1/3 left-1/2 h-[110vh] w-[110vh] -translate-x-1/2 rounded-full opacity-40 animate-pulse-glow"
           style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.32), transparent 70%)" }} />
      {/* signature teal aurora — left */}
      <div className="absolute top-[10%] left-[-15%] h-[90vh] w-[90vh] rounded-full opacity-55"
           style={{ background: "radial-gradient(closest-side, rgba(20,184,166,0.45), transparent 70%)", animation: "teal-pulse 9s ease-in-out infinite", filter: "blur(20px)" }} />
      {/* deep teal glow — bottom right */}
      <div className="absolute bottom-[-20%] right-[-10%] h-[80vh] w-[80vh] rounded-full opacity-50"
           style={{ background: "radial-gradient(closest-side, rgba(14,124,112,0.65), transparent 70%)", animation: "teal-pulse 11s ease-in-out infinite", animationDelay: "2s" }} />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* grain */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
           style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
      {/* vignette */}
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.65) 100%)" }} />
    </div>
  );
}
