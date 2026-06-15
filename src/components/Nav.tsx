import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo-bridge.png.asset.json";

const logoUrl = logoAsset.url.startsWith("http")
  ? logoAsset.url
  : `https://project--c4bba4a8-dfa6-400d-9242-fabd5b306edf-dev.lovable.app${logoAsset.url}`;

export function Nav() {
  const links = [
    { href: "#ecosystem", label: "The Vision" },
    { href: "#experience", label: "The Method" },
    { href: "#founder-story", label: "Founder Story" },
  ];

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 animate-fade-in transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(10,12,16,0.7)",
              backdropFilter: "blur(14px) saturate(140%)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }
          : { background: "transparent" }
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Bridge Healing Alliance"
            className="h-24 w-auto md:h-32"
            style={{ filter: "drop-shadow(0 0 24px rgba(20,184,166,0.55)) drop-shadow(0 0 32px rgba(212,175,55,0.45))" }}
          />
        </a>
        <nav className="hidden items-center gap-9 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-teal-soft"
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
