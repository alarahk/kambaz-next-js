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
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Sign up</h3>
        <input
          placeholder="Username"
          className="wd-username"
          style={{ width: "100%", padding: "0.6rem", marginBottom: "0.75rem" }}
        /><br />
        <input
          placeholder="Password"
          type="password"
          className="wd-password"
          style={{ width: "100%", padding: "0.6rem", marginBottom: "0.75rem" }}
        /><br />
        <input
          placeholder="Verify password"
          type="password"
          className="wd-password-verify"
          style={{ width: "100%", padding: "0.6rem", marginBottom: "1rem" }}
        /><br />
        <Link href="/profile" style={{ marginRight: "1rem" }}>
          Sign up
        </Link>
        <Link href="/account/signin">Sign in</Link>
      </div>
    </main>
  );
}
