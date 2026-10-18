export const SITE_URL = "https://www.assetsynq.com";
export const SITE_NAME = "AssetSynq";

export const DEFAULT_TITLE =
  "AssetSynq | Pawn shop software for Indian gold loan shops";

export const DEFAULT_DESCRIPTION =
  "Run your pawn shop without the register book. Pledges, interest, and cash — Tamil and English. Setup and training included.";

export const DEFAULT_KEYWORDS = [
  "pawn shop software",
  "gold loan software",
  "pawn broker software",
  "pawn shop management",
  "repledge software",
  "pawn software India",
  "Tamil pawn software",
  "AssetSynq",
];

/** Per-page metadata with its own canonical URL (the layout has none). */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  // Child openGraph replaces the root one, so re-attach the shared share image.
  const images = [`${SITE_URL}/opengraph-image`];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      url,
      title,
      description,
      locale: "en_IN",
      siteName: SITE_NAME,
      images,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images,
    },
  };
}
