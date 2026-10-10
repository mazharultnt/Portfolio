"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { Close, Menu } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={`${site.name}, home`}>
            <span className="brand-mark">M</span>
            <span>{site.firstName}</span>
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${isActive(l.href) ? "active" : ""}`}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link href="/contact" className="btn btn-primary btn-sm">
              Hire me
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`mobile-link ${isActive(l.href) ? "active" : ""}`}
            tabIndex={open ? 0 : -1}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" tabIndex={open ? 0 : -1}>
          Hire me
        </Link>
      </div>
    </>
  );
}
