export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_var(--color-gold)]" />
          <span className="font-display text-xl tracking-[0.4em] text-foreground">NEXORA</span>
        </a>
        <nav className="hidden items-center gap-10 text-[0.72rem] tracking-[0.3em] uppercase text-muted-foreground md:flex">
          <a href="#neuro" className="transition-colors hover:text-gold">Neuroscience</a>
          <a href="#music" className="transition-colors hover:text-gold">Sound</a>
          <a href="#wellness" className="transition-colors hover:text-gold">Wellness</a>
          <a href="#programs" className="transition-colors hover:text-gold">Programs</a>
          <a href="#community" className="transition-colors hover:text-gold">Community</a>
        </nav>
        <a href="#waitlist" className="btn-ghost-gold !py-2.5 !px-5 text-[0.7rem]">Waitlist</a>
      </div>
    </header>
  );
}
