export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: 700,
          padding: "16px 0",
          borderBottom: "1px solid #eee",
        }}
      >
        Kambaz
      </header>
      <div style={{ padding: "0 16px" }}>{children}</div>
    </>
  );
}