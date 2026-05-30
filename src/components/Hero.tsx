"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        background: "#fff",
        padding: "clamp(80px, 11vw, 104px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
      }}
    >
      <style>{`
        .hero-card {
          position: relative;
          height: calc(100svh - 128px);
          min-height: 560px;
          border-radius: 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: #0a0a0a;
        }
        @media (max-width: 768px) {
          .hero-card { min-height: 520px; border-radius: 24px; }
        }
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1360px;
          margin: 0 auto;
          width: 100%;
          padding: 0 clamp(20px, 5vw, 64px) clamp(28px, 6vw, 64px);
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .hero-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            gap: 64px;
          }
        }
      `}</style>
      <div className="hero-card">
        {/* Background Video */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/images/Brand/bg-video.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient overlay bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </div>

        {/* Content at bottom */}
        <div className="hero-content">
          {/* Left — Big white title */}
          <div style={{ flex: "1" }}>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.1,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Building Scalable
              <br />
              Digital Systems for
              <br />
              Modern Businesses.
            </h1>
          </div>

          {/* Right — Pills + subtitle + CTA */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            flexShrink: 0,
            maxWidth: "480px"
          }}>
            {/* Pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Innovate", "Scale", "Empower"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 20px",
                    border: "1px solid rgba(255,255,255,0.4)",
                    borderRadius: 100,
                    fontSize: 13,
                    color: "#fff",
                    fontWeight: 400,
                    backdropFilter: "blur(4px)",
                    background: "transparent",
                    cursor: "default",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Subtitle */}
            <h2
              style={{
                fontSize: "clamp(1.3rem, 2.3vw, 1.6rem)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.35,
                fontFamily: "'Outfit', sans-serif",
                maxWidth: 440,
              }}
            >
              Enterprise-grade software, cloud<br />
              infrastructure, and AI-powered solutions<br />
              that accelerate growth.
            </h2>

            {/* CTA link */}
            <a
              href="#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                marginTop: 4,
              }}
            >
              Schedule a Demo
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
