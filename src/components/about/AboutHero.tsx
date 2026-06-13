"use client";

import { pageHeroSectionStyle, pageHeroStyles } from "@/lib/pageHero";

export default function AboutHero() {
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
            padding: "3rem 2rem", // Increased from 2rem
          }}
        >
          <div style={{ flex: 1, minWidth: 320 }}> {/* Increased from 280 */}
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
              About Us · Made in Dubai, Built for the World
            </p>
            <h1
              style={{
                fontSize: "clamp(4rem, 9vw, 7rem)", // Increased from 3.5rem to 4rem min, 6rem to 7rem max
                fontWeight: 400,
                color: "#111",
                lineHeight: 1.1,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: 24, // Increased from 20
              }}
            >
              Designing
              <br />
              the future
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
              Gtech Soft Solution LLC is a global technology company with 8+
              years of expertise, powered by a strong team of 100+ developers.
              We build advanced accounting and banking software, enterprise CRM
              platforms, and intelligent multi-level reporting systems.
            </p>
            <p
              style={{
                fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", // Increased from 1rem/1.15rem
                color: "var(--muted, #5a5a5a)",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Trusted by 80+ international clients, we deliver scalable and
              secure digital solutions that accelerate transformation worldwide.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12, // Increased from 10
                flexWrap: "wrap",
                marginTop: 12, // Increased from 8
              }}
            >
              {["8+ Years", "100+ Developers", "80+ Clients"].map((tag) => (
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