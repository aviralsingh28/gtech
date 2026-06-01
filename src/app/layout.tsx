import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_SITE_URL,
  getSiteUrl,
  SITE_NAME,
  SITE_SHORT_NAME,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_SHORT_NAME} | Enterprise Software & Digital Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME, url: DEFAULT_SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_SHORT_NAME} | Enterprise Software & Digital Solutions`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/Brand/brandLogo.svg",
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_SHORT_NAME} | Enterprise Software & Digital Solutions`,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/Brand/brandLogo.svg"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
