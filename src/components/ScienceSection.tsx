import scienceImg from "@/assets/science-architecture.jpg";

export function ScienceSection() {
  return (
    <section id="founder-story" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        {/* Image - sticky on desktop to keep it balanced with long text */}
        <div className="reveal relative self-start lg:sticky lg:top-28">
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
              className="aspect-[4/3] sm:aspect-[4/5] w-full object-cover"
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
            The Story Behind Bridge Healing Alliance{" "}
            <br className="hidden sm:inline" />
            <span className="italic text-teal-gold-gradient">
              From Adversity to Purpose
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            <p className="font-display text-lg italic text-foreground/95 md:text-xl">
              Some moments divide our lives into <em>before</em> and <em>after</em>.
            </p>
            <p>They arrive differently for each of us.</p>
            
            <div className="space-y-2 py-2 font-display text-lg text-foreground/90 italic pl-4 border-l border-teal-soft/30">
              <p>A diagnosis.</p>
              <p>An injury.</p>
              <p>A loss.</p>
              <p>A season of uncertainty that changes everything.</p>
            </div>

            <p>
              Mine came through a life-altering health crisis that challenged nearly
              every part of who I believed myself to be.
            </p>
            <p>As I began rebuilding, I discovered something unexpected.</p>
            
            <p className="font-display text-lg italic text-foreground/90">
              Healing isn't simply about recovering what was lost.
            </p>
            
            <div className="space-y-2 py-1 text-foreground/90 font-medium">
              <p>It is about rebuilding confidence.</p>
              <p>Rediscovering purpose.</p>
              <p>Reclaiming identity.</p>
              <p>Finding the courage to move forward even when the destination isn't yet clear.</p>
            </div>

            <p>Progress rarely happens all at once.</p>
            <p>
              It is built through resilience, faith, perseverance, and the willingness
              to keep taking the next step.
            </p>
            <p>
              That journey transformed more than my life. It inspired a mission.
            </p>
            <p className="text-foreground/90">
              Bridge Healing Alliance was created so others facing life's greatest
              challenges would know they are not alone—that healing remains possible,
              hope can be renewed, and purpose can be rediscovered.
            </p>
            <p>
              Together with the Bridge Healing Experience™ and the NeuroSmooth
              Ecosystem™, our purpose is to help people reconnect with their strength,
              embrace new possibilities, and continue moving forward.
            </p>

            <p className="font-display text-lg italic text-foreground/95 md:text-xl pt-4">
              Because healing isn't measured only by what we recover.
              <br />
              It's measured by what we choose to build next.
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
