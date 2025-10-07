
"use client";

/* 
   Kambaz - Course Grades Page
*/

export default function GradesPage({
  params,
}: {
  params: { cid: string };
}) {
  const { cid } = params;

  const wrapper: React.CSSProperties = { padding: 16 };
  const tableWrap: React.CSSProperties = { overflowX: "auto" };
  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 14,
  };
  const thtd: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    padding: 8,
    textAlign: "left",
    whiteSpace: "nowrap",
  };

  // Placeholder list of courses to show a card/table per course
  const courses = [
    { id: "1", title: "Course 1" },
    { id: "2", title: "Course 2" },
    { id: "3", title: "Course 3" },
  ];

  const students = [
    { id: "s01", name: "Student 01" },
    { id: "s02", name: "Student 02" },
    { id: "s03", name: "Student 03" },
    { id: "s04", name: "Student 04" },
    { id: "s05", name: "Student 05" },
    { id: "s06", name: "Student 06" },
    { id: "s07", name: "Student 07" },
    { id: "s08", name: "Student 08" },
  ];

  const columns = ["A1", "Quiz 1", "A2", "Midterm", "Final", "Total"];

  return (
    <main id="wd-course-grades" style={wrapper}>
     
      <nav aria-label="breadcrumb" className="breadcrumbs" style={{ marginBottom: 8 }}>
        <a href="/Dashboard">Dashboard</a>
        <span aria-hidden="true">›</span>
        <span aria-hidden="true">›</span>
        <a href={`/Courses/${cid}/Home`}>Course Homepage</a>
        <span aria-hidden="true">›</span>
        <span>Grades</span>
      </nav>

      <h1 style={{ marginTop: 0 }}>Grades</h1>

      {/* A card per course */}
      <div style={{ display: "grid", gap: 16 }}>
        {courses.map((course) => (
          <section key={course.id} className="card" style={{ padding: 16 }}>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <h2 style={{ margin: 0 }}>{course.title}</h2>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn">Export CSV</button>
                <button className="btn">Import CSV</button>
                <input
                  type="search"
                  placeholder="Search students"
                  aria-label="Search students"
                  style={{ padding: "8px 10px", border: "1px solid #e5e7eb", borderRadius: 6, minWidth: 220 }}
                />
                <button className="btn">Add Grade Column</button>
              </div>
            </header>

            <div style={tableWrap}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thtd}>Student</th>
                    {columns.map((c) => (
                      <th key={c} style={thtd}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.id}>
                      <td style={thtd}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <strong>{s.name}</strong>
                          <span style={{ opacity: 0.6, fontSize: 12 }}>{s.id}</span>
                        </div>
                      </td>
                      {columns.map((c) => (
                        <td key={c} style={thtd}>—</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <footer style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button className="btn">Save</button>
              <button className="btn">Recalculate</button>
            </footer>
          </section>
        ))}
      </div>
    </main>
  );
}
