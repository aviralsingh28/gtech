"use client";

const stats = [
  {
    label: "Enterprise projects delivered across web, mobile, and cloud",
    value: "1000+",
  },
  {
    label: "International clients trusting our engineering teams",
    value: "80+",
  },
  {
    label: "Client satisfaction across 8+ years of delivery",
    value: "98%",
  },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      style={{
        background: "#FFFFFF",
        padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
      }}
    >
      <div
        style={{
          background: "#FBFAF9",
          borderRadius: 32,
          padding: "clamp(56px, 9vw, 100px) 0",
        }}
      >
        <div 
          className="stats-container"
          style={{ 
            maxWidth: 1360, 
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
          }}
        >
          <style>{`
            .stats-header {
              display: flex;
              flex-direction: column;
              gap: 24px;
              margin-bottom: 80px;
            }
            @media (min-width: 1024px) {
              .stats-header {
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
                gap: 64px;
              }
            }
            .stats-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
            }
            @media (min-width: 640px) {
              .stats-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (min-width: 900px) {
              .stats-grid { grid-template-columns: repeat(3, 1fr); }
            }
          `}</style>

          {/* Justified Header */}
          <div className="stats-header">
            {/* Left side */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  color: "#555",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: 32,
                }}
              >
                SMART BUSINESSES ARE MOVING TO DIGITAL-FIRST SOLUTIONS.
              </p>
              <h2
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                We Build <span style={{ color: "#f5a623", fontWeight: 700 }}>What You Imagine.</span>
              </h2>
            </div>

            {/* Right side */}
            <div style={{ flexShrink: 0, maxWidth: 520 }}>
              <p
                style={{
                  fontSize: "clamp(1.3rem, 2.3vw, 1.6rem)",
                  fontWeight: 500,
                  color: "#333",
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                We design and build scalable, high-converting digital solutions that drive real business growth.
              </p>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 250,
                  boxShadow: "0 4px 40px rgba(0,0,0,0.02)",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "#888",
                    lineHeight: 1.5,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    maxWidth: 240,
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontSize: "clamp(3.2rem, 5vw, 4.4rem)",
                    fontWeight: 600,
                    color: "#111",
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
