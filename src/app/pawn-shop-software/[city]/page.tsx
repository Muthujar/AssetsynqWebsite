import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { getLocation, locationFaqs, LOCATIONS } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/pawn-shop-software/[city]">): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};
  return pageMetadata({
    title: `Pawn Shop & Gold Loan Software in ${location.name} | AssetSynQ`,
    description: `Pawn broking software for gold loan shops in ${location.name} and ${location.nearby.slice(0, 3).join(", ")}. Pledges, interest, repledge, and daily cash on phone or PC. Setup and training included.`,
    path: `/pawn-shop-software/${location.slug}`,
  });
}

export default async function CityPage({
  params,
}: PageProps<"/pawn-shop-software/[city]">) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const others = LOCATIONS.filter(
    (other) => other.slug !== location.slug && other.region === location.region,
  );

  return (
    <LandingPage
      eyebrow={`Pawn shop software · ${location.region}`}
      title={`Pawn shop & gold loan software in ${location.name}`}
      lead={`Run your pawn shop in ${location.name} without the register book. Pledges, interest, repledge, and daily cash on phone or PC. We set up your shop and train your staff.`}
      intro={[
        location.intro,
        `We work with pawn brokers in ${location.name} and nearby areas including ${location.nearby.join(", ")}. Setup and training happen online, so no visit is needed.`,
      ]}
      highlights={[
        "Interest calculated automatically",
        "Customer history in seconds",
        "Daily cash report in one click",
        "Repledge & auction in one system",
        "Branch-wise management",
        "Excel export & cloud backup",
      ]}
      faqs={locationFaqs(location)}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Pawn shop software", path: "/pawn-shop-software" },
        { name: location.name, path: `/pawn-shop-software/${location.slug}` },
      ]}
      related={[
        ...others.map((other) => ({
          href: `/pawn-shop-software/${other.slug}`,
          label: `Pawn shop software in ${other.name}`,
        })),
        { href: "/pawn-shop-software", label: "All locations" },
      ]}
    />
  );
}
