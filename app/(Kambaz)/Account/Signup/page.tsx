"use client";
/**
 * Signup Page
 */
import Link from "next/link";

export default function Signup() {
  return (
    <main
      id="wd-signup-screen"
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
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          padding: "2rem",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          background: "#fff",
          boxShadow: "0 1px 2px rgba(0,0,0,.04)",
        }}
      >
        <h2 style={{ textAlign: "center", margin: 0 }}>Sign up for Kambaz</h2>
        <p style={{ textAlign: "center", margin: "6px 0 18px", color: "#64748b" }}>
          Create your account to access courses and dashboards.
        </p>

        {/* Username */}
        <label htmlFor="wd-su-username" style={{ display: "block", fontWeight: 600 }}>Username</label>
        <input
          id="wd-su-username"
          type="text"
          defaultValue="newuser"
          placeholder="e.g., alara.h"
          aria-describedby="wd-su-username-tip"
          title="3–20 characters; letters, numbers, underscores"
          className="wd-username"
          style={{ width: "100%", padding: "0.65rem", marginTop: 6, border: "1px solid #cbd5e1", borderRadius: 8 }}
        />
        <small id="wd-su-username-tip" style={{ display: "block", margin: "6px 0 14px", color: "#64748b" }}>
          Use 3–20 characters. You can include letters, numbers, and underscores.
        </small>

        {/* Password */}
        <label htmlFor="wd-su-password" style={{ display: "block", fontWeight: 600 }}>Password</label>
        <input
          id="wd-su-password"
          type="password"
          defaultValue="pass123!"
          placeholder="At least 8 characters"
          aria-describedby="wd-su-password-tip"
          title="Minimum 8 characters; add a number and symbol for strength"
          className="wd-password"
          style={{ width: "100%", padding: "0.65rem", marginTop: 6, border: "1px solid #cbd5e1", borderRadius: 8 }}
        />
        <small id="wd-su-password-tip" style={{ display: "block", margin: "6px 0 14px", color: "#64748b" }}>
          Minimum 8 characters. Mix letters, numbers, and a symbol for a strong password.
        </small>

        {/* Verify Password */}
        <label htmlFor="wd-su-password-verify" style={{ display: "block", fontWeight: 600 }}>Verify password</label>
        <input
          id="wd-su-password-verify"
          type="password"
          defaultValue="pass123!"
          placeholder="Re-enter your password"
          className="wd-password-verify"
          style={{ width: "100%", padding: "0.65rem", marginTop: 6, border: "1px solid #cbd5e1", borderRadius: 8 }}
        />

        {/* Primary action */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
          <Link href="/Account/Profile" id="wd-su-submit" className="btn btn-primary">Sign up</Link>
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
