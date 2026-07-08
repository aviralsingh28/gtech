"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, ShieldCheck, User, ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Invalid credentials.");
        return;
      }
      router.push("/admin");
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <aside className="login-brand">
        <div className="login-brand-glow login-brand-glow--top" />
        <div className="login-brand-glow login-brand-glow--bottom" />
        <div className="login-brand-overlay" />

        <div className="login-brand-logo">
          <Image
            src="/images/Brand/brand-white.svg"
            alt="GTECH Logo"
            width={180}
            height={50}
            priority
          />
        </div>

        <div className="login-brand-body">
          <div className="login-brand-content">
            <span className="login-badge">
              <ShieldCheck />
              Admin Portal
            </span>
            <h1 className="login-brand-title">
              Manage contact inquiries
              <br />
              <span>from one place</span>
            </h1>
            <p className="login-brand-desc">
              Review submissions, track new leads, and respond to customers through your GTECH dashboard.
            </p>
          </div>
        </div>

        <p className="login-brand-footer">
          © {new Date().getFullYear()} GTECH. Authorized access only.
        </p>
      </aside>

      <main className="login-main">
        <div className="login-mobile-logo">
          <span className="login-mobile-mark">GT</span>
          <span className="login-mobile-name">GTECH</span>
        </div>

        <div className="login-wrap">
          <div className="login-header">
            <h2>Welcome back</h2>
            <p>Sign in to your admin account</p>
          </div>

          <form className="login-form" onSubmit={login}>
            {error && <div className="login-alert">{error}</div>}

            <div className="login-fld">
              <label htmlFor="username">Username</label>
              <div className="login-inp-wrap">
                <User className="login-inp-icon" strokeWidth={1.75} />
                <input
                  id="username"
                  className="login-inp"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="login-fld">
              <label htmlFor="password">Password</label>
              <div className="login-inp-wrap">
                <Lock className="login-inp-icon" strokeWidth={1.75} />
                <input
                  id="password"
                  className="login-inp login-inp--pwd"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-toggle-pwd"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="login-spinner" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight />
                </>
              )}
            </button>

            <div className="login-secure-note">
              <Shield strokeWidth={1.75} />
              Secure admin access
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
