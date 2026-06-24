import scienceImg from "@/assets/science-architecture.jpg";

export function ScienceSection() {
  return (
    <section id="founder-story" className="relative py-24 md:py-32">
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
              alt="Founder's journey of resilience and renewal"
              loading="lazy"
              width={1536}
              height={1536}
              className="h-[72vh] w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(15,17,21,0.7) 100%), radial-gradient(80% 60% at 20% 0%, rgba(20,184,166,0.18), transparent 60%)",
              }}
            />
            <div className="absolute left-6 top-6 font-display text-sm md:text-base tracking-[0.45em] uppercase text-teal-soft">
              Founder's Story
            </div>
          </div>
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
          <div className="eyebrow-teal text-base md:text-lg tracking-[0.45em]">Founder's Story</div>
          <h2 className="font-display mt-7 text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.05] text-foreground">
            From a life-altering crisis —{" "}
            <span className="italic text-teal-gold-gradient">
              a movement was born.
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            <p className="font-display text-lg italic text-foreground/95 md:text-xl">
              Some experiences change the course of a life.
            </p>
            <p>
              What began as a life-altering challenge became a deeper
              understanding of resilience, healing, and the power of rebuilding
              from within.
            </p>
            <p>
              During a season marked by uncertainty, loss of independence, and
              the challenge of starting over, founder LBJ discovered that
              healing is about more than recovery. It is about restoring
              confidence, reclaiming purpose, and creating new possibilities
              for the future.
            </p>
            <p className="text-foreground/90">
              That experience inspired the creation of{" "}
              <span className="text-teal-gold-gradient italic">
                Bridge Healing Alliance
              </span>
              —a movement dedicated to helping individuals move forward through
              life's greatest challenges.
            </p>
            <p>
              Today, our mission is to provide pathways for healing,
              resilience, growth, and renewal through advocacy, education,
              meaningful experiences, and community.
            </p>
            <p className="font-display text-lg italic text-foreground/95 md:text-xl">
              Because healing is not simply about what we overcome.
              <br />
              It is about what we build next.
            </p>
            <p className="mt-4 text-sm tracking-[0.25em] uppercase text-teal-soft">
              — LBJ · Founder, Bridge Healing Alliance™
            </p>
          </div>

          <div className="mt-10">
            <a href="#waitlist" className="btn-teal">
              Begin Your Journey <span aria-hidden>→</span>
            </a>
          </div>

          <div className="divider-teal mt-12 w-48" />
        </div>
      </div>
    </section>
  );
}
