export default function SignIn() {
  return (
    <main
      id="wd-signin"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // full viewport height
      }}
    >
      <div
        style={{
          padding: "40px",
          maxWidth: "420px",
          width: "100%",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
            id="username"
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
            id="password"
            placeholder="Enter password"
            style={{ padding: "10px", width: "100%" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <button style={{ padding: "10px 20px", marginRight: "10px" }}>Sign in</button>
          <button style={{ padding: "10px 20px" }}>Sign up</button>
        </div>
      </div>
    </main>
  );
}