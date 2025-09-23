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
        style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginTop: "20px" }}
      >
        {[1, 2, 3, 4].map((n) => (
          <div className="wd-dashboard-course" key={n}>
            <Link href={`/Courses/${n}`} className="wd-dashboard-course-link">
              <Image
                src="/images/reactjs.jpg"
                width={200}
                height={150}
                alt={`Course ${n} cover`}
              />
              <div>
                <h5>{`Course ${n}`}</h5>
                <p className="wd-dashboard-course-title">
                  This is a placeholder course.
                </p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Close the parent div before closing the fragment */}
      </div>
    </>
  );
}
