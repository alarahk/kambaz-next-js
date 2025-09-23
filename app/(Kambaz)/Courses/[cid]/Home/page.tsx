import CourseStatus from "./Status";

export default function CourseHome({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <div
      id="wd-course-home"
      style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1rem", alignItems: "start" }}
    >
      <section>
        <h1 style={{ marginTop: 0 }}>Course Home – {cid}</h1>
        <p><strong>Course:</strong> {cid}</p>

        <h2>Modules</h2>
        <ul>
          <li>
            <strong>Module 1: Introduction</strong>
            <ul>
              <li>Lesson 1.1 – Course Intro</li>
              <li>Lesson 1.2 – Tools & Setup</li>
            </ul>
          </li>
          <li>
            <strong>Module 2: Basics</strong>
            <ul>
              <li>Lesson 2.1 – First Steps</li>
              <li>Lesson 2.2 – Practice</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <CourseStatus />
      </section>
    </div>
  );
}
