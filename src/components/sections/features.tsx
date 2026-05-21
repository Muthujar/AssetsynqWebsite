import {
  LayoutDashboard,
  Users,
  Percent,
  RefreshCw,
  Wallet,
  FileBarChart,
  Settings,
  Upload,
  Shield,
  Languages,
  Bell,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: LayoutDashboard,
    title: "Live dashboard & vault view",
    description:
      "Active/closed pledges, principal balance, cash in hand, interest income, net profit, repledge counts, and auction summary. Vault custody split by gold, silver, platinum, and other metals.",
  },
  {
    icon: Users,
    title: "Customers & pledges",
    description:
      "Customer profiles with full loan history. Create pledges with scheme-based terms, multiple items per loan (qty, weight, photos, notes), and book reference numbers for register alignment.",
  },
  {
    icon: Percent,
    title: "Smart interest & lifecycle",
    description:
      "Simple interest before expiry; monthly compounding after expiry with penal rate fixed at creation. Partial/full payments, leniency days, and reloan with top-up or no-cash rollover.",
  },
  {
    icon: RefreshCw,
    title: "Repledge & auction",
    description:
      "Track repledges to external stores with bulk close. Schedule auction items, mark sold/unsold, and settle proceeds with correct allocation.",
  },
  {
    icon: Wallet,
    title: "Branch cash management",
    description:
      "Opening balance, auto calculation from transactions, and manual adjustments — expense, income, bank deposit/withdrawal, corrections — per branch.",
  },
  {
    icon: FileBarChart,
    title: "Reports",
    description:
      "Daily cash report, overdue report with days overdue and customer contact, and income summary. Expired and expiring-soon lists on the dashboard.",
  },
  {
    icon: Settings,
    title: "Masters & multi-branch",
    description:
      "Loan schemes, pledge item types, repledge stores, metal rates. Multi-branch setup with branch codes, per-branch cash settings, and user roles.",
  },
  {
    icon: Upload,
    title: "Operations at scale",
    description:
      "Bulk import loans from Excel template. Printable loan receipts, loan ledger per pledge, and batch create multiple loans for one customer.",
  },
  {
    icon: Shield,
    title: "Secure multi-tenant login",
    description:
      "Organization code + username + password. Each shop's data is fully isolated — no cross-org access.",
  },
  {
    icon: Languages,
    title: "Tamil & English UI",
    description:
      "Interface available in Tamil and English — built i18n-ready for your staff.",
  },
];

const comingSoon = [
  { icon: LineChart, label: "Advanced analytics" },
  { icon: Bell, label: "In-app notifications" },
];

export function Features() {
  return (
    <section id="features" className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="section-heading">Everything your shop needs</h2>
          <p className="section-subheading">
            From first pledge to auction settlement — built around how Indian
            pawn and gold-loan businesses actually work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-lg border border-dashed border-border bg-background px-5 py-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            Coming soon
          </span>
          {comingSoon.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm text-muted"
            >
              <Icon className="h-4 w-4 opacity-50" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
