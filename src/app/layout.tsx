import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "./components/layout/layoutClient";

const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || "Office Manager";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cecileboiron.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessName} - Office Manager Indépendant Lyon`,
    template: `%s | ${businessName}`,
  },
  description:
    "Office Manager indépendant à Lyon. Services professionnels de gestion administrative, commerciale, du personnel et pré-comptabilité pour entreprises et professionnels.",
  keywords: [
    "office manager",
    "office manager Lyon",
    "assistante indépendante",
    "gestion administrative",
    "secrétariat Lyon",
    "gestion commerciale",
    "ressources humaines",
    "pré-comptabilité",
    "assistant administratif",
  ],
  authors: [{ name: process.env.NEXT_PUBLIC_OWNER_NAME || "Cécile BOIRON" }],
  creator: businessName,
  publisher: businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/LOGO_CB_Noire.png" },
    ],
    apple: [
      { url: "/LOGO_CB_Noire.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full w-full">
      <body className="h-full w-full">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
