/****
 * @file (Kambaz)/Account/layout.tsx
 * Account-level layout. Hides nav on auth pages; otherwise shows the shell.
 */
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Navigation from '../Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../globals.css';
import { Button, Container } from 'react-bootstrap';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // current route
  const pathname = usePathname();
  const lower = pathname ? pathname.toLowerCase() : '';

  // hide nav on /account/signin and /account/signup
  const hideNav =
    lower.startsWith('/account/signin') || lower.startsWith('/account/signup');

  if (hideNav) {
    // clean screen for auth
    return (
      <html lang="en">
        <body className="bg-light">
          <header className="position-absolute top-0 start-0 m-3">
            <Link href="/Labs" className="btn btn-outline-secondary btn-sm">Labs</Link>
          </header>
          <div className="text-center fw-bold fs-3 mt-4">Kambaz</div>
          <main className="min-vh-100 d-flex align-items-center justify-content-center flex-column">
            {children}
          </main>
        </body>
      </html>
    );
  }

  // default account shell with sidebar
  return (
    <html lang="en">
      <body className="d-flex">
        <Navigation />
        <main className="flex-grow-1 p-3">{children}</main>
      </body>
    </html>
  );
}