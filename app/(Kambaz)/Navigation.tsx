import Link from "next/link";

export default function Navigation() {
  return (
    <nav aria-label="Global">
      <ul id="wd-global-navigation" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <Link href="/" id="wd-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Account" id="wd-account-link">
            Account
          </Link>
        </li>
        <li>
          <Link href="/Dashboard" id="wd-dashboard-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/Courses" id="wd-courses-link">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/Labs" id="wd-labs-link">
            Labs
          </Link>
        </li>
      </ul>
    </nav>
  );
}