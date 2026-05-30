"use client";

export default function IndustriesHero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#fff",
        padding: "clamp(80px, 11vw, 104px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
      }}
    >
      <style>{`
        .industries-hero-card {
          position: relative;
          height: calc(100svh - 128px);
          min-height: 560px;
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: clamp(64px, 11vw, 140px) clamp(24px, 6vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        @media (max-width: 768px) {
          .industries-hero-card { border-radius: 24px; }
        }
        .hero-content {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .hero-tag {
            font-size: 13px;
            letter-spacing: 0.12em;
            color: #f5a623;
            text-transform: uppercase;
            font-weight: 700;
            font-family: 'Outfit', sans-serif;
            animation: fadeInUp 0.8s ease 0.1s both;
          }
          .hero-title {
            font-size: clamp(2.8rem, 6vw, 4.5rem);
            font-weight: 400;
            color: #fff;
            font-family: 'Outfit', sans-serif;
            line-height: 1.15;
            letter-spacing: -0.02em;
            animation: fadeInUp 0.8s ease 0.2s both;
          }
          .hero-subtitle {
            font-size: clamp(1rem, 2vw, 1.25rem);
            color: #b3b3b3;
            font-family: 'Outfit', sans-serif;
            line-height: 1.6;
            max-width: 680px;
            animation: fadeInUp 0.8s ease 0.3s both;
          }
          .hero-cta {
            display: inline-flex;
            gap: 12px;
            align-items: center;
            background: #f5a623;
            color: #1a1a1a;
            padding: 14px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            font-family: 'Outfit', sans-serif;
            border: 2px solid #f5a623;
            transition: all 0.4s ease;
            cursor: pointer;
            animation: fadeInUp 0.8s ease 0.4s both;
            margin-top: 12px;
          }
          .hero-cta:hover {
            background: transparent;
            color: #f5a623;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (max-width: 768px) {
            .hero-title { font-size: 2rem; }
            .hero-subtitle { font-size: 1rem; }
          }
        `}</style>

      <div className="industries-hero-card">
        <div className="hero-content">
          <div>
            <p className="hero-tag">Industry-Focused Digital Solutions</p>
            <h1 className="hero-title">
             Accelerating Digital Transformation Across Industries
            </h1>
            <p className="hero-subtitle">
We deliver innovative digital solutions that help businesses streamline operations, enhance customer experiences, and accelerate growth.
            </p>
            <a href="#solutions" className="hero-cta">
              Explore Solutions
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
