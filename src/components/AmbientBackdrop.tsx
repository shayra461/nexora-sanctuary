/**
 * Grounded premium backdrop — soft warm ambient gradient with subtle teal
 * accent. No drifting particles, no cosmic auras. Quiet and editorial.
 */
export function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-ink)]" />
      {/* warm low ambient wash — top */}
      <div
        className="absolute -top-1/4 left-1/2 h-[70vh] w-[110vh] -translate-x-1/2 rounded-full opacity-25"
        style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.18), transparent 70%)", filter: "blur(40px)" }}
      />
      {/* subtle teal accent — bottom right */}
      <div
        className="absolute bottom-[-15%] right-[-10%] h-[55vh] w-[55vh] rounded-full opacity-25"
        style={{ background: "radial-gradient(closest-side, rgba(20,184,166,0.22), transparent 70%)", filter: "blur(40px)" }}
      />
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 80% at 50% 40%, transparent 55%, rgba(0,0,0,0.7) 100%)" }}
      />
    </div>
  );
}
