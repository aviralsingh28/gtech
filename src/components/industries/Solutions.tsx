"use client";

const solutions = [
  {
    number: "01",
    title: "Real Estate & Property Tech",
    description:
      "Digital solutions for property developers, real estate agencies, and property management companies to streamline operations and improve customer experiences.",
    features: [
      "Property listing & management platforms",
      "CRM for real estate sales teams",
      "Virtual property tours & bookings",
      "Tenant & lease management",
      "Property analytics & reporting",
    ],
  },
  {
    number: "02",
    title: "Retail, Luxury & E-Commerce",
    description:
      "Modern commerce platforms designed to enhance customer engagement, optimize sales, and deliver seamless omnichannel shopping experiences.",
    features: [
      "Custom e-commerce development",
      "Inventory & order management",
      "Customer loyalty programs",
      "Omnichannel retail integration",
      "AI-powered product recommendations",
    ],
  },
  {
    number: "03",
    title: "Hospitality & Tourism",
    description:
      "Technology solutions that improve guest experiences, automate operations, and drive bookings across hotels, resorts, and travel businesses.",
    features: [
      "Hotel booking & reservation systems",
      "Property management solutions",
      "Guest experience platforms",
      "Travel & tour booking portals",
      "Revenue optimization tools",
    ],
  },
  {
    number: "04",
    title: "Healthcare & Wellbeing",
    description:
      "Secure and scalable healthcare solutions focused on patient engagement, operational efficiency, and digital health transformation.",
    features: [
      "Hospital & clinic management systems",
      "Telemedicine platforms",
      "Patient appointment scheduling",
      "Electronic health records (EHR)",
      "Health & wellness mobile apps",
    ],
  },
  {
    number: "05",
    title: "Logistics & On-Demand Services",
    description:
      "Smart logistics and delivery platforms that optimize routes, automate workflows, and improve operational visibility.",
    features: [
      "Fleet & transportation management",
      "Real-time tracking systems",
      "On-demand delivery applications",
      "Warehouse management solutions",
      "Route optimization & analytics",
    ],
  },
  {
    number: "06",
    title: "Finance, Corporate & SMEs",
    description:
      "Business-focused digital solutions that enhance productivity, financial management, and customer engagement for organizations of all sizes.",
    features: [
      "ERP & business management systems",
      "Financial reporting dashboards",
      "CRM & sales automation",
      "Invoice & payment solutions",
      "Business intelligence platforms",
    ],
  },
  {
    number: "07",
    title: "Education & e-Learning",
    description:
      "Innovative learning platforms and educational technologies that support students, educators, and training organizations.",
    features: [
      "Learning Management Systems (LMS)",
      "Online course platforms",
      "Student information systems",
      "Virtual classroom solutions",
      "Assessment & certification tools",
    ],
  },
];


export default function Solutions() {
  return (
    <section
      id="solutions"
      style={{
        background: "#FBFAF9",
        padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .solutions-header {
            max-width: 720px;
            margin-bottom: 72px;
          }
          .solutions-tag {
            font-size: 12px;
            letter-spacing: 0.15em;
            color: #333;
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 20px;
            display: block;
          }
          .solutions-title {
            font-size: clamp(2.2rem, 4vw, 3.4rem);
            font-weight: 400;
            color: #1a1a1a;
            font-family: 'Outfit', sans-serif;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: 20px;
          }
          .solutions-subtitle {
            font-size: 16px;
            color: #666;
            font-family: 'Outfit', sans-serif;
            line-height: 1.7;
          }
          .solutions-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            margin-top: 64px;
          }
          @media (min-width: 1024px) {
            .solutions-grid { grid-template-columns: repeat(2, 1fr); }
          }
          .solution-card {
            background: #fff;
            border-radius: 18px;
            padding: 40px;
            border: 1px solid #e8e8e8;
            transition: all 0.3s ease;
            position: relative;
          }
          .solution-card:hover {
            border-color: #f5a623;
            box-shadow: 0 16px 40px rgba(245, 166, 35, 0.12);
            transform: translateY(-8px);
          }
          .solution-number {
            font-size: 48px;
            font-weight: 700;
            color: #f5a623;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 12px;
            opacity: 0.3;
          }
          .solution-title {
            font-size: 22px;
            font-weight: 600;
            color: #1a1a1a;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 12px;
          }
          .solution-description {
            font-size: 15px;
            color: #666;
            font-family: 'Outfit', sans-serif;
            line-height: 1.7;
            margin-bottom: 20px;
          }
          .solution-features {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .feature-item {
            font-size: 14px;
            color: #555;
            font-family: 'Outfit', sans-serif;
            display: flex;
            align-items: center;
            gap: 10px;
            padding-left: 12px;
          }
          .feature-item::before {
            content: "✓";
            color: #f5a623;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background: rgba(245, 166, 35, 0.1);
            border-radius: 50%;
            font-size: 12px;
            flex-shrink: 0;
          }
        `}</style>

        <div className="solutions-header">
          <span className="solutions-tag">Our Core Solutions</span>
          <h2 className="solutions-title">Comprehensive Software Solutions for Travel & Hospitality</h2>
          <p className="solutions-subtitle">
            From booking engines to revenue management, we provide complete software solutions designed specifically for the travel and hospitality industry.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.number} className="solution-card">
              <div className="solution-number">{solution.number}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <div className="solution-features">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
