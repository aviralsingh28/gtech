"use client";

import { useRouter } from "next/navigation";

export default function IndustriesApply() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/contact");
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .apply-content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 48px;
            align-items: center;
          }
          @media (min-width: 1024px) {
            .apply-content { grid-template-columns: 1fr 1fr; }
          }
          .apply-text {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .apply-tag {
            font-size: 12px;
            letter-spacing: 0.15em;
            color: #f5a623;
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
          }
          .apply-title {
            font-size: clamp(2.2rem, 4vw, 3.2rem);
            font-weight: 400;
            color: #fff;
            font-family: 'Outfit', sans-serif;
            line-height: 1.15;
            letter-spacing: -0.02em;
          }
          .apply-description {
            font-size: 16px;
            color: #b3b3b3;
            font-family: 'Outfit', sans-serif;
            line-height: 1.7;
          }
          .apply-features {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .apply-feature {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }
          .apply-feature-icon {
            font-size: 20px;
            margin-top: 2px;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .apply-feature-text {
            font-size: 14px;
            color: #999;
            font-family: 'Outfit', sans-serif;
            line-height: 1.6;
          }
          .apply-cta {
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
            margin-top: 8px;
            width: fit-content;
          }
          .apply-cta:hover {
            background: transparent;
            color: #f5a623;
          }
          .apply-metrics {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            align-items: center;
          }
          .metric-box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(245, 166, 35, 0.2);
            border-radius: 16px;
            padding: 32px;
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          .metric-box:hover {
            background: rgba(245, 166, 35, 0.08);
            border-color: #f5a623;
          }
          .metric-number {
            font-size: 48px;
            font-weight: 700;
            color: #f5a623;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 8px;
          }
          .metric-label {
            font-size: 14px;
            color: #999;
            font-family: 'Outfit', sans-serif;
            line-height: 1.5;
          }
        `}</style>

        <div className="apply-content">
          <div className="apply-text">
            <span className="apply-tag">Ready to Transform</span>
            <h2 className="apply-title">
              Start Your Digital Transformation Journey Today
            </h2>
            <p className="apply-description">
              Whether you're a boutique hotel, resort chain, or travel operator, our team of experts is ready to help you leverage technology to drive growth and deliver exceptional guest experiences.
            </p>

            <div className="apply-features">
              <div className="apply-feature">
                <div className="apply-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9L8 13v-2h-2v7h2v-4l1.91 4.35h1.83L12 16.77h3.13v-2H12.98l1.6-3.58V9.5C14.6 8.05 16.35 7 18.3 7c.75 0 1.43.15 2.05.4l1.44-1.44c-.88-.5-1.95-.8-3.1-.8-2.89 0-5.4 1.64-6.71 4H9v2h.34l-4.15 8.98h2.02z" fill="#f5a623"/>
                  </svg>
                </div>
                <div className="apply-feature-text">
                  Fast Implementation: Deploy solutions in weeks, not months
                </div>
              </div>
              <div className="apply-feature">
                <div className="apply-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.67 13.02C10.19 13 9.73 13.15 9.35 13.39L7.26 11.3C7.53 10.93 7.7 10.47 7.7 9.97C7.7 8.4 6.48 7.18 4.91 7.18C3.34 7.18 2.12 8.4 2.12 9.97C2.12 11.54 3.34 12.76 4.91 12.76C5.47 12.76 6.01 12.61 6.47 12.33L8.56 14.42C8.32 14.8 8.17 15.26 8.17 15.74C8.17 17.31 9.39 18.53 10.96 18.53C12.53 18.53 13.75 17.31 13.75 15.74C13.75 14.17 12.53 12.95 10.96 12.95L10.67 13.02ZM15.99 15.74C15.99 14.46 16.82 13.38 17.97 12.95C17.66 12.53 17.2 12.24 16.68 12.24C15.43 12.24 14.42 13.25 14.42 14.5C14.42 15.75 15.43 16.76 16.68 16.76C17.2 16.76 17.66 16.47 17.97 16.05C16.82 15.62 15.99 14.54 15.99 15.74Z" fill="#f5a623"/>
                  </svg>
                </div>
                <div className="apply-feature-text">
                  Dedicated Support: 24/7 technical and strategic support team
                </div>
              </div>
              <div className="apply-feature">
                <div className="apply-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59V21h4.41L16 9.41zm4.46-2.54l-2.83-2.83c-.78-.78-2.05-.78-2.83 0l-1.41 1.41L19.07 6l1.41-1.41c.78-.78.78-2.05-.02-2.83z" fill="#f5a623"/>
                  </svg>
                </div>
                <div className="apply-feature-text">
                  Proven ROI: Average 25% revenue increase within first year
                </div>
              </div>
              <div className="apply-feature">
                <div className="apply-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="#f5a623"/>
                  </svg>
                </div>
                <div className="apply-feature-text">
                  Enterprise Security: SOC 2 compliance and data protection
                </div>
              </div>
            </div>

            <button className="apply-cta" onClick={handleGetStarted}>
              Get Started
              <span>→</span>
            </button>
          </div>

<div className="apply-metrics">
  <div className="metric-box">
    <div className="metric-number">24/7</div>
    <div className="metric-label">
      Dedicated support and proactive system monitoring
    </div>
  </div>

  <div className="metric-box">
    <div className="metric-number">Custom</div>
    <div className="metric-label">
      Tailored travel technology solutions built around your business needs
    </div>
  </div>

  <div className="metric-box">
    <div className="metric-number">Secure</div>
    <div className="metric-label">
      Enterprise-grade security, compliance, and data protection practices
    </div>
  </div>

  <div className="metric-box">
    <div className="metric-number">Scalable</div>
    <div className="metric-label">
      Architecture designed to support business growth and global expansion
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
