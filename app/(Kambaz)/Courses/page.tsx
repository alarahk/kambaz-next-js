/****
 - Kambaz Courses Index Page
 - Renders a list of all available courses
 - Uses shared card styling for consistency
 - Links each course to its Home page
****/

import Link from "next/link";

const COURSES = [
  { id: "1", code: "CS5001", title: "Foundations of CS", term: "Fall 2025" },
  { id: "2", code: "CS5002", title: "Discrete Structures", term: "Fall 2025" },
  { id: "3", code: "CS5004", title: "OOP", term: "Fall 2025" },
  { id: "4", code: "CS5008", title: "Data Structures", term: "Fall 2025" },
  { id: "5", code: "CS5006", title: "Algorithms", term: "Fall 2025" },
  { id: "6", code: "CS5007", title: "Systems", term: "Fall 2025" },
];

export default function CoursesIndex() {
  return (
    <main id="wd-courses-index" style={{ padding: 16 }}>
      <h1 style={{ marginTop: 0 }}>Courses</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {COURSES.map((c) => (
          <div
            key={c.id}
            className="card"
            style={{
              padding: 16,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              marginBottom: 8,
            }}
          >
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>
              {c.term}
            </div>
            <h3 style={{ margin: 0 }}>
              {c.code} • {c.title}
            </h3>
            <Link
              href={`/Courses/${c.id}/Home`}
              style={{
                marginTop: 12,
                display: "inline-block",
                padding: "6px 12px",
                backgroundColor: "#0070f3",
                color: "white",
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Open course →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}