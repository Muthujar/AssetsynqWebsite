import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="section-container py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium text-accent">
            Run your pawn shop and gold loans in one place — pledges, interest,
            cash, and branches, without spreadsheets.
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            AssetSynq — Pawn Broking Management Software
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Manage customers, pledges, interest, repledges, auctions, and branch
            cash from one secure web app built for Indian pawn and gold-loan
            businesses.
          </p>
          <p className="mt-3 text-sm text-muted/80">
            தமிழ் &amp; English interface available.
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
