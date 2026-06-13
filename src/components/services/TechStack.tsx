"use client";

const stacks = [
  {
    title: "Frontend",
    items: [
      "ReactJS — Scalable UI, fast Virtual DOM",
      "Next.js — SEO-friendly SSR, built-in routing",
      "HTML5 / CSS3 — Clean, responsive structure",
      "Tailwind / Bootstrap / Styled Components",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js — Non-blocking, real-time performance",
      "PHP / Laravel — Fast, secure MVC development",
      "Python — AI/ML & automation, scalable logic",
      "REST / GraphQL APIs — Multi-platform comms",
    ],
  },
  {
    title: "Databases",
    items: [
      "MySQL — Relational, transactional integrity",
      "MongoDB — NoSQL, schema-flexible at scale",
      "Firebase — Real-time DB, auth, messaging",
      "Redis / Memcached — Low-latency caching",
    ],
  },
  {
    title: "Mobile",
    items: [
      "Flutter — Cross-platform native performance",
      "React Native — High-performance rendering",
      "Kotlin (Android) — Fully native architecture",
      "Swift (iOS) — Hardware-optimized performance",
    ],
  },
  {
    title: "Cloud",
    items: [
      "AWS — Auto-scaling, S3, RDS, EC2",
      "GCP — Firestore, Cloud Functions, ML",
      "DigitalOcean — Efficient VPS hosting",
      "Global CDN with enterprise security",
    ],
  },
  {
    title: "DevOps",
    items: [
      "Docker / Kubernetes — Containerization",
      "CI/CD pipelines — Automated delivery",
      "Nginx / Apache — Web servers",
      "Monitoring & observability tooling",
    ],
  },
    {
    title: "Testing",
    items: [
      "Jest — Unit & integration testing framework",
      "Cypress — E2E & component testing",
      "Playwright — Cross-browser automation",
      "Sentry — Error monitoring & debugging",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "OpenAI GPT — LLM integration & generation",
      "LangChain — AI agent orchestration",
      "TensorFlow — Deep learning models",
      "Hugging Face — NLP & model hub",
    ],
  },
];

export default function TechStack() {
  return (
    <section style={{ background: "#fff", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" }}>
      <div
        style={{
          background: "#FBFAF9",
          borderRadius: 32,
          padding: "clamp(72px, 10vw, 120px) 0",
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
            .stack-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
              margin-top: 56px;
            }
            @media (min-width: 640px) {
              .stack-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (min-width: 1024px) {
              .stack-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
            }
            .stack-card {
              background: #fff;
              border-radius: 24px;
              padding: clamp(28px, 4vw, 36px);
              border: 1px solid #efece6;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .stack-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 16px 36px rgba(0,0,0,0.06);
            }
          `}</style>

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
              Technology Stack
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
              The tools we trust to ship enterprise software
            </h2>
          </div>

          <div className="stack-grid">
            {stacks.map((stack) => (
              <div key={stack.title} className="stack-card">
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#f5a623",
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  {stack.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 14,
                        color: "#333",
                        fontFamily: "'Outfit', sans-serif",
                        lineHeight: 1.6,
                        padding: "14px 0",
                        borderTop: "1px solid #eee",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
