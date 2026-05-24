import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "₹[X]",
    period: "/month",
    description: "For single-branch shops getting started.",
    features: [
      "1 branch, up to [Y] users",
      "Customers, loans, payments, basic reports",
      "Email support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹[X]",
    period: "/month",
    badge: "Most popular",
    description: "For growing shops with multiple branches.",
    features: [
      "Up to [N] branches, unlimited users",
      "Everything in Starter",
      "Repledge, auction, bulk import",
      "Branch cash & multi-loan batch",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large operations needing dedicated help.",
    features: [
      "Unlimited branches",
      "Custom onboarding & data migration",
      "Dedicated support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-dark py-16 sm:py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-heading">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h2>
          <p className="section-subheading mx-auto">
            Plans that scale from one branch to many. Replace placeholder
            amounts before launch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                plan.highlighted
                  ? "border-accent/50 bg-dark-elevated shadow-lg shadow-accent/15 ring-1 ring-accent/25"
                  : "card-dark",
              )}
            >
              {"badge" in plan && plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-medium text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-dark-foreground">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-dark-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-dark-muted">{plan.period}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-dark-muted">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-dark-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#contact"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-dark-muted">
          All plans include secure cloud hosting and regular updates. GST as
          applicable.
        </p>
        <p className="mt-2 text-center text-xs text-dark-muted/70">
          Pricing is indicative — replace with your actual plans before launch.
        </p>
      </div>
    </section>
  );
}
