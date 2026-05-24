import { Button } from "@/components/ui/button";
import { LOGO } from "@/lib/brand";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";
import { formatInr, PRICING } from "@/lib/pricing";
import { Cloud, Languages, GraduationCap } from "lucide-react";

const trustPills = [
  { icon: Cloud, label: "Cloud based" },
  { icon: Languages, label: "Tamil & English" },
  { icon: GraduationCap, label: "Setup included" },
];

const showcaseTags = ["Loans & interest", "Branch cash", "Reports"];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-0 h-40 w-40 rounded-full bg-gold/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Gold ring */}
      <div
        className="pointer-events-none absolute inset-4 rounded-3xl border border-gold/20"
        aria-hidden="true"
      />

      {/* Main logo panel */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-xl shadow-accent/5 ring-1 ring-gold/15 sm:p-10">
        <div className="h-1 w-full rounded-full bg-brand-gradient" aria-hidden="true" />
        <div className="mt-8 flex flex-col items-center">
          <img
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.heroShowcase.width}
            height={LOGO.heroShowcase.height}
            className={LOGO.heroShowcase.className}
          />
          <p className="mt-6 text-center text-sm font-medium text-muted">
            Pawn &amp; gold-loan management — secure cloud software
          </p>
        </div>

        {/* Mini feature strip */}
        <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border pt-6">
          {showcaseTags.map((tag) => (
            <div
              key={tag}
              className="rounded-lg bg-accent-light/60 px-2 py-2 text-center text-[10px] font-semibold leading-tight text-foreground sm:text-xs"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-2 top-8 hidden rounded-lg border border-gold/30 bg-surface px-3 py-2 shadow-md sm:block">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gold-dim">
          Vault view
        </p>
        <p className="text-xs font-bold text-foreground">Gold · Silver</p>
      </div>
      <div className="absolute -right-1 bottom-12 hidden rounded-lg border border-accent/20 bg-surface px-3 py-2 shadow-md sm:block">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-accent">
          Cloud backup
        </p>
        <p className="text-xs font-bold text-foreground">Data safe</p>
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
