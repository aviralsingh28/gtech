"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", email: "", message: "" });

  const on = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => { e.preventDefault(); alert("Message sent!"); };

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
    <section
      id="contact"
      style={{
        background: "#ffffff",
        padding: "clamp(80px, 12vw, 160px) clamp(20px, 5vw, 64px)"
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
      `}</style>

      <div className="contact-grid">
        {/* Left Column */}
        <div>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.15em",
              color: "#333",
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
              color: "#666",
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
              color: "#666",
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
  );
}
