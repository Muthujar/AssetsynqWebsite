import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";
import { LOCATIONS } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pawn Broker Software with Interest & Reports | AssetSynq",
  description:
    "Pawn broker software for Indian pawn shops: pledge entry, customer records with ID proof, automatic interest, daily cash and overdue reports, multiple branches, and Excel export.",
  path: "/pawn-broker-software",
});

export default function PawnBrokerSoftwarePage() {
  return (
    <LandingPage
      eyebrow="Pawn broker software"
      title="Pawn broker software for the whole shop"
      lead="From the counter to closing time: pledge entry, customer records, interest, payments, reports, and branch cash, all in one system your staff can learn quickly."
      intro={[
        "Pawn brokers juggle many jobs every day: taking new pledges, finding old customers, collecting interest, closing loans, and balancing the cash at night. AssetSynq puts each of these in one simple system, so the register book is no longer needed.",
        "Owners get a live dashboard of active pledges, cash in hand, vault metals, and overdue loans across every branch, on the shop PC or on their phone.",
      ]}
      highlights={[
        "Fast pledge entry with item photos",
        "Customer records with ID proof and history",
        "Daily cash, overdue, and interest reports",
        "Branch-wise cash and till closing",
        "Role-based staff logins",
        "Export reports to Excel",
      ]}
      faqs={[
        {
          question: "Can my staff have separate logins?",
          answer:
            "Yes. Each shop has its own account, and staff log in with the shop code, their username, and password. Role-based access controls what each person can see and do.",
        },
        {
          question: "Does it support multiple branches?",
          answer:
            "Yes. Each branch has its own pledges, cash, and reports, and the owner can see all branches together.",
        },
        {
          question: "Can I move my existing records?",
          answer:
            "Yes. We help migrate existing customers and open pledges from register books or Excel.",
        },
        {
          question: "How do I get pricing?",
          answer:
            "Message us on WhatsApp. We share a clear quote for your shop, with setup, training, and cloud hosting included.",
        },
      ]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pawn broker software", path: "/pawn-broker-software" },
      ]}
      relatedTitle="Pawn broker software near you"
      related={LOCATIONS.map(({ slug, name }) => ({
        href: `/pawn-shop-software/${slug}`,
        label: name,
      }))}
    />
  );
}
