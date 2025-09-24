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
            <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
              <div className="wd-title"><strong>{m.title}</strong></div>
              <ul className="wd-lessons" style={{ marginTop: "8px" }}>
                {m.lessons.map((l) => (
                  <li key={l.lid} className="wd-lesson">
                    <Link href={`/Courses/${cid}/Modules/${m.mid}/Lessons/${l.lid}`}>{l.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}