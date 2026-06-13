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
            maxWidth: 1400,
            width: "100%",
            margin: "0 auto",
            padding: "3rem 2rem",
          }}
        >
          <div style={{ flex: 1, minWidth: 320 }}>
            <p
              style={{
                fontSize: 14,
                letterSpacing: "0.18em",
                color: "var(--amber, #f5a623)",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 28,
              }}
            >
              Career · Join Our Growing Team
            </p>
            <h1
              style={{
                fontSize: "clamp(3.5rem, 6vw, 5rem)",
                fontWeight: 400,
                color: "#111",
                lineHeight: 1.1,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Build Your Future With GTech Soft
            </h1>
            <p
              style={{
                fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)",
                color: "var(--muted, #5a5a5a)",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
                maxWidth: 560,
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
              gap: 20,
              maxWidth: 480,
              flex: 1,
              minWidth: 320,
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
                  borderRadius: 24,
                  padding: "clamp(28px, 5vw, 38px)",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 700,
                    color: "var(--amber, #f5a623)",
                    marginBottom: 12,
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: 15,
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