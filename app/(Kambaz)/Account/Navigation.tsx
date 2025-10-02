"use client";
/*
  Kambaz – Account Navigation
  - Account-specific links (Dashboard, Courses, Calendar, Profile)
  - Hidden on Signin/Signup
*/

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AccountNavigation() {
  const pathname = usePathname();
  if (
    pathname?.toLowerCase().startsWith("/account/signin") ||
    pathname?.toLowerCase().startsWith("/account/signup") ||
    pathname?.toLowerCase().startsWith("/account/profile") 
  ) {
    return null; // hide account nav on Signin/Signup
  }
  return (
    <nav aria-label="Account navigation">
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
        <li>
          <Link href="/dashboard" id="wd-dashboard-link">Dashboard</Link>
        </li>
        <li>
          <Link href="/Courses" id="wd-courses-link">Courses</Link>
        </li>
        <li>
          <Link href="/calendar" id="wd-calendar-link">Calendar</Link>
        </li>
        <li>
          <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" id="wd-inbox-link">Inbox</a>
        </li>
        <li>
          <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer" id="wd-neu-link">NEU</a>
        </li>
        <li>
          <Link href="/Account/Profile" id="wd-profile-link">Profile</Link>
        </li>
        <li>
          <Link href="/Account/Signin" id="wd-signout-link">Sign out</Link>
        </li>
      </ul>
    </nav>
  );
}