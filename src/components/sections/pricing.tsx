import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  formatInr,
  PLAN_FEATURES,
  PRICING,
} from "@/lib/pricing";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";

function PriceBlock({
  label,
  listPrice,
  offerPrice,
  size = "lg",
}: {
  label: string;
  listPrice: number;
  offerPrice: number;
  size?: "lg" | "md";
}) {
  const isLarge = size === "lg";

  return (
    <div className="text-center">
      <p className="text-sm text-dark-muted">{label}</p>
      <p
        className={`mt-1 font-medium text-dark-muted/70 line-through ${
          isLarge ? "text-lg" : "text-base"
        }`}
      >
        {formatInr(listPrice)}
        <span className="text-sm font-normal"> / year</span>
      </p>
      <div className="mt-1 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
        <span
          className={`font-bold tracking-tight text-dark-foreground ${
            isLarge ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {formatInr(offerPrice)}
        </span>
        <span className="text-dark-muted">/ year</span>
      </div>
      <span className="mt-2 inline-block rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
        Offer price
      </span>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section-dark py-16 sm:py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-heading">Simple yearly pricing</h2>
          <p className="section-subheading mx-auto">
            One plan. All features. We help you set up from your register.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <article className="relative flex flex-col rounded-2xl border border-accent/50 bg-dark-elevated p-8 shadow-lg shadow-accent/15 ring-1 ring-accent/25 sm:p-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
              Special offer
            </span>

            <p className="text-center text-sm font-medium uppercase tracking-wide text-accent">
              {PRICING.planName}
            </p>
            <h3 className="mt-1 text-center text-lg font-semibold text-dark-foreground">
              Yearly plan — 1 branch included
            </h3>

            <div className="mt-8">
              <PriceBlock
                label="First year"
                listPrice={PRICING.firstYear.list}
                offerPrice={PRICING.firstYear.offer}
              />
            </div>

            <div className="mt-8 rounded-xl border border-dark-border bg-dark/40 px-5 py-5">
              <PriceBlock
                label="Renewal from year 2"
                listPrice={PRICING.renewal.list}
                offerPrice={PRICING.renewal.offer}
                size="md"
              />
            </div>

            <ul className="mt-8 space-y-3">
              {PLAN_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-dark-muted">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                variant="whatsapp"
                className="flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </Button>
              <Button href="#contact" variant="secondary" className="flex-1">
                Enquiry form
              </Button>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-dark-border bg-dark-elevated/50 px-5 py-4">
          <h4 className="text-sm font-semibold text-dark-foreground">
            Multiple shop locations?
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-dark-muted">
            Each additional branch:{" "}
            <span className="text-dark-muted/70 line-through">
              {formatInr(PRICING.extraBranch.list)}
            </span>{" "}
            <strong className="font-medium text-emerald-400">
              {formatInr(PRICING.extraBranch.offer)}/year
            </strong>
            . Every branch gets its own code, cash till, and reports.
          </p>
          <p className="mt-2 text-xs text-dark-muted/70">
            Example: 2 branches ={" "}
            {formatInr(PRICING.firstYear.offer + PRICING.extraBranch.offer)}{" "}
            first year (offer), then{" "}
            {formatInr(PRICING.renewal.offer + PRICING.extraBranch.offer)}
            /year renewal.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-dark-muted">
          Secure cloud hosting, backups, and updates included. GST extra as
          applicable.
        </p>
      </div>
    </section>
  );
}
