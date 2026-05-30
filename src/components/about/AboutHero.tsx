"use client";

export default function AboutHero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#fff",
        padding: "clamp(80px, 11vw, 104px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
      }}
    >
      <style>{`
        .about-hero-card {
          position: relative;
          height: calc(100svh - 128px);
          min-height: 560px;
          border-radius: 32px;
          overflow: hidden;
          background: #FBFAF9;
          padding: clamp(64px, 11vw, 140px) clamp(24px, 6vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .about-hero-card { border-radius: 24px; }
        }
        .about-hero-grid {
          max-width: 1360px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: end;
        }
        @media (min-width: 1024px) {
          .about-hero-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 80px;
          }
        }
      `}</style>

      <div className="about-hero-card">
        <div className="about-hero-grid">
          <div>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "#f5a623",
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
                fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
                fontWeight: 400,
                color: "#111",
                lineHeight: 1.05,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Designing
              <br />
              the future
            </h1>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 480 }}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                color: "#444",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Gtech Soft Solution LLC is a global technology company with 8+ years
              of expertise, powered by a strong team of 100+ developers. We build
              advanced accounting and banking software, enterprise CRM platforms,
              and intelligent multi-level reporting systems that optimise business
              performance.
            </p>
            <p
              style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                color: "#444",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Trusted by 80+ international clients, we deliver scalable and secure
              digital solutions that accelerate transformation and drive long-term
              growth for organisations worldwide.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
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
