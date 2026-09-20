import { CheckList } from "@/components/ui/feature-card";

const points = [
  "Interest கணக்கு தானாக கணக்கிடப்படும்",
  "Customer History உடனடியாக தேடலாம்",
  "Daily Cash Report ஒரே Click-ல்",
  "Repledge & Auction ஒரே System-ல்",
  "Branch-wise Management",
  "Excel Export & Cloud Backup",
] as const;

export function TamilPainPoints() {
  return (
    <section
      id="tamil"
      lang="ta"
      className="section-dark font-tamil py-14 sm:py-16"
    >
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-balance">
            இன்னும் Register Book பயன்படுத்துகிறீர்களா?
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
