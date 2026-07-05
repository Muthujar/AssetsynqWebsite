import {
  GraduationCap,
  Cloud,
  RefreshCcw,
  Headphones,
  Bell,
  LineChart,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/feature-card";

const included = [
  {
    icon: GraduationCap,
    title: "Setup & Training",
    description: "We create your account, schemes, and train staff (first year).",
  },
  {
    icon: Cloud,
    title: "Cloud Access",
    description: "Mobile companion on phone. Full desktop on PC. Data stored safely online.",
  },
  {
    icon: RefreshCcw,
    title: "Yearly Updates",
    description: "Software updates included with your renewal.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Phone and WhatsApp help during business hours.",
  },
];

const comingSoon = [
  { icon: LineChart, label: "Advanced analytics" },
  { icon: Bell, label: "SMS & payment reminders" },
];

export function PlanIncluded() {
  return (
    <section id="included" className="bg-background py-16 sm:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Included"
          title="What you get with your plan"
          description="Not just software — we help you start and stay running."
        />

        <div className="mt-10 overflow-hidden rounded-2xl bg-vault shadow-xl ring-1 ring-gold/20">
          <div className="h-1 bg-brand-gradient" aria-hidden="true" />
          <div className="grid gap-px bg-dark-border sm:grid-cols-2 lg:grid-cols-4">
            {included.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col bg-vault p-5 sm:p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-bright ring-1 ring-gold/25">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-dark-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-muted">
          <CheckCircle className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>
            Cloud backup • Unlimited users • Bulk import from Excel • Printable
            receipts
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl border border-dashed border-border bg-surface px-5 py-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Coming soon
          </span>
          {comingSoon.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm text-muted"
            >
              <Icon className="h-4 w-4 opacity-40" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
