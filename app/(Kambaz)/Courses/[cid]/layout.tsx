'use client';

/**
 * course section layout
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export default function CourseLayout({
  children,
}: {
  children: ReactNode;
  params?: { cid: string }; // intentionally unused on client
}) {
  const pathname = usePathname() || '';
  // derive cid from the url to avoid async params warnings
  const cid = (() => {
    const m = pathname.match(/^\/Courses\/([^/]+)/i);
    return m?.[1] ?? '';
  })();

  const items: { href: string; label: string }[] = [
    { href: `/Courses/${cid}/Home`, label: 'Home' },
    { href: `/Courses/${cid}/Modules`, label: 'Modules' },
    { href: `/Courses/${cid}/Piazza`, label: 'Piazza' },
    { href: `/Courses/${cid}/Zoom`, label: 'Zoom' },
    { href: `/Courses/${cid}/Assignments`, label: 'Assignments' },
    { href: `/Courses/${cid}/Quizzes`, label: 'Quizzes' },
    { href: `/Courses/${cid}/Grades`, label: 'Grades' },
    { href: `/Courses/${cid}/People/Table`, label: 'People' },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left: course navigation (hide on small screens) */}
        <aside className="col-md-2 d-none d-md-block" aria-label="Course Navigation">
          <nav>
            <ul className="list-unstyled m-0">
              {items.map(({ href, label }) => {
                const active = isActive(href);
                const linkCls = active
                  ? 'd-block px-2 py-1 rounded-1 fw-semibold bg-light border-start border-3 border-danger text-danger text-decoration-none'
                  : 'd-block px-2 py-1 rounded-1 text-body-secondary text-decoration-none';

                return (
                  <li key={href} className="mb-1">
                    <Link
                      href={href}
                      className={linkCls}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Right: page content */}
        <main className="col-md-10 pt-2">
          {children}
        </main>
      </div>
    </div>
  );
}