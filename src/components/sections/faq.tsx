const faqs = [
  {
    question: "Is AssetSynq only for gold loans?",
    answer:
      "AssetSynq is built for pawn and gold-loan shops. It supports gold, silver, platinum, and mixed collateral schemes.",
  },
  {
    question: "Can I run multiple branches?",
    answer:
      "Yes. Each branch has its own code, cash tracking, and reports under one organization.",
  },
  {
    question: "How is interest calculated after due date?",
    answer:
      "Simple interest applies until expiry. After expiry, loans move to Expired status and penal interest compounds monthly per your scheme rules.",
  },
  {
    question: "Can I import old loans from Excel?",
    answer:
      "Yes. Download the template, fill it from your books, and upload via bulk import (admin).",
  },
  {
    question: "Is my data shared with other shops?",
    answer:
      "No. Each organization is isolated. Login requires your org code — no cross-org data leakage.",
  },
  {
    question: "Do you support Tamil?",
    answer: "Yes. Tamil and English UI are supported.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-dark py-16 sm:py-20">
      <div className="section-container max-w-3xl">
        <div className="text-center">
          <h2 className="section-heading">Frequently asked questions</h2>
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
