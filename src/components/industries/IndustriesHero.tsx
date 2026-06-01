"use client";

import { pageHeroSectionStyle, pageHeroStyles } from "@/lib/pageHero";

export default function IndustriesHero() {
  return (
    <section style={pageHeroSectionStyle}>
      <style>{pageHeroStyles}</style>
      <div
        className="page-hero-card"
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)",
            pointerEvents: "none",
          }}
          aria-hidden
        />
        <div className="page-hero-inner">
          <div style={{ gridColumn: "1 / -1", maxWidth: 720 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "var(--amber, #f5a623)",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 24,
              }}
            >
              Industry-Focused Digital Solutions
            </p>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.1,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Accelerating digital transformation across industries
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
                maxWidth: 640,
                marginBottom: 24,
              }}
            >
              We deliver innovative digital solutions that help businesses
              streamline operations, enhance customer experiences, and
              accelerate growth.
            </p>
            <a
              href="#solutions"
              style={{
                display: "inline-flex",
                gap: 10,
                alignItems: "center",
                background: "var(--amber, #f5a623)",
                color: "#1a1a1a",
                padding: "12px 28px",
                borderRadius: 100,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                fontFamily: "'Outfit', sans-serif",
                border: "2px solid var(--amber, #f5a623)",
                transition: "all 0.3s ease",
              }}
            >
              Explore Solutions
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
