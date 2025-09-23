import Link from "next/link";

export default function Modules({ params }: { params: { cid: string } }) {
  const { cid } = params;

  // Placeholder module/lesson data
  const modules = [
    {
      mid: "week1",
      title: "Week 1",
      lessons: [
        { lid: "lesson1", title: "Lesson 1: Introduction" },
        { lid: "lesson2", title: "Lesson 2: Setup" },
      ],
    },
    {
      mid: "week2",
      title: "Week 2",
      lessons: [
        { lid: "lesson1", title: "Lesson 1: Basics" },
        { lid: "lesson2", title: "Lesson 2: Practice" },
      ],
    },
    {
      mid: "week3",
      title: "Week 3",
      lessons: [
        { lid: "lesson1", title: "Lesson 1: Review" },
        { lid: "lesson2", title: "Lesson 2: Quiz" },
      ],
    },
  ];

  return (
    <div>
      <h2>Modules</h2>
      <ul id="wd-modules">
        {modules.map((m) => (
          <li key={m.mid} className="wd-module">
            <div className="wd-title">{m.title}</div>
            <ul className="wd-lessons">
              {m.lessons.map((l) => (
                <li key={l.lid} className="wd-lesson">
                  <Link href={`/Courses/${cid}/Modules/${m.mid}/Lessons/${l.lid}`}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Simple course nav for convenience */}
      <nav>
        <Link href={`/Courses/${cid}/Home`}>Home</Link>{" "}|{" "}
        <Link href={`/Courses/${cid}/Modules`}>Modules</Link>{" "}|{" "}
        <Link href={`/Courses/${cid}/Assignments`}>Assignments</Link>{" "}|{" "}
        <Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link>{" "}|{" "}
        <Link href={`/Courses/${cid}/Grades`}>Grades</Link>
      </nav>
    </div>
  );
}