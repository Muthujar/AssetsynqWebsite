import Link from "next/link";
import { LOGO } from "@/lib/brand";
import { CONTACT, whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="section-dark border-t border-dark-border py-10">
      <div className="section-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Link
            href="#top"
            className="flex flex-col items-center gap-2 rounded-md outline-none ring-offset-4 ring-offset-dark focus-visible:ring-2 focus-visible:ring-accent sm:items-start"
            aria-label="AssetSynQ home"
          >
            <span className="rounded-lg bg-white px-3 py-1.5">
              <img
                src={LOGO.src}
                alt=""
                width={LOGO.footer.width}
                height={LOGO.footer.height}
                className={LOGO.footer.className}
              />
            </span>
            <span className="text-center text-sm text-dark-muted sm:text-start">
              © 2026 AssetSynq. All rights reserved.
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
                  className="transition-colors hover:text-accent"
                >
                  WhatsApp: {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="transition-colors hover:text-accent"
                >
                  Phone: {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <ul className="flex items-center justify-center gap-6 lg:justify-end">
              <li>
                <a
                  href="#contact"
                  className="text-sm text-dark-muted transition-colors hover:text-accent"
                >
                  Enquire
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-dark-muted transition-colors hover:text-accent"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-dark-muted transition-colors hover:text-accent"
                >
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
