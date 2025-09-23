import Link from "next/link";

export default function Quizzes({ params }: { params: { cid: string } }) {
  const { cid } = params;
  const base = `/Courses/${cid}`;

  // Placeholder quizzes
  const quizzes = [
    { qid: "quiz1", title: "Quiz 1: Basics" },
    { qid: "quiz2", title: "Quiz 2: Review" },
    { qid: "quiz3", title: "Quiz 3: Final" },
  ];

  return (
    <div id="wd-quizzes">
      <h2>Quizzes</h2>

      {/* Simple nav to other course screens */}
      <nav>
        <Link href={`${base}/Home`}>Home</Link>{" "}|{" "}
        <Link href={`${base}/Modules`}>Modules</Link>{" "}|{" "}
        <Link href={`${base}/Assignments`}>Assignments</Link>{" "}|{" "}
        <Link href={`${base}/Grades`}>Grades</Link>
      </nav>

      {/* List of quizzes */}
      <ul>
        {quizzes.map((q) => (
          <li key={q.qid}>
            <Link href={`${base}/Quizzes/${q.qid}`}>{q.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
