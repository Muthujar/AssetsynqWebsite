import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";
import { LOCATIONS } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pawn Shop Software in Tamil Nadu & UAE | AssetSynq",
  description:
    "Pawn shop and gold loan software for pawn brokers across Tamil Nadu, from Chennai, Vellore and Kanchipuram to Madurai and Coimbatore, and in Dubai, Abu Dhabi and Sharjah. Setup and training included.",
  path: "/pawn-shop-software",
});

export default function PawnShopSoftwarePage() {
  return (
    <LandingPage
      eyebrow="Pawn shop software · Tamil Nadu & UAE"
      title="Pawn shop software for Tamil Nadu & UAE"
      lead="AssetSynq is built for Tamil Nadu pawn shops and gold loan businesses moving off the register book. Pledges, interest, repledge, auction, and daily cash on phone or PC."
      intro={[
        "Most pawn shops in Tamil Nadu still run on register books: interest worked out by hand, customer history spread across old pages, and a daily cash count that takes time to tally. AssetSynq replaces that with one simple system your staff can learn quickly.",
        "We work with pawn brokers all over Tamil Nadu, from Chennai, Vellore, Kanchipuram, and Tiruvannamalai to Coimbatore, Madurai, Trichy, and Salem. Because it is cloud-based, gold loan businesses in the UAE use it too, in Dubai, Abu Dhabi, and Sharjah.",
      ]}
      highlights={[
        "Built for Indian pawn and gold loan businesses",
        "Simple and penal interest set by your schemes",
        "Gold and silver vault totals",
        "Multiple branches under one owner",
        "Existing records migrated for you",
        "Tamil and English in the app",
      ]}
      faqs={[
        {
          question: "Which areas do you support?",
          answer:
            "We set up shops anywhere in Tamil Nadu and in the UAE. Setup and training are done online, so no visit is needed.",
        },
        {
          question: "Is AssetSynq suitable for small pawn shops?",
          answer:
            "Yes. It is built for small and medium pawn shops, especially owners moving from register books.",
        },
        {
          question: "How do I get pricing?",
          answer:
            "Message us on WhatsApp. We share a clear quote for your shop, with setup, training, and cloud hosting included.",
        },
      ]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pawn shop software", path: "/pawn-shop-software" },
      ]}
      relatedTitle="Find your city"
      related={LOCATIONS.map(({ slug, name }) => ({
        href: `/pawn-shop-software/${slug}`,
        label: name,
      }))}
    />
  );
}
