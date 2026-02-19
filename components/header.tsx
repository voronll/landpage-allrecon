"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Dor", href: "#dor" },
  { label: "Produto", href: "#produto" },
  { label: "História", href: "#historia" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-50 w-full",
        "transition-all duration-200",
        compact
          ? "bg-[#FAFAFA]/90 backdrop-blur border-b border-black/5 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={[
            "flex items-center justify-between gap-4",
            "transition-all duration-200",
            compact ? "py-3" : "py-6",
          ].join(" ")}
        >
          {/* Brand */}
          <a
            href="#inicio"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#233764]" />
            <span className="text-slate-900">AllRecon</span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className={[
                "rounded-xl border border-black/10",
                "px-4 py-2 text-sm",
                "text-slate-900 hover:bg-black/5 transition-colors",
              ].join(" ")}
            >
              Falar com a equipe
            </a>
            <a
              href="#produto"
              className={[
                "rounded-xl px-4 py-2 text-sm font-medium",
                "bg-[#233764] text-white",
                "hover:opacity-95 transition-opacity",
              ].join(" ")}
            >
              Ver o produto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
