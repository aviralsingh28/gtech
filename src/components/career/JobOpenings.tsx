"use client";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ years",
    skills: ["Next.js", "Node.js", "React", "TypeScript", "PostgreSQL"],
    description: "Lead the development of enterprise-scale web applications for international clients.",
  },
  {
    title: "React Native Developer",
    department: "Mobile Development",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["React Native", "JavaScript", "API Integration", "Firebase"],
    description: "Build cross-platform mobile applications for our global client base.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    description: "Manage and optimize cloud infrastructure for high-performance applications.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    description: "Create beautiful and intuitive user experiences for web and mobile platforms.",
  },
  {
    title: "Backend Developer (Python)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Python", "Django", "REST APIs", "PostgreSQL", "Microservices"],
    description: "Build scalable backend systems and APIs for our enterprise clients.",
  },
  {
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Selenium", "Cypress", "Python", "Test Automation", "Manual Testing"],
    description: "Ensure quality and reliability of our software products through comprehensive testing.",
  },
];

export default function JobOpenings() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(80px, 11vw, 120px) clamp(12px, 3vw, 24px)",
      }}
    >
      <style>{`
        .jobs-container {
          max-width: 1360px;
          margin: 0 auto;
        }
        .jobs-header {
          text-align: center;
          margin-bottom: clamp(60px, 8vw, 100px);
        }
        .jobs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .jobs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .job-card {
          background: #f9f9f9;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e8e8e8;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          border-color: #f5a623;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 20px;
          gap: 16px;
        }
        .job-badge {
          background: #f5a623;
          color: #fff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          font-family: 'Outfit', sans-serif;
        }
        .job-meta {
          display: flex;
          gap: 16px;
          margin: 16px 0;
          flex-wrap: wrap;
        }
        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #666;
          font-family: 'Outfit', sans-serif;
        }
        .job-skills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 16px;
        }
        .job-skill-tag {
          background: #fff;
          border: 1px solid #e0e0e0;
          color: #666;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      <div className="jobs-container">
        <div className="jobs-header">
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              color: "#f5a623",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 16,
            }}
          >
            Open Positions
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              fontWeight: 400,
              color: "#111",
              lineHeight: 1.2,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 16,
            }}
          >
            We're Hiring
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#666",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Explore exciting opportunities to grow your career with our team
          </p>
        </div>

        <div className="jobs-grid">
          {jobOpenings.map((job, idx) => (
            <div key={idx} className="job-card">
              <div className="job-header">
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#111",
                      marginBottom: 6,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {job.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#999",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {job.department}
                  </p>
                </div>
                <span className="job-badge">{job.type}</span>
              </div>

              <div className="job-meta">
                <div className="job-meta-item">
                  📍 {job.location}
                </div>
                <div className="job-meta-item">
                  ⏱️ {job.experience}
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.6,
                  marginBottom: 16,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {job.description}
              </p>

              <div className="job-skills">
                {job.skills.map((skill, sidx) => (
                  <span key={sidx} className="job-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
