import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/lib/brand";
import { CONTACT, whatsappUrl } from "@/lib/contact";

const footerLinks = [
  { href: "/pawn-shop-software", label: "Pawn shop software" },
  { href: "/gold-loan-software", label: "Gold loan software" },
  { href: "/pawn-broker-software", label: "Pawn broker software" },
  { href: "/pawn-shop-software/chennai", label: "Chennai" },
  { href: "/pawn-shop-software/dubai", label: "Dubai" },
  { href: "/#contact", label: "Enquire" },
];

export function Footer() {
  return (
    <footer className="section-dark border-t border-dark-border py-10">
      <div className="section-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 rounded-md outline-none ring-offset-4 ring-offset-dark focus-visible:ring-2 focus-visible:ring-accent sm:items-start"
            aria-label="AssetSynQ home"
          >
            <Image
              src={LOGO.lightSrc}
              alt=""
              width={LOGO.footer.width}
              height={LOGO.footer.height}
              className={LOGO.footer.className}
            />
            <span className="text-center text-sm text-dark-muted sm:text-start">
              © {new Date().getFullYear()} AssetSynQ. All rights reserved.
            </span>
          </Link>

          <div className="text-center sm:text-start">
            <p className="text-sm font-medium text-dark-foreground">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-dark-muted">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-bright"
                >
                  WhatsApp: {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  Phone: {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="text-center sm:text-start">
            <p className="text-sm font-medium text-dark-foreground">Software</p>
            <ul className="mt-3 space-y-2 text-sm text-dark-muted">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-gold-bright"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
