import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import CourseNavigation from "./navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ id: string }> }>) {
  const { id } = await params;
  return (
    <div id="wd-course-shell" style={{ display: "grid", gridTemplateColumns: "220px 1fr 260px", gap: 24 }}>
      <aside id="wd-course-nav" aria-label={`Course ${id} navigation`}>
        <CourseNavigation />
      </aside>

      <main id="wd-course-main" aria-labelledby="wd-course-title">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(220px, 1fr))",
            gap: 24,
            marginBottom: 32,
          }}
        >
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: 8,
                padding: 16,
                background: "#111",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
              className="wd-dashboard-course"
            >
              <Link
                href={`/Courses/${n}/Home`}
                className="wd-dashboard-course-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Image
                  src="/images/reactjs.jpg"
                  width={200}
                  height={150}
                  alt={`React logo for Course ${n}`}
                  style={{ borderRadius: 6, display: "block", margin: "0 auto 12px" }}
                />
                <div>
                  <h5 style={{ margin: 0 }}>Course {n}</h5>
                  <p className="wd-dashboard-course-title" style={{ margin: "6px 0 10px", opacity: 0.9 }}>
                    This is a placeholder course.
                  </p>
                  <button style={{ padding: "6px 10px", fontSize: 12 }}>Go</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {children}
      </main>

      <aside id="wd-course-cta" aria-label="Course Status">
        <h3 style={{ margin: 0 }}>Course Status</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center", display: "block" }}>Unpublish</a>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center", display: "block" }}>Publish</a>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center", display: "block" }}>View Course</a>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center", display: "block" }}>Notifications</a>
        </div>
      </aside>
    </div>
  );
}