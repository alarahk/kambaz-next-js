import { ReactNode } from "react";
import CourseNavigation from "./navigation";

type LayoutProps = {
  children: ReactNode;
  params: { cid: string }; 
};

export default function CoursesLayout({
  children,
  params,
}: LayoutProps) {
  const { cid } = params;

  return (
    <div id="wd-course-shell" style={{ display: "grid", gridTemplateColumns: "220px 1fr 260px", gap: 24 }}>
      <aside id="wd-course-nav" aria-label={`Course ${cid} navigation`}>
        <CourseNavigation />
      </aside>

      <main id="wd-course-main" aria-labelledby="wd-course-title">
        <h2 id="wd-course-title">Courses {cid}</h2>
        <hr />
        {children}
      </main>

      <aside id="wd-course-cta" aria-label="Course actions">
        <h3 style={{ margin: 0 }}>Course Status</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center" }}>
            Merge
          </a>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center" }}>
            Merge
          </a>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center" }}>
            Merge
          </a>
          <a href="#" className="wd-btn" style={{ padding: 6, fontSize: 14, lineHeight: 1.2, border: "1px solid #888", borderRadius: 4, textAlign: "center" }}>
            Merge
          </a>
        </div>
      </aside>
    </div>
  );
}