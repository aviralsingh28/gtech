"use client";

import Link from "next/link";
import { servicesData } from "@/data/servicesData";

export default function ServicesGrid() {
  return (
    <section style={{ background: "#fff", padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .svc-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          @media (min-width: 640px) {
            .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          }
          @media (min-width: 1024px) {
            .svc-grid { grid-template-columns: repeat(3, 1fr); }
          }
          .svc-card {
            background: #FBFAF9;
            border-radius: 24px;
            padding: clamp(28px, 4vw, 40px);
            position: relative;
            overflow: hidden;
            transition: transform 0.4s ease, background 0.3s ease;
            min-height: 240px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
          }
          .svc-card:hover {
            transform: translateY(-6px);
            background: #f5a623;
          }
          .svc-card:hover .svc-num,
          .svc-card:hover .svc-title,
          .svc-card:hover .svc-body { color: #fff; }
          .svc-card:hover .svc-arrow { background: #f5a623; }
          .svc-num { transition: color 0.3s ease; }
          .svc-title { transition: color 0.3s ease; }
          .svc-body { transition: color 0.3s ease; }
          .svc-arrow { transition: background 0.3s ease; }
        `}</style>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
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
              What We Do
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
              Seven service lines, one engineering standard
            </h2>
          </div>
        </div>

        <div className="svc-grid">
          {servicesData.map((service) => (
            <Link key={service.num} href={`/services/${service.slug}`} style={{ textDecoration: "none" }}>
              <div className="svc-card">
                <div>
                  <p
                    className="svc-num"
                    style={{
                      fontSize: 14,
                      color: "#111",
                      fontWeight: 700,
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: "0.08em",
                      marginBottom: 32,
                    }}
                  >
                    / {service.num}
                  </p>
                  <h3
                    className="svc-title"
                    style={{
                      fontSize: "clamp(1.4rem, 2.2vw, 1.7rem)",
                      fontWeight: 500,
                      color: "#111",
                      fontFamily: "'Outfit', sans-serif",
                      marginBottom: 14,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="svc-body"
                    style={{
                      fontSize: 14,
                      color: "#5a5a5a",
                      lineHeight: 1.7,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {service.shortDescription}
                  </p>
                </div>

                <div
                  className="svc-arrow"
                  style={{
                    marginTop: 28,
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "flex-end",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
