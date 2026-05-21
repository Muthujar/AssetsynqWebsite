import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
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
  openGraph: {
    type: "website",
    url: "https://assetsynq.com/",
    title: "AssetSynq - Pawn Broking Management Software",
    description:
      "Cloud software for Indian pawn brokers and gold-loan shops. Manage pledges, interest, repledges, auctions, branch cash, and reports.",
    locale: "en_IN",
    siteName: "AssetSynq",
  },
  twitter: {
    card: "summary",
    title: "AssetSynq - Pawn Broking Management Software",
    description:
      "Cloud software for Indian pawn brokers and gold-loan shops. Manage pledges, interest, repledges, auctions, branch cash, and reports.",
  },
  alternates: {
    canonical: "https://assetsynq.com/",
  },
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
