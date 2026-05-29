export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-12">
      <div className="divider-glow mx-auto max-w-7xl" />
      <div className="mx-auto mt-16 grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_var(--color-gold)]" />
            <span className="font-display text-xl tracking-[0.38em]">BRIDGE HEALING ALLIANCE</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A premium neuro wellness universe — where the science of the mind
            meets the art of transformation.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[0.65rem] tracking-[0.4em] uppercase text-gold/80">Ecosystem</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><a className="transition-colors hover:text-gold" href="#ecosystem">Bridge Healing Alliance</a></li>
            <li><a className="transition-colors hover:text-gold" href="#experience">NeuroSmooth Jazz</a></li>
            <li><a className="transition-colors hover:text-gold" href="#experience">NeuroSmooth Flow</a></li>
            <li><a className="transition-colors hover:text-gold" href="#science">Science</a></li>
            <li><a className="transition-colors hover:text-gold" href="#community">Community</a></li>
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
        <span>© {new Date().getFullYear()} Bridge Healing Alliance · All rights reserved</span>
        <span>Crafted with intention</span>
      </div>
    </footer>
  );
}
