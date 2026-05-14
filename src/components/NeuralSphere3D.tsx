import { useEffect, useRef } from "react";

/**
 * 3D rotating neural sphere — pure canvas 2D with perspective projection.
 * Nodes orbit on a sphere, edges connect nearest neighbours, glow in gold/teal.
 * Reacts to mouse for tilt + auto-rotates. No external 3D libs.
 */
export function NeuralSphere3D({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, cx = 0, cy = 0, R = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = canvas.width = Math.floor(r.width * dpr);
      h = canvas.height = Math.floor(r.height * dpr);
      cx = w / 2; cy = h / 2;
      R = Math.min(w, h) * 0.36;
    };
    resize();

    // Fibonacci sphere distribution
    const N = 110;
    type Node = { x: number; y: number; z: number; pulse: number };
    const nodes: Node[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const yy = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - yy * yy);
      const theta = phi * i;
      nodes.push({
        x: Math.cos(theta) * radius,
        y: yy,
        z: Math.sin(theta) * radius,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Pre-compute edges (k-nearest)
    const edges: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const dists: { j: number; d: number }[] = [];
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        dists.push({ j, d: dx * dx + dy * dy + dz * dz });
      }
      dists.sort((a, b) => a.d - b.d);
      for (let k = 0; k < 3; k++) {
        const j = dists[k].j;
        if (j > i) edges.push([i, j]);
      }
    }

    let mx = 0, my = 0, tmx = 0, tmy = 0;
    const onMove = (e: MouseEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 1.2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    window.addEventListener("mousemove", onMove);

    let t = 0;
    let raf = 0;
    const FOCAL = 1.8;

    const draw = () => {
      t += 0.0035;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      // trail-fade for soft motion blur
      ctx.fillStyle = "rgba(8, 6, 12, 0.18)";
      ctx.fillRect(0, 0, w, h);

      const ay = t + mx * 0.6;
      const ax = my * 0.5;
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const cosX = Math.cos(ax), sinX = Math.sin(ax);

      // project nodes
      const proj = nodes.map((n) => {
        // rotate Y
        let x = n.x * cosY - n.z * sinY;
        let z = n.x * sinY + n.z * cosY;
        let y = n.y;
        // rotate X
        const y2 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;
        const persp = FOCAL / (FOCAL + z2);
        return {
          sx: cx + x * R * persp,
          sy: cy + y2 * R * persp,
          depth: z2, // -1 (back) .. 1 (front)
          persp,
        };
      });

      // edges
      ctx.lineWidth = 1 * dpr;
      for (const [a, b] of edges) {
        const pa = proj[a], pb = proj[b];
        const avgZ = (pa.depth + pb.depth) / 2;
        const alpha = Math.max(0, (avgZ + 1) / 2) * 0.55;
        if (alpha < 0.02) continue;
        const grd = ctx.createLinearGradient(pa.sx, pa.sy, pb.sx, pb.sy);
        grd.addColorStop(0, `rgba(255, 200, 110, ${alpha * 0.9})`);
        grd.addColorStop(1, `rgba(120, 220, 220, ${alpha * 0.7})`);
        ctx.strokeStyle = grd;
        ctx.beginPath();
        ctx.moveTo(pa.sx, pa.sy);
        ctx.lineTo(pb.sx, pb.sy);
        ctx.stroke();
      }

      // nodes (sorted back→front)
      const order = proj
        .map((p, i) => ({ p, i }))
        .sort((u, v) => u.p.depth - v.p.depth);

      for (const { p, i } of order) {
        const front = (p.depth + 1) / 2; // 0..1
        const node = nodes[i];
        const pulse = 0.7 + Math.sin(t * 4 + node.pulse) * 0.3;
        const size = (1.4 + front * 2.8) * dpr * pulse;
        const a = 0.25 + front * 0.75;

        const grd = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, size * 5);
        grd.addColorStop(0, `rgba(255, 220, 150, ${a})`);
        grd.addColorStop(0.4, `rgba(255, 170, 80, ${a * 0.4})`);
        grd.addColorStop(1, `rgba(255, 170, 80, 0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 240, 210, ${a})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // central core glow
      const coreR = R * 0.55;
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
      core.addColorStop(0, "rgba(255, 200, 110, 0.22)");
      core.addColorStop(0.5, "rgba(255, 140, 60, 0.08)");
      core.addColorStop(1, "rgba(255, 140, 60, 0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className={`pointer-events-none h-full w-full ${className}`} />;
}
