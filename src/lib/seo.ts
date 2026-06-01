import type { Metadata } from "next";

export const SITE_NAME = "GTech Soft Solution LLC";
export const SITE_SHORT_NAME = "GTech Soft";

/** Production site URL — override with NEXT_PUBLIC_SITE_URL in deployment */
export const DEFAULT_SITE_URL = "https://gtechsoftsolution.com";

export const SITE_EMAIL = "info@gtechsoftsolution.com";
export const SITE_PHONE = "+971-52-485-5744";

export const DEFAULT_DESCRIPTION =
  "GTech Soft Solution LLC delivers custom software, ERP, cybersecurity, mobile & web apps, cloud, IoT, and UI/UX for enterprises worldwide. Based in Dubai, trusted since 2016.";

export const DEFAULT_KEYWORDS = [
  "GTech Soft",
  "custom software development",
  "ERP solutions",
  "cyber security",
  "mobile app development",
  "cloud solutions",
  "IoT development",
  "UI UX design",
  "Dubai software company",
  "enterprise software",
];

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return url.replace(/\/$/, "");
}

/** Build absolute URL for a site path */
export function pageUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

const OG_IMAGE_PATH = "/images/Brand/brandLogo.svg";

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords,
  noIndex = false,
  openGraphType = "website",
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  openGraphType?: "website" | "article";
}): Metadata {
  const url = pageUrl(path);
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: openGraphType,
      images: [
        {
          url: OG_IMAGE_PATH,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export function truncateDescription(text: string, max = 160): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trim()}…`;
}
