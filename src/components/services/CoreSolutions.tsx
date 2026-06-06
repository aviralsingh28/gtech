"use client";

const solutions = [
  {
    title: "Accounting & Banking Software",
    points: ["Automated financial workflows", "Secure transaction processing"],
    accent: "var(--amber, #f5a623)",
  },
  {
    title: "CRM Platforms",
    points: [
      "Automated sales & service workflows",
      "Advanced analytics & forecasting",
    ],
    accent: "var(--amber, #f5a623)",
  },
  {
    title: "Multi-Level Reporting Systems",
    points: [
      "Hierarchical dashboards for teams & departments",
      "Drill-down KPIs and exports",
    ],
    accent: "var(--amber, #f5a623)",
  },
];

export default function CoreSolutions() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0",
      }}
    >
      <div
        style={{
          background: "var(--dark-elevated, #0a0a0a)",
          borderRadius: 32,
          padding: "clamp(56px, 8vw, 96px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 85% 15%, rgba(245, 166, 35, 0.14), transparent 50%)",
            pointerEvents: "none",
          }}
          aria-hidden
        />

        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <style>{`
            .core-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              margin-top: clamp(40px, 6vw, 64px);
            }
            @media (min-width: 768px) {
              .core-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
              }
            }
            .core-card {
              background: rgba(255, 255, 255, 0.04);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 24px;
              padding: clamp(24px, 4vw, 40px);
              transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
            }
            .core-card:hover {
              background: rgba(255, 255, 255, 0.07);
              border-color: rgba(245, 166, 35, 0.25);
              transform: translateY(-4px);
            }
            .core-points {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }
            .core-points li {
              font-size: 14px;
              color: rgba(255, 255, 255, 0.75);
              font-family: 'Outfit', sans-serif;
              line-height: 1.6;
              padding-left: 18px;
              position: relative;
            }
            .core-points li::before {
              content: "";
              position: absolute;
              left: 0;
              top: 9px;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: var(--amber, #f5a623);
            }
          `}</style>

          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "var(--amber, #f5a623)",
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
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Built for financial accuracy, business intelligence &amp; scalable
              operations
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                color: "rgba(255, 255, 255, 0.65)",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.7,
                marginTop: 16,
                maxWidth: 560,
              }}
            >
              Enterprise-grade platforms tailored for finance, sales, and
              reporting — designed to scale with your business.
            </p>
          </div>

          <div className="core-grid">
            {solutions.map((solution) => (
              <article key={solution.title} className="core-card">
                <span
                  style={{
                    display: "inline-block",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: solution.accent,
                    marginBottom: 24,
                  }}
                  aria-hidden
                />
                <h3
                  style={{
                    fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
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
                <ul className="core-points">
                  {solution.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
