"use client";

import { pageHeroSectionStyle, pageHeroStyles } from "@/lib/pageHero";

export default function AboutHero() {
  return (
    <section style={pageHeroSectionStyle}>
      <style>{pageHeroStyles}</style>
      <div
        className="page-hero-card"
        style={{ background: "var(--surface, #fbfaf9)" }}
      >
        <div className="page-hero-inner">
          <div>
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
              About Us · Made in Dubai, Built for the World
            </p>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#111",
                lineHeight: 1.1,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
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
              gap: 20,
              maxWidth: 480,
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
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
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
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
                gap: 10,
                flexWrap: "wrap",
                marginTop: 8,
              }}
            >
              {["8+ Years", "100+ Developers", "80+ Clients"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "8px 18px",
                    border: "1px solid #d8d4c8",
                    borderRadius: 100,
                    fontSize: 13,
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
