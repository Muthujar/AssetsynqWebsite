import { Store, Building2, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const audiences: { icon: LucideIcon; title: string; description: string }[] =
  [
    {
      icon: Store,
      title: "Single-branch pawn shops",
      description:
        "Replace registers and spreadsheets with one secure web app.",
    },
    {
      icon: Building2,
      title: "Multi-branch gold finance companies",
      description:
        "One organization, separate branch codes, cash, and reports per location.",
    },
    {
      icon: BookOpen,
      title: "Shops moving from register books",
      description:
        "Keep your interest rules — AssetSynq matches how you already calculate.",
    },
  ];

export function WhoItsFor() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-heading">Who it&apos;s for</h2>
          <p className="section-subheading mx-auto">
            Small and mid-size pawn brokers and gold-loan shops across India.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {audiences.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card p-6 text-center">
              <div className="icon-badge mx-auto mb-4 h-12 w-12 rounded-full">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
