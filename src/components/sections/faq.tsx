import { formatInr, PRICING } from "@/lib/pricing";

const faqs = [
  {
    question: "What is pawn broker software?",
    answer:
      "It is software to manage pawn and gold loans — customer details, pledged items, interest, payments, repledge, and reports. AssetSynq does all of this in one cloud-based app.",
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

export function FAQ() {
  return (
    <section id="faq" className="section-dark py-16 sm:py-20">
      <div className="section-container max-w-3xl">
        <div className="text-center">
          <h2 className="section-heading">FAQs</h2>
          <p className="section-subheading mx-auto">
            Common questions from pawn shop owners.
          </p>
        </div>
        <dl className="mt-10 divide-y divide-dark-border">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="py-5">
              <dt>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-dark-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                    {question}
                    <span
                      className="shrink-0 text-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <dd className="mt-3 text-sm leading-relaxed text-dark-muted">
                    {answer}
                  </dd>
                </details>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
