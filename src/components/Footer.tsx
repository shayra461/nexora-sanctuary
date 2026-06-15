import logoAsset from "@/assets/logo-bridge.png.asset.json";

const logoUrl = logoAsset.url.startsWith("http")
  ? logoAsset.url
  : `https://project--c4bba4a8-dfa6-400d-9242-fabd5b306edf-dev.lovable.app${logoAsset.url}`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-12">
      <div className="divider-teal mx-auto max-w-7xl" />
      <div className="mx-auto mt-16 grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <img
            src={logoUrl}
            alt="Bridge Healing Alliance"
            className="h-36 w-auto md:h-48"
            style={{ filter: "drop-shadow(0 0 30px rgba(20,184,166,0.55)) drop-shadow(0 0 36px rgba(212,175,55,0.45))" }}
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A premium rebuilding movement — where lived experience becomes
            a vision for resilience, reinvention and purpose-driven leadership.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold/80">Bridge Healing Alliance</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><a className="transition-colors hover:text-gold" href="#ecosystem">The Vision</a></li>
            <li><a className="transition-colors hover:text-gold" href="#experience">NeuroSmooth Jazz™</a></li>
            <li><a className="transition-colors hover:text-gold" href="#experience">NeuroSmooth Flow™</a></li>
            <li><a className="transition-colors hover:text-gold" href="#founder-story">Founder Story</a></li>
            <li><a className="transition-colors hover:text-gold" href="#waitlist">Join the Movement</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold/80">Connect</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>hello@bridgehealing.com</li>
            <li>Founders Circle · By invitation</li>
          </ul>
          <div className="mt-8 flex gap-3">
            {["IG", "X", "VM", "YT"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-[0.65rem] tracking-[0.2em] text-gold/80 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="divider-glow mx-auto mt-16 max-w-7xl" />
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground/70 md:flex-row md:px-10">
        <span>© {new Date().getFullYear()} Bridge Healing Alliance™ · All rights reserved</span>
        <span>Crafted with intention</span>
      </div>
    </footer>
  );
}
