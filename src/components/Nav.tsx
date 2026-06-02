export function Nav() {
  const links = [
    { href: "#ecosystem", label: "The Framework" },
    { href: "#experience", label: "The Method" },
    { href: "#science", label: "The Story" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-7">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative inline-flex items-center justify-center">
            <span className="absolute inline-block h-3 w-3 rounded-full bg-teal opacity-40 animate-ping" style={{ background: "var(--color-teal)" }} />
            <span
              className="relative inline-block h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--color-teal-soft), var(--color-gold))",
                boxShadow: "0 0 14px var(--color-teal), 0 0 22px rgba(212,175,55,0.55)",
              }}
            />
          </span>
          <span className="font-display text-lg tracking-[0.32em] text-foreground whitespace-nowrap">NEUROSMOOTH ECOSYSTEM</span>
        </a>
        <nav className="hidden items-center gap-9 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-teal-soft"
              style={{ color: undefined }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#waitlist" className="btn-ghost-teal !py-2.5 !px-5 text-[0.68rem]">Join the Movement</a>
      </div>
    </header>
  );
}
