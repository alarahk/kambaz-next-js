import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments" style={{ padding: 16, maxWidth: 680 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <input placeholder="Search for Assignments" id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div>

      <h3 id="wd-assignments-title" style={{ margin: "12px 0" }}>
        ASSIGNMENTS <b>40%</b> of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list" style={{ listStyle: "none", paddingLeft: 0 }}>
        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link className="wd-assignment-link" href="/Courses/1234/Assignments/123">
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
            <span className="wd-assignment-link">A2 - CSS + BOOTSTRAP</span>
            <span style={{ fontSize: 12 }}>100 pts • Due May 20 at 11:59pm</span>
          </div>
          <div style={{ fontSize: 12, marginTop: 6 }}>
            Multiple Modules · Not available until May 9 at 12:00am
          </div>
        </li>

        <li style={{ border: "1px solid #ddd", padding: 12, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="wd-assignment-link">A3 - JavaScript + React</span>
            <span style={{ fontSize: 12 }}>100 pts • Due May 27 at 11:59pm</span>
          </div>
          <div style={{ fontSize: 12, marginTop: 6 }}>
            Multiple Modules · Not available until May 16 at 12:00am
          </div>
        </li>
      </ul>
    </div>
  );
}