export function MissionStatement() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <div className="reveal eyebrow-teal justify-center">A Personal Rebuilding Movement</div>
        <h2
          className="reveal font-display mt-8 text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.08] text-foreground"
          style={{ transitionDelay: "0.1s" }}
        >
          What is{" "}
          <span className="italic text-teal-gold-gradient">
            Bridge Healing Alliance?
          </span>
        </h2>
        <div
          className="reveal mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ transitionDelay: "0.2s" }}
        >
          <p>
            Bridge Healing Alliance was created to help people move forward after
            life's greatest challenges.
          </p>
          <p>
            Whether those challenges come through illness, injury, trauma, loss,
            or unexpected change, we believe healing extends far beyond recovery.
          </p>
          <p>
            Through advocacy, education, community, and meaningful experiences,
            we help individuals rebuild strength, confidence, purpose, and
            possibility.
          </p>
          <p className="font-display text-lg italic text-foreground/95 md:text-xl pt-4">
            Because no one should have to rebuild alone.
          </p>
        </div>
        <div className="divider-teal mx-auto mt-12 w-40" />
      </div>
    </section>
  );
}
