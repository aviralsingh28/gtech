"use client";

const phases = [
  { week: "Week 1", title: "Planning & Architecture", body: "Requirement analysis, goal alignment, scope definition, and documentation." },
  { week: "Week 2", title: "UI/UX Design", body: "Wireframes, user flows, high-fidelity designs, and theme finalization." },
  { week: "Week 3-4", title: "Backend Development", body: "Backend logic, APIs, authentication, and integrations built in modular phases." },
  { week: "Week 5-6", title: "Frontend Development", body: "Implementation of approved screens with performance-optimized UI." },
  { week: "Week 6-7", title: "App Development", body: "Native and cross-platform mobile delivery (optional)." },
  { week: "Week 8", title: "QA & Testing", body: "UI, unit, integration, and admin panel testing with shared bug tracker." },
  { week: "Week 9", title: "Deployment", body: "Production deployment with security checks, monitoring, and ongoing support." },
];

export default function ProjectTimeline() {
  return (
    <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .timeline {
            margin-top: 56px;
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .timeline-row {
            display: grid;
            grid-template-columns: 110px 1fr;
            grid-template-areas: "week title" "week body";
            column-gap: 20px;
            row-gap: 8px;
            padding: 28px 0;
            border-top: 1px solid #eaeaea;
            transition: background 0.3s ease;
          }
          @media (min-width: 768px) {
            .timeline-row {
              grid-template-columns: 200px 1fr 1.2fr;
              grid-template-areas: "week title body";
              column-gap: 48px;
              padding: 36px 0;
            }
          }
          .timeline-week { grid-area: week; }
          .timeline-title { grid-area: title; }
          .timeline-body { grid-area: body; }
          .timeline-row:last-child { border-bottom: 1px solid #eaeaea; }
          .timeline-row:hover .timeline-week { color: #f5a623; }
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
            Project Timeline
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
            Estimated delivery: 80–90 business working days
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#666",
              lineHeight: 1.7,
              fontFamily: "'Outfit', sans-serif",
              marginTop: 16,
              maxWidth: 600,
            }}
          >
            Development begins after UI approval. Modular phases keep progress
            transparent and delivery fast.
          </p>
        </div>

        <div className="timeline">
          {phases.map((phase) => (
            <div key={phase.title} className="timeline-row">
              <p
                className="timeline-week"
                style={{
                  fontSize: 14,
                  color: "#999",
                  fontWeight: 600,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                }}
              >
                {phase.week}
              </p>
              <h3
                className="timeline-title"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontWeight: 500,
                  color: "#111",
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {phase.title}
              </h3>
              <p
                className="timeline-body"
                style={{
                  fontSize: 15,
                  color: "#5a5a5a",
                  lineHeight: 1.7,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
