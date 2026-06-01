import {
  DEFAULT_DESCRIPTION,
  getSiteUrl,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
} from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const url = getSiteUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url,
        logo: `${url}/images/Brand/brandLogo.svg`,
        description: DEFAULT_DESCRIPTION,
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        foundingDate: "2016",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1336, AL Saqr Business Tower, Sheikh Zayed Road",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE_PHONE,
          contactType: "customer service",
          email: SITE_EMAIL,
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  const url = getSiteUrl();

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url,
        description: DEFAULT_DESCRIPTION,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url,
        },
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: getSiteUrl(),
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
      }}
    />
  );
}
