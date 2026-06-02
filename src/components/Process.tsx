"use client";
import Image from "next/image";

const steps = [
  {
    title: "Discovery & Planning",
    desc: "Understanding the problem",
    image: "/images/Process/Onboarding.svg",
    pills: ["Requirement gathering", "Domain modeling", "System boundaries", "Stakeholder alignment"],
  },
  {
    title: "Architecture & Design",
    desc: "Designing for scale",
    image: "/images/Process/Exploration.svg",
    pills: ["Microservices design", "DB schema", "Caching strategy", "API contracts"],
  },
  {
    title: "Development & Testing",
    desc: "Building with quality",
    image: "/images/Process/Onboarding.svg",
    pills: ["Frontend & backend", "Unit & integration", "E2E testing", "Load testing"],
  },
  {
    title: "Deployment & Monitoring",
    desc: "Shipping with confidence",
    image: "/images/Process/Onboarding.svg",
    pills: ["CI/CD pipelines", "Canary deploy", "Logs & metrics", "Performance tuning"],
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#FFFFFF", padding: "clamp(72px, 10vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 10vw, 100px)" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#1a1a1a",
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.25,
              maxWidth: 800,
              margin: "0 auto",
              letterSpacing: "-0.01em",
            }}
          >
            From discovery to deployment — a six-stage process built for predictable, scalable delivery
          </h2>
        </div>

        <style>{`
          .process-timeline {
            position: relative;
            max-width: 1200px;
            margin: 0 auto clamp(40px, 8vw, 64px);
          }
          .process-timeline-line {
            background: var(--border, #e0e0e0);
            height: 1px;
            position: absolute;
            left: 0;
            right: 0;
            top: 7px;
            z-index: 0;
          }
          .process-timeline-steps {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            z-index: 1;
            gap: 8px;
          }
          .process-timeline-step {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #fff;
            padding: 0 8px;
            flex-shrink: 0;
          }
          .process-timeline-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #f5a623;
            flex-shrink: 0;
          }
          .process-timeline-label {
            font-size: 13px;
            color: #5a5a5a;
            font-family: 'Outfit', sans-serif;
            white-space: nowrap;
          }
          @media (max-width: 640px) {
            .process-timeline-line { display: none; }
            .process-timeline-steps {
              flex-direction: column;
              align-items: stretch;
              gap: 16px;
            }
            .process-timeline-step {
              justify-content: flex-start;
              padding: 0;
            }
            .process-timeline-label {
              white-space: normal;
            }
          }
        `}</style>
        <div className="process-timeline">
          <div className="process-timeline-line" aria-hidden />
          <div className="process-timeline-steps">
            <div className="process-timeline-step">
              <span className="process-timeline-dot" aria-hidden />
              <span className="process-timeline-label">Engineered for scale</span>
            </div>
            <div className="process-timeline-step">
              <span className="process-timeline-dot" aria-hidden />
              <span className="process-timeline-label">Predictable delivery cycles</span>
            </div>
            <div className="process-timeline-step">
              <span className="process-timeline-dot" aria-hidden />
              <span className="process-timeline-label">Production-ready delivery</span>
            </div>
          </div>
        </div>

        {/* Cards Marquee - Compact & Complete */}
        <style>{`
          @keyframes process-scroll-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .process-marquee {
            position: relative;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%);
          }
          .process-track {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: process-scroll-ltr 40s linear infinite;
          }
          .process-marquee:hover .process-track {
            animation-play-state: paused;
          }
          .process-card {
            flex: 0 0 auto;
            width: 280px;
            background: #fafafa;
            border-radius: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            min-height: 360px;
          }
          .process-pill-text {
            font-size: 11px;
            white-space: nowrap;
          }
          @media (max-width: 768px) {
            .process-card {
              width: 260px;
              min-height: 340px;
              padding: 18px;
            }
          }
          @media (max-width: 640px) {
            .process-card {
              width: 240px;
              min-height: 320px;
              padding: 16px;
            }
            .process-pill-text {
              white-space: normal !important;
              font-size: 10px;
            }
          }
        `}</style>

        <div className="process-marquee">
          <div className="process-track">
            {[...steps, ...steps].map((step, i) => (
              <div key={i} className="process-card" aria-hidden={i >= steps.length}>
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid #ebebeb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    marginBottom: 20,
                  }}
                >
                  <Image src={step.image} alt={step.title} width={22} height={22} style={{ objectFit: "contain" }} />
                </div>

                {/* Text */}
                <div style={{ marginBottom: 20 }}>
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      color: "#111",
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: "-0.01em",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#5a5a5a", fontFamily: "'Outfit', sans-serif", lineHeight: 1.4 }}>
                    {step.desc}
                  </p>
                </div>

                {/* Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {step.pills.map((pill, pi) => (
                    <div
                      key={pi}
                      style={{
                        border: "1px solid #e2e2e2",
                        borderRadius: 100,
                        padding: "4px 12px",
                        background: "#fff",
                      }}
                    >
                      <p className="process-pill-text" style={{ color: "#5a5a5a", fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}>
                        {pill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}