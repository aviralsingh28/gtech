"use client";
import { useState } from "react";
import Image from "next/image";

export default function ClarissaWidget() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 9999,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#f5a623",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 30px rgba(245,166,35,0.45)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        title="Talk with Clarissa"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    );
  }

  return (
    <div
      className="clarissa-card"
      style={{
        position: "fixed",
        padding: "6px 16px 6px 8px",
        bottom: 30,
        right: 30,
        zIndex: 9999,
        background: "#fff",
        borderRadius: 24,
        border: "1px solid #e8e8e8",
        boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
        display: "flex",
        gap: 16,
        alignItems: "stretch",
        animation: "slideUp 0.3s ease",
        cursor: "default",
        maxWidth: "calc(100vw - 32px)",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .clarissa-card { gap: 10px !important; border-radius: 20px !important; padding: 8px 16px 8px 8px !important; }
          .clarissa-avatar { width: 68px !important; height: 120px !important; border-radius: 14px !important; }
          .clarissa-cta { padding: 8px 12px !important; font-size: 12px !important; }
          .clarissa-arrow { width: 34px !important; height: 34px !important; }
          .clarissa-title { font-size: 14px !important; }
          .clarissa-role { font-size: 8px !important; }
        }
      `}</style>

      {/* Close button (Invisible/overlay if needed, but omitted to match design purely. We'll add click-to-close on avatar double click or keep it open always as per matching the visual) */}

      {/* Avatar Left Column */}
      <div
        className="clarissa-avatar"
        style={{
          width: 82,
          height: 120,
          borderRadius: 20,
          overflow: "hidden",
          flexShrink: 0,
          background: "#f0f0f0",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => setOpen(false)}
        title="Click to close"
      >
        <Image
          src="/images/Assets/chat-bot.svg"
          alt="Clarissa"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right Column: Text & Buttons */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8px 0", paddingRight: 4 }}>
        {/* Text Container */}
        <div>
          <p className="clarissa-title" style={{ fontSize: 15, fontWeight: 500, color: "#111", fontFamily: "'Inter', sans-serif", letterSpacing: "-0.01em" }}>
            Talk with Clarissa
          </p>
          <p className="clarissa-role" style={{ fontSize: 9, color: "#444", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginTop: 6, fontFamily: "'Inter', sans-serif" }}>
            Sales Expert
          </p>
        </div>

        {/* Buttons Container */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 18 }}>
          <button
            className="clarissa-cta"
            style={{
              background: "#333",
              color: "#fff",
              border: "none",
              borderRadius: 100,
              padding: "10px 16px",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#222")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#333")}
          >
            Book 15 min Call
          </button>

          <button
            className="clarissa-arrow"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "#f5a623",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e09510")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f5a623")}
          >
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
              {/* Dark Stroke Arrow to match design */}
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
