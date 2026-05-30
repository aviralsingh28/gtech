"use client";

const caseStudies = [
  {
    title: "Real Estate Platform - Lead Conversion Growth",
    client: "Premium Property Developers",
    challenge:
      "The client struggled with fragmented lead management and low conversion rates across multiple residential projects.",
    solution:
      "Implemented a centralized property management and CRM platform with automated lead nurturing workflows.",
    results: [
      "45% increase in qualified leads",
      "32% improvement in sales conversions",
      "60% faster lead response times",
      "Unified management across 8 projects",
    ],
  },
  {
    title: "Healthcare Network - Digital Patient Experience",
    client: "Multi-Specialty Healthcare Group",
    challenge:
      "Patients faced long appointment wait times and limited access to healthcare services online.",
    solution:
      "Developed a complete healthcare platform featuring online appointments, teleconsultations, and patient management.",
    results: [
      "50% reduction in appointment scheduling time",
      "38% increase in patient engagement",
      "24/7 online consultation availability",
      "Improved operational efficiency across clinics",
    ],
  },
  {
    title: "Retail Brand - Omnichannel Commerce Transformation",
    client: "Luxury Retail Chain",
    challenge:
      "The brand needed a seamless shopping experience across physical stores, website, and mobile applications.",
    solution:
      "Built an integrated e-commerce ecosystem with inventory synchronization and personalized customer experiences.",
    results: [
      "52% increase in online sales",
      "29% higher customer retention rate",
      "Real-time inventory visibility",
      "Improved customer satisfaction across channels",
    ],
  },
];

export default function CaseStudies() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 64px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <style>{`
          .case-studies-header {
            max-width: 720px;
            margin-bottom: 72px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          .case-studies-tag {
            font-size: 12px;
            letter-spacing: 0.15em;
            color: #333;
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 20px;
            display: block;
          }
          .case-studies-title {
            font-size: clamp(2.2rem, 4vw, 3.4rem);
            font-weight: 400;
            color: #1a1a1a;
            font-family: 'Outfit', sans-serif;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: 20px;
          }
          .case-studies-subtitle {
            font-size: 16px;
            color: #666;
            font-family: 'Outfit', sans-serif;
            line-height: 1.7;
          }
          .cases-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            margin-top: 64px;
          }
          @media (min-width: 1024px) {
            .cases-grid { grid-template-columns: repeat(1, 1fr); }
          }
          .case-card {
            background: linear-gradient(135deg, #FBFAF9 0%, #f5f5f5 100%);
            border-radius: 18px;
            padding: 40px;
            border: 1px solid #e8e8e8;
            transition: all 0.3s ease;
          }
          .case-card:hover {
            border-color: #f5a623;
            box-shadow: 0 16px 40px rgba(245, 166, 35, 0.08);
          }
          .case-client {
            font-size: 12px;
            letter-spacing: 0.12em;
            color: #f5a623;
            text-transform: uppercase;
            font-weight: 700;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 12px;
          }
          .case-title {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 20px;
          }
          .case-section {
            margin-bottom: 20px;
          }
          .case-label {
            font-size: 12px;
            letter-spacing: 0.1em;
            color: #333;
            text-transform: uppercase;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 8px;
            display: block;
          }
          .case-text {
            font-size: 15px;
            color: #555;
            font-family: 'Outfit', sans-serif;
            line-height: 1.7;
          }
          .case-results {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-top: 20px;
          }
          @media (max-width: 640px) {
            .case-results { grid-template-columns: 1fr; }
          }
          .result-item {
            background: #fff;
            padding: 16px;
            border-radius: 12px;
            border-left: 4px solid #f5a623;
          }
          .result-value {
            font-size: 18px;
            font-weight: 700;
            color: #f5a623;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 4px;
          }
          .result-label {
            font-size: 13px;
            color: #666;
            font-family: 'Outfit', sans-serif;
            line-height: 1.4;
          }
        `}</style>

        <div className="case-studies-header">
          <span className="case-studies-tag">Success Stories</span>
          <h2 className="case-studies-title">Results That Speak for Themselves</h2>
          <p className="case-studies-subtitle">
            See how leading travel and hospitality companies have transformed their operations with our solutions.
          </p>
        </div>

        <div className="cases-grid">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="case-card">
              <p className="case-client">{study.client}</p>
              <h3 className="case-title">{study.title}</h3>

              <div className="case-section">
                <span className="case-label">Challenge</span>
                <p className="case-text">{study.challenge}</p>
              </div>

              <div className="case-section">
                <span className="case-label">Solution</span>
                <p className="case-text">{study.solution}</p>
              </div>

              <div className="case-section">
                <span className="case-label">Results</span>
                <div className="case-results">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="result-item">
                      <div className="result-value">✓</div>
                      <div className="result-label">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
