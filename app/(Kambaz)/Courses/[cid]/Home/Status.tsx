"use client";
import Link from "next/link";

export default function GradesPage({
  params,
}: {
  params: { cid: string };
}) {
  const { cid } = params;

  const wrapper: React.CSSProperties = {
    padding: 16,
  };

  const toolbar: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    margin: "12px 0",
  };

  const tableWrap: React.CSSProperties = {
    overflowX: "auto",
  };

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

  const students = [
    { id: "s01", name: "Alex Rivera" },
    { id: "s02", name: "Bella Nguyen" },
    { id: "s03", name: "Chris Patel" },
    { id: "s04", name: "Dani Kim" },
    { id: "s05", name: "Evan Li" },
    { id: "s06", name: "Fatima Ali" },
    { id: "s07", name: "Gio Rossi" },
    { id: "s08", name: "Harper Jones" },
  ];

  const columns = ["A1", "Quiz 1", "A2", "Midterm", "Final", "Total"];

  return (
    <main id="wd-course-grades" style={wrapper}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="breadcrumbs" style={{ marginBottom: 8 }}>
        <Link href="/Courses">Courses</Link>
        <span aria-hidden>›</span>
        <span>Course {cid}</span>
        <span aria-hidden>›</span>
        <span>Grades</span>
      </nav>

      <h1 style={{ marginTop: 0 }}>Grades</h1>

      {/* Toolbar */}
      <div className="card" style={toolbar}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="btn">Export CSV</button>
          <button className="btn">Import CSV</button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="search"
            placeholder="Search students"
            aria-label="Search students"
            style={{ padding: "8px 10px", border: "1px solid #e5e7eb", borderRadius: 6, minWidth: 220 }}
          />
          <button className="btn">Add Grade Column</button>
        </div>
      </div>

      {/* Table */}
      <div className="card" style={tableWrap}>
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

      {/* Footer actions (placeholder) */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button className="btn">Save</button>
        <button className="btn">Recalculate</button>
      </div>
    </main>
  );
}