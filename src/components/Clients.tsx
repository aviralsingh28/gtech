"use client";
import Image from "next/image";

const clients = [
  "/images/Client/Client-one.svg",
  "/images/Client/Client-two.svg",
  "/images/Client/Client-three.svg",
  "/images/Client/Client-four.svg",
  "/images/Client/Client-five.svg",
  "/images/Client/Client-six.svg",
];

const row1 = clients;
const row2 = [...clients].reverse();

export default function Clients() {
  return (
    <section
      id="clients"
      style={{
        background: "#FFFFFF",
        padding: "0 clamp(12px, 3vw, 24px) clamp(24px, 5vw, 48px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(20px, 5vw, 64px)" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.25,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Trusted by 80+ international
            <br />
            clients across industries
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted, #5a5a5a)", maxWidth: 700, margin: "0 auto", lineHeight: 1.6, fontFamily: "'Outfit', sans-serif" }}>
            From fintech and healthcare to logistics and education — global teams rely on us
            to ship enterprise-grade software that scales.
          </p>
        </div>

        {/* Marquee Rows */}
        <style>{`
          @keyframes clients-scroll-rtl {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes clients-scroll-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .clients-marquee {
            position: relative;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0, #000 80px, #000 calc(100% - 80px), transparent 100%);
          }
          .clients-track {
            display: flex;
            gap: 16px;
            width: max-content;
          }
          .clients-track--rtl {
            animation: clients-scroll-rtl 35s linear infinite;
          }
          .clients-track--ltr {
            animation: clients-scroll-ltr 35s linear infinite;
          }
          .clients-marquee:hover .clients-track {
            animation-play-state: paused;
          }
          .clients-logo {
            flex: 0 0 auto;
            width: clamp(160px, 42vw, 220px);
            background: #fafafa;
            border-radius: 16px;
            height: clamp(96px, 22vw, 120px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px 20px;
            border: 1px solid rgba(0,0,0,0.02);
            transition: box-shadow 0.2s;
          }
          .clients-logo:hover {
            box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          }
        `}</style>

        {/* Row 1 — right to left */}
        <div className="clients-marquee" style={{ marginBottom: 16 }}>
          <div className="clients-track clients-track--rtl">
            {[...row1, ...row1].map((src, i) => (
              <div key={`r1-${i}`} className="clients-logo" aria-hidden={i >= row1.length}>
                <Image
                  src={src}
                  alt={`Client ${(i % row1.length) + 1}`}
                  width={180}
                  height={60}
                  style={{ width: "auto", height: "clamp(40px, 10vw, 52px)", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — left to right */}
        <div className="clients-marquee">
          <div className="clients-track clients-track--ltr">
            {[...row2, ...row2].map((src, i) => (
              <div key={`r2-${i}`} className="clients-logo" aria-hidden={i >= row2.length}>
                <Image
                  src={src}
                  alt={`Client ${(i % row2.length) + 1}`}
                  width={180}
                  height={60}
                  style={{ width: "auto", height: "clamp(40px, 10vw, 52px)", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
