import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "1rem", padding: "1rem" }}>
      <aside>
        <AccountNavigation />
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
}