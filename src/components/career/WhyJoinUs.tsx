"use client";

import {
  Briefcase,
  Globe,
  BookOpen,
  Rocket,
  Heart,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Competitive Salary",
    description: "Attractive compensation packages with performance bonuses and incentives",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Work on international projects with clients from 80+ countries",
  },
  {
    icon: BookOpen,
    title: "Growth Opportunities",
    description: "Continuous learning programs, certifications, and professional development",
  },
  {
    icon: Rocket,
    title: "Career Advancement",
    description: "Clear promotion path and leadership opportunities",
  },
  {
    icon: Heart,
    title: "Benefits Package",
    description: "Health insurance, wellness programs, and retirement benefits",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "Diverse, welcoming environment where everyone's voice matters",
  },
];

export default function WhyJoinUs() {
  return (
    <section
      style={{
        background: "#f9f9f9",
        padding: "clamp(80px, 11vw, 120px) clamp(12px, 3vw, 24px)",
      }}
    >
      <style>{`
        .benefits-container {
          max-width: 1360px;
          margin: 0 auto;
        }
        .benefits-header {
          text-align: center;
          margin-bottom: clamp(60px, 8vw, 100px);
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .benefit-card {
          background: #fff;
          border-radius: 24px;
          padding: clamp(32px, 5vw, 48px);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
          border-color: #f5a623;
        }
        .benefit-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
          display: flex;
          color: #f5a623;
        }
      `}</style>

      <div className="benefits-container">
        <div className="benefits-header">
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              color: "#f5a623",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 16,
            }}
          >
            Why Join GTech Soft
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              fontWeight: 400,
              color: "#111",
              lineHeight: 1.2,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            We Invest in Our People
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#111",
                  marginBottom: 12,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted, #5a5a5a)",
                  lineHeight: 1.6,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {benefit.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
