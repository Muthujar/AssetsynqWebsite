import { XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Register mistakes and missing entries",
  "Hard to know exact due amount after expiry",
  "No clear view of daily cash in the till",
  "Repledge and auction records in separate books",
];

const solutions = [
  "Interest calculated as per your scheme rules",
  "Daily cash report and branch-wise cash tracking",
  "Repledge and auction built into the same system",
  "Overdue list with customer phone numbers",
];

export function ProblemSolution() {
  return (
    <section className="section-dark py-16 sm:py-20">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="section-heading">Problems in manual shops</h2>
            <p className="section-subheading">
              Many pawn shops still run on paper. It works — until something
              goes wrong.
            </p>
            <ul className="mt-8 space-y-3">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="text-dark-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-dark rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-dark-foreground">
              How AssetSynq helps
            </h2>
            <p className="mt-3 leading-relaxed text-dark-muted">
              One system for loans, payments, cash, and reports. Easy for staff
              to learn. Safe in the cloud.
            </p>
            <ul className="mt-6 space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-dark-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
