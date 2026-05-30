"use client";

import Image from "next/image";

export default function GlobalImpact() {
  return (
    <section style={{ background: "#fff", padding: "clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px) 0" }}>
      <div
        style={{
          background: "#0a0a0a",
          borderRadius: 32,
          padding: "clamp(72px, 10vw, 120px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 20%, rgba(245,166,35,0.18), transparent 55%)",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1360,
            margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
          }}
        >
          <style>{`
            .impact-grid {
              display: flex;
              gap: 24px;
              margin-top: 64px;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
            }
            .impact-image {
              flex: 1;
              min-width: 250px;
              max-width: 350px;
            }
            .impact-image img {
              width: 100%;
              height: auto;
              border-radius: 12px;
              object-fit: contain;
            }
          `}</style>

          <div style={{ maxWidth: 720 }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                color: "#f5a623",
                textTransform: "uppercase",
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                marginBottom: 20,
              }}
            >
              Our Global Impact
            </p>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 400,
                color: "#fff",
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Trusted by industry leaders across the globe
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                fontFamily: "'Outfit', sans-serif",
                marginTop: 20,
                maxWidth: 600,
              }}
            >
              We pride ourselves on cultivating strong, strategic partnerships and
              delivering technology solutions to clients ranging from emerging
              startups to established global enterprises.
            </p>
          </div>

          <div className="impact-grid">
            <div className="impact-image">
              <Image
                src="/trusted-industry/ChatGPT Image May 30, 2026, 03_50_42 PM.png"
                alt="Trusted Industry 1"
                width={300}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="impact-image">
              <Image
                src="/trusted-industry/ChatGPT Image May 30, 2026, 03_50_47 PM.png 15-56-44-924.png"
                alt="Trusted Industry 2"
                width={300}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="impact-image">
              <Image
                src="/trusted-industry/ChatGPT Image May 30, 2026, 03_51_20 PM.png"
                alt="Trusted Industry 3"
                width={300}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
