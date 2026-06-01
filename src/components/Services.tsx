"use client";
import Image from "next/image";

const services = [
  {
    num: "/ 01",
    title: "Custom Software Development",
    description: "Scalable backend systems and APIs engineered for enterprise workloads.",
    features: [
      "SCALABLE BACKEND ARCHITECTURES",
      "API-FIRST DESIGN (REST / GRAPHQL)",
      "ENTERPRISE-GRADE SECURITY",
    ],
    image: "/images/Services/Branding-Identity.svg",
  },
  {
    num: "/ 02",
    title: "Web & Mobile Applications",
    description: "High-performance web and cross-platform mobile experiences your users love.",
    features: [
      "NEXT.JS SSR + REACT SPA",
      "REACT NATIVE / FLUTTER",
      "PERFORMANCE-OPTIMIZED UI",
    ],
    image: "/images/Services/UIUX-Design.svg",
  },
  {
    num: "/ 03",
    title: "Cloud & DevOps",
    description: "Cloud deployments and CI/CD pipelines built for zero-downtime delivery.",
    features: [
      "AWS / GCP / DIGITALOCEAN",
      "DOCKER + KUBERNETES ORCHESTRATION",
      "CI/CD PIPELINES",
    ],
    image: "/images/Services/Website-Development.svg",
  },
  {
    num: "/ 04",
    title: "Cybersecurity",
    description: "Application security, data protection, and compliance from day one.",
    features: [
      "APPLICATION SECURITY AUDITS",
      "DATA PROTECTION & COMPLIANCE",
      "SECURE AUTHENTICATION SYSTEMS",
    ],
    image: "/images/Services/Build-Product-MVP.svg",
  },
  {
    num: "/ 05",
    title: "ERP & CRM Systems",
    description: "Multi-tenant SaaS platforms with workflow automation and granular access control.",
    features: [
      "WORKFLOW AUTOMATION",
      "MULTI-TENANT SAAS ARCHITECTURE",
      "ROLE-BASED ACCESS CONTROL",
    ],
    image: "/images/Services/Marketing.svg",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#FBFAF9", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" }}>
      <div
        style={{
          padding: "clamp(72px, 10vw, 120px) 0",
        }}
      >
        <style>{`
          .services-layout {
            display: flex;
            flex-direction: column;
            gap: clamp(40px, 8vw, 64px);
            max-width: 1360px;
            margin: 0 auto;
            padding: 0 clamp(20px, 5vw, 64px);
            align-items: start;
          }
          @media (min-width: 1024px) {
            .services-layout {
              display: grid;
              grid-template-columns: 360px 1fr;
              gap: 80px;
            }
          }
          .services-intro {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
          }
          @media (min-width: 1024px) {
            .services-intro {
              position: sticky;
              top: 120px;
            }
          }
          .service-card {
            background: #ffffff;
            border-radius: 32px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          @media (min-width: 768px) {
            .service-card {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding: 48px;
              gap: 48px;
            }
          }
          .feature-item {
            padding: 18px 0;
            border-bottom: 1px solid #eaeaea;
          }
          .service-image {
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            background: #fff;
            width: 100%;
            aspect-ratio: 4 / 3;
            min-height: 240px;
          }
          @media (min-width: 768px) {
            .service-image { min-height: 400px; aspect-ratio: auto; }
          }
        `}</style>

        <div className="services-layout">
          {/* LEFT — Sticky on desktop, normal on mobile */}
          <div className="services-intro">
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                color: "var(--muted, #5a5a5a)",
                textTransform: "uppercase",
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 40,
              }}
            >
              Our Services
            </p>
            <h2
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "#1a1a1a",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Engineered to
              <br />
              Scale Your Business
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted, #5a5a5a)", lineHeight: 1.6, maxWidth: 300, fontFamily: "'Outfit', sans-serif" }}>
              From custom software to cloud infrastructure and AI — we build the systems
              that power CRM, banking, analytics, and everything in between.
            </p>
          </div>

          {/* RIGHT — Scrolling cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%" }}>
            {services.map((service, i) => (
              <div key={i} className="service-card">
                {/* Text Content */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#111",
                      fontWeight: 700,
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: "0.04em",
                      marginBottom: 24,
                    }}
                  >
                    {service.num}
                  </p>
                  <h3
                    style={{
                      fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)",
                      fontWeight: 500,
                      color: "#111",
                      fontFamily: "'Outfit', sans-serif",
                      marginBottom: 16,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "var(--muted, #5a5a5a)", marginBottom: "clamp(24px, 5vw, 48px)", lineHeight: 1.6, fontFamily: "'Outfit', sans-serif" }}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div style={{ marginTop: "auto" }}>
                    {service.features.map((f, fi) => (
                      <div key={fi} className="feature-item">
                        <p
                          style={{
                            fontSize: 11,
                            color: "#777",
                            letterSpacing: "0.08em",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Content */}
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
