import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="waitlist" className="relative py-28 md:py-36">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-1/2 h-[90vh] w-[90vh] -translate-y-1/2 rounded-full opacity-55"
             style={{ background: "radial-gradient(closest-side, rgba(20,184,166,0.42), transparent 70%)", animation: "teal-pulse 10s ease-in-out infinite" }} />
        <div className="absolute right-[15%] top-1/2 h-[80vh] w-[80vh] -translate-y-1/2 rounded-full opacity-45 animate-pulse-glow"
             style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.35), transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <div className="reveal eyebrow-teal justify-center">The Founders Circle · By Invitation</div>
        <h2 className="reveal font-display mt-8 text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02]"
            style={{ transitionDelay: "0.15s" }}>
          Step into the <span className="italic text-teal-gold-gradient">next version of you</span>.
        </h2>
        <p className="reveal mt-8 text-base text-muted-foreground md:text-lg" style={{ transitionDelay: "0.3s" }}>
          Join the founding circle for early access to the framework, intimate
          updates from the journey, and an invitation into a global movement of
          leaders rebuilding stronger lives.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="reveal mx-auto mt-14 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row"
          style={{ transitionDelay: "0.45s" }}
        >
          <div className="relative flex-1">
            <div className="pointer-events-none absolute -inset-px rounded-full opacity-70 blur-md"
                 style={{ background: "linear-gradient(90deg, rgba(20,184,166,0.6), rgba(212,175,55,0.55))" }} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              aria-label="Email address"
              className="relative w-full rounded-full bg-ink/70 px-7 py-4 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/60 outline-none backdrop-blur-md transition-all"
              style={{ border: "1px solid rgba(20,184,166,0.4)" }}
            />
          </div>
          <button type="submit" className="btn-teal justify-center">
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
