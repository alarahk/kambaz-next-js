import Link from "next/link";

export default function CourseNavigation() {
  return (
    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
      <li><Link href="/Courses/1234/Home">Course Home</Link></li>
      <li><Link href="/Courses/1234/Modules">Modules</Link></li>
      <li><Link href="/Courses/1234/Assignments">Assignments</Link></li>
      <li><Link href="/Courses/1234/Quizzes">Quizzes</Link></li>
      <li><Link href="/Courses/1234/Grades">Grades</Link></li>
    </ul>
  );
}