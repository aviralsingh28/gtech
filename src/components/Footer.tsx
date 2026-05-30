"use client";
import Image from "next/image";

const cols = {
  Solutions: [
    "Custom Software Development",
    "Web & Mobile Applications",
    "Cloud & DevOps",
    "Cybersecurity",
    "ERP & CRM Systems",
    "IoT & Data Systems",
    "AI & Analytics",
  ],
  Company: ["About us", "Why us", "Team", "Careers"],
};

const StarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#FA9E0D" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M12 0C12 0 12 10.5 24 12C24 12 12.5 13.5 12 24C12 24 11.5 13.5 0 12C0 12 11.5 10.5 12 0Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#000000", position: "relative", overflow: "hidden" }}>

      {/* Top Split Section */}
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" }}>
        <div
          style={{
            background: "#0a0a0a",
            borderRadius: 32,
            padding: "clamp(64px, 10vw, 100px) 0",
          }}
        >
          <style>{`
            .footer-container {
              padding: 0 clamp(20px, 5vw, 64px);
              display: flex;
              flex-direction: column;
              gap: 64px;
            }
            @media (min-width: 1024px) {
              .footer-container {
                flex-direction: row;
                justify-content: space-between;
                gap: 80px;
              }
            }
            .links-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 48px;
            }
            @media (min-width: 540px) {
              .links-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (min-width: 1024px) {
              .links-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 64px;
              }
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div className="footer-container">
            {/* Left Column */}
            <div style={{ flex: 1, maxWidth: 500 }}>
              <Image
                src="/images/Brand/brand-white.svg"
                alt="GTechSoft"
                width={220}
                height={55}
                style={{ objectFit: "contain", marginBottom: 20 }}
              />

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#aaa",
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.6,
                  marginBottom: 48,
                  letterSpacing: "-0.01em"
                }}
              >
                Building scalable digital systems for modern businesses — trusted by 80+ international clients across fintech, healthcare, logistics, and more.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a
                  href="tel:+971524855744"
                  style={{
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
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
                    fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                    color: "#FA9E0D",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  info@gtechsoftsolution.com
                </a>
              </div>
            </div>

            {/* Right Column Links */}
            <div className="links-grid" style={{ flex: 1.2 }}>
              {Object.entries(cols).map(([heading, links]) => (
                <div key={heading}>
                  <h4 style={{ fontSize: 16, fontWeight: 600, color: "#fff", fontFamily: "'Outfit', sans-serif", marginBottom: 24 }}>
                    {heading}
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          style={{
                            fontSize: 14,
                            color: "#888",
                            textDecoration: "none",
                            fontFamily: "'Outfit', sans-serif",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Quick Connect Static */}
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "#fff", fontFamily: "'Outfit', sans-serif", marginBottom: 24 }}>
                  Quick Connect
                </h4>
                <p style={{ fontSize: 14, color: "#888", fontFamily: "'Outfit', sans-serif", lineHeight: 1.6 }}>
                  1336, AL Saqr Business Tower,<br />
                  Sheikh Zayed Road, Dubai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee — tilted ribbon */}
      <div style={{ position: "relative", padding: "60px 0 40px", overflow: "hidden" }}>
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
            padding: "32px 0",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 48,
              animation: "marquee 20s linear infinite",
              width: "max-content",
            }}
          >
            {[1, 2].map((group) => (
              <div key={group} style={{ display: "flex", alignItems: "center", gap: 48, paddingRight: 48 }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 48 }}>
                    <span
                      style={{
                        fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
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
      <div style={{ padding: "32px 24px 64px", textAlign: "center" }}>
        <p style={{ fontSize: 11, color: "#555", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.02em" }}>
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>

    </footer>
  );
}
