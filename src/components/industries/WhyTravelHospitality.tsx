"use client";

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#f5a623" strokeWidth="2"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#f5a623"/>
        <path d="M12.5 7H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" fill="#f5a623"/>
      </svg>
    ),
    title: "Global Reach",
    description: "Connect with travelers worldwide through intelligent booking and reservation systems that operate 24/7 across all time zones.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="#f5a623"/>
      </svg>
    ),
    title: "Revenue Optimization",
    description: "Maximize occupancy rates and average daily rates with dynamic pricing algorithms and demand forecasting tools.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-2c0-1.5 3.5-2.5 6-2.5s6 1 6 2.5v2z" fill="#f5a623"/>
        <path d="M15.5 12c1.93 0 3.5-1.57 3.5-3.5S17.43 5 15.5 5 12 6.57 12 8.5s1.57 3.5 3.5 3.5zm0 1c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#f5a623"/>
      </svg>
    ),
    title: "Guest Experience",
    description: "Deliver personalized guest experiences with AI-powered recommendations, seamless check-ins, and multi-channel communication.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" fill="#f5a623"/>
      </svg>
    ),
    title: "Data Intelligence",
    description: "Leverage real-time analytics to understand guest behavior, market trends, and operational efficiency metrics.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="#f5a623"/>
      </svg>
    ),
    title: "Security & Compliance",
    description: "Ensure PCI-DSS compliance, secure payment processing, and protect sensitive guest data with enterprise-grade security.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" fill="#f5a623"/>
      </svg>
    ),
    title: "Seamless Integration",
    description: "Integrate with existing PMS, CRM, accounting systems, and third-party booking channels without disruption.",
  },
];

export default function WhyTravelHospitality() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .why-header {
            max-width: 720px;
            margin-bottom: 72px;
          }
          .why-tag {
            font-size: 12px;
            letter-spacing: 0.15em;
            color: #333;
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 20px;
            display: block;
          }
          .why-title {
            font-size: clamp(2.2rem, 4vw, 3.4rem);
            font-weight: 400;
            color: #1a1a1a;
            font-family: 'Outfit', sans-serif;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: 20px;
          }
          .why-subtitle {
            font-size: 16px;
            color: #666;
            font-family: 'Outfit', sans-serif;
            line-height: 1.7;
          }
          .benefits-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 64px;
          }
          @media (min-width: 640px) {
            .benefits-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (min-width: 1024px) {
            .benefits-grid { grid-template-columns: repeat(3, 1fr); }
          }
          .benefit-card {
            background: #FBFAF9;
            border-radius: 16px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            transition: all 0.3s ease;
            border: 1px solid #f0f0f0;
          }
          .benefit-card:hover {
            background: #fff;
            border-color: #f5a623;
            transform: translateY(-8px);
            box-shadow: 0 12px 32px rgba(245, 166, 35, 0.1);
          }
          .benefit-icon {
            font-size: 40px;
            line-height: 1;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .benefit-title {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            font-family: 'Outfit', sans-serif;
          }
          .benefit-description {
            font-size: 14px;
            color: #666;
            font-family: 'Outfit', sans-serif;
            line-height: 1.6;
          }
        `}</style>

        <div className="why-header">
          <span className="why-tag">Why Partner With Us</span>
          <h2 className="why-title"> Why Businesses Choose GTech Soft Solution</h2>
          <p className="why-subtitle">
               We combine industry expertise, innovative technology, and scalable solutions to help businesses streamline operations, enhance customer experiences, and accelerate digital growth.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-icon">
                {typeof benefit.icon === "string" ? benefit.icon : benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
