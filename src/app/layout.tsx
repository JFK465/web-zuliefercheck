import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  OrganizationSchema,
  WebSiteSchema,
  SoftwareAppSchema,
} from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten",
    template: "%s | ZulieferCheck",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og.png`,
        width: 1200,
        height: 630,
        alt: "ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZulieferCheck – Zertifikats-Management für EN 1090",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:rounded-md focus:shadow-lg"
        >
          Zum Inhalt springen
        </a>
        <WebSiteSchema />
        <OrganizationSchema />
        <SoftwareAppSchema
          name={siteConfig.name}
          description={siteConfig.description}
          url="/lieferantenmanagement-software"
        />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
