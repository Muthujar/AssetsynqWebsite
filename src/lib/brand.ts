/** Main logo — change sizes here to scale across header and footer. */
export const LOGO = {
  src: "/logo-assetsynq.png",
  alt: "AssetSynq",
  header: {
    width: 220,
    height: 45,
    className: "h-9 w-auto max-w-[200px] md:h-10 md:max-w-none",
  },
  footer: {
    width: 180,
    height: 37,
    className: "h-9 w-auto max-w-[200px]",
  },
} as const;

/** Product screenshots — paths and display metadata for marketing sections. */
export const PRODUCT_SCREENSHOTS = {
  dashboard: {
    src: "/dashboard-gold-finance.png",
    alt: "AssetSynq gold finance dashboard with pledges, cash, vault, and performance charts",
    width: 1024,
    height: 467,
  },
} as const;
