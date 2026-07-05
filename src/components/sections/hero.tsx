import { Button } from "@/components/ui/button";
import { PRODUCT_SCREENSHOTS } from "@/lib/brand";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";
import { formatInr, PRICING } from "@/lib/pricing";
import { Cloud, Languages, GraduationCap, Smartphone } from "lucide-react";

const trustPills = [
  { icon: Cloud, label: "Cloud based" },
  { icon: Smartphone, label: "Mobile companion" },
  { icon: Languages, label: "Tamil & English" },
  { icon: GraduationCap, label: "Setup included" },
];

function HeroVisual() {
  const { dashboard } = PRODUCT_SCREENSHOTS;

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-0 h-40 w-40 rounded-full bg-gold/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-accent/10 ring-1 ring-gold/15">
        <div className="flex items-center gap-2 border-b border-border bg-background/80 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <p className="mx-auto truncate text-xs font-medium text-muted">
            AssetSynq — Gold Finance dashboard
          </p>
        </div>

        <img
          src={dashboard.src}
          alt={dashboard.alt}
          width={dashboard.width}
          height={dashboard.height}
          className="block w-full"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="absolute -left-2 top-10 hidden rounded-lg border border-gold/30 bg-surface px-3 py-2 shadow-md sm:block">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gold-dim">
          Vault view
        </p>
        <p className="text-xs font-bold text-foreground">Gold · Silver</p>
      </div>
      <div className="absolute -right-1 bottom-12 hidden rounded-lg border border-accent/20 bg-surface px-3 py-2 shadow-md sm:block">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-accent">
          Live dashboard
        </p>
        <p className="text-xs font-bold text-foreground">Cash &amp; pledges</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-hero">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient"
        aria-hidden="true"
      />

      <div className="section-container py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Pawn shop software
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Pawn &amp;{" "}
              <span className="text-gradient">Gold Loan</span> Software for
              Pawnshops
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
              Manage loans, customers, interest, repledge, and reports in one
              place. Built for Indian pawn and gold-loan shops.
            </p>
            <p className="mt-3 text-base text-muted">
              We set up your account for you — no install needed.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </Button>
              <Button href="#pricing" variant="secondary" size="lg">
                See pricing
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {trustPills.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-6 inline-flex items-center rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-foreground">
              From {formatInr(PRICING.firstYear.offer)}/year · 1 branch ·
              Unlimited users
            </p>
          </div>

          {/* Visual */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
