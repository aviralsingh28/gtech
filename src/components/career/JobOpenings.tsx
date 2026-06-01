"use client";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ years",
    skills: ["Next.js", "Node.js", "React", "TypeScript", "PostgreSQL"],
    description:
      "Lead the development of enterprise-scale web applications for international clients.",
  },
  {
    title: "React Native Developer",
    department: "Mobile Development",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["React Native", "JavaScript", "API Integration", "Firebase"],
    description:
      "Build cross-platform mobile applications for our global client base.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    description:
      "Manage and optimize cloud infrastructure for high-performance applications.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    description:
      "Create beautiful and intuitive user experiences for web and mobile platforms.",
  },
  {
    title: "Backend Developer (Python)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Python", "Django", "REST APIs", "PostgreSQL", "Microservices"],
    description:
      "Build scalable backend systems and APIs for our enterprise clients.",
  },
  {
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Selenium", "Cypress", "Python", "Test Automation", "Manual Testing"],
    description:
      "Ensure quality and reliability of our software products through comprehensive testing.",
  },
];

export default function JobOpenings() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0",
      }}
    >
      <div
        style={{
          background: "var(--surface, #fbfaf9)",
          borderRadius: 32,
          padding: "clamp(56px, 8vw, 96px) 0",
        }}
      >
        <style>{`
          .jobs-container {
            max-width: 1360px;
            margin: 0 auto;
            padding: 0 clamp(20px, 5vw, 64px);
          }
          .jobs-header {
            text-align: center;
            max-width: 640px;
            margin: 0 auto clamp(40px, 6vw, 64px);
          }
          .jobs-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          @media (min-width: 768px) {
            .jobs-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          .job-card {
            background: #fff;
            border: 1px solid var(--border, #e8e8e8);
            border-radius: 24px;
            padding: clamp(24px, 4vw, 32px);
            display: flex;
            flex-direction: column;
            gap: 16px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
            height: 100%;
          }
          .job-card:hover {
            border-color: rgba(245, 166, 35, 0.45);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
            transform: translateY(-4px);
          }
          .job-card-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
          }
          .job-dept {
            font-size: 11px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--amber, #f5a623);
            font-weight: 700;
            font-family: 'Outfit', sans-serif;
            margin-bottom: 10px;
          }
          .job-title {
            font-size: clamp(1.1rem, 2vw, 1.25rem);
            font-weight: 600;
            color: var(--text, #1a1a1a);
            font-family: 'Outfit', sans-serif;
            line-height: 1.35;
            letter-spacing: -0.01em;
          }
          .job-badge {
            background: var(--amber-light, #fef3e2);
            color: var(--amber-hover, #e09510);
            border: 1px solid rgba(245, 166, 35, 0.35);
            padding: 6px 14px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
            flex-shrink: 0;
          }
          .job-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .job-meta-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--muted, #5a5a5a);
            font-family: 'Outfit', sans-serif;
            background: var(--surface, #fbfaf9);
            border: 1px solid var(--border, #e8e8e8);
            padding: 6px 12px;
            border-radius: 100px;
          }
          .job-meta-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--amber, #f5a623);
            flex-shrink: 0;
          }
          .job-desc {
            font-size: 14px;
            color: var(--muted, #5a5a5a);
            line-height: 1.65;
            font-family: 'Outfit', sans-serif;
            flex: 1;
            margin: 0;
          }
          .job-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .job-skill-tag {
            background: #fff;
            border: 1px solid #d8d4c8;
            color: var(--text, #1a1a1a);
            padding: 6px 14px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 500;
            font-family: 'Outfit', sans-serif;
          }
          .job-apply {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
            font-size: 14px;
            font-weight: 600;
            color: var(--amber, #f5a623);
            font-family: 'Outfit', sans-serif;
            text-decoration: none;
            transition: gap 0.2s ease;
          }
          .job-card:hover .job-apply {
            gap: 12px;
          }
        `}</style>

        <div className="jobs-container">
          <header className="jobs-header">
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
              Open Positions
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "var(--text, #1a1a1a)",
                lineHeight: 1.15,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              We&apos;re Hiring
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                color: "var(--muted, #5a5a5a)",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Explore opportunities to grow your career with our global team
            </p>
          </header>

          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <article key={job.title} className="job-card">
                <div className="job-card-top">
                  <div>
                    <p className="job-dept">{job.department}</p>
                    <h3 className="job-title">{job.title}</h3>
                  </div>
                  <span className="job-badge">{job.type}</span>
                </div>

                <div className="job-meta">
                  <span className="job-meta-pill">
                    <span className="job-meta-dot" aria-hidden />
                    {job.location}
                  </span>
                  <span className="job-meta-pill">
                    <span className="job-meta-dot" aria-hidden />
                    {job.experience}
                  </span>
                </div>

                <p className="job-desc">{job.description}</p>

                <div className="job-skills">
                  {job.skills.map((skill) => (
                    <span key={skill} className="job-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <a href="#apply" className="job-apply">
                  Apply now
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
