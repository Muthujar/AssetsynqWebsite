import { CheckList } from "@/components/ui/feature-card";

const points = [
  "Interest calculated automatically",
  "Find any customer's history instantly",
  "Daily cash report in one click",
  "Repledge & auction in one system",
  "Branch-wise management",
  "Excel export & cloud backup",
] as const;

export function PainPoints() {
  return (
    <section id="register-book" className="section-dark py-14 sm:py-16">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-balance">
            Still using a register book?
          </h2>
        </div>

        <CheckList
          items={points}
          className="mx-auto mt-10 max-w-3xl gap-4"
          itemClassName="rounded-xl border border-dark-border bg-dark-elevated px-4 py-3.5 text-sm font-medium text-dark-foreground"
          iconClassName="text-gold-bright"
        />
      </div>
    </section>
  );
}
