"use client";

export default function ServicesHero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#fff",
        padding: "clamp(80px, 11vw, 104px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
      }}
    >
      <style>{`
        .svc-hero-card {
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
          .svc-hero-card { border-radius: 24px; }
        }
        .svc-hero-grid {
          max-width: 1360px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: end;
        }
        @media (min-width: 1024px) {
          .svc-hero-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 80px;
          }
        }
      `}</style>

      <div className="svc-hero-card">
        <div className="svc-hero-grid">
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
              Our Services
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
              Built for financial
              <br />
              accuracy, business
              <br />
              intelligence &amp; scale.
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
              From custom software and ERP platforms to mobile apps, cloud
              infrastructure, IoT and UI/UX — we deliver end-to-end solutions
              that move enterprise workloads forward.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              {["Software", "ERP", "Cyber Security", "Cloud", "Mobile", "IoT", "UI/UX"].map((tag) => (
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
