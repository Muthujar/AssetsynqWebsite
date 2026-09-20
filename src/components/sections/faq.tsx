import { FAQS } from "@/lib/faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-dark py-14 sm:py-16">
      <div className="section-container max-w-3xl">
        <div className="text-center">
          <h2 className="section-heading">FAQs</h2>
          <p className="section-subheading mx-auto">
            Common questions from pawn shop owners.
          </p>
          <p className="font-tamil mt-1 text-base text-dark-muted" lang="ta">
            Pawn shop owners கேட்கும் பொதுவான கேள்விகள்.
          </p>
        </div>
        <dl className="mt-10 divide-y divide-dark-border">
          {FAQS.map(({ question, questionTa, answer, answerTa }) => (
            <div key={question} className="py-5">
              <dt>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="block font-medium text-dark-foreground">
                        {question}
                      </span>
                      <span
                        className="font-tamil mt-1 block text-sm font-medium text-dark-muted"
                        lang="ta"
                      >
                        {questionTa}
                      </span>
                    </span>
                    <span
                      className="shrink-0 text-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <dd className="mt-3 space-y-2 text-sm leading-relaxed text-dark-muted">
                    <p>{answer}</p>
                    <p className="font-tamil" lang="ta">
                      {answerTa}
                    </p>
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
