"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", href: "/services", dropdown: false },
  { label: "About Us", href: "/about", dropdown: false },
  { label: "Career", href: "/career", dropdown: false },
  { label: "Industries", href: "/industries", dropdown: false },
  { label: "Contact Us", href: "/contact", dropdown: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
          zIndex: 90,
        }}
      />

      <header
        className="fixed top-0 left-0 right-0 z-[10000] bg-white"
        style={{
          borderBottom: scrolled ? "1px solid #e8e8e8" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <style>{`
          .nav-tagline { display: inline; }
          .nav-desktop { display: flex; }
          .nav-cta-text, .nav-cta-circle { display: inline-flex; }
          .nav-toggle { display: none; }
          @media (max-width: 1023px) {
            .nav-desktop { display: none !important; }
            .nav-toggle { display: inline-flex !important; }
            .nav-cta-text, .nav-cta-circle { display: none !important; }
          }
          @media (max-width: 640px) {
            .nav-tagline, .nav-tagline-divider { display: none; }
          }
          .nav-link {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 8px 14px;
            font-size: 14px;
            font-weight: 500;
            color: #222;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
            font-family: 'Outfit', sans-serif;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            bottom: 4px;
            left: 50%;
            width: 0;
            height: 2px;
            background: #f5a623;
            transition: all 0.3s ease;
            transform: translateX(-50%);
            border-radius: 2px;
          }
          .nav-link:hover::after,
          .nav-link.active::after {
            width: calc(100% - 28px);
          }
          .nav-link:hover { 
            color: #f5a623;
          }
          .nav-link.active {
            color: #f5a623;
          }
          .nav-mobile-panel {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: min(300px, 100vw);
            background: #fff;
            padding: 100px 32px 40px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            overflow-y: auto;
            z-index: 10001;
            box-shadow: -10px 0 30px rgba(0,0,0,0.05);
          }
          .nav-mobile-panel.is-open {
            transform: translateX(0);
          }
          .nav-mobile-link {
            padding: 16px 0;
            font-size: 18px;
            font-weight: 500;
            color: #1a1a1a;
            text-decoration: none;
            border-bottom: 1px solid #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: 'Outfit', sans-serif;
            transition: color 0.2s;
          }
          .nav-mobile-link:hover {
            color: #f5a623;
          }
        `}</style>

        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            padding: "0 clamp(16px, 3vw, 32px)",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", flexShrink: 0 }}>
            <Image
              src="/images/Brand/brandLogo.svg"
              alt="GTechSoft"
              width={182}
              height={42}
              style={{ height: "clamp(32px, 5vw, 42px)", width: "auto" }}
              priority
            />
            <div className="nav-tagline-divider" style={{ height: 24, borderLeft: "1px solid #ddd" }} />
            <span className="nav-tagline" style={{ fontSize: 14, color: "#444", fontWeight: 500, fontFamily: "'Outfit', sans-serif" }}>
              Driven by Vision, Defined by Results.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop" style={{ alignItems: "center", gap: 6, flex: 1, justifyContent: "center" }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button Group */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <Link
              href="/contact"
              className="nav-cta-text"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                background: "#111",
                color: "#fff",
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="nav-cta-circle"
              style={{
                width: 44,
                height: 44,
                background: "#f5a623",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="nav-toggle"
              style={{
                width: 44,
                height: 44,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: 0,
                zIndex: 10002,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                {menuOpen ? (
                  <path d="M6 6L18 18M18 6L6 18" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 7h16" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12h16" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 17h16" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile side panel */}
        <div className={`nav-mobile-panel${menuOpen ? " is-open" : ""}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href} 
                className={`nav-mobile-link ${isActive ? "active" : ""}`} 
                onClick={() => setMenuOpen(false)}
                style={{ color: isActive ? "#f5a623" : "" }}
              >
                {item.label}
                {item.dropdown && (
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke={isActive ? "#f5a623" : "#888"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            );
          })}

          <div style={{ marginTop: "auto", paddingTop: 40, display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                flex: 1,
                padding: "18px 24px",
                background: "#111",
                color: "#fff",
                borderRadius: 100,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                width: 56,
                height: 56,
                background: "#f5a623",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
