"use client";

const beliefs = [
  {
    num: "01",
    title: "Innovation",
    body:
      "Pushing boundaries with creative solutions and staying ahead of technological trends.",
  },
  {
    num: "02",
    title: "Excellence",
    body:
      "Delivering quality in everything we do and consistently exceeding client expectations.",
  },
  {
    num: "03",
    title: "Integrity",
    body:
      "Building trust through honest partnerships and transparent communication.",
  },
];

export default function Beliefs() {
  return (
    <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .beliefs-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 56px;
          }
          @media (min-width: 768px) {
            .beliefs-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; }
          }
          .belief-card {
            padding: clamp(32px, 5vw, 48px);
            background: #FBFAF9;
            border-radius: 24px;
            transition: transform 0.4s ease, background 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          .belief-card:hover {
            transform: translateY(-6px);
            background: #f5f4ee;
          }
          .belief-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #f5a623;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
          }
          .belief-card:hover::before {
            transform: scaleX(1);
          }
        `}</style>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
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
            What We Believe
          </p>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 400,
              color: "#1a1a1a",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 720,
            }}
          >
            Three principles, every project, no exceptions
          </h2>
        </div>

        <div className="beliefs-grid">
          {beliefs.map((belief) => (
            <div key={belief.num} className="belief-card">
              <p
                style={{
                  fontSize: 14,
                  color: "#f5a623",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.08em",
                  marginBottom: 32,
                }}
              >
                / {belief.num}
              </p>
              <h3
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                  fontWeight: 500,
                  color: "#111",
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {belief.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "#5a5a5a",
                  lineHeight: 1.7,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {belief.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
