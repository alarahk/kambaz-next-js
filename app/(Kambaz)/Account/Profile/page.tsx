/****
 * ProfilePage Component
 * Renders the Account/Profile screen for Kambaz LMS with form fields
 * (username, names, password, DOB, email, role) and actions to save
 * or sign out. 
 */
"use client";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main
      id="wd-profile"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "2rem",
        minHeight: "100vh",
        background: "#f9fafb",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "600px",
          marginTop: "2rem",
        }}
      >
        <h1 style={{ marginTop: 0 }}>Account</h1>
        <h2 style={{ marginTop: 4, marginBottom: 12 }}>Profile</h2>

        <form style={{ display: "grid", gap: 12 }}>
          {/* Username (text) */}
          <label htmlFor="wd-prof-username"><strong>Username</strong></label>
          <input id="wd-prof-username" type="text" defaultValue="jdoe" autoComplete="username" />

          {/* First/Last name (text) */}
          <label htmlFor="wd-prof-first"><strong>First name</strong></label>
          <input id="wd-prof-first" type="text" defaultValue="Jane" autoComplete="given-name" />

          <label htmlFor="wd-prof-last"><strong>Last name</strong></label>
          <input id="wd-prof-last" type="text" defaultValue="Doe" autoComplete="family-name" />

          {/* Password */}
          <label htmlFor="wd-prof-password"><strong>Password</strong></label>
          <input id="wd-prof-password" type="password" defaultValue="secret123!" autoComplete="new-password" />

          {/* Date of birth */}
          <label htmlFor="wd-prof-dob"><strong>Date of birth</strong></label>
          <input id="wd-prof-dob" type="date" defaultValue="2000-01-01" />

          {/* Email */}
          <label htmlFor="wd-prof-email"><strong>Email</strong></label>
          <input id="wd-prof-email" type="email" defaultValue="jdoe@example.com" autoComplete="email" />

          {/* Role dropdown with 4 distinct roles */}
          <label htmlFor="wd-prof-role"><strong>Role</strong></label>
          <select id="wd-prof-role" defaultValue="Student">
            <option>Student</option>
            <option>TA</option>
            <option>Faculty</option>
            <option>Admin</option>
          </select>

          {/* Actions */}
          <div className="actions">
            <Link href="/Account/Signin" id="wd-prof-signout" className="btn">Sign out</Link>
            <button type="submit" id="wd-prof-save" className="btn">Save</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        h1 { font-size: 22px; }
        h2 { font-size: 18px; color: #475569; }
        label { margin-top: 6px; }
        input, select { padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 6px; }
        .btn {
          padding: 8px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          background: #f8fafc;
          cursor: pointer;
          font-size: 14px;
        }
        .btn:hover {
          background: #e2e8f0;
        }
        .actions {
          display: flex;
          gap: 12px;
          margin-top: 12px;
          align-items: center;
        }
      `}</style>
    </main>
  );
}