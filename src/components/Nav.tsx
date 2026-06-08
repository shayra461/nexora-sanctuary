import logoAsset from "@/assets/logo-bridge.png.asset.json";

export function Nav() {
  const links = [
    { href: "#ecosystem", label: "The Vision" },
    { href: "#experience", label: "The Method" },
    { href: "#science", label: "The Story" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Bridge Healing Alliance"
            className="h-12 w-auto md:h-16"
            style={{ filter: "drop-shadow(0 0 18px rgba(20,184,166,0.35)) drop-shadow(0 0 22px rgba(212,175,55,0.25))" }}
          />
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
