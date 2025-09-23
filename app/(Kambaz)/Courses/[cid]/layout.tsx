import Link from "next/link";
import type { ReactNode } from "react";

export default function CourseLayout({
  children,
  params: { cid },
}: {
  children: ReactNode;
  params: { cid: string };
}) {
  return (
    <div
      id="wd-course-layout"
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <aside>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
            <li><Link href={`/Courses/${cid}/Home`}>Home</Link></li>
            <li><Link href={`/Courses/${cid}/Modules`}>Modules</Link></li>
            <li><Link href={`/Courses/${cid}/Piazza`}>Piazza</Link></li>
            <li><Link href={`/Courses/${cid}/Zoom`}>Zoom</Link></li>
            <li><Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link></li>
            <li><Link href={`/Courses/${cid}/Assignments`}>Assignments</Link></li>
            <li><Link href={`/Courses/${cid}/Grades`}>Grades</Link></li>
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}