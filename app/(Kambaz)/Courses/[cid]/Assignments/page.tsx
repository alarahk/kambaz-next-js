import Link from "next/link";

export default function Assignments({ params: { cid } }: { params: { cid: string } }) {
  return (
    <div id="wd-assignments" style={{ padding: 16, maxWidth: 680 }}>
      <input id="wd-asn-search" placeholder="Search for Assignments" style={{ marginBottom: 12, padding: 8, width: '100%', boxSizing: 'border-box' }} />
      <div style={{ marginBottom: 16 }}>
        <button style={{ marginRight: 8 }}>+ Group</button>
        <button>+ Assignment</button>
      </div>

      <h3 id="wd-assignments-title" style={{ margin: "12px 0" }}>
        ASSIGNMENTS FOR COURSE
      </h3>
      <ul id="wd-assignment-list" style={{ listStyle: "none", paddingLeft: 0 }}>
        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/123`}>
              A1 - ENV + HTML
            </Link>
            <span style={{ fontSize: 12 }}>100 pts • Due May 13 at 11:59pm</span>
          </div>
          <div style={{ fontSize: 12, marginTop: 6 }}>
            Multiple Modules · Not available until May 2 at 12:00am
          </div>
        </li>

        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/234`}>A2 - CSS + BOOTSTRAP</Link>
            <span style={{ fontSize: 12 }}>100 pts • Due May 20 at 11:59pm</span>
          </div>
          <div style={{ fontSize: 12, marginTop: 6 }}>
            Multiple Modules · Not available until May 9 at 12:00am
          </div>
        </li>

        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link className="wd-assignment-link" href={`/Courses/${cid}/Assignments/345`}>A3 - JavaScript + React</Link>
            <span style={{ fontSize: 12 }}>100 pts • Due May 27 at 11:59pm</span>
          </div>
          <div style={{ fontSize: 12, marginTop: 6 }}>
            Multiple Modules · Not available until May 16 at 12:00am
          </div>
        </li>
      </ul>

      <h3 id="wd-quizzes-title" style={{ margin: "12px 0" }}>
        QUIZZES
      </h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <span className="wd-assignment-link">Q1 - Intro Quiz</span>
          <span style={{ fontSize: 12, marginLeft: 8 }}>10 pts • Due May 15 at 11:59pm</span>
        </li>
      </ul>

      <h3 id="wd-exams-title" style={{ margin: "12px 0" }}>
        EXAMS
      </h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <span className="wd-assignment-link">Midterm Exam</span>
          <span style={{ fontSize: 12, marginLeft: 8 }}>100 pts • Due June 1 at 11:59pm</span>
        </li>
      </ul>

      <h3 id="wd-project-title" style={{ margin: "12px 0" }}>
        PROJECT
      </h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <span className="wd-assignment-link">Final Project</span>
          <span style={{ fontSize: 12, marginLeft: 8 }}>200 pts • Due June 15 at 11:59pm</span>
        </li>
      </ul>
    </div>
  );
}