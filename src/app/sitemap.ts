import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (
    path: string,
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    page("/pawn-shop-software", 0.9),
    page("/gold-loan-software", 0.9),
    page("/pawn-broker-software", 0.9),
    ...LOCATIONS.map(({ slug }) => page(`/pawn-shop-software/${slug}`, 0.8)),
  ];
}
