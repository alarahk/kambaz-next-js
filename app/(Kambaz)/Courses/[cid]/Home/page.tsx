import CourseStatus from "./Status";

export default function CourseHome({
  params,
}: {
  params: { cid: string };
}) {
  const { cid } = params;

  const box = {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "12px",
    margin: "8px 0",
  } as const;

  const modules = [
    {
      mid: "1",
      title: "Module 1: Module Title",
      lessons: ["Lesson 1.1 – Lesson Intro", "Lesson 1.2 – Lesson Content"],
    },
    {
      mid: "2",
      title: "Module 2: Module Title",
      lessons: ["Lesson 2.1 – Lesson Intro", "Lesson 2.2 – Lesson Content"],
    },
  ];

  return (
    <main
      id="wd-course-home"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: "16px",
        padding: "16px",
      }}
    >
      <section>
        <h1 style={{ marginTop: 0 }}>Home</h1>

        {/* Course overview */}
        <div style={box}>
          <h3 style={{ marginTop: 0 }}>Course Overview – {cid}</h3>
          <p>
            Information about the course, welcome message, instructor details,
          </p>

          <h4 style={{ margin: "12px 0 6px" }}>Highlights</h4>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              marginTop: "8px",
            }}
          >
            <div style={{ fontWeight: 600 }}>A2 – CSS + BOOTSTRAP</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              Assignment • Due May 20, 11:59pm
            </div>
            <div style={{ marginTop: 6 }}>
              <a
                href={`/Courses/${cid}/Assignments/234`}
                style={{
                  display: "inline-block",
                  padding: "6px 10px",
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  background: "transparent",
                  textDecoration: "none",
                }}
              >
                Open
              </a>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              marginTop: "8px",
            }}
          >
            <div style={{ fontWeight: 600 }}>Quiz 1 – HTML</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>Quiz • Due May 22, 11:59pm</div>
            <div style={{ marginTop: 6 }}>
              <a
                href={`/Courses/${cid}/Quizzes/1`}
                style={{
                  display: "inline-block",
                  padding: "6px 10px",
                  border: "1px solid #ccc",
                  borderRadius: 6,
                  background: "transparent",
                  textDecoration: "none",
                }}
              >
                Open
              </a>
            </div>
          </div>
        </div>

        {/* Modules list (boxed items) */}
        <h2 style={{ marginTop: 16 }}>Modules</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {modules.map((m) => (
            <li key={m.mid} style={{ margin: 0, padding: 0 }}>
              <div style={box}>
                <strong>{m.title}</strong>
                <ul style={{ margin: "8px 0 0 18px" }}>
                  {m.lessons.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <aside>
        <div style={{ position: "sticky", top: 16 }}>
          <div style={box}>
            <h3 style={{ marginTop: 0 }}>Course Status</h3>
            <ul style={{ paddingLeft: "16px", margin: "8px 0 0" }}>
              <li><a href="#">Action 1</a></li>
              <li><a href="#">Action 2</a></li>
              <li><a href="#">Action 3</a></li>
            </ul>
          </div>
          <div style={box}>
            <h3 style={{ marginTop: 0 }}>To Do</h3>
            <ul style={{ paddingLeft: "16px", margin: "8px 0 0" }}>
              <li>Grade A1</li>
              <li>Review Quiz 1</li>
            </ul>
          </div>
          <div style={box}>
            <h3 style={{ marginTop: 0 }}>Coming Up</h3>
            <ul style={{ paddingLeft: "16px", margin: "8px 0 0" }}>
              <li>Assignment A2 – Due May 20</li>
              <li>Midterm Exam – June 1</li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  );
}