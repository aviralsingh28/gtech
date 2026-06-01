"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const clientReviews = [
  {
    name: "CyberSentinel",
    logo: "/review-company/cybersentinel.png",
    review:
      "The quality of work delivered is impressive. From development to final delivery, everything was handled with precision.",
  },
  {
    name: "Pinnacle",
    logo: "/review-company/pinnacle.png",
    review:
      "The project was handled with complete reliability. Commitments were honored, and delivery was consistent with what was promised.",
  },
  {
    name: "StrategeIT",
    logo: "/review-company/strategeit.png",
    review:
      "The final product delivers real business value. It supports our workflows efficiently and improves overall productivity.",
  },
  {
    name: "TechMentor",
    logo: "/review-company/techmentor.png",
    review:
      "The UI/UX is clean, intuitive, and well thought out. Our internal team found the interface easy to understand and navigate.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: "#fff",
        padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0",
      }}
    >
      <div
        style={{
          background: "var(--surface, #fbfaf9)",
          borderRadius: 32,
          padding: "clamp(56px, 8vw, 120px) 0",
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
          }}
        >
          <style>{`
            .clients-say-header {
              text-align: center;
              max-width: 640px;
              margin: 0 auto clamp(40px, 6vw, 64px);
              opacity: 0;
              transform: translateY(16px);
              transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .clients-say-header.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .clients-say-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
            }
            @media (min-width: 640px) {
              .clients-say-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
              }
            }
            .client-review-card {
              background: #fff;
              border: 1px solid var(--border, #e8e8e8);
              border-radius: 24px;
              padding: clamp(24px, 4vw, 32px);
              display: flex;
              flex-direction: column;
              gap: 20px;
              min-height: 100%;
              opacity: 0;
              transform: translateY(24px);
              transition:
                opacity 0.65s ease,
                transform 0.65s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
            }
            .client-review-card.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .client-review-card.is-visible:hover {
              border-color: rgba(245, 166, 35, 0.45);
              box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
              transform: translateY(-4px);
            }
            .client-review-quote {
              font-size: 48px;
              line-height: 1;
              color: var(--amber, #f5a623);
              font-family: Georgia, serif;
              opacity: 0.35;
              user-select: none;
            }
            .client-review-stars {
              display: flex;
              gap: 4px;
            }
            .client-review-stars span {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: var(--amber, #f5a623);
            }
            .client-review-text {
              font-size: 15px;
              color: var(--muted, #5a5a5a);
              font-family: 'Outfit', sans-serif;
              line-height: 1.75;
              flex: 1;
              margin: 0;
            }
            .client-review-footer {
              display: flex;
              align-items: center;
              gap: 16px;
              padding-top: 20px;
              border-top: 1px solid var(--border, #eee);
            }
            .client-review-logo {
              width: clamp(80px, 12vw, 104px);
              height: clamp(80px, 12vw, 104px);
              border-radius: 18px;
              background: var(--surface, #fbfaf9);
              border: 1px solid var(--border, #e8e8e8);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 14px;
              flex-shrink: 0;
            }
            .client-review-logo img {
              width: auto !important;
              height: auto !important;
              max-width: 100%;
              max-height: clamp(48px, 8vw, 64px);
              object-fit: contain;
            }
            .client-review-name {
              font-size: 14px;
              font-weight: 600;
              color: var(--text, #1a1a1a);
              font-family: 'Outfit', sans-serif;
              letter-spacing: 0.02em;
            }
            .client-review-label {
              font-size: 12px;
              color: var(--muted, #5a5a5a);
              font-family: 'Outfit', sans-serif;
              margin-top: 2px;
            }
          `}</style>

          <header
            className={`clients-say-header${visible ? " is-visible" : ""}`}
          >
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "var(--amber, #f5a623)",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 20,
              }}
            >
              What Our Clients Say
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--text, #1a1a1a)",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Trusted by leading companies worldwide
            </h2>
          </header>

          <div className="clients-say-grid">
            {clientReviews.map((client, i) => (
              <article
                key={client.name}
                className={`client-review-card${visible ? " is-visible" : ""}`}
                style={{
                  transitionDelay: visible ? `${0.08 + i * 0.1}s` : "0s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <span className="client-review-quote" aria-hidden>
                    &ldquo;
                  </span>
                  <div className="client-review-stars" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} />
                    ))}
                  </div>
                </div>

                <p className="client-review-text">{client.review}</p>

                <footer className="client-review-footer">
                  <div className="client-review-logo">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={160}
                      height={80}
                      sizes="104px"
                    />
                  </div>
                  <div>
                    <p className="client-review-name">{client.name}</p>
                    <p className="client-review-label">Verified client</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
