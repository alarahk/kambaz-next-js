/*
  Kambaz – Account Segment Layout
  - Wraps Account routes
  - Hides account nav on Signin/Signup
*/
"use client";
import { usePathname } from "next/navigation";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideAccountNav = pathname?.toLowerCase().startsWith("/account/signin") || pathname?.toLowerCase().startsWith("/account/signup");
  return (
    <div
      id="wd-account"
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        gap: 24,
        padding: 16,
        alignItems: "start",
      }}
    >
      {!hideAccountNav && (
        <aside>
          <AccountNavigation />
        </aside>
      )}
      <main className="kz-page">
        <div className="kz-container">{children}</div>
      </main>
    </div>
  );
}