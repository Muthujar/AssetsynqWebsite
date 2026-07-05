import {
  Bell,
  BookOpen,
  Coins,
  Home,
  Search,
  Settings,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/feature-card";

const mobileFeatures = [
  {
    icon: BookOpen,
    title: "New pledge",
    description: "Step-by-step — from your phone.",
  },
  {
    icon: Search,
    title: "Find loan",
    description: "Name, phone, or loan number.",
  },
  {
    icon: Bell,
    title: "Overdue",
    description: "Due loans at a glance, anywhere.",
  },
  {
    icon: Coins,
    title: "Today's cash",
    description: "Today's cash flow — no PC needed.",
  },
];

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: BookOpen, label: "New", highlight: true },
  { icon: Bell, label: "Due" },
  { icon: Settings, label: "Settings" },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div
        className="pointer-events-none absolute -right-6 top-8 h-48 w-48 rounded-full bg-brand-gradient opacity-15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-[2rem] border-[6px] border-foreground/10 bg-foreground/5 p-2 shadow-2xl shadow-accent/10 ring-1 ring-border">
        <div className="overflow-hidden rounded-[1.4rem] bg-surface">
          <div className="flex items-center justify-between bg-brand-gradient px-4 py-3 text-white">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide opacity-80">
                Mobile companion
              </p>
              <p className="text-sm font-bold">AssetSynq</p>
            </div>
            <Smartphone className="h-4 w-4 opacity-80" aria-hidden="true" />
          </div>

          <div className="space-y-3 p-4">
            <div className="grid grid-cols-2 gap-2">
              {["Active loans", "Cash in hand", "Overdue", "Vault gold"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-lg border border-border bg-background px-2.5 py-2"
                  >
                    <p className="text-[9px] font-medium text-muted">{label}</p>
                    <p className="mt-0.5 text-xs font-bold text-foreground">
                      —
                    </p>
                  </div>
                ),
              )}
            </div>

            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
                Quick actions
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Find loan", "Overdue", "Repledges", "New pledge"].map(
                  (action) => (
                    <div
                      key={action}
                      className={`rounded-lg px-2 py-2.5 text-center text-[10px] font-semibold ${
                        action === "New pledge"
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
      className="border-y border-border bg-accent-light/30 py-16 sm:py-20"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Mobile companion"
          title="Your shop companion on mobile"
          description="Search, pay, and check on the go — for owners and managers. Desktop stays at the shop."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <PhoneMockup />

          <div>
            <p className="text-base leading-relaxed text-muted">
              Open AssetSynq on your phone — search loans, take payments,
              check overdue, view today&apos;s cash. Built for when you&apos;re
              away from the shop PC.
            </p>
            <p className="mt-3 text-sm text-muted">
              No install. Tamil &amp; English. Staff use full desktop at the
              shop.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {mobileFeatures.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
