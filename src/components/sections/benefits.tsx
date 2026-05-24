import { BenefitCheckItem, SectionHeader } from "@/components/ui/feature-card";

const benefits = [
  {
    title: "Save Time & Reduce Errors",
    description: "Less manual writing. Staff can serve more customers each day.",
  },
  {
    title: "Improve Accuracy",
    description: "Correct interest, payment, and balance figures. Fewer disputes.",
  },
  {
    title: "Better Customer Trust",
    description: "Clear records, printed receipts, and transparent calculations.",
  },
  {
    title: "All Data in One Place",
    description: "Loans, customers, cash, and reports in one system.",
  },
  {
    title: "Grow When You Grow",
    description: "Works for small shops today. Add branches when you expand.",
  },
  {
    title: "Ready for Audits",
    description: "Clean loan history and exportable reports when you need them.",
  },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="border-y border-accent/10 bg-accent-light/40 py-16 sm:py-20"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Benefits"
          title="Our software benefits"
          description="Less paperwork. Clear numbers. More control over your shop."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {benefits.map((item) => (
            <BenefitCheckItem key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
