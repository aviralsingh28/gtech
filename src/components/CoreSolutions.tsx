"use client";

const solutions = [
  {
    title: "Accounting & Banking Software",
    points: [
      "Automated financial workflows",
      "Secure transaction processing",
    ],
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

const additionalFeatures = [
  "Automated financial workflows",
  "Secure transaction processing",
  "Automated sales & service workflows",
  "Advanced analytics & forecasting",
  "Hierarchical dashboards for teams & departments",
];

export default function CoreSolutions() {
  return (
    <section
      id="core-solutions"
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
            .home-core-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              margin-top: clamp(40px, 6vw, 64px);
            }
            @media (min-width: 768px) {
              .home-core-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
              }
            }
            .home-core-card {
              background: rgba(255, 255, 255, 0.04);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 24px;
              padding: clamp(24px, 4vw, 40px);
              transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
              text-align: center;
            }
            .home-core-card:hover {
              background: rgba(255, 255, 255, 0.07);
              border-color: rgba(245, 166, 35, 0.25);
              transform: translateY(-4px);
            }
            .home-core-accent {
              display: inline-block;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              margin-bottom: 24px;
              flex-shrink: 0;
            }
            .home-core-points {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 12px;
              text-align: center;
            }
            .home-core-points li {
              font-size: 14px;
              color: rgba(255, 255, 255, 0.75);
              font-family: 'Outfit', sans-serif;
              line-height: 1.6;
              padding-left: 0;
              position: relative;
            }
            .home-core-points li::before {
              display: none;
            }
            
            /* Additional features styles */
            .additional-features {
              margin-top: 48px;
              padding-top: 48px;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
              margin-top: 24px;
            }
            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            .feature-item {
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.06);
              border-radius: 16px;
              padding: 16px 20px;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.7);
              font-family: 'Outfit', sans-serif;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px;
              text-align: center;
            }
            .feature-item:hover {
              background: rgba(255, 255, 255, 0.05);
              border-color: rgba(245, 166, 35, 0.2);
              transform: translateX(4px);
            }
            .feature-dot {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: var(--amber, #f5a623);
              flex-shrink: 0;
            }
            .single-center {
              display: flex;
              justify-content: center;
              grid-column: 1 / -1;
            }
            
            /* Center header content */
            .header-content {
              text-align: center;
              margin: 0 auto;
            }
          `}</style>

          <div className="header-content" style={{ maxWidth: 820, margin: "0 auto" }}>
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
                maxWidth: 620,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Enterprise-grade platforms tailored for finance, sales, and
              reporting — designed to scale with your business.
            </p>
          </div>

          <div className="home-core-grid">
            {solutions.map((solution) => (
              <article key={solution.title} className="home-core-card">
                <span
                  className="home-core-accent"
                  style={{ background: solution.accent }}
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
                <ul className="home-core-points">
                  {solution.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Additional Features Section - 2-2-1 centered layout */}
          <div className="additional-features">
            <div className="features-grid">
              {/* First row - 2 items */}
              {additionalFeatures.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-dot" />
                  {feature}
                </div>
              ))}
              
              {/* Second row - 2 items */}
              {additionalFeatures.slice(2, 4).map((feature, idx) => (
                <div key={idx + 2} className="feature-item">
                  <span className="feature-dot" />
                  {feature}
                </div>
              ))}
              
              {/* Third row - 1 item centered */}
              <div className="single-center">
                <div className="feature-item" style={{ width: "auto", minWidth: "280px" }}>
                  <span className="feature-dot" />
                  {additionalFeatures[4]}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}