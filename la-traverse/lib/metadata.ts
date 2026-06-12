import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function createMetadata({ title, description, path = "", image = "/og-image.svg" }: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image]
    }
  };
}
