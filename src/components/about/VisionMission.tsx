"use client";

const items = [
  {
    label: "Vision",
    title: "Be the global leader in digital transformation.",
    body:
      "Recognized for our innovative solutions and commitment to excellence. We envision a future where technology seamlessly enhances business operations and human experiences.",
    accent: "#f5a623",
  },
  {
    label: "Mission",
    title: "Empower businesses with innovative digital solutions.",
    body:
      "We drive growth, efficiency, and success in the modern world — committed to delivering excellence through cutting-edge technology and exceptional service.",
    accent: "#1a1a1a",
  },
];

export default function VisionMission() {
  return (
    <section style={{ background: "#fff", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" }}>
      <div
        style={{
          background: "#FBFAF9",
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
            .vm-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
            }
            @media (min-width: 900px) {
              .vm-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
            }
            .vm-card {
              background: #fff;
              border-radius: 28px;
              padding: clamp(36px, 5vw, 56px);
              border: 1px solid #efece6;
              transition: transform 0.4s ease, box-shadow 0.4s ease;
            }
            .vm-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 24px 50px rgba(0,0,0,0.06);
            }
          `}</style>

          <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              What Drives Us
            </p>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 400,
                color: "#1a1a1a",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                maxWidth: 760,
                margin: "0 auto",
              }}
            >
              The vision and mission that guide every line of code we ship
            </h2>
          </div>

          <div className="vm-grid">
            {items.map((item) => (
              <div key={item.label} className="vm-card">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: item.accent,
                      display: "inline-block",
                    }}
                  />
                  <p
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.18em",
                      color: "#1a1a1a",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                    fontWeight: 500,
                    color: "#111",
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.25,
                    marginBottom: 20,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: "#5a5a5a",
                    lineHeight: 1.7,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
