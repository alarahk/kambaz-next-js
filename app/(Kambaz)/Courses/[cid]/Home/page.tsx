"use client";
import { useState } from "react";
import Link from "next/link";

export default function CourseHome({
  params,
}: {
  params: { cid: string };
}) {
  const { cid } = params;

  const box = {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "12px",
    margin: "8px 0",
    background: "#fff",
  } as const;

  // Placeholder, collapsible module data
  const initialModules = [
    {
      mid: "1",
      title: "Module 1 • Placeholder title",
      lessons: [
        "Lesson 1.1 – Intro (placeholder)",
        "Lesson 1.2 – Content (placeholder)",
      ],
      open: true,
    },
    {
      mid: "2",
      title: "Module 2 • Placeholder title",
      lessons: [
        "Lesson 2.1 – Intro (placeholder)",
        "Lesson 2.2 – Content (placeholder)",
      ],
      open: true,
    },
    {
      mid: "3",
      title: "Module 3 • Placeholder title",
      lessons: [
        "Lesson 3.1 – Intro (placeholder)",
        "Lesson 3.2 – Content (placeholder)",
      ],
      open: false,
    },
    {
      mid: "4",
      title: "Module 4 • Placeholder title",
      lessons: [
        "Lesson 4.1 – Intro (placeholder)",
        "Lesson 4.2 – Content (placeholder)",
      ],
      open: false,
    },
    {
      mid: "5",
      title: "Module 5 • Placeholder title",
      lessons: [
        "Lesson 5.1 – Intro (placeholder)",
        "Lesson 5.2 – Content (placeholder)",
      ],
      open: false,
    },
    {
      mid: "6",
      title: "Module 6 • Placeholder title",
      lessons: [
        "Lesson 6.1 – Intro (placeholder)",
        "Lesson 6.2 – Content (placeholder)",
      ],
      open: false,
    },
    {
      mid: "7",
      title: "Module 7 • Placeholder title",
      lessons: [
        "Lesson 7.1 – Intro (placeholder)",
        "Lesson 7.2 – Content (placeholder)",
      ],
      open: false,
    },
    {
      mid: "8",
      title: "Module 8 • Placeholder title",
      lessons: [
        "Lesson 8.1 – Intro (placeholder)",
        "Lesson 8.2 – Content (placeholder)",
      ],
      open: false,
    },
    {
      mid: "9",
      title: "Module 9 • Placeholder title",
      lessons: [
        "Lesson 9.1 – Intro (placeholder)",
        "Lesson 9.2 – Content (placeholder)",
      ],
      open: false,
    },
    {
      mid: "10",
      title: "Module 10 • Placeholder title",
      lessons: [
        "Lesson 10.1 – Intro (placeholder)",
        "Lesson 10.2 – Content (placeholder)",
      ],
      open: false,
    },
  ];

  const [modules, setModules] = useState(initialModules);
  const [published, setPublished] = useState(true);
  const togglePublished = () => setPublished((p) => !p);

  const statusBadge = {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    background: published ? "#e6f4ea" : "#fde8e8",
    color: published ? "#137333" : "#b91c1c",
    border: `1px solid ${published ? "#a8dab5" : "#f5b5b5"}`,
  } as const;

  const secondaryBtn = {
    padding: "6px 10px",
    border: "1px solid #cbd5e1",
    borderRadius: 6,
    background: "#fff",
    cursor: "pointer",
  } as const;

  const toggle = (mid: string) =>
    setModules((ms) =>
      ms.map((m) => (m.mid === mid ? { ...m, open: !m.open } : m))
    );

  const collapseAll = () => setModules((ms) => ms.map((m) => ({ ...m, open: false })));
  const expandAll = () => setModules((ms) => ms.map((m) => ({ ...m, open: true })));

  const headerBtn = {
    padding: "6px 10px",
    border: "1px solid #cbd5e1",
    borderRadius: 6,
    background: "#f8fafc",
    cursor: "pointer",
  } as const;

  return (
    <main
      id="wd-course-home"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: "16px",
        padding: "16px",
      }}
    >
      <section>
        <nav aria-label="breadcrumb" className="breadcrumbs" style={{ marginBottom: 8 }}>
          <Link href="/Courses">Courses</Link> 
          <span aria-hidden>›</span> 
          <span>Course {cid}</span> 
          <span aria-hidden>›</span> 
          <span>Home</span>
        </nav>
        <h1 style={{ marginTop: 0 }}>Home</h1>

        {/* Course overview / Highlights */}
        <div style={box}>
          <h3 style={{ marginTop: 0 }}>Course Overview – {cid}</h3>
          <p>
            Information about the course, welcome message, instructor details,
          </p>

          <h4 style={{ margin: "12px 0 6px" }}>Highlights</h4>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              marginTop: "8px",
            }}
          >
            <div style={{ fontWeight: 600 }}>A2 – CSS + BOOTSTRAP</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              Assignment • Due May 20, 11:59pm
            </div>
            <div style={{ marginTop: 6 }}>
              <Link
                href={`/Courses/${cid}/Assignments/234`}
                className="btn"
                style={{ display: "inline-block", textDecoration: "none" }}
              >
                Open
              </Link>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "10px",
              marginTop: "8px",
            }}
          >
            <div style={{ fontWeight: 600 }}>Quiz 1 – HTML</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>Quiz • Due May 22, 11:59pm</div>
            <div style={{ marginTop: 6 }}>
              <Link
                href={`/Courses/${cid}/Quizzes/1`}
                className="btn"
                style={{ display: "inline-block", textDecoration: "none" }}
              >
                Open
              </Link>
            </div>
          </div>
        </div>

        {/* Modules – wireframe-like collapsible list */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
          <h2 style={{ margin: 0 }}>Modules</h2>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={collapseAll} style={headerBtn}>Collapse All</button>
            <button onClick={expandAll} style={headerBtn}>Expand All</button>
          </div>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
          {modules.map((m) => (
            <li key={m.mid} style={{ margin: 0, padding: 0 }}>
              <div style={box}>
                <button
                  onClick={() => toggle(m.mid)}
                  aria-expanded={m.open}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "transparent",
                    border: 0,
                    padding: 0,
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  <span aria-hidden>{m.open ? "▾" : "▸"}</span>
                  <strong>{m.title}</strong>
                </button>

                {m.open && (
                  <ul style={{ margin: "8px 0 0 18px" }}>
                    {m.lessons.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <aside>
        <div style={{ position: "sticky", top: 16 }}>
          <div style={box}>
            <h3 style={{ marginTop: 0 }}>Course Status</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={statusBadge}>{published ? "Published" : "Unpublished"}</span>
              <button onClick={togglePublished} className="btn">
                {published ? "Unpublish" : "Publish"}
              </button>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button style={secondaryBtn}>Student View</button>
              <button style={secondaryBtn}>Import Content</button>
            </div>
            <dl style={{ marginTop: 10, fontSize: 13 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <dt style={{ opacity: 0.6 }}>Start:</dt>
                <dd>—</dd>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <dt style={{ opacity: 0.6 }}>End:</dt>
                <dd>—</dd>
              </div>
            </dl>
          </div>
          <div style={box}>
            <h3 style={{ marginTop: 0 }}>To Do</h3>
            <ul style={{ paddingLeft: "16px", margin: "8px 0 0" }}>
              <li>Grade A1</li>
              <li>Review Quiz 1</li>
            </ul>
          </div>
          <div style={box}>
            <h3 style={{ marginTop: 0 }}>Coming Up</h3>
            <ul style={{ paddingLeft: "16px", margin: "8px 0 0" }}>
              <li>Assignment A2 – Due May 20</li>
              <li>Midterm Exam – June 1</li>
            </ul>
          </div>
        </div>
      </aside>
      <style jsx>{`
        .breadcrumbs { font-size: 14px; color: #475569; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .breadcrumbs a { color: #0b62d6; text-decoration: none; }
        .breadcrumbs a:hover { text-decoration: underline; }
      `}</style>
    </main>
  );
}