import Link from "next/link";

export default function QuizzesPage({ params }: { params: { cid: string } }) {
  const { cid } = params;
  return (
    <main id="wd-quizzes">
      <h2>Quizzes</h2>
      <ul>
        <li>
          <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 6, margin: "8px 0" }}>
            <Link href={`/Courses/${cid}/Quizzes/1`}>Quiz 1 – HTML</Link>
          </div>
        </li>
        <li>
          <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 6, margin: "8px 0" }}>
            <Link href={`/Courses/${cid}/Quizzes/2`}>Quiz 2 – CSS</Link>
          </div>
        </li>
        <li>
          <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 6, margin: "8px 0" }}>
            <Link href={`/Courses/${cid}/Quizzes/3`}>Quiz 3 – JavaScript</Link>
          </div>
        </li>
      </ul>
    </main>
  );
}
