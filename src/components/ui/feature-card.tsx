import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("section-heading", eyebrow && "mt-2")}>{title}</h2>
      {description && (
        <p className="section-subheading mx-auto">{description}</p>
      )}
      <div
        className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

/** Features section — icon left, text right, horizontal row */
export function HorizontalFeatureRow({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="group flex gap-4 rounded-xl border border-border bg-surface p-4 shadow-sm transition-shadow hover:shadow-md hover:ring-1 hover:ring-accent/10 sm:p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm shadow-accent/15">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold leading-snug text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}

/** Why choose section — gold left bar + large number */
export function AudienceStripCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <div className="flex w-14 shrink-0 flex-col items-center justify-center bg-gradient-to-b from-gold/20 to-gold/5 py-4 sm:w-16">
        <span className="font-mono text-lg font-bold text-gold-dim sm:text-xl">
          {number}
        </span>
      </div>
      <div className="border-l-2 border-gold/40 py-4 pl-4 pr-5 sm:py-5 sm:pl-5">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}

/** Benefits section — checklist row, no icon cards */
export function BenefitCheckItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-3 rounded-lg border border-border/60 bg-surface/80 px-4 py-3.5">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dim"
        aria-hidden="true"
      >
        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-0.5 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </li>
  );
}
