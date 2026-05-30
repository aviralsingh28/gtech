"use client";

const reasons = [
  {
    title: "Fast Delivery",
    body:
      "We understand the importance of time-to-market and deliver projects efficiently without compromising on quality.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L4.09 12.97a1 1 0 0 0 .77 1.63h6.14L11 22l8.91-10.97a1 1 0 0 0-.77-1.63H13L13 2z" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    body:
      "Rigorous testing and quality control processes ensure your software meets the highest standards of performance and reliability.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Client-Centric Approach",
    body:
      "We prioritize your needs and maintain open communication throughout the development process for optimal results.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="#f5a623" strokeWidth="1.6" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    body:
      "Our talented developers, designers, and project managers bring years of industry experience to every project.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#f5a623" strokeWidth="1.6" />
        <path d="M19 21l-2.5-7M5 21l2.5-7M12 15v6" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhyPartner() {
  return (
    <section style={{ background: "#fff", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) clamp(72px, 10vw, 120px)" }}>
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
            .why-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              margin-top: 64px;
            }
            @media (min-width: 640px) {
              .why-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
            }
            @media (min-width: 1024px) {
              .why-grid { grid-template-columns: repeat(4, 1fr); }
            }
            .why-card {
              background: #fff;
              border-radius: 24px;
              padding: clamp(28px, 4vw, 40px);
              border: 1px solid #efece6;
              transition: transform 0.4s ease, box-shadow 0.4s ease;
              height: 100%;
            }
            .why-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            }
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
              Why Partner With Us
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
              The advantages that make the difference
            </h2>
          </div>

          <div className="why-grid">
            {reasons.map((reason) => (
              <div key={reason.title} className="why-card">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "#fff5e3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  {reason.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#111",
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5a5a5a",
                    lineHeight: 1.7,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
