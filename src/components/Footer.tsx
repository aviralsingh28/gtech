"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { servicesData } from "@/data/servicesData";

const cols = {
  Services: [
    "Software Development",
    "ERP Solutions",
    "Cyber security",
    "Mobile & Web Applications",
    "Cloud Solutions",
    "IoT Development",
    "UI/UX Design",
  ],
  Company: ["About us", "Why us", "Team", "Careers"],
};

// Map links to their routes
const getLinkPath = (heading: string, link: string): string => {
  if (heading === "Services") {
    // Find the service and use its actual slug
    const service = servicesData.find(
      (s) => s.title.toLowerCase() === link.toLowerCase()
    );
    if (service) {
      return `/services/${service.slug}`;
    }
  }
  
  const companyLinks: Record<string, string> = {
    "About us": "/about",
    "Why us": "/about",
    "Team": "/about",
    "Careers": "/career",
  };
  
  return companyLinks[link] || "#";
};

const StarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="#f5a623" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M12 0C12 0 12 10.5 24 12C24 12 12.5 13.5 12 24C12 24 11.5 13.5 0 12C0 12 11.5 10.5 12 0Z" />
  </svg>
);

const PlusIcon = ({ open }: { open: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden
    className={`footer-accordion-icon${open ? " is-open" : ""}`}
  >
    <path
      d="M4 10h12"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      className="footer-accordion-icon-vertical"
      d="M10 4v12"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

function FooterAccordion({
  heading,
  open,
  onToggle,
  links,
  children,
}: {
  heading: string;
  open: boolean;
  onToggle: () => void;
  links?: string[];
  children?: React.ReactNode;
}) {
  const panelId = `footer-panel-${heading.toLowerCase().replace(/\s+/g, "-")}`;
  const triggerId = `footer-trigger-${panelId}`;

  return (
    <div className={`footer-accordion${open ? " is-open" : ""}`}>
      <button
        type="button"
        id={triggerId}
        className="footer-accordion-trigger"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{heading}</span>
        <PlusIcon open={open} />
      </button>
      <h4 className="footer-accordion-heading">{heading}</h4>
      <div
        id={panelId}
        className="footer-accordion-panel"
        role="region"
        aria-labelledby={triggerId}
      >
        {links ? (
          <ul className="footer-accordion-links">
            {links.map((link) => (
              <li key={link}>
                <Link href={getLinkPath(heading, link)} className="footer-link">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="footer-accordion-content">{children}</div>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Services: false,
    Company: false,
    "Quick Connect": false,
  });

  const toggleSection = (heading: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [heading]: !prev[heading],
    }));
  };
  return (
    <footer style={{ background: "#000000", position: "relative", overflow: "hidden" }}>

      {/* Top Split Section */}
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" }}>
        <div
          style={{
            background: "var(--dark-elevated, #0a0a0a)",
            borderRadius: 32,
            padding: "clamp(40px, 6vw, 64px) 0",
          }}
        >
          <style>{`
            .footer-container {
              padding: 0 clamp(20px, 5vw, 64px);
              display: flex;
              flex-direction: column;
              gap: 36px;
            }
            @media (min-width: 1024px) {
              .footer-container {
                flex-direction: row;
                justify-content: space-between;
                gap: 48px;
              }
            }
            .links-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 32px;
            }
            @media (min-width: 540px) {
              .links-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (min-width: 1024px) {
              .links-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
              }
            }
            .footer-link {
              font-size: 14px;
              color: var(--muted, #5a5a5a);
              text-decoration: none;
              font-family: 'Outfit', sans-serif;
              transition: color 0.2s;
              display: inline-block;
            }
            .footer-link:hover { color: #fff; }
            .footer-accordion {
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .footer-accordion-trigger {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              padding: 12px 0;
              background: none;
              border: none;
              cursor: pointer;
              color: #fff;
              font-size: 16px;
              font-weight: 600;
              font-family: 'Outfit', sans-serif;
              text-align: left;
            }
            .footer-accordion-icon {
              color: #f5a623;
              flex-shrink: 0;
            }
            .footer-accordion-icon-vertical {
              transform-origin: center;
              transition: transform 0.25s ease, opacity 0.25s ease;
            }
            .footer-accordion-icon.is-open .footer-accordion-icon-vertical {
              transform: rotate(90deg);
              opacity: 0;
            }
            .footer-accordion-panel {
              overflow: hidden;
              max-height: 0;
              transition: max-height 0.35s ease;
            }
            .footer-accordion.is-open .footer-accordion-panel {
              max-height: 400px;
            }
            .footer-accordion-links {
              list-style: none;
              padding: 0 0 12px;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
            .footer-accordion-content {
              padding: 0 0 12px;
              font-size: 14px;
              color: var(--muted, #5a5a5a);
              font-family: 'Outfit', sans-serif;
              line-height: 1.6;
            }
            @media (min-width: 1024px) {
              .footer-accordion {
                border-bottom: none;
              }
              .footer-accordion-trigger {
                display: none;
              }
              .footer-accordion-panel {
                max-height: none !important;
                overflow: visible;
              }
              .footer-accordion.is-open .footer-accordion-panel,
              .footer-accordion .footer-accordion-panel {
                max-height: none !important;
              }
              .footer-accordion-heading {
                display: block;
              }
              .footer-accordion-links,
              .footer-accordion-content {
                padding-bottom: 0;
              }
            }
            @media (max-width: 1023px) {
              .footer-accordion-heading {
                display: none;
              }
              .links-grid {
                gap: 0;
              }
            }
            .footer-accordion-heading {
              font-size: 16px;
              font-weight: 600;
              color: #fff;
              font-family: 'Outfit', sans-serif;
              margin-bottom: 16px;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            /* Responsive image styles */
            .footer-images-container {
              display: flex;
              gap: 18px;
              margin-top: 16px;
              align-items: center;
              flex-wrap: wrap;
            }
            .footer-image-wrapper {
              position: relative;
              flex-shrink: 0;
            }
            .footer-image-1 {
              width: clamp(120px, 30vw, 180px);
              height: auto;
            }
            .footer-image-2 {
              width: clamp(90px, 25vw, 140px);
              height: auto;
            }
            @media (max-width: 480px) {
              .footer-images-container {
                gap: 12px;
              }
            }
          `}</style>

          <div className="footer-container">
            {/* Left Column */}
            <div style={{ flex: 1, maxWidth: 500 }}>
              <Image
                src="/images/Brand/brand-white.svg"
                alt="GTechSoft"
                width={180}
                height={45}
                style={{ 
                  objectFit: "contain", 
                  marginBottom: 12,
                  width: "clamp(140px, 35vw, 180px)",
                  height: "auto"
                }}
              />

              <p
                style={{
                  fontSize: "clamp(0.875rem, 4vw, 1rem)",
                  color: "#aaa",
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.55,
                  marginBottom: 24,
                  letterSpacing: "-0.01em"
                }}
              >
                Building scalable digital systems for modern businesses — trusted by 80+ international clients across fintech, healthcare, logistics, and more.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a
                  href="tel:+971524855744"
                  style={{
                    fontSize: "clamp(1.1rem, 5vw, 1.6rem)",
                    color: "#ffffff",
                    fontFamily: "'Outfit', sans-serif",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  +971 52 485 5744
                </a>

                <a
                  href="mailto:info@gtechsoftsolution.com"
                  style={{
                    fontSize: "clamp(1rem, 4vw, 1.3rem)",
                    color: "#f5a623",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  info@gtechsoftsolution.com
                </a>

                <div className="footer-images-container">
                  <div className="footer-image-wrapper">
                    <Image
                      src="/images/footer-images/image-8.png"
                      alt="Footer Logo 1"
                      width={180}
                      height={120}
                      className="footer-image-1"
                      style={{
                        objectFit: "contain",
                        height: "auto",
                        borderRadius: "12px",
                        width: "100%",
                        maxWidth: "clamp(120px, 30vw, 180px)"
                      }}
                    />
                  </div>
                  <div className="footer-image-wrapper">
                    <Image
                      src="/images/footer-images/image-9.png"
                      alt="Footer Logo 2"
                      width={140}
                      height={70}
                      className="footer-image-2"
                      style={{
                        objectFit: "contain",
                        height: "auto",
                        borderRadius: "12px",
                        width: "100%",
                        maxWidth: "clamp(90px, 25vw, 140px)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Links */}
            <div className="links-grid" style={{ flex: 1.2 }}>
              {Object.entries(cols).map(([heading, links]) => (
                <FooterAccordion
                  key={heading}
                  heading={heading}
                  links={links}
                  open={openSections[heading] ?? false}
                  onToggle={() => toggleSection(heading)}
                />
              ))}

              <FooterAccordion
                heading="Quick Connect"
                open={openSections["Quick Connect"] ?? false}
                onToggle={() => toggleSection("Quick Connect")}
              >
                <p>
                  1336, AL Saqr Business Tower,
                  <br />
                  Sheikh Zayed Road, Dubai
                </p>
              </FooterAccordion>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee — tilted ribbon */}
      <div style={{ position: "relative", padding: "32px 0 20px", overflow: "hidden" }}>
        <div
          style={{
            transform: "rotate(-2deg)",
            transformOrigin: "center",
            width: "110%",
            marginLeft: "-5%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 32,
              animation: "marquee 20s linear infinite",
              width: "max-content",
            }}
          >
            {[1, 2].map((group) => (
              <div key={group} style={{ display: "flex", alignItems: "center", gap: 32, paddingRight: 32 }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 32 }}>
                    <span
                      style={{
                        fontSize: "clamp(1.2rem, 4vw, 3.2rem)",
                        fontWeight: 600,
                        fontFamily: "'Outfit', sans-serif",
                        color: "rgba(255, 255, 255, 0.2)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Crafting Since 2016
                    </span>
                    <StarIcon />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div style={{ padding: "20px 24px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "clamp(10px, 3vw, 11px)", color: "var(--muted, #5a5a5a)", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.02em" }}>
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>

    </footer>
  );
}