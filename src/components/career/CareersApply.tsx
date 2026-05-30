"use client";

export default function CareersApply() {
  const handleApplyClick = () => {
    // Change the email address to your actual careers email
    const careersEmail = "careers@gtechsoft.com";
    const subject = encodeURIComponent("Career Application - GTech Soft Solution LLC");
    const body = encodeURIComponent(
      `Hello GTech Soft Team,\n\nI am interested in joining GTech Soft Solution LLC. Please find my details below:\n\nName: \nPosition Applied: \nEmail: \nPhone: \nExperience: \nKey Skills: \n\nThank you!\n\nBest regards`
    );
    
    window.location.href = `mailto:${careersEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      style={{
        background: "#111",
        padding: "clamp(80px, 11vw, 120px) clamp(12px, 3vw, 24px)",
      }}
    >
      <style>{`
        .apply-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        .apply-card {
          background: linear-gradient(135deg, #222 0%, #1a1a1a 100%);
          border-radius: 32px;
          padding: clamp(60px, 10vw, 100px) clamp(32px, 6vw, 80px);
          border: 1px solid #333;
        }
        @media (max-width: 768px) {
          .apply-card {
            border-radius: 24px;
          }
        }
        .apply-button {
          background: #f5a623;
          color: #111;
          border: none;
          padding: clamp(16px, 2vw, 20px) clamp(32px, 5vw, 48px);
          border-radius: 100px;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
        }
        .apply-button:hover {
          background: #e69500;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(245, 166, 35, 0.3);
        }
      `}</style>

      <div className="apply-container">
        <div className="apply-card">
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
            Ready to Join?
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
              fontFamily: "'Outfit', sans-serif",
              marginBottom: 16,
            }}
          >
            Send Your Application Today
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#bbb",
              maxWidth: 600,
              margin: "0 auto 20px",
              lineHeight: 1.6,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Don't see a perfect match? Send us your resume and tell us why you'd be a great fit for the GTech Soft team. We'd love to hear from you!
          </p>

          <button className="apply-button" onClick={handleApplyClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Send Your Application
          </button>

          <div
            style={{
              marginTop: 40,
              paddingTop: 40,
              borderTop: "1px solid #333",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#f5a623",
                  marginBottom: 8,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                80+
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#999",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                International Clients
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#f5a623",
                  marginBottom: 8,
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                50+
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#999",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Successful Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
