import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="waitlist" className="relative py-28 md:py-36">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[110vh] w-[110vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 animate-pulse-glow"
             style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.3), transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <div className="reveal eyebrow justify-center">Private Access</div>
        <h2 className="reveal font-display mt-8 text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02]"
            style={{ transitionDelay: "0.15s" }}>
          Be among the first to <span className="italic text-gold-gradient">enter</span>.
        </h2>
        <p className="reveal mt-8 text-base text-muted-foreground md:text-lg" style={{ transitionDelay: "0.3s" }}>
          Join the founding circle for early access, cinematic updates and a
          quiet sanctuary delivered to your inbox.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="reveal mx-auto mt-14 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row"
          style={{ transitionDelay: "0.45s" }}
        >
          <div className="relative flex-1">
            <div className="pointer-events-none absolute -inset-px rounded-full opacity-60 blur-md"
                 style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.5), rgba(61,77,99,0.5))" }} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              aria-label="Email address"
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
