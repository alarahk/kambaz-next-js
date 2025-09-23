import Link from "next/link";

export default function SignIn() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "60px 1fr",
        height: "100vh",
      }}
    >
      {/* Top Title Bar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #ddd",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        Kambaz
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        {/* Left Sidebar */}
        <aside
          style={{
            padding: "1rem"
          }}
        >
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <Link href="/Labs">Labs</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Sign In Content */}
        <main
          id="wd-signin"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              padding: "32px",
              maxWidth: "380px",
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Sign in</h2>

            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label htmlFor="username" style={{ display: "block", marginBottom: "6px" }}>
                Username
              </label>
              <input
                type="text"
                id="wd-username"
                name="username"
                placeholder="Enter username"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>

            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label htmlFor="password" style={{ display: "block", marginBottom: "6px" }}>
                Password
              </label>
              <input
                type="password"
                id="wd-password"
                name="password"
                placeholder="Enter password"
                style={{ padding: "10px", width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <Link
                href="/Dashboard"
                id="wd-signin-btn"
                style={{
                  padding: "10px 20px",
                  marginRight: "10px",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
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
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}