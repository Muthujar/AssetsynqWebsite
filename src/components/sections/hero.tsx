import { Button } from "@/components/ui/button";
import { LOGO } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-hero">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient"
        aria-hidden="true"
      />
      <div className="section-container py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.hero.width}
            height={LOGO.hero.height}
            className={`mx-auto ${LOGO.hero.className}`}
          />
          <p className="mb-4 mt-10 text-sm font-semibold tracking-wide text-amber-700 uppercase sm:text-base">
            Run your pawn shop and gold loans in one place
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            <span className="text-gradient">Pawn Broking</span> Management
            Software
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Manage customers, pledges, interest, repledges, auctions, and branch
            cash from one secure web app built for Indian pawn and gold-loan
            businesses.
          </p>
          <p className="mt-3 text-sm text-muted/80">
            Pledges, interest, cash &amp; branches — without spreadsheets. Tamil
            &amp; English interface available.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact" size="lg">
              Book a demo
            </Button>
            <Button href="#features" variant="secondary" size="lg">
              See features
            </Button>
          </div>
          <p className="mt-10 text-sm text-muted">
            Multi-branch • Org-secure login • Gold, silver &amp; platinum
            collateral
          </p>
        </div>
      </div>
    </section>
  );
}
