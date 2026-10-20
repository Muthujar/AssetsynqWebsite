import { Check } from "lucide-react";
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
    <article className="group flex gap-4 rounded-xl border border-border bg-gradient-to-br from-accent/5 via-surface to-surface p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-accent/30">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold leading-snug text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}

/** Simple check-list used across marketing sections */
export function CheckList({
  items,
  className,
  itemClassName,
  iconClassName,
}: {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn("flex items-start gap-2.5 text-left", itemClassName)}
        >
          <Check
            className={cn(
              "mt-0.5 h-5 w-5 shrink-0 text-accent",
              iconClassName,
            )}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
