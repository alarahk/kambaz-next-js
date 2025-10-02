"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  if (
    pathname?.toLowerCase().startsWith("/account/signin") ||
    pathname?.toLowerCase().startsWith("/account/signup")
  ) {
    return null;
  }
  return (
    <nav aria-label="Global">
      <ul id="wd-global-navigation" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
        <li>
          <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link>
        </li>
        <li>
          <Link href="/Courses" id="wd-courses-link">Courses</Link>
        </li>
        <li>
          <Link href="/Calendar" id="wd-calendar-link">Calendar</Link>
        </li>
        <li>
          <a
            href="https://mail.google.com"
            id="wd-gmail-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inbox
          </a>
        </li>
        <li>
          <a
            href="https://www.northeastern.edu"
            id="wd-neu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            NEU
          </a>
        </li>
        <li>
          <Link href="/Account/Profile" id="wd-account-link">Profile</Link>
        </li>
        <li>
          <Link href="/Account/Signin" id="wd-signout-link">Sign out</Link>
        </li>
      </ul>
    </nav>
  );
}