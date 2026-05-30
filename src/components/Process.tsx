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
    image: "/images/Process/Onboarding.svg", // Re-using Onboarding as per Figma mockup duplicate
    pills: ["Frontend & backend", "Unit & integration", "E2E testing", "Load testing"],
  },
  {
    title: "Deployment & Monitoring",
    desc: "Shipping with confidence",
    image: "/images/Process/Onboarding.svg", // Re-using Onboarding as per Figma mockup duplicate
    pills: ["CI/CD pipelines", "Canary deploy", "Logs & metrics", "Performance tuning"],
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#FFFFFF", padding: "clamp(72px, 10vw, 120px) clamp(16px, 4vw, 24px)" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 100 }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#1a1a1a",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.25,
              maxWidth: 800,
              margin: "0 auto",
              letterSpacing: "-0.01em",
            }}
          >
            From discovery to deployment — a six-stage process built for predictable, scalable delivery
          </h2>
        </div>

        {/* Timeline Graphic */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", marginBottom: 64, maxWidth: 1200, margin: "0 auto 64px" }}>
          {/* Connecting line */}
          <div style={{ background: "#f0f0f0", height: 1, position: "absolute", width: "100%", zIndex: 0 }} />
          
          {/* Dot 1 */}
          <div style={{ zIndex: 1, padding: "0 16px", background: "#fff", display: "flex" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#f15a24" }} />
          </div>
          
          {/* Text 1 */}
          <div style={{ zIndex: 1, padding: "0 20px", background: "#fff", fontSize: 13, color: "#444", fontFamily: "'Inter', sans-serif" }}>
            Engineered for scale
          </div>

          {/* Dot 2 */}
          <div style={{ zIndex: 1, padding: "0 16px", background: "#fff", display: "flex" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#f15a24" }} />
          </div>

          {/* Text 2 */}
          <div style={{ zIndex: 1, padding: "0 20px", background: "#fff", fontSize: 13, color: "#444", fontFamily: "'Inter', sans-serif" }}>
            Predictable delivery cycles
          </div>

          {/* Dot 3 */}
          <div style={{ zIndex: 1, padding: "0 16px", background: "#fff", display: "flex" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#f15a24" }} />
          </div>
        </div>

        {/* Cards Marquee */}
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
            gap: 24px;
            width: max-content;
            animation: process-scroll-ltr 40s linear infinite;
          }
          .process-marquee:hover .process-track {
            animation-play-state: paused;
          }
          .process-card {
            flex: 0 0 auto;
            width: 300px;
            background: #fafafa;
            border-radius: 24px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            min-height: 460px;
          }
          @media (min-width: 768px) {
            .process-card { width: 320px; }
          }
        `}</style>

        <div className="process-marquee">
          <div className="process-track">
            {[...steps, ...steps].map((step, i) => (
              <div key={i} className="process-card" aria-hidden={i >= steps.length}>
                {/* Top Icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "1px solid #ebebeb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    marginBottom: "auto",
                  }}
                >
                  <Image src={step.image} alt={step.title} width={24} height={24} style={{ objectFit: "contain" }} />
                </div>

                {/* Text Block */}
                <div style={{ marginBottom: 24 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#111",
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "-0.01em",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#888", fontFamily: "'Inter', sans-serif" }}>
                    {step.desc}
                  </p>
                </div>

                {/* Pills Loop */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {step.pills.map((pill, pi) => (
                    <div
                      key={pi}
                      style={{
                        border: "1px solid #e2e2e2",
                        borderRadius: 100,
                        padding: "6px 14px",
                        background: "#fff",
                      }}
                    >
                      <p style={{ fontSize: 11, color: "#777", fontFamily: "'Inter', sans-serif", fontWeight: 500, whiteSpace: "nowrap" }}>
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

