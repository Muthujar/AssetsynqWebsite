import { CONTACT } from "@/lib/contact";
import { FAQS } from "@/lib/faqs";
import { PRICING } from "@/lib/pricing";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

function jsonLdScript(data: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-assetsynq.png`,
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneTel,
      contactType: "customer support",
      availableLanguage: ["English", "Tamil"],
      areaServed: "IN",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    inLanguage: ["en-IN", "ta-IN"],
    offers: {
      "@type": "Offer",
      price: PRICING.firstYear.offer,
      priceCurrency: "INR",
      description: "First year subscription",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      {jsonLdScript(organization)}
      {jsonLdScript(website)}
      {jsonLdScript(softwareApplication)}
      {jsonLdScript(faqPage)}
    </>
  );
}
