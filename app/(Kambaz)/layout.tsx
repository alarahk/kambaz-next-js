"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

export default function KambazLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideNav =
    pathname === "/Account/Signin" || pathname === "/Account/Signup";

  if (hideNav) {
    return <>{children}</>;
  }

  return (
    <div
      id="wd-kambaz"
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <aside>
        <Navigation />
      </aside>
      <main>{children}</main>
    </div>
  );
}