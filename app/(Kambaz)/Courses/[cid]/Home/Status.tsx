export default function CourseStatus() {
  return (
    <aside id="wd-course-status" style={{ border: "1px solid #eee", padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>Course Status</h3>

      {/* Buttons at the top (rubric) */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
        <button>Publish</button>
        <button>Import Existing Content</button>
        <button>Import from Commons</button>
        <button>Choose Home Page</button>
        <button>View Course Stream</button>
        <button>New Announcement</button>
        <button>New Analytics</button>
        <button>View Course Notifications</button>
      </div>

      {/* Simple status/coming up placeholders */}
      <section>
        <h4 style={{ margin: "8px 0" }}>To Do</h4>
        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
          <li>Grade A1 – ENV + HTML</li>
          <li>Review Quiz 1</li>
        </ul>
      </section>

      <section style={{ marginTop: 12 }}>
        <h4 style={{ margin: "8px 0" }}>Coming Up</h4>
        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
          <li>Assignment A2 due May 20</li>
          <li>Midterm Exam June 1</li>
        </ul>
      </section>
    </aside>
  );
}