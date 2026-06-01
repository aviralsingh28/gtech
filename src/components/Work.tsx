"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    num: "01",
    title: "Intelligent Expense Analytics Dashboard",
    stats: [
      { val: "5k+", label: "Verified Brokers" },
      { val: "+45%", label: "Faster Matching" },
      { val: "200+", label: "Active Lenders" },
    ],
    pills: [
      "Visual financial insights",
      "Category breakdown",
      "Interactive charts",
      "Monthly performance tracking",
      "Income vs expense analysis",
      "One-click report download"
    ],
    image: "/images/Project/Project-one.svg",
    wide: false,
    stagger: false,
    fit: "contain",
  },
  {
    num: "02",
    title: "All-in-One HR Management & Workforce Platform",
    stats: [
      { val: "99.9%", label: "Uptime" },
      { val: "+70%", label: "Faster close" },
      { val: "Zero", label: "Error rate" },
    ],
    pills: [
      "Employee lifecycle management",
      "Payroll & compliance automation",
      "Attendance & leave tracking",
      "HR analytics dashboard",
      "Role-based access control",
      "Cloud-based scalability"
    ],
    image: "/images/Project/Project-two.png",
    wide: false,
    stagger: true, // Pushed down for masonry effect
    fit: "contain",
  },
  {
    num: "03",
    title: "Restaurant Management & POS Ecosystem",
    stats: [
      { val: "+85%", label: "HR efficiency" },
      { val: "100%", label: "Compliance" },
      { val: "24/7", label: "Self-service" },
    ],
    pills: [
      "Unified POS & order management",
      "Table, takeaway & delivery handling",
      "Real-time inventory tracking",
      "Multi-outlet restaurant control",
      "Integrated billing & payment systems",
      "Kitchen display system (KDS) support",
      "Menu & pricing management",
      "Analytics & sales reporting"
    ],
    image: "/images/Project/Project-three.svg",
    wide: true,
    stagger: false,
    fit: "contain",
  },
  {
    num: "04",
    title: "Business Finance Tracking & Insights Engine",
    stats: [
      { val: "Zero", label: "Downtime" },
      { val: "99.99%", label: "Availability" },
      { val: "Auto", label: "Scaling" },
    ],
    pills: [
      "Cash flow tracking",
      "Income & expense monitoring",
      "Advanced filters",
      "Downloadable reports",
      "Net balance insights",
      "Multi-business support"
    ],
    image: "/images/Project/Project-four.svg",
    wide: false,
    stagger: false,
    fit: "contain",
  },
  {
    num: "05",
    title: "Smart Financial Analytics & Reporting Platform",
    stats: [
      { val: "+65%", label: "Automation" },
      { val: "3x", label: "Productivity" },
      { val: "Real-time", label: "Analysis" },
    ],
    pills: [
      "Real-time analytics",
      "Financial dashboards",
      "Report automation",
      "PDF/Excel exports",
      "Category insights",
      "Event-driven processing"
    ],
    image: "/images/Project/Project-five.png",
    wide: false,
    stagger: true,
    fit: "contain",
  },
];

export default function Work() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    if (headerRef.current) {
      const o = new IntersectionObserver(
        ([entry]) => {
          setHeaderVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
      o.observe(headerRef.current);
      observers.push(o);
    }

    cardRefs.current.forEach((node, idx) => {
      if (!node) return;
      const o = new IntersectionObserver(
        ([entry]) => {
          setVisibleCards((prev) => {
            const has = prev.has(idx);
            if (entry.isIntersecting && !has) {
              const next = new Set(prev);
              next.add(idx);
              return next;
            }
            if (!entry.isIntersecting && has) {
              const next = new Set(prev);
              next.delete(idx);
              return next;
            }
            return prev;
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
      );
      o.observe(node);
      observers.push(o);
    });

    if (ctaRef.current) {
      const o = new IntersectionObserver(
        ([entry]) => {
          setCtaVisible(entry.isIntersecting);
        },
        { threshold: 0.4 }
      );
      o.observe(ctaRef.current);
      observers.push(o);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="work" style={{ background: "#FFFFFF", padding: "0 clamp(8px, 2vw, 24px) 0" }}>
      <div
        style={{
          background: "#1a1b1e",
          borderRadius: 32,
          padding: "clamp(48px, 10vw, 160px) 0",
        }}
      >
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(16px, 4vw, 64px)" }}>

          <style>{`
            .work-header h2,
            .work-header p {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }
            .work-header.is-visible h2 {
              opacity: 1;
              transform: translateY(0);
              transition-delay: 0.05s;
            }
            .work-header.is-visible p {
              opacity: 1;
              transform: translateY(0);
              transition-delay: 0.25s;
            }

            .work-card {
              opacity: 0;
              transform: translateY(80px);
              transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                          transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .work-card.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .work-card .work-image-wrap {
              overflow: hidden;
            }
            .work-pill {
              transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
            }
            .work-pill:hover {
              border-color: #FF9800 !important;
              background: rgba(255,152,0,0.08);
            }
            .work-cta {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.7s ease-out, transform 0.7s ease-out;
            }
            .work-cta.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
          `}</style>

          {/* Header */}
          <div ref={headerRef} className={`work-header${headerVisible ? " is-visible" : ""}`} style={{ textAlign: "center", marginBottom: "clamp(60px, 12vw, 120px)" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                fontWeight: 400,
                color: "#ffffff",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                marginBottom: "clamp(16px, 4vw, 32px)",
              }}
            >
              Products we&rsquo;ve built,
              <br />
              trusted by 80+ global clients
            </h2>
            <p
              style={{
                fontSize: "clamp(13px, 3vw, 15px)",
                color: "#888",
                fontFamily: "'Outfit', sans-serif",
                maxWidth: 700,
                margin: "0 auto",
                lineHeight: 1.6,
                padding: "0 clamp(12px, 2vw, 20px)",
              }}
            >
              Enterprise CRM, banking systems, multi-level analytics — engineered to scale across
              industries from fintech to healthcare and beyond.
            </p>
          </div>

          {/* Grid Area */}
          <style>{`
          .work-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: clamp(32px, 8vw, 64px);
            align-items: start;
          }
          @media (min-width: 640px) {
            .work-grid {
              gap: clamp(40px, 8vw, 64px);
            }
          }
          @media (min-width: 768px) {
            .work-grid {
              grid-template-columns: repeat(2, 1fr);
              row-gap: clamp(60px, 12vw, 120px);
              column-gap: 40px;
            }
            .grid-wide {
              grid-column: span 2;
            }
            .grid-stagger {
              margin-top: clamp(80px, 12vw, 160px);
            }
          }
        `}</style>

          <div className="work-grid" style={{ marginBottom: "clamp(40px, 8vw, 120px)" }}>
            {projects.map((p, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`work-card ${p.wide ? "grid-wide" : ""} ${p.stagger ? "grid-stagger" : ""}${visibleCards.has(i) ? " is-visible" : ""}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image Container */}
                <div
                  className="work-image-wrap"
                  style={{
                    borderRadius: 24,
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    backgroundColor: "#1a1b1e",
                    aspectRatio: p.wide ? "16/10" : "4/3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "clamp(16px, 4vw, 40px)",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="work-image"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                {/* Stats Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "clamp(12px, 3vw, 16px)",
                    marginTop: "clamp(16px, 4vw, 24px)",
                  }}
                  className="stats-grid"
                >
                  {p.stats.map((stat, si) => (
                    <div
                      key={si}
                      style={{
                        background: "#333538",
                        borderRadius: 16,
                        padding: "clamp(16px, 4vw, 24px)",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "clamp(1.2rem, 4vw, 2rem)",
                          color: "#fff",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          margin: 0,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {stat.val}
                      </h4>
                      <p
                        style={{
                          fontSize: "clamp(11px, 2vw, 13px)",
                          color: "#999",
                          fontFamily: "'Inter', sans-serif",
                          marginTop: 8,
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <style>{`
                  @media (min-width: 640px) {
                    .stats-grid {
                      grid-template-columns: repeat(3, 1fr) !important;
                    }
                  }
                `}</style>

                {/* Title & Pills */}
                <div style={{ marginTop: "clamp(20px, 5vw, 32px)" }}>
                  <p
                    style={{
                      fontSize: "clamp(12px, 2vw, 14px)",
                      color: "#FF9800",
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "clamp(8px, 2vw, 12px)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    PROJECT {p.num}
                  </p>
                  <h3
                    style={{
                      fontSize: "clamp(1rem, 3vw, 1.8rem)",
                      color: "#fff",
                      fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "clamp(16px, 4vw, 24px)",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px, 2vw, 12px)" }}>
                    {p.pills.map((pill, pi) => (
                      <div
                        key={pi}
                        className="work-pill"
                        style={{
                          padding: "clamp(6px, 1.5vw, 8px) clamp(12px, 2vw, 16px)",
                          borderRadius: 100,
                          border: "1px solid #333538",
                          background: "transparent",
                          display: "flex",
                          alignItems: "center",
                          minHeight: "28px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "clamp(11px, 1.8vw, 12px)",
                            color: "#aaa",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {pill}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All Projects Button */}
          <div ref={ctaRef} className={`work-cta${ctaVisible ? " is-visible" : ""}`} style={{ display: "flex", justifyContent: "center", marginTop: "clamp(60px, 12vw, 120px)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#333538",
                borderRadius: "100px",
                padding: "4px 4px 4px clamp(16px, 4vw, 24px)",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(12px, 2vw, 14px)",
                  fontWeight: 500,
                  marginRight: "clamp(12px, 3vw, 16px)",
                  whiteSpace: "nowrap",
                }}
              >
                See all Projects
              </span>
              <div
                style={{
                  width: "clamp(32px, 8vw, 40px)",
                  height: "clamp(32px, 8vw, 40px)",
                  borderRadius: "50%",
                  background: "#FF9800",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size="clamp(16, 4vw, 20)" color="#000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

