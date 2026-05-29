import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="waitlist" className="relative py-32 md:py-44">
      {/* Atmospheric glow */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[100vh] w-[100vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 animate-pulse-glow"
             style={{ background: "radial-gradient(closest-side, oklch(0.77 0.13 85 / 0.28), transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <div className="reveal eyebrow justify-center">Limited Access</div>
        <h2 className="reveal font-display mt-8 text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02]"
            style={{ transitionDelay: "0.15s" }}>
          Enter the <span className="italic text-gold-gradient">experience.</span>
        </h2>
        <p className="reveal mt-8 text-base text-muted-foreground md:text-lg" style={{ transitionDelay: "0.3s" }}>
          A private invitation to the founding circle.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="reveal mx-auto mt-12 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row"
          style={{ transitionDelay: "0.45s" }}
        >
          <div className="relative flex-1">
            <div className="pointer-events-none absolute -inset-px rounded-full opacity-60 blur-md"
                 style={{ background: "linear-gradient(90deg, oklch(0.77 0.13 85 / 0.5), oklch(0.40 0.04 250 / 0.4))" }} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="relative w-full rounded-full border border-gold/30 bg-ink/70 px-7 py-4 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/60 outline-none backdrop-blur-md transition-all focus:border-gold focus:bg-ink/90 focus:shadow-[0_0_40px_-10px_var(--color-gold)]"
            />
          </div>
          <button type="submit" className="btn-gold justify-center">
            {sent ? "Welcome ✦" : "Request Access"}
          </button>
        </form>

        <p className="reveal mt-6 text-xs tracking-[0.25em] uppercase text-muted-foreground/70"
           style={{ transitionDelay: "0.55s" }}>
          By application only · Discretion assured
        </p>
      </div>
    </section>
  );
}
