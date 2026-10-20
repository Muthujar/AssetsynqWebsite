import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";
import { LOCATIONS } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gold Loan Software for Pawn Shops & Jewellers | AssetSynQ",
  description:
    "Gold loan software that calculates interest, tracks pledged gold and silver, handles part payments, renewals and auctions, and shows daily cash. Cloud-based, on phone or PC.",
  path: "/gold-loan-software",
});

export default function GoldLoanSoftwarePage() {
  return (
    <LandingPage
      eyebrow="Gold loan software"
      title="Gold loan software that does the interest for you"
      lead="Create gold loans quickly, let AssetSynQ calculate simple and penal interest, and see every pledged item, payment, and rupee of cash in one place."
      intro={[
        "A gold loan business lives on accurate interest and safe custody of pledged jewels. AssetSynQ records each gold loan with its scheme, item weights, and photos, then calculates interest according to your rules.",
        "Simple interest runs until the due date. After that, penal interest is applied monthly as per your settings. Part payments of interest or principal, renewals, and closures update the balance automatically, so your staff never have to work it out by hand.",
      ]}
      highlights={[
        "Scheme-based gold loan terms",
        "Automatic simple and penal interest",
        "Part interest and part principal payments",
        "Gold and silver vault totals",
        "Repledge to other lenders and close in bulk",
        "Auction tracking for overdue loans",
      ]}
      faqs={[
        {
          question: "Can I set my own gold loan interest schemes?",
          answer:
            "Yes. You define schemes with your own rates and periods. Simple interest runs until expiry, and penal interest compounds monthly after the due date as per your settings.",
        },
        {
          question: "Does it handle part payments and renewals?",
          answer:
            "Yes. Record part interest or part principal payments at any time, and the outstanding balance and interest update automatically.",
        },
        {
          question: "Can I track repledged gold?",
          answer:
            "Yes. Send pledges to external repledge stores, track them, and close them in bulk when you redeem them.",
        },
        {
          question: "Do I need to install anything?",
          answer:
            "No. AssetSynQ runs in the browser on PC and phone, with cloud backup included.",
        },
      ]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Gold loan software", path: "/gold-loan-software" },
      ]}
      relatedTitle="Gold loan software near you"
      related={LOCATIONS.map(({ slug, name }) => ({
        href: `/pawn-shop-software/${slug}`,
        label: name,
      }))}
    />
  );
}
