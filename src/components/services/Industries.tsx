"use client";

const industries = [
  "Real Estate & Property Tech",
  "Retail, Luxury & E-Commerce",
  "Hospitality & Tourism",
  "Healthcare & Wellbeing",
  "Logistics & On-Demand Services",
  "Finance, Corporate & SMEs",
  "Education & e-Learning",
];

export default function Industries() {
  return (
    <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .ind-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 56px;
          }
          @media (min-width: 640px) {
            .ind-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (min-width: 1024px) {
            .ind-grid { grid-template-columns: repeat(3, 1fr); }
          }
          .ind-card {
            background: #FBFAF9;
            border-radius: 18px;
            padding: 28px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            transition: background 0.3s ease, transform 0.3s ease;
            cursor: default;
          }
          .ind-card:hover {
            background: #f5a623;
            transform: translateY(-4px);
          }
          .ind-card:hover .ind-text { color: #fff; }
          .ind-card:hover .ind-arrow { background: #fff; }
        `}</style>

        <div style={{ maxWidth: 720 }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.15em",
              color: "#333",
              textTransform: "uppercase",
              marginBottom: 20,
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Industries We Serve
          </p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 400,
              color: "#1a1a1a",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Domain expertise across regulated and consumer-facing sectors
          </h2>
        </div>

        <div className="ind-grid">
          {industries.map((industry) => (
            <div key={industry} className="ind-card">
              <p
                className="ind-text"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#111",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "-0.01em",
                  transition: "color 0.3s ease",
                }}
              >
                {industry}
              </p>
              <div
                className="ind-arrow"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.3s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
