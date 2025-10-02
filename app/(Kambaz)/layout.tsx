/**
 * KambazLayout
 * Provides the shell for Kambaz pages: left sidebar navigation + main content.
 * Renders children in <main>. Navigation is defined in ./Navigation.
 */
import Navigation from "./Navigation";

export default function KambazLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="wd-kambaz"
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        gap: "24px",
        padding: "16px",
      }}
    >
      <aside>
        <Navigation />
      </aside>
      <main>{children}</main>
    </div>
  );
}