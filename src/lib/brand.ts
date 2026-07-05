/** Main logo — change sizes here to scale across header, hero, and footer. */
export const LOGO = {
  src: "/logo-assetsynq.png",
  alt: "AssetSynq",
  header: {
    width: 220,
    height: 48,
    className: "h-9 w-auto max-w-[200px] md:h-10 md:max-w-none",
  },
  hero: {
    width: 340,
    height: 80,
    className: "h-14 w-auto sm:h-16",
  },
  heroShowcase: {
    width: 420,
    height: 100,
    className: "h-16 w-auto sm:h-20 lg:h-24",
  },
  footer: {
    width: 180,
    height: 44,
    className: "h-9 w-auto max-w-[200px]",
  },
} as const;

/** Product screenshots — paths and display metadata for marketing sections. */
export const PRODUCT_SCREENSHOTS = {
  dashboard: {
    src: "/dashboard-gold-finance.png",
    alt: "AssetSynq gold finance dashboard with pledges, cash, vault, and performance charts",
    width: 1440,
    height: 900,
  },
} as const;
