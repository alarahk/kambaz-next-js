import Link from "next/link";

export default function CourseNavigation({
  params,
}: {
  params: { cid: string };
}) {
  const { cid } = params;

  return (
    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
      <li>
        <Link href={`/Courses/${cid}/Home`}>Course Home</Link>
      </li>
      <li>
        <Link href={`/Courses/${cid}/Modules`}>Modules</Link>
      </li>
      <li>
        <Link href={`/Courses/${cid}/Assignments`}>Assignments</Link>
      </li>
      <li>
        <Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link>
      </li>
      <li>
        <Link href={`/Courses/${cid}/Grades`}>Grades</Link>
      </li>
    </ul>
  );
}