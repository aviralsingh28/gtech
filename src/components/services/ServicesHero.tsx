"use client";

import { pageHeroSectionStyle, pageHeroStyles } from "@/lib/pageHero";

export default function ServicesHero() {
  return (
    <section style={pageHeroSectionStyle}>
      <style>{pageHeroStyles}</style>
      <div
        className="page-hero-card"
        style={{
          background:
            "linear-gradient(135deg, var(--surface, #fbfaf9) 0%, rgba(245, 166, 35, 0.35) 100%)",
          display: "flex",
          alignItems: "center",
          minHeight: "inherit",
        }}
      >
        <div 
          className="page-hero-inner"
          style={{
            display: "flex",
            gap: "clamp(2rem, 5vw, 6rem)",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            maxWidth: 1400, // Increased from 1200
            width: "100%",
            margin: "0 auto",
            padding: "3rem 2rem", // Increased vertical padding
          }}
        >
          <div style={{ flex: 1, minWidth: 320 }}> {/* Increased minWidth */}
            <p
              style={{
                fontSize: 14, // Increased from 12
                letterSpacing: "0.18em",
                color: "var(--amber, #f5a623)",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 28, // Increased from 24
              }}
            >
              Our Services
            </p>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)", // Increased from 2.6rem to 3rem min, 4.2rem to 5rem max
                fontWeight: 400,
                color: "#111",
                lineHeight: 1.1,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Built for financial
              <br />
              accuracy, business
              <br />
              intelligence &amp; scale.
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24, // Increased from 20
              maxWidth: 560, // Increased from 480
              flex: 1,
              minWidth: 320, // Increased from 280
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", // Increased from 1rem/1.15rem
                color: "var(--muted, #5a5a5a)",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              From custom software and ERP platforms to mobile apps, cloud
              infrastructure, IoT and UI/UX — we deliver end-to-end solutions
              that move enterprise workloads forward.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12, // Increased from 10
                flexWrap: "wrap",
                marginTop: 12, // Increased from 8
              }}
            >
              {[
                "Software",
                "ERP",
                "Cyber Security",
                "Cloud",
                "Mobile",
                "IoT",
                "UI/UX",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "10px 22px", // Increased from 8px 18px
                    border: "1px solid #d8d4c8",
                    borderRadius: 100,
                    fontSize: 14, // Increased from 13
                    color: "#222",
                    fontWeight: 500,
                    fontFamily: "'Outfit', sans-serif",
                    background: "#fff",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}