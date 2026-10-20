import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { Migration } from "@/components/sections/migration";
import { Contact } from "@/components/sections/contact";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { CheckList } from "@/components/ui/feature-card";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/contact";
import { SITE_URL } from "@/lib/seo";

export type Crumb = { name: string; path: string };
export type LandingFaq = { question: string; answer: string };

export function LandingPage({
  eyebrow,
  title,
  lead,
  intro,
  highlights,
  faqs,
  breadcrumbs,
  related,
  relatedTitle = "Pawn shop software near you",
}: {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string[];
  highlights: string[];
  faqs: LandingFaq[];
  breadcrumbs: Crumb[];
  related: { href: string; label: string }[];
  relatedTitle?: string;
}) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-hero">
          <span
            className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold-bright/90 lg:-right-24 lg:-top-24 lg:h-72 lg:w-72"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div className="section-container relative py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-xs text-white/70">
              <ol className="flex flex-wrap items-center gap-1.5">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.path} className="flex items-center gap-1.5">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {index === breadcrumbs.length - 1 ? (
                      <span aria-current="page" className="font-medium text-white">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link href={crumb.path} className="hover:text-gold-bright">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/85 sm:text-xl">
                {lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  variant="whatsapp"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for Demo
                </Button>
                <Button href="#features" variant="onDark" size="lg">
                  See features
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-12 sm:py-14">
          <div className="section-container grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <CheckList
              items={highlights}
              className="content-start gap-3 sm:grid-cols-1"
              itemClassName="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground"
            />
          </div>
        </section>

        <FeaturesGrid />
        <Migration />

        <section className="section-dark py-14 sm:py-16">
          <div className="section-container max-w-3xl">
            <h2 className="section-heading text-center">Questions</h2>
            <dl className="mt-10 divide-y divide-dark-border">
              {faqs.map(({ question, answer }) => (
                <div key={question} className="py-5">
                  <dt className="font-medium text-dark-foreground">{question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-dark-muted">
                    {answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-background py-12 sm:py-14">
            <div className="section-container">
              <h2 className="text-center text-xl font-semibold text-foreground">
                {relatedTitle}
              </h2>
              <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
                {related.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
