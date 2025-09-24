import Link from "next/link";

export default function AssignmentsPage({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <main id="wd-assignments">
      <h2>Assignments</h2>

      {/* Search + Actions */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input placeholder="Search for Assignments" style={{ marginRight: "8px" }} />
          <button
            style={{
              padding: "6px 14px",
              marginRight: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer"
            }}
          >
            + Group
          </button>
          <button
            style={{
              padding: "6px 14px",
              marginRight: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer"
            }}
          >
            + Assignment
          </button>
          <button
            style={{
              padding: "6px 14px",
              marginRight: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer"
            }}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Sections */}
      <h3>Assignments</h3>
      <ul>
        <li>
          <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
            <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/123`}>
              A1 – ENV + HTML
            </Link>
            {" "}|{" "}<span>Multiple Modules</span>{" "}|{" "}
            <span>Not available until May 6 at 12:00am</span>
            <br />
            <span>Due: May 13 at 11:59pm</span>{" "}|{" "}<span>100 pts</span>
          </div>
        </li>
        <li>
          <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
            <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/234`}>
              A2 – CSS + BOOTSTRAP
            </Link>
            {" "}|{" "}<span>Multiple Modules</span>{" "}|{" "}
            <span>Not available until May 13 at 12:00am</span>
            <br />
            <span>Due: May 20 at 11:59pm</span>{" "}|{" "}<span>100 pts</span>
          </div>
        </li>
        <li>
          <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
            <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/345`}>
              A3 – JavaScript + React
            </Link>
            {" "}|{" "}<span>Multiple Modules</span>{" "}|{" "}
            <span>Not available until May 20 at 12:00am</span>
            <br />
            <span>Due: May 27 at 11:59pm</span>{" "}|{" "}<span>100 pts</span>
          </div>
        </li>
      </ul>

      <h3>Quizzes</h3>
      <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
        Quiz 1 – HTML
      </div>
      <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
        Quiz 2 – CSS
      </div>
      <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
        Quiz 3 – JavaScript
      </div>

      <h3>Exams</h3>
      <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
        Midterm
      </div>
      <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
        Final
      </div>

      <h3>Project</h3>
      <div style={{ border: "1px solid #ccc", padding: "12px", margin: "8px 0", borderRadius: "6px" }}>
        Project – Team app
      </div>
    </main>
  );
}