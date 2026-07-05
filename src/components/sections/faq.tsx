import { FAQS } from "@/lib/faqs";

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
          {FAQS.map(({ question, answer }) => (
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
