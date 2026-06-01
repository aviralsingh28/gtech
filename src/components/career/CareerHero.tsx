"use client";

export default function CareerHero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#fff",
        padding: "clamp(32px, 6vw, 48px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
        marginTop: "80px",
      }}
    >
      <style>{`
        .career-hero-card {
          position: relative;
          height: calc(100svh - 80px - clamp(32px, 6vw, 48px) - clamp(32px, 6vw, 48px));
          min-height: 500px;
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, #FBFAF9 0%, #f5a623 100%);
          padding: clamp(40px, 8vw, 100px) clamp(24px, 5vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .career-hero-card { 
            border-radius: 24px;
            height: auto;
            min-height: 400px;
          }
        }
        .career-hero-grid {
          max-width: 1360px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: end;
        }
        @media (max-width: 1023px) {
          .career-hero-grid {
            align-items: flex-start;
            padding-top: 20px;
          }
        }
        @media (min-width: 1024px) {
          .career-hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
          }
        }
      `}</style>

      <div className="career-hero-card">
        <div className="career-hero-grid">
          <div>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "#111",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 24,
              }}
            >
              Career · Join Our Growing Team
            </p>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
                fontWeight: 400,
                color: "#111",
                lineHeight: 1.05,
                marginBottom: 24,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Build Your Future With GTech Soft
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "#222",
                lineHeight: 1.6,
                marginBottom: 32,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
              }}
            >
              We're looking for talented individuals who are passionate about technology, innovation, and making a global impact. Join our team of 100+ developers and professionals.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: 40,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#f5a623",
                  marginBottom: 8,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                100+
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  fontWeight: 500,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Team Members Worldwide
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: 40,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#f5a623",
                  marginBottom: 8,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                8+
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  fontWeight: 500,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
