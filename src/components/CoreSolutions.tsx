"use client";
import { useEffect, useRef, useState } from "react";

// Icon Components
const BankingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="16" width="36" height="22" rx="2" fill="#FF9500" opacity="0.2" stroke="#FF9500" strokeWidth="2"/>
    <path d="M6 16L24 6L42 16" stroke="#FF9500" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="18" y1="16" x2="18" y2="38" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
    <line x1="30" y1="16" x2="30" y2="38" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="28" x2="42" y2="28" stroke="#FF9500" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

const CRMIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="8" height="20" rx="1" fill="#FF9500"/>
    <rect x="20" y="8" width="8" height="24" rx="1" fill="#FF9500" opacity="0.7"/>
    <rect x="32" y="14" width="8" height="18" rx="1" fill="#FF9500" opacity="0.5"/>
    <line x1="6" y1="40" x2="42" y2="40" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ReportingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="28" width="8" height="8" rx="1" fill="#FF9500"/>
    <rect x="20" y="18" width="8" height="18" rx="1" fill="#FF9500" opacity="0.7"/>
    <rect x="32" y="10" width="8" height="26" rx="1" fill="#FF9500" opacity="0.5"/>
    <polyline points="10,28 24,8 38,18" stroke="#FF9500" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <line x1="6" y1="40" x2="42" y2="40" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const solutions = [
  {
    title: "Accounting & Banking Software",
    features: [
      "Automated financial workflows",
      "Secure transaction processing",
    ],
    icon: BankingIcon,
    color: "#FF9500",
    lightColor: "#FFF7ED",
  },
  {
    title: "CRM Platforms",
    features: [
      "Automated sales & service workflows",
      "Advanced analytics & forecasting",
    ],
    icon: CRMIcon,
    color: "#FF9500",
    lightColor: "#FFF7ED",
  },
  {
    title: "Multi-Level Reporting Systems",
    features: [
      "Hierarchical dashboards for teams & departments",
    ],
    icon: ReportingIcon,
    color: "#FF9500",
    lightColor: "#FFF7ED",
  },
];

export default function CoreSolutions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="core-solutions"
      style={{
        background: "#FFFFFF",
        padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1A202C 0%, #2D3748 100%)",
          borderRadius: 32,
          padding: "clamp(72px, 12vw, 120px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(79, 70, 229, 0.1)",
            filter: "blur(100px)",
          }}
        />

        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header */}
          <div
            className={`header-section ${visible ? "is-visible" : ""}`}
            style={{
              textAlign: "center",
              marginBottom: "clamp(48px, 8vw, 80px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "clamp(16px, 2vw, 24px)",
                letterSpacing: "-0.02em",
              }}
            >
              OUR CORE SOFTWARE SOLUTIONS
            </h2>
            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#CBD5E1",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Built for Financial Accuracy, Business Intelligence & Scalable
              Operations
            </p>
          </div>

          {/* Solutions Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(24px, 4vw, 32px)",
              marginBottom: "clamp(48px, 8vw, 64px)",
            }}
          >
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`solution-card ${visible ? "is-visible" : ""}`}
                style={{
                  background: solution.lightColor,
                  borderRadius: 20,
                  padding: "clamp(24px, 4vw, 32px)",
                  border: `2px solid ${solution.color}`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${
                    index * 0.1
                  }s`,
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px rgba(255, 149, 0, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <solution.icon />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: 700,
                    color: solution.color,
                    marginBottom: "clamp(16px, 2vw, 20px)",
                    lineHeight: 1.4,
                  }}
                >
                  {solution.title}
                </h3>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {solution.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      style={{
                        fontSize: "14px",
                        color: "#4B5563",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: solution.color,
                          fontWeight: 700,
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Features List */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(20px, 3vw, 28px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
            }}
          >
            {[
              "Automated financial workflows",
              "Secure transaction processing",
              "Automated sales & service workflows",
              "Advanced analytics & forecasting",
              "Hierarchical dashboards for teams & departments",
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: 12,
                  padding: "clamp(16px, 2.5vw, 20px)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255, 149, 0, 0.2)";
                  el.style.borderColor = "rgba(255, 149, 0, 0.5)";
                  el.style.transform = "translateX(8px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255, 255, 255, 0.08)";
                  el.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  el.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF9500 0%, #FF7A00 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  ✓
                </div>
                <span
                  style={{
                    color: "#E2E8F0",
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
