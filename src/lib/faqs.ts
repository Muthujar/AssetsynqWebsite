import { formatInr, PRICING } from "@/lib/pricing";

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "What is pawn broker software?",
    answer:
      "AssetSynq is cloud-based pawn and gold loan software for Indian shops. Manage customer details, pledged items, interest, payments, repledge, and reports in one app.",
  },
  {
    question: "Is AssetSynq suitable for small pawnshops?",
    answer:
      "Yes. It is built for small and medium pawn shops, especially owners moving from register books for the first time. We help with setup and training.",
  },
  {
    question: "Can AssetSynq manage gold loan interest?",
    answer:
      "Yes. You set your scheme rules. Simple interest runs until expiry. After due date, penal interest compounds monthly as per your settings.",
  },
  {
    question: "Does AssetSynq support repledge and part payments?",
    answer:
      "Yes. You can record part payments, track repledges to external stores, and manage auction items.",
  },
  {
    question: "Is customer data secure?",
    answer:
      "Yes. Each shop has a separate account. Your data is not shared with other shops. Login needs your org code, username, and password.",
  },
  {
    question: "Can AssetSynq generate reports for audits?",
    answer:
      "Yes. Daily cash, overdue, and income reports are available. You can export to Excel when needed.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Contact us on WhatsApp or fill the enquiry form. We create and set up your shop account for you. There is no self sign-up on the website.",
  },
  {
    question: "How much does it cost?",
    answer: `${formatInr(PRICING.firstYear.offer)} for the first year (offer price, regular ${formatInr(PRICING.firstYear.list)}), then ${formatInr(PRICING.renewal.offer)}/year renewal (regular ${formatInr(PRICING.renewal.list)}). One branch included. Extra branch: ${formatInr(PRICING.extraBranch.offer)}/year. Unlimited users.`,
  },
  {
    question: "Do I need to install software?",
    answer:
      "No. Open the app in your browser on PC or mobile. Your data stays in the cloud with regular backups.",
  },
  {
    question: "Do you support Tamil?",
    answer: "Yes. Tamil and English are both supported.",
  },
];
