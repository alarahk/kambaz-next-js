"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ params }: { params: { cid: string } }) {
  const { cid } = params;
  const pathname = usePathname();

  const outerBox: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: 6,
    padding: 12,
  };

  const itemBox = (active: boolean): React.CSSProperties => ({
    border: "1px solid #e0e0e0",
    borderRadius: 6,
    padding: 10,
    marginTop: 8,
    background: active ? "rgba(0,0,0,0.05)" : "transparent",
    fontWeight: active ? 600 : 400,
  });

  const items = [
    { label: "Home",        href: `/Courses/${cid}/Home` },
    { label: "Modules",     href: `/Courses/${cid}/Modules` },
    { label: "Piazza",      href: `/Courses/${cid}/Piazza` },
    { label: "Zoom",        href: `/Courses/${cid}/Zoom` },
    { label: "Quizzes",     href: `/Courses/${cid}/Quizzes` },
    { label: "Assignments", href: `/Courses/${cid}/Assignments` },
    { label: "Grades",      href: `/Courses/${cid}/Grades` },
  ];

  return (
    <nav aria-label="Course navigation" style={{ padding: 16 }}>
      <div style={outerBox}>
        <h3 style={{ marginTop: 0, marginBottom: 4 }}>Course</h3>
        {items.map((it) => {
          const active = pathname?.startsWith(it.href) ?? false;
          return (
            <div key={it.href} style={itemBox(active)}>
              <Link href={it.href}>{it.label}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}