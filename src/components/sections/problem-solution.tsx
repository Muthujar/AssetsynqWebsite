import { CheckCircle2, XCircle } from "lucide-react";

const problems = [
  "Paper registers and Excel errors",
  "Unclear outstanding after expiry",
  "No branch-level cash view",
  "Hard to track repledges and auctions",
];

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="section-heading">The daily headaches</h2>
            <p className="section-subheading">
              Shop owners lose time and money when records live in books and
              spreadsheets.
            </p>
            <ul className="mt-8 space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              One system for the full pledge lifecycle
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              AssetSynq digitizes the full pledge lifecycle with automated
              interest rules, reports, and role-based access per branch.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Automated interest before and after expiry",
                "Branch-wise cash and transaction history",
                "Repledge and auction workflows built in",
                "Role-based access for admin and staff",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
