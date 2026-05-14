import { useEffect, useRef } from "react";

/**
 * Cinematic canvas background — flowing animated "fluid" of gold/amber/teal blobs
 * that feel like a slow-motion luxury video loop. No external assets.
 */
export function CinematicCanvas({
  className = "",
  intensity = 1,
  hue = "gold", // gold | amber | teal | mixed
}: {
  className?: string;
  intensity?: number;
  hue?: "gold" | "amber" | "teal" | "mixed";
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = canvas.width = Math.floor(r.width * dpr);
      h = canvas.height = Math.floor(r.height * dpr);
    };
    resize();

    const palettes: Record<string, [number, number, number][]> = {
      gold:   [[255, 200, 110], [240, 170, 70], [255, 220, 150]],
      amber:  [[255, 160, 70],  [255, 110, 50], [255, 200, 120]],
      teal:   [[120, 220, 220], [80, 180, 200], [200, 240, 230]],
      mixed:  [[255, 200, 110], [120, 220, 220], [255, 130, 60]],
    };
    const colors = palettes[hue];

    type Blob = { x:number; y:number; r:number; vx:number; vy:number; c:[number,number,number]; ph:number };
    const blobs: Blob[] = Array.from({ length: 7 }, (_, i) => ({
      x: Math.random() * 1, y: Math.random() * 1,
      r: 0.35 + Math.random() * 0.45,
      vx: (Math.random() - 0.5) * 0.00015,
      vy: (Math.random() - 0.5) * 0.00015,
      c: colors[i % colors.length],
      ph: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    let raf = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "screen";
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1;
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1;
        const px = (b.x + Math.sin(t + b.ph) * 0.05) * w;
        const py = (b.y + Math.cos(t * 0.8 + b.ph) * 0.05) * h;
        const pr = b.r * Math.min(w, h) * (0.9 + Math.sin(t + b.ph) * 0.1);
        const grd = ctx.createRadialGradient(px, py, 0, px, py, pr);
        const [r, g, bl] = b.c;
        const a = 0.22 * intensity;
        grd.addColorStop(0, `rgba(${r},${g},${bl},${a})`);
        grd.addColorStop(0.5, `rgba(${r},${g},${bl},${a * 0.35})`);
        grd.addColorStop(1, `rgba(${r},${g},${bl},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [hue, intensity]);

  return <canvas ref={ref} className={`pointer-events-none h-full w-full ${className}`} />;
}
