import communityImg from "@/assets/community-emotion.jpg";

export function CommunitySection() {
  return (
    <section id="community" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal relative overflow-hidden rounded-3xl border border-gold/15">
          <img
            src={communityImg}
            alt="A community gathered in soft golden light"
            loading="lazy"
            width={1920}
            height={1280}
            className="h-[70vh] w-full object-cover md:h-[80vh]"
          />
          <div className="absolute inset-0"
               style={{ background: "linear-gradient(180deg, rgba(15,17,21,0.4) 0%, rgba(15,17,21,0.95) 90%)" }} />
          <div className="absolute inset-0 flex items-end p-8 md:p-16">
            <div className="max-w-2xl">
              <div className="eyebrow">The Movement</div>
              <h2 className="font-display mt-7 text-[clamp(2rem,5vw,4.6rem)] leading-[1.05] text-foreground">
                A global community of{" "}
                <span className="italic text-gold-gradient">elevated minds.</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A constellation of seekers, healers and creators — connected
                through shared rebuilding and a quiet commitment to grow,
                heal and elevate together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
