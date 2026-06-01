import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 500,
          color: "var(--text, #1a1a1a)",
          marginBottom: 16,
        }}
      >
        404 — Page not found
      </h1>
      <p
        style={{
          color: "var(--muted, #5a5a5a)",
          marginBottom: 32,
          maxWidth: 420,
          lineHeight: 1.6,
        }}
      >
        The page you requested could not be found. Return to the homepage or
        explore our services.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            padding: "12px 24px",
            background: "var(--amber, #f5a623)",
            color: "#fff",
            borderRadius: 100,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Go home
        </Link>
        <Link
          href="/services"
          style={{
            padding: "12px 24px",
            border: "1px solid var(--border, #e0e0e0)",
            color: "var(--text, #1a1a1a)",
            borderRadius: 100,
            textDecoration: "none",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          View services
        </Link>
      </div>
    </main>
  );
}
