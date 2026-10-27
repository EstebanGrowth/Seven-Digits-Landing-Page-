"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "./Icons";

const links = [
  { href: "/#book", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled || open ? " scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="wordmark" aria-label="Seven Digits home" onClick={close}>
            <LogoMark />
            <span>Seven Digits</span>
          </Link>

          <nav className="nav-desktop" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="/#book" className="btn btn-primary btn-sm">
              Book a Free Strategy Call
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle-bars" />
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" className="nav-mobile" aria-label="Mobile">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={close}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/#book" className="btn btn-primary" onClick={close}>
              Book a Free Strategy Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
