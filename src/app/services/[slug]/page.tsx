import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { servicesData } from "@/data/servicesData";
import { createPageMetadata, pageUrl, truncateDescription } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: service.title,
    description: truncateDescription(service.shortDescription),
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      ...service.technologies.slice(0, 6),
      "GTech Soft services",
    ],
  });
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = pageUrl(`/services/${service.slug}`);

  return (
    <main>
      <ServiceJsonLd
        name={service.title}
        description={truncateDescription(service.shortDescription, 300)}
        url={serviceUrl}
      />
      <Navbar />
      <ServiceDetailContent service={service} />
      <Footer />
    </main>
  );
}

function ServiceDetailContent({ service }: { service: (typeof servicesData)[0] }) {
  return (
    <>
      <ScrollToTop />
      <section style={{ background: "#fff", minHeight: "calc(100vh - 100px)" }}>
      <style>{`
        .service-detail-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px);
        }
        .service-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }
        @media (min-width: 768px) {
          .service-header {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
        }
        .service-number {
          font-size: clamp(3.5rem, 18vw, 7.5rem);
          font-weight: 700;
          color: var(--amber, #f5a623);
          line-height: 1;
          font-family: 'Outfit', sans-serif;
        }
        .service-header-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 24px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .service-header-content p {
          font-size: 16px;
          color: #5a5a5a;
          line-height: 1.8;
          font-family: 'Outfit', sans-serif;
        }
        .section-divider {
          height: 1px;
          background: var(--border, #e0e0e0);
          margin: clamp(40px, 8vw, 80px) 0;
        }
        .description-section {
          margin-bottom: clamp(40px, 8vw, 80px);
        }
        @media (max-width: 767px) {
          .service-header { margin-bottom: 48px; gap: 24px; }
          .feature-card { padding: 20px; }
          .benefits-section { margin-top: 40px; }
        }
        .description-section h2 {
          font-size: 28px;
          font-weight: 500;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 24px;
        }
        .description-text {
          font-size: 16px;
          color: #5a5a5a;
          line-height: 1.8;
          font-family: 'Outfit', sans-serif;
          white-space: pre-wrap;
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 32px;
        }
        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .feature-card {
          background: var(--surface, #fbfaf9);
          padding: 28px;
          border-radius: 16px;
          border-left: 4px solid #f5a623;
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          background: #f5f5f5;
          transform: translateX(4px);
        }
        .feature-card strong {
          color: #111;
          font-family: 'Outfit', sans-serif;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }
        .tech-tag {
          background: #f0f0f0;
          color: #111;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          transition: all 0.3s ease;
        }
        .tech-tag:hover {
          background: #f5a623;
          color: #fff;
        }
        .benefits-section {
          background: var(--surface, #fbfaf9);
          padding: clamp(40px, 5vw, 60px);
          border-radius: 24px;
          margin-top: 60px;
        }
        .benefits-section h2 {
          font-size: 28px;
          font-weight: 500;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 40px;
        }
        .benefits-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .benefits-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .benefit-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .benefit-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          background: #f5a623;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 4px;
        }
        .benefit-icon svg {
          width: 12px;
          height: 12px;
          stroke: white;
        }
        .benefit-text {
          color: #5a5a5a;
          line-height: 1.6;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
        }
      `}</style>

      <div className="service-detail-container">
        {/* Header with number and title */}
        <div className="service-header">
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div className="service-number">{service.num}</div>
          </div>
          <div className="service-header-content">
            <h1>{service.title}</h1>
            <p>{service.shortDescription}</p>
          </div>
        </div>

        <div className="section-divider" />

        {/* Long Description */}
        <div className="description-section">
          <h2>Overview</h2>
          <p className="description-text">{service.longDescription}</p>
        </div>

        {/* Key Features */}
        <div className="description-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {service.keyFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <p>✓ {feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider" />

        {/* Technologies */}
        <div className="description-section">
          <h2>Technologies We Use</h2>
          <div className="tech-stack">
            {service.technologies.map((tech, index) => (
              <div key={index} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2>Why Choose Our {service.title} Services?</h2>
          <div className="benefits-list">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="benefit-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
