import Link from "next/link";

export default function CourseNavigation({ params }: { params: { cid: string } }) {
  const { cid } = params;
  const base = `/Courses/${cid}`;

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.25rem" }}>
      <li><Link href={`${base}/Home`}>Home</Link></li>
      <li><Link href={`${base}/Modules`}>Modules</Link></li>
      <li><Link href={`${base}/Piazza`}>Piazza</Link></li>
      <li><Link href={`${base}/Zoom`}>Zoom</Link></li>
      <li><Link href={`${base}/Quizzes`}>Quizzes</Link></li>
      <li><Link href={`${base}/Assignments`}>Assignments</Link></li>
      <li><Link href={`${base}/Grades`}>Grades</Link></li>
    </ul>
  );
}