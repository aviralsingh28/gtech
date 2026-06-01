"use client";

import { pageHeroSectionStyle, pageHeroStyles } from "@/lib/pageHero";

export default function CareerHero() {
  return (
    <section style={pageHeroSectionStyle}>
      <style>{pageHeroStyles}</style>
      <div
        className="page-hero-card"
        style={{
          background:
            "linear-gradient(135deg, var(--surface, #fbfaf9) 0%, rgba(245, 166, 35, 0.35) 100%)",
        }}
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
              Career · Join Our Growing Team
            </p>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#111",
                lineHeight: 1.1,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Build Your Future With GTech Soft
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                color: "var(--muted, #5a5a5a)",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
                maxWidth: 520,
              }}
            >
              We&apos;re looking for talented individuals who are passionate
              about technology, innovation, and making a global impact. Join our
              team of 100+ developers and professionals.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 400,
            }}
          >
            {[
              { value: "100+", label: "Team Members Worldwide" },
              { value: "8+", label: "Years of Excellence" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "clamp(24px, 4vw, 32px)",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "var(--amber, #f5a623)",
                    marginBottom: 8,
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted, #5a5a5a)",
                    fontWeight: 500,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
