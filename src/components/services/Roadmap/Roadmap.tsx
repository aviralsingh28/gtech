"use client";

import React, { useEffect, useRef, useState } from "react";
import { roadmapData } from "./roadmapData";

const font = "'Outfit', sans-serif";

const Roadmap = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="roadmap-section"
      style={{
        background: "#fff",
        padding: "clamp(72px, 10vw, 120px) clamp(12px, 3vw, 24px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .roadmap-header {
            text-align: center;
            margin-bottom: clamp(48px, 8vw, 80px);
          }
          .roadmap-title {
            font-size: clamp(2.2rem, 4.5vw, 3.25rem);
            font-weight: 700;
            color: var(--amber, #f5a623);
            font-family: ${font};
            letter-spacing: -0.02em;
            line-height: 1.15;
            margin-bottom: 16px;
          }
          .roadmap-subtitle {
            font-size: clamp(1rem, 1.4vw, 1.125rem);
            color: var(--muted, #5a5a5a);
            font-family: ${font};
            line-height: 1.6;
          }
          .roadmap-timeline {
            position: relative;
            padding: 16px 0;
          }
          .roadmap-line {
            display: none;
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 0;
            transform: translateX(-50%);
            border-left: 2px dashed #1a1a1a;
            opacity: 0.75;
            pointer-events: none;
          }
          .roadmap-desktop {
            display: none;
          }
          .roadmap-mobile {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 clamp(12px, 3vw, 20px);
          }
          .roadmap-mobile-track {
            position: absolute;
            left: 50%;
            top: 11px;
            bottom: 11px;
            width: 0;
            transform: translateX(-50%);
            border-left: 2px dashed #1a1a1a;
            opacity: 0.65;
            pointer-events: none;
          }
          .roadmap-mobile-step {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 420px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 40px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.55s ease, transform 0.55s ease;
          }
          .roadmap-mobile-step:last-child {
            margin-bottom: 0;
          }
          .roadmap-mobile-step.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .roadmap-mobile-node {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #fff;
            border: 3px solid var(--amber, #f5a623);
            box-shadow: 0 0 0 4px #fff;
            flex-shrink: 0;
            margin-bottom: 20px;
          }
          @media (min-width: 768px) {
            .roadmap-line { display: block; }
            .roadmap-desktop {
              display: flex;
              flex-direction: column;
              gap: clamp(56px, 8vw, 88px);
              padding: 24px clamp(24px, 4vw, 48px) 32px;
            }
            .roadmap-mobile { display: none; }
          }
          .roadmap-row {
            display: grid;
            grid-template-columns: 1fr 48px 1fr;
            align-items: center;
            gap: 0;
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.65s ease, transform 0.65s ease;
          }
          .roadmap-row.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .roadmap-card-slot {
            display: flex;
            padding: 0 clamp(12px, 2vw, 28px);
          }
          .roadmap-card-slot--left { justify-content: flex-end; }
          .roadmap-card-slot--right { justify-content: flex-start; }
          .roadmap-node-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
          }
          .roadmap-node {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #fff;
            border: 3px solid var(--amber, #f5a623);
            box-shadow: 0 0 0 4px #fff;
            flex-shrink: 0;
          }
          .roadmap-card {
            width: 100%;
            max-width: 420px;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.07);
            padding: clamp(28px, 4vw, 40px) clamp(24px, 3vw, 36px);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }
          .roadmap-card:hover {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }
          .roadmap-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 4px solid #fff;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          }
          .roadmap-icon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .roadmap-card-title {
            text-align: center;
            font-size: clamp(1.25rem, 2vw, 1.5rem);
            font-weight: 700;
            color: #111;
            font-family: ${font};
            margin-bottom: 12px;
            letter-spacing: -0.01em;
          }
          .roadmap-card-desc {
            text-align: center;
            font-size: 15px;
            color: var(--muted, #5a5a5a);
            line-height: 1.65;
            font-family: ${font};
            margin-bottom: 24px;
            padding: 0 4px;
          }
          .roadmap-features {
            list-style: none;
            margin: 0 auto;
            padding: 0;
            max-width: 320px;
          }
          .roadmap-features li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 15px;
            color: #333;
            font-family: ${font};
            line-height: 1.55;
            margin-bottom: 12px;
          }
          .roadmap-features li:last-child { margin-bottom: 0; }
          .roadmap-bullet {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            flex-shrink: 0;
            margin-top: 6px;
            background: linear-gradient(90deg, var(--brand-blue, #769bbe) 50%, var(--amber, #f5a623) 50%);
          }
        `}</style>

        <header className="roadmap-header">
          <h2 className="roadmap-title">Development Roadmap</h2>
          <p className="roadmap-subtitle">
            A step-by-step journey to project success
          </p>
        </header>

        <div className="roadmap-timeline">
          <div className="roadmap-line" aria-hidden />

          <div className="roadmap-desktop">
            {roadmapData.map((item, index) => (
              <div
                key={item.id}
                className={`roadmap-row roadmap-row--${index % 2 === 0 ? "left" : "right"} ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="roadmap-card-slot roadmap-card-slot--left">
                  {index % 2 === 0 && <RoadmapCard item={item} />}
                </div>
                <div className="roadmap-node-wrap">
                  <span className="roadmap-node" aria-hidden />
                </div>
                <div className="roadmap-card-slot roadmap-card-slot--right">
                  {index % 2 === 1 && <RoadmapCard item={item} />}
                </div>
              </div>
            ))}
          </div>

          <div className="roadmap-mobile">
            <div className="roadmap-mobile-track" aria-hidden />
            {roadmapData.map((item, index) => (
              <div
                key={item.id}
                className={`roadmap-mobile-step ${isVisible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="roadmap-mobile-node" aria-hidden />
                <RoadmapCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function RoadmapCard({ item }: { item: (typeof roadmapData)[0] }) {
  return (
    <article className="roadmap-card">
      <div
        className="roadmap-icon"
        style={{ background: item.bgColor }}
      >
        <img src={item.icon} alt={item.title} />
      </div>
      <h3 className="roadmap-card-title">{item.title}</h3>
      <p className="roadmap-card-desc">{item.description}</p>
      {item.features && item.features.length > 0 && (
        <ul className="roadmap-features">
          {item.features.map((feature) => (
            <li key={feature}>
              <span className="roadmap-bullet" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default Roadmap;
