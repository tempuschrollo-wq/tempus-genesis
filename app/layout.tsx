import type { Metadata } from "next";
import { Cinzel, Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: "700",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

// SITE_URL (the production origin) is shared from @/lib/site. OG/Twitter
// images need absolute URLs — metadataBase resolves /assets against it.
const OG_IMAGE = "/assets/OG-share.png";

// Google Search Console verification token — supplied via env, never hardcoded.
// Set NEXT_PUBLIC_GSC_VERIFICATION to enable the verification meta tag.
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tempus Genesis · A Web3 Gaming Community",
  description:
    "An organized community of Web3 players who take the game seriously. Daily coordination, on-chain alpha, and a scholarship program that opens the door for anyone with skill.",
  openGraph: {
    type: "website",
    siteName: "Tempus Genesis",
    url: SITE_URL,
    title: "Tempus Genesis · A Web3 Gaming Community",
    description:
      "An organized Web3 gaming community. 1,000+ members. 40+ games. Active 24/7 worldwide.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TempusGenesisW3",
    creator: "@TempusGenesisW3",
    title: "Tempus Genesis · A Web3 Gaming Community",
    description:
      "An organized Web3 gaming community. 1,000+ members. 40+ games. Active 24/7 worldwide.",
    images: [OG_IMAGE],
  },
  ...(GSC_VERIFICATION
    ? { verification: { google: GSC_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
