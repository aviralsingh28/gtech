"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle, X } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", email: "", message: "" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const on = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    
    // Clear form
    setForm({ name: "", phone: "", company: "", email: "", message: "" });
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Auto-hide modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  const handleScheduleCall = () => {
    window.location.href = "tel:+971524855744";
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#ffffff",
    border: "none",
    borderRadius: 8,
    padding: "18px 24px",
    fontSize: 15,
    color: "#333",
    outline: "none",
    fontFamily: "'Outfit', sans-serif",
  };

  return (
    <>
      <section
        id="contact"
        style={{
          background: "#ffffff",
          padding: "clamp(48px, 8vw, 120px) clamp(16px, 4vw, 64px)"
        }}
      >
        <style>{`
          .contact-grid {
            max-width: 1360px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 64px;
            align-items: start;
          }
          @media (max-width: 767px) {
            .contact-grid { gap: 40px; }
          }
          @media (min-width: 1024px) {
            .contact-grid {
              grid-template-columns: 1fr 1.1fr;
              gap: 120px;
            }
          }
          .form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 16px;
          }
          @media (min-width: 640px) {
            .form-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.9) translate(-50%, -50%);
            }
            to {
              opacity: 1;
              transform: scale(1) translate(-50%, -50%);
            }
          }
          @keyframes overlayFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>

        <div className="contact-grid">
          {/* Left Column */}
          <div>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                color: "var(--text, #1a1a1a)",
                textTransform: "uppercase",
                marginBottom: 48,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
              }}
            >
              LETS TALK !
            </p>
            <h2
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#1a1a1a",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: 40,
              }}
            >
              How can we help you?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--muted, #5a5a5a)",
                lineHeight: 1.6,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 32,
                maxWidth: 520,
              }}
            >
              Whether you&rsquo;re planning a project or starting fresh, we&rsquo;re
              here to help you align strategy, design, and performance.
              Get in touch for a free intro call.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#1a1a1a",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                marginBottom: 56,
              }}
            >
              No pressure, just a focused conversation.
            </p>

            <button
              onClick={handleScheduleCall}
              style={{
                background: "#FFA000",
                color: "#1a1a1a",
                border: "none",
                borderRadius: 100,
                padding: "24px 64px",
                fontSize: 22,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "'Outfit', sans-serif",
                transition: "transform 0.2s, background 0.2s",
                width: "100%",
                maxWidth: 420,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Let&rsquo;s Schedule a Call
            </button>
          </div>

          {/* Right Column / Form Card */}
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: 12,
              padding: "clamp(32px, 6vw, 64px)",
              position: "relative",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(2rem, 3vw, 2.5rem)",
                fontWeight: 500,
                color: "#1a1a1a",
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 16,
                letterSpacing: "-0.01em",
              }}
            >
              We&rsquo;re here to help
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "var(--muted, #5a5a5a)",
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 40,
              }}
            >
              Reach out to us with any questions or support needs.
            </p>

            <div style={{ height: 1, background: "#e0e0e0", marginBottom: 48, width: "100%" }} />

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column" }}>
              <div className="form-grid">
                <input
                  name="name"
                  value={form.name}
                  onChange={on}
                  placeholder="Your Name"
                  style={inputStyle}
                  required
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={on}
                  placeholder="Your Phone No."
                  style={inputStyle}
                />
                <input
                  name="company"
                  value={form.company}
                  onChange={on}
                  placeholder="Company Name"
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={on}
                  placeholder="Your Email"
                  style={inputStyle}
                  required
                />
              </div>

              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={on}
                placeholder="Tell us your project"
                style={{ ...inputStyle, resize: "none", marginBottom: 32 }}
                required
              />

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  type="submit"
                  style={{
                    background: "#2a2a2a",
                    color: "#fff",
                    border: "none",
                    borderRadius: 100,
                    padding: "16px 36px",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Send Message
                </button>

                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#FFA000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={submit}
                >
                  <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <>
          {/* Overlay */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
              zIndex: 999,
              animation: "overlayFadeIn 0.3s ease-out",
            }}
            onClick={() => setShowSuccessModal(false)}
          />
          
          {/* Modal */}
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              borderRadius: 16,
              padding: "48px 64px",
              textAlign: "center",
              zIndex: 1000,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              animation: "modalFadeIn 0.3s ease-out",
              maxWidth: "90%",
              width: 450,
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <X size={20} color="#666" />
            </button>

            {/* Success Icon */}
            <div
              style={{
                width: 80,
                height: 80,
                background: "#4CAF50",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px auto",
                animation: "modalFadeIn 0.5s ease-out",
              }}
            >
              <CheckCircle size={48} color="white" />
            </div>

            {/* Success Title */}
            <h3
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#1a1a1a",
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              Message Sent!
              <span style={{ marginLeft: 4 }}></span>
            </h3>

            {/* Success Message */}
            <p
              style={{
                fontSize: 16,
                color: "#666",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.5,
                marginBottom: 0,
              }}
            >
              Thank you for reaching out! We'll get back to you as soon as possible.
            </p>
          </div>
        </>
      )}
    </>
  );
}