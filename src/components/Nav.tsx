export function Nav() {
  const links = [
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#experience", label: "Experience" },
    { href: "#science", label: "Science" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-7">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_var(--color-gold)]" />
          <span className="font-display text-lg tracking-[0.38em] text-foreground">BRIDGE</span>
        </a>
        <nav className="hidden items-center gap-9 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold">{l.label}</a>
          ))}
        </nav>
        <a href="#waitlist" className="btn-ghost-gold !py-2.5 !px-5 text-[0.68rem]">Waitlist</a>
      </div>
    </header>
  );
}
