import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div id="wd-dashboard" style={{ marginLeft: "20px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses</h2> <hr />
      <div
        id="wd-dashboard-courses"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "24px",
          marginTop: "20px"
        }}
      >
        {[1, 2, 3, 4].map((n) => (
          <div className="wd-dashboard-course" key={n} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            background: "#fafafa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
          }}>
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt={`Course ${n} cover`}
            />
            <div style={{ textAlign: "center", marginTop: "12px" }}>
              <h3>{`Course ${n}`}</h3>
              <p className="wd-dashboard-course-title">Course Description (placeholder)</p>
              <Link href={`/Courses/${n}/Home`} className="wd-dashboard-course-link">
                <button
                  style={{
                    marginTop: "10px",
                    padding: "8px 16px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    background: "#fff",
                    cursor: "pointer"
                  }}
                >
                  Open Course
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
