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
        <p
          className="reveal mt-8 text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ transitionDelay: "0.2s" }}
        >
          Bridge Healing Alliance is a premium personal rebuilding movement for
          individuals who have faced life's greatest challenges — and are ready
          to rebuild their strength, confidence, and purpose. Founded by a
          survivor. Built entirely from lived experience.
        </p>
        <div className="divider-teal mx-auto mt-12 w-40" />
      </div>
    </section>
  );
}
