import CourseNavigation from "./navigation";

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cid: string };
}) {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: 16,
        padding: 16,
        alignItems: "start",
      }}
    >
      <aside>
        <CourseNavigation params={params} />
      </aside>
      <section>{children}</section>
    </main>
  );
}