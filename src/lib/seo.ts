import { Metadata } from "next";
import { SITE_METADATA } from "./constants";

export function constructMetadata({
  title,
  description,
  image = "/images/facilities/modern-factory.jpg",
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_METADATA.companyName}`
    : SITE_METADATA.title;
  const metaDescription = description || SITE_METADATA.description;

  return {
    title: fullTitle,
    description: metaDescription,
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical || SITE_METADATA.siteUrl,
      siteName: SITE_METADATA.companyName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: SITE_METADATA.companyName,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: canonical || SITE_METADATA.siteUrl,
    },
  };
}

export function getCompanyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "VIVA INFRA PROJECTS",
    alternateName: "ViP",
    url: SITE_METADATA.siteUrl,
    logo: `${SITE_METADATA.siteUrl}/images/brand/logo.svg`,
    image: `${SITE_METADATA.siteUrl}/images/facilities/modern-factory.jpg`,
    description: SITE_METADATA.description,
    telephone: "+91-9159050754",
    email: "vip1010ce@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No.31, Sriram Nagar, Devendra Nagar",
      addressLocality: "Sriperumbudur",
      addressRegion: "Tamil Nadu",
      postalCode: "602105",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9699",
      longitude: "79.9416",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "State", name: "Andhra Pradesh" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Civil Construction",
      "Pre-Engineered Buildings (PEB)",
      "1600 Ton Machine Foundation Pit",
      "Mechanical and Electrical Engineering",
      "Process Piping and Cooling Towers",
      "Epoxy Flooring and Structural Painting",
      "Turnkey CMEP Solutions",
    ],
  };
}

