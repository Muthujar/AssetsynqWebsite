import { AudienceStripCard, SectionHeader } from "@/components/ui/feature-card";

const audiences = [
  {
    number: "01",
    title: "Pawnshops",
    description: "Single-shop owners moving from register books.",
  },
  {
    number: "02",
    title: "Gold Loan Shops",
    description: "Shops that need clear interest and due tracking.",
  },
  {
    number: "03",
    title: "Small Finance Businesses",
    description: "Growing shops that want fewer manual errors.",
  },
  {
    number: "04",
    title: "Multi-Branch Shops",
    description: "More than one location with separate cash and reports.",
  },
];

export function WhyChoose() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Who it's for"
          title="Why choose AssetSynq"
          description="Trusted by pawn shops, gold-loan businesses, and growing finance operations across India."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <AudienceStripCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
