export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © 2026 AssetSynq. All rights reserved.
          </p>
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-foreground"
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
