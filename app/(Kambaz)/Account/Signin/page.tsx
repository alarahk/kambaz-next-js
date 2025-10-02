"use client";
/**
 * Signin Page
 * Centered sign-in card for Kambaz with username + password and a single
 * primary action. "Sign in" routes to /Dashboard per app flow.
 */
import Link from "next/link";

export default function SignIn() {
  return (
    <main
      id="wd-signin-screen"
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
        background: "#fafbfc",
      }}
    >
      <Link
        href="/Labs"
        id="wd-labs-header-link"
        style={{
          position: "absolute",
          top: "16px",
          left: "20px",
          fontWeight: 700,
          fontSize: "18px",
          color: "#000001ff",
          textDecoration: "none"
        }}
      >
        CS5610 LABS
      </Link>
      <h1
        style={{
          position: "absolute",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "22px",
          fontWeight: 700,
          color: "#111827",
          margin: 0,
        }}
      >
        Kambaz
      </h1>
      <div
        style={{
          width: "100%",
          maxWidth: 440,
          padding: "2rem",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          background: "#fff",
          boxShadow: "0 1px 2px rgba(0,0,0,.04)",
        }}
      >
        <h2 style={{ textAlign: "center", margin: 0 }}>Sign in to Kambaz</h2>
        <p style={{ textAlign: "center", margin: "6px 0 18px", color: "#64748b" }}>
          Welcome back. Enter your details to continue.
        </p>

        {/* Username */}
        <label htmlFor="wd-si-username" style={{ display: "block", fontWeight: 600 }}>Username</label>
        <input
          id="wd-si-username"
          type="text"
          placeholder="e.g., alara.h"
          aria-describedby="wd-si-username-tip"
          title="Your Kambaz username"
          style={{ width: "100%", padding: "0.65rem", marginTop: 6, border: "1px solid #cbd5e1", borderRadius: 8 }}
        />
        <small id="wd-si-username-tip" style={{ display: "block", margin: "6px 0 14px", color: "#64748b" }}>
          Use the username you created at signup.
        </small>

        {/* Password */}
        <label htmlFor="wd-si-password" style={{ display: "block", fontWeight: 600 }}>Password</label>
        <input
          id="wd-si-password"
          type="password"
          placeholder="Your password"
          aria-describedby="wd-si-password-tip"
          title="Minimum 8 characters"
          style={{ width: "100%", padding: "0.65rem", marginTop: 6, border: "1px solid #cbd5e1", borderRadius: 8 }}
        />
        <small id="wd-si-password-tip" style={{ display: "block", margin: "6px 0 14px", color: "#64748b" }}>
          Minimum 8 characters.
        </small>

        {/* Primary action + secondary link */}
        <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
          <Link href="/Dashboard" id="wd-signin-btn" className="btn btn-primary">Sign in</Link>
          <div style={{ textAlign: "center", fontSize: 14 }}>
            Don&apos;t have an account? <Link href="/Account/Signup" id="wd-go-signup">Sign up</Link>
          </div>
        </div>

        <style jsx>{`
          .btn { display: inline-block; padding: 10px 14px; border-radius: 8px; text-decoration: none; }
          .btn-primary { background: #0b62d6; color: #fff; }
          .btn-primary:hover { filter: brightness(.95); }
        `}</style>
      </div>
    </main>
  );
}