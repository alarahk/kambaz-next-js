import Link from "next/link";

export default function SignIn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 24,
          width: "100%",
          maxWidth: 900,
        }}
      >
        {/* Small, non-full-height sidebar */}
        <aside style={{ minWidth: 160, paddingTop: 8 }}>
          <nav>
            <Link
              href="/Labs"
              style={{
                display: "inline-block",
                padding: "6px 0",
                textDecoration: "none",
                color: "#222",
                fontWeight: 500,
              }}
            >
              Labs
            </Link>
          </nav>
        </aside>

        {/* Sign-in card */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              padding: 32,
              maxWidth: 380,
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: 8,
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ marginBottom: 20 }}>Sign in</h2>

            <div style={{ marginBottom: 15, textAlign: "left" }}>
              <label htmlFor="wd-username" style={{ display: "block", marginBottom: 6 }}>
                Username
              </label>
              <input
                type="text"
                id="wd-username"
                name="username"
                placeholder="Enter username"
                style={{ padding: 10, width: "100%" }}
              />
            </div>

            <div style={{ marginBottom: 15, textAlign: "left" }}>
              <label htmlFor="wd-password" style={{ display: "block", marginBottom: 6 }}>
                Password
              </label>
              <input
                type="password"
                id="wd-password"
                name="password"
                placeholder="Enter password"
                style={{ padding: 10, width: "100%" }}
              />
            </div>

            <div style={{ marginTop: 20 }}>
              <Link
                href="/Dashboard"
                id="wd-signin-btn"
                style={{
                  padding: "10px 20px",
                  marginRight: 10,
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Sign in
              </Link>
              <Link
                href="/Account/Signup"
                id="wd-signup-link"
                style={{
                  padding: "10px 20px",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}