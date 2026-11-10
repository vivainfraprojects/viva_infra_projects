import type { Metadata, Viewport } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SITE_METADATA } from "@/lib/constants";
import { getCompanyJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: SITE_METADATA.title,
    template: SITE_METADATA.titleTemplate,
  },
  description: SITE_METADATA.description,
  keywords: [
    "Viva Infra Projects",
    "ViP",
    "Construction Company in Chennai",
    "Civil Construction Sriperumbudur",
    "1600 Ton Machine Foundation Pit",
    "PEB Structural Steel Works",
    "CMEP Turnkey Solutions",
    "Industrial Construction Tamil Nadu",
    "Substation Transformer Erection",
    "Industrial Epoxy Flooring",
  ],
  authors: [{ name: SITE_METADATA.companyName }],
  creator: SITE_METADATA.companyName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_METADATA.siteUrl,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#073D2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getCompanyJsonLd();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-brand-charcoal antialiased selection:bg-brand-lime selection:text-brand-forest font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
