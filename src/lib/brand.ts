/** Main logo — change sizes here to scale across header, hero, and footer. */
export const LOGO = {
  src: "/logo-assetsynq.png",
  alt: "AssetSynQ",
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
  footer: {
    width: 180,
    height: 44,
    className: "h-9 w-auto max-w-[200px]",
  },
} as const;
