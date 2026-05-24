"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/brand";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      id="top"
      className={cn(
        "site-header sticky top-0 z-50 transition-shadow",
        scrolled && "site-header-scrolled",
      )}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="AssetSynQ home"
        >
          <img
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.header.width}
            height={LOGO.header.height}
            className={LOGO.header.className}
          />
        </a>

        <nav
          className={cn(
            "fixed inset-0 top-16 z-40 flex flex-col gap-6 bg-surface p-6 transition-transform md:static md:inset-auto md:top-auto md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0",
            open ? "translate-x-0" : "translate-x-full md:translate-x-0",
          )}
          aria-label="Main"
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground md:px-0 md:py-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-border pt-4 md:flex-row md:items-center md:border-0 md:pt-0">
            <Button
              href="https://app.assetsynq.com"
              variant="ghost"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Login
            </Button>
            <Button
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              variant="whatsapp"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              WhatsApp
            </Button>
            <Button href="#contact" variant="secondary" size="sm" onClick={closeMenu}>
              Enquire
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className="relative z-50 rounded-lg p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
