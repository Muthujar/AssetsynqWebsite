import {
  Bell,
  BookOpen,
  Coins,
  Gem,
  Home,
  Landmark,
  LayoutDashboard,
  RefreshCw,
  Search,
  Settings,
  Smartphone,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/feature-card";

const mobileFeatures = [
  { icon: Search, title: "Find pledge" },
  { icon: Bell, title: "Overdue pledges" },
  { icon: Coins, title: "Cash Today" },
  { icon: RefreshCw, title: "Repledges" },
  { icon: Wallet, title: "Close pledge" },
  { icon: LayoutDashboard, title: "Today" },
];

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: BookOpen, label: "New", highlight: true },
  { icon: Bell, label: "Due" },
  { icon: Settings, label: "Settings" },
];

/** Same accent recipes as the app's KpiCard (soft wash, icon tile, bottom bar). */
const KPI_ACCENT = {
  violet: {
    wash: "from-accent/10",
    tile: "from-accent to-fuchsia-600 text-white",
    bar: "from-accent to-fuchsia-500",
  },
  navy: {
    wash: "from-navy/10",
    tile: "from-navy to-[#2d2f8f] text-white",
    bar: "from-navy to-[#2d2f8f]",
  },
  green: {
    wash: "from-success/10",
    tile: "from-success to-emerald-500 text-white",
    bar: "from-success to-emerald-400",
  },
  gold: {
    wash: "from-gold-bright/20",
    tile: "from-amber-400 to-gold-bright text-navy",
    bar: "from-amber-400 to-gold-bright",
  },
} as const;

// Sample figures for the mockup only.
const kpiTiles = [
  { label: "Cash in hand", value: "₹1.84L", change: "₹42.5K this month", icon: Wallet, accent: "violet" },
  { label: "Principal", value: "₹38.6L", change: "₹2.1L this month", icon: Landmark, accent: "navy" },
  { label: "Interest", value: "₹1.12L", change: "₹9.8K vs last", icon: TrendingUp, accent: "green" },
  { label: "Pledges", value: "248", change: "14 new", icon: Gem, accent: "gold" },
] as const;

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div
        className="pointer-events-none absolute -right-6 top-8 h-48 w-48 rounded-full bg-brand-gradient opacity-15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-[2rem] border-[6px] border-foreground/10 bg-foreground/5 p-2 shadow-2xl shadow-accent/10 ring-1 ring-border">
        <div className="overflow-hidden rounded-[1.4rem] bg-surface">
          <div className="flex items-center justify-between bg-hero px-4 py-3 text-white">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide opacity-80">
                On your phone
              </p>
              <p className="text-sm font-bold">AssetSynQ</p>
            </div>
            <Smartphone className="h-4 w-4 opacity-80" aria-hidden="true" />
          </div>

          <div className="space-y-3 p-4">
            <div className="grid grid-cols-2 gap-2">
              {kpiTiles.map(({ label, value, change, icon: Icon, accent }) => {
                const a = KPI_ACCENT[accent];
                return (
                  <div
                    key={label}
                    className={`relative overflow-hidden rounded-xl border border-border bg-gradient-to-br ${a.wash} via-surface to-surface px-2.5 pb-3 pt-2 shadow-sm`}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <p className="truncate pt-0.5 text-[9px] font-semibold text-muted">
                        {label}
                      </p>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br shadow-sm ${a.tile}`}
                      >
                        <Icon className="h-2.5 w-2.5" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-bold tabular-nums text-foreground">
                      {value}
                    </p>
                    <p className="text-[8px] font-semibold tabular-nums text-success">
                      ▲ {change}
                    </p>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${a.bar}`}
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
                Quick actions
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Find pledge", "Overdue", "Repledges", "Close pledge"].map(
                  (action) => (
                    <div
                      key={action}
                      className={`rounded-lg px-2 py-2.5 text-center text-[10px] font-semibold ${
                        action === "Close pledge"
                          ? "bg-accent text-white"
                          : "border border-border bg-background text-foreground"
                      }`}
                    >
                      {action}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-border bg-surface px-2 pb-2 pt-1">
            <div className="grid grid-cols-5 items-end gap-0.5">
              {navItems.map(({ icon: Icon, label, highlight }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-0.5 py-1"
                >
                  {highlight ? (
                    <span className="mb-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-sm">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  ) : (
                    <Icon
                      className="h-4 w-4 text-muted"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`text-[8px] font-semibold ${
                      highlight ? "text-accent" : "text-muted"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileExperience() {
  return (
    <section
      id="mobile"
      className="border-y border-border bg-accent-light/30 py-14 sm:py-16"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="On your phone"
          title="Manage Your Shop From Anywhere"
          description="Search pledges, take payment, close jewels, and check overdue — from your phone."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <PhoneMockup />

          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {mobileFeatures.map(({ icon: Icon, title }) => (
                <li
                  key={title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
