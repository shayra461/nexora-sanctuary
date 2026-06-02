import scienceImg from "@/assets/science-architecture.jpg";

const bullets = [
  "A framework forged through lived transformation",
  "Rituals and practices that rebuild strength and clarity",
  "Designed for leaders, creators and seekers ready to rise",
];

export function ScienceSection() {
  return (
    <section id="science" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        {/* Image */}
        <div className="reveal relative">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgba(20,184,166,0.25)",
              boxShadow:
                "0 60px 140px -40px rgba(0,0,0,0.95), 0 0 80px -20px rgba(20,184,166,0.35)",
            }}
          >
            <img
              src={scienceImg}
              alt="Architecture of personal transformation"
              loading="lazy"
              width={1536}
              height={1536}
              className="h-[60vh] w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(15,17,21,0.7) 100%), radial-gradient(80% 60% at 20% 0%, rgba(20,184,166,0.18), transparent 60%)",
              }}
            />
            <div className="absolute left-6 top-6 font-display text-xs tracking-[0.4em] uppercase text-teal-soft">
              The Story
            </div>
          </div>
          {/* dual halo */}
          <div
            className="pointer-events-none absolute -inset-12 -z-10 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(20,184,166,0.35), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(212,175,55,0.35), transparent 70%)",
            }}
          />
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="eyebrow-teal">Leadership Through Experience</div>
          <h2 className="font-display mt-7 text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.05] text-foreground">
            A life rebuilt —{" "}
            <span className="italic text-teal-gold-gradient">a framework for those ready to rise.</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            What started as a personal reckoning became a way of life — and then a
            method. Today, that framework guides others through reinvention,
            resilience and purpose-driven living.
          </p>
          <ul className="mt-12 space-y-5">
            {bullets.map((b, i) => (
              <li
                key={b}
                className="flex items-start gap-4 text-sm text-foreground/85 md:text-base"
              >
                <span
                  className="mt-2.5 inline-block h-px w-9"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(90deg, var(--color-teal), transparent)"
                        : "linear-gradient(90deg, var(--color-gold), transparent)",
                  }}
                />
                <span className="tracking-wide">{b}</span>
              </li>
            ))}
          </ul>
          <div className="divider-teal mt-12 w-48" />
        </div>
      </div>
    </section>
  );
}
