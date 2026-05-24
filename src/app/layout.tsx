import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { LOGO } from "@/lib/brand";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AssetSynq - Pawn Broking Management Software",
  description:
    "Cloud software for Indian pawn brokers and gold-loan shops. Manage pledges, interest, repledges, auctions, branch cash, and reports.",
  metadataBase: new URL("https://assetsynq.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://assetsynq.com/",
    title: "AssetSynq - Pawn Broking Management Software",
    description:
      "Cloud software for Indian pawn brokers and gold-loan shops. Manage pledges, interest, repledges, auctions, branch cash, and reports.",
    locale: "en_IN",
    siteName: "AssetSynq",
    images: [
      {
        url: LOGO.src,
        width: 1200,
        height: 320,
        alt: "AssetSynQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AssetSynq - Pawn Broking Management Software",
    description:
      "Cloud software for Indian pawn brokers and gold-loan shops. Manage pledges, interest, repledges, auctions, branch cash, and reports.",
    images: [LOGO.src],
  },
  alternates: {
    canonical: "https://assetsynq.com/",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
