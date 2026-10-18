"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";
import { cn } from "@/lib/utils";

type FaqLanguage = "en" | "ta";

const languages: { value: FaqLanguage; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ta", label: "தமிழ்" },
];

export function FAQ() {
  const [language, setLanguage] = useState<FaqLanguage>("en");
  const isTamil = language === "ta";

  return (
    <section id="faq" className="section-dark py-14 sm:py-16">
      <div className="section-container max-w-3xl">
        <div className="text-center">
          <h2 className="section-heading">FAQs</h2>
          <p
            className={cn("section-subheading mx-auto", isTamil && "font-tamil")}
            lang={language}
          >
            {isTamil
              ? "Pawn shop owners கேட்கும் பொதுவான கேள்விகள்."
              : "Common questions from pawn shop owners."}
          </p>
          <div
            role="group"
            aria-label="FAQ language"
            className="mt-6 inline-flex rounded-lg border border-dark-border bg-dark-elevated p-1"
          >
            {languages.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                lang={value}
                aria-pressed={language === value}
                onClick={() => setLanguage(value)}
                className={cn(
                  "rounded-md px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  value === "ta" && "font-tamil",
                  language === value
                    ? "bg-brand-gradient text-white"
                    : "text-dark-muted hover:text-dark-foreground",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <dl
          className={cn("mt-10 divide-y divide-dark-border", isTamil && "font-tamil")}
          lang={language}
        >
          {FAQS.map(({ question, questionTa, answer, answerTa }) => (
            <div key={question} className="py-5">
              <dt>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="font-medium text-dark-foreground">
                      {isTamil ? questionTa : question}
                    </span>
                    <span
                      className="shrink-0 text-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <dd className="mt-3 text-sm leading-relaxed text-dark-muted">
                    <p>{isTamil ? answerTa : answer}</p>
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
