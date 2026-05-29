import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/70 backdrop-blur-xl border-b border-gold/10" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_var(--color-gold)]" />
          <span className="font-display text-base tracking-[0.4em] text-foreground">BRIDGE</span>
        </a>
        <nav className="hidden items-center gap-10 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground md:flex">
          <a href="#ecosystem" className="transition-colors hover:text-gold">Ecosystem</a>
          <a href="#science" className="transition-colors hover:text-gold">Science</a>
          <a href="#experience" className="transition-colors hover:text-gold">Experience</a>
          <a href="#community" className="transition-colors hover:text-gold">Movement</a>
        </nav>
        <a href="#waitlist" className="btn-ghost-gold !py-2.5 !px-5 text-[0.68rem]">Join</a>
      </div>
    </header>
  );
}
