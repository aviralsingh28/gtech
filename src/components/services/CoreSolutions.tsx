"use client";

const solutions = [
  {
    title: "Accounting & Banking Software",
    points: ["Automated financial workflows", "Secure transaction processing"],
    accent: "#f5a623",
  },
  {
    title: "CRM Platforms",
    points: ["Automated sales & service workflows", "Advanced analytics & forecasting"],
    accent: "#1a1a1a",
  },
  {
    title: "Multi-Level Reporting Systems",
    points: ["Hierarchical dashboards for teams & departments", "Drill-down KPIs and exports"],
    accent: "#769BBE",
  },
];

export default function CoreSolutions() {
  return (
    <section style={{ background: "#fff", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" }}>
      <div
        style={{
          background: "#0a0a0a",
          borderRadius: 32,
          padding: "clamp(72px, 10vw, 120px) 0",
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
          }}
        >
          <style>{`
            .core-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              margin-top: 64px;
            }
            @media (min-width: 768px) {
              .core-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
            }
            .core-card {
              background: rgba(255,255,255,0.04);
              border: 1px solid rgba(255,255,255,0.08);
              border-radius: 24px;
              padding: clamp(28px, 4vw, 40px);
              transition: background 0.3s ease, transform 0.3s ease;
            }
            .core-card:hover {
              background: rgba(255,255,255,0.07);
              transform: translateY(-4px);
            }
          `}</style>

          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "#f5a623",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 20,
              }}
            >
              Our Core Software Solutions
            </p>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Built for financial accuracy, business intelligence &amp; scalable operations
            </h2>
          </div>

          <div className="core-grid">
            {solutions.map((solution) => (
              <div key={solution.title} className="core-card">
                <span
                  style={{
                    display: "inline-block",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: solution.accent,
                    marginBottom: 24,
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: "#fff",
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: 20,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {solution.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {solution.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: "'Outfit', sans-serif",
                        lineHeight: 1.6,
                        paddingLeft: 18,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 9,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#f5a623",
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
