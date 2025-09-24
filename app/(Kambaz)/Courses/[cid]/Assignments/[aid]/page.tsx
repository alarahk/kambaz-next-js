import Link from "next/link";

export default function AssignmentsList({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <main id="wd-assignments-list" style={{ padding: 16, maxWidth: 800 }}>
      <h1>Assignments</h1>

      <ul>
        <li>
          <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/123`}>A1 – ENV + HTML</Link>
        </li>
        <li>
          <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/234`}>A2 – CSS + BOOTSTRAP</Link>
        </li>
        <li>
          <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/345`}>A3 – JavaScript + React</Link>
        </li>
      </ul>
    </main>
  );
}