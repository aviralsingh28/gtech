"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const companyReviews = [
  {
    logo: "/review-company/cybersentinel.png",
    review: "The quality of work delivered is impressive. From development to final delivery, everything was handled with precision.cer",
  },
  {
    logo: "/review-company/pinnacle.png",
    review: "The project was handled with complete reliability. Commitments were honored, and the delivery was consistent with what was promised",
  },
  {
    logo: "/review-company/strategeit.png",
    review: "The final product delivers real business value. It supports our workflows efficiently and improves overall productivity.",
  },
  {
    logo: "/review-company/techmentor.png",
    review: "The UI/UX is clean, intuitive, and well thought out. Our internal team found the interface easy to understand and navigate.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      style={{ 
        background: "#FFFFFF", 
        padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" 
      }}
    >
      <div 
        style={{ 
          background: "#FBFAF9", 
          borderRadius: 32, 
          padding: "clamp(72px, 12vw, 160px) 0",
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
            .testimonial-header {
              opacity: 0;
              transform: translateY(16px);
              transition: opacity 0.7s ease-out, transform 0.7s ease-out;
            }
            .testimonial-header.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .testimonial-card {
              opacity: 0;
              transform: translateY(40px);
              transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                          transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                          box-shadow 0.4s ease;
            }
            .testimonial-card.is-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .testimonial-card.is-visible:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.12);
            }
            .testimonial-card .testimonial-img {
              transition: transform 0.6s ease;
            }
            .testimonial-card.is-visible:hover .testimonial-img {
              transform: scale(1.05);
            }
          `}</style>

          {/* Header */}
          <div className={`testimonial-header${visible ? " is-visible" : ""}`} style={{ textAlign: "center", marginBottom: 80 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                color: "#333",
                textTransform: "uppercase",
                marginBottom: 24,
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Company Reviews
            </p>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.6rem)",
                fontWeight: 400,
                color: "#1a1a1a",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              Trusted by leading companies
            </h2>
          </div>

        {/* Company Reviews - Logo Left, Review Right */}
        <style>{`
          .company-review-container {
            display: flex;
            flex-direction: column;
            gap: 48px;
          }
          .company-review-item {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 40px;
            align-items: center;
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                        box-shadow 0.4s ease;
            padding: 36px;
            border-radius: 20px;
            background: linear-gradient(135deg, #ffffff 0%, #fafaf8 100%);
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          }
          .company-review-item.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .company-review-item.is-visible:hover {
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
            transform: translateY(-4px);
          }
          .company-logo-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 160px;
            padding: 20px;
            background: #f8f8f6;
            border-radius: 16px;
            border: 1px solid rgba(0, 0, 0, 0.06);
            transition: all 0.4s ease;
          }
          .company-review-item.is-visible:hover .company-logo-wrapper {
            background: #f0f0ed;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }
          .company-review-text {
            position: relative;
            padding: 0;
            font-size: 16px;
            color: #444;
            font-family: 'Inter', sans-serif;
            line-height: 1.7;
            font-weight: 400;
            letter-spacing: 0.3px;
          }
          .company-review-text::before {
            content: '"';
            position: absolute;
            left: -16px;
            top: -8px;
            font-size: 48px;
            color: #d0d0d0;
            font-family: Georgia, serif;
            font-weight: bold;
          }
          .company-review-text::after {
            content: '"';
            position: absolute;
            right: -8px;
            bottom: -16px;
            font-size: 48px;
            color: #d0d0d0;
            font-family: Georgia, serif;
            font-weight: bold;
          }
          @media (max-width: 768px) {
            .company-review-item {
              grid-template-columns: 1fr;
              gap: 24px;
              padding: 28px;
            }
            .company-logo-wrapper {
              height: 120px;
            }
            .company-review-text {
              font-size: 15px;
            }
            .company-review-text::before,
            .company-review-text::after {
              display: none;
            }
          }
        `}</style>

        <div className="company-review-container">
          {companyReviews.map((company, i) => (
            <div
              key={i}
              className={`company-review-item${visible ? " is-visible" : ""}`}
              style={{
                transitionDelay: visible ? `${0.1 + i * 0.15}s` : "0s",
              }}
            >
              <div className="company-logo-wrapper">
                <Image
                  src={company.logo}
                  alt="Company Logo"
                  width={150}
                  height={160}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="company-review-text">
                {company.review}
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
