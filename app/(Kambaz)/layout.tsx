/**
 * KambazLayout
 * Provides the shell for Kambaz pages: left sidebar navigation + main content.
 * Renders children in <main>. Navigation is defined in ./Navigation.
 */

'use client';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import KambazNavigation from './Navigation';
import "./styles.css";

export default function KambazLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname.includes("/Account/Signin") || pathname.includes("/Account/Signup")) {
    return <main className="auth-layout">{children}</main>;
  }

  return (
    <div id="wd-kambaz">
      <div className="d-flex">
        <div>
          <KambazNavigation />
        </div>
        <div className="wd-main-content-offset p-3 flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}