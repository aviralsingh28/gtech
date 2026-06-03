"use client";

export default function CareersApply() {
  const handleApplyClick = () => {
    const careersEmail = "info@gtechsoftsolution.com";
    const subject = encodeURIComponent(
      "Career Application - GTech Soft Solution LLC"
    );
    const body = encodeURIComponent(
      `Hello GTech Soft Team,\n\nI am interested in joining GTech Soft Solution LLC. Please find my details below:\n\nName: \nPosition Applied: \nEmail: \nPhone: \nExperience: \nKey Skills: \n\nThank you!\n\nBest regards`
    );

    window.location.href = `mailto:${careersEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="apply"
      style={{
        background: "#fff",
        padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0",
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <style>{`
          .apply-card {
            width: 100%;
            max-width: 640px;
            background: var(--surface, #fbfaf9);
            border: 1px solid var(--border, #e8e8e8);
            border-radius: 28px;
            padding: clamp(40px, 6vw, 56px) clamp(24px, 5vw, 40px);
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .apply-card::before {
            content: "";
            position: absolute;
            top: -20%;
            right: -10%;
            width: 280px;
            height: 280px;
            background: radial-gradient(
              circle,
              rgba(245, 166, 35, 0.14),
              transparent 70%
            );
            pointer-events: none;
          }
          .apply-inner {
            position: relative;
            z-index: 1;
          }
          .apply-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            margin-top: 24px;
          }
          .apply-button {
            background: var(--amber, #f5a623);
            color: #fff;
            border: none;
            padding: 13px 28px;
            border-radius: 100px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Outfit', sans-serif;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            max-width: 280px;
          }
          .apply-button:hover {
            background: var(--amber-hover, #e09510);
            transform: translateY(-2px);
            box-shadow: 0 10px 24px rgba(245, 166, 35, 0.28);
          }
          .apply-email {
            font-size: 13px;
            color: var(--muted, #5a5a5a);
            font-family: 'Outfit', sans-serif;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .apply-email:hover {
            color: var(--amber, #f5a623);
          }
          .apply-stats-card {
            width: 100%;
            max-width: 400px;
            background: #fff;
            border: 1px solid var(--border, #e8e8e8);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          }
          .apply-stats {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }
          .apply-stat {
            flex: 1 1 140px;
            max-width: 168px;
            min-width: 130px;
            background: var(--surface, #fbfaf9);
            border: 1px solid var(--border, #eee);
            border-radius: 16px;
            padding: 16px 12px;
            text-align: center;
            transition: border-color 0.25s ease, transform 0.25s ease;
          }
          .apply-stat:hover {
            border-color: rgba(245, 166, 35, 0.4);
            transform: translateY(-2px);
          }
          .apply-stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--amber, #f5a623);
            font-family: 'Outfit', sans-serif;
            line-height: 1;
            margin-bottom: 6px;
          }
          .apply-stat-label {
            font-size: 12px;
            color: var(--muted, #5a5a5a);
            font-family: 'Outfit', sans-serif;
            line-height: 1.4;
          }
          @media (max-width: 480px) {
            .apply-card {
              border-radius: 22px;
            }
            .apply-stat {
              max-width: none;
              flex: 1 1 calc(50% - 6px);
              min-width: 0;
            }
          }
        `}</style>

        {/* Main CTA card — narrow */}
        <div className="apply-card">
          <div className="apply-inner">
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "var(--amber, #f5a623)",
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 16,
              }}
            >
              Ready to Join?
            </p>
            <h2
              style={{
                fontSize: "clamp(1.65rem, 4vw, 2.25rem)",
                fontWeight: 500,
                color: "var(--text, #1a1a1a)",
                lineHeight: 1.2,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              Send Your Application Today
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "var(--muted, #5a5a5a)",
                lineHeight: 1.65,
                fontFamily: "'Outfit', sans-serif",
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Don&apos;t see a perfect match? Send us your resume and tell us
              why you&apos;d be a great fit for the GTech Soft team.
            </p>

            <div className="apply-actions">
              <button
                type="button"
                className="apply-button"
                onClick={handleApplyClick}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Send Your Application
              </button>
              <a href="mailto:info@gtechsoftsolution.com" className="apply-email">
                info@gtechsoftsolution.com
              </a>
            </div>
          </div>
        </div>

        {/* Stats — separate compact card */}
        <div className="apply-stats-card">
          <div className="apply-stats">
            <div className="apply-stat">
              <p className="apply-stat-value">80+</p>
              <p className="apply-stat-label">International Clients</p>
            </div>
            <div className="apply-stat">
              <p className="apply-stat-value">50+</p>
              <p className="apply-stat-label">Successful Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
