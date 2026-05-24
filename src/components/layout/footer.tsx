import Link from "next/link";
import { LOGO } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="section-dark border-t border-dark-border py-10">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            href="#top"
            className="flex flex-col items-center gap-2 rounded-md outline-none ring-offset-4 ring-offset-dark focus-visible:ring-2 focus-visible:ring-accent sm:flex-row sm:gap-3"
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
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6">
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
