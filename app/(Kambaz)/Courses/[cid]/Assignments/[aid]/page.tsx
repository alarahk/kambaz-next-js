

import Link from "next/link";

export default function AssignmentEditor({ params }: { params: { cid: string; aid: string } }) {
  const { cid, aid } = params;
  const base = `/Courses/${cid}/Assignments`;

  return (
    <main id="wd-assignment-editor" style={{ padding: 16, maxWidth: 720 }}>
      {/* top nav for easy navigation to other screens */}
      <nav style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <Link href={`/Courses/${cid}/Home`}><button>Home</button></Link>
        <Link href={`/Courses/${cid}/Assignments`}><button>Assignments</button></Link>
        <Link href={`/Courses/${cid}/Quizzes`}><button>Quizzes</button></Link>
        <Link href={`/Courses/${cid}/Grades`}><button>Grades</button></Link>
      </nav>

      <h2 style={{ marginTop: 0 }}>Edit Assignment – {aid}</h2>

      <form style={{ display: "grid", gap: 12 }}>
        {/* Assignment Name with default value */}
        <label htmlFor="wd-asn-name"><strong>Assignment Name</strong></label>
        <input
          id="wd-asn-name"
          type="text"
          defaultValue={`Assignment ${aid.toUpperCase?.() ?? aid}`}
          placeholder="Enter assignment name"
          style={{ padding: 8 }}
        />

        {/* Description textarea with default value */}
        <label htmlFor="wd-asn-desc"><strong>Description</strong></label>
        <textarea
          id="wd-asn-desc"
          defaultValue={`Please complete ${aid}. Include your code and a short writeup.`}
          rows={5}
          style={{ padding: 8 }}
        />

        {/* Points: type number */}
        <label htmlFor="wd-asn-points"><strong>Points</strong></label>
        <input id="wd-asn-points" type="number" defaultValue={100} style={{ padding: 8, maxWidth: 160 }} />

        {/* Assignment Group dropdown */}
        <label htmlFor="wd-asn-group"><strong>Assignment Group</strong></label>
        <select id="wd-asn-group" defaultValue="assignments" style={{ padding: 8, maxWidth: 280 }}>
          <option value="assignments">Assignments</option>
          <option value="quizzes">Quizzes</option>
          <option value="exams">Exams</option>
          <option value="project">Project</option>
        </select>

        {/* Display Grade dropdown */}
        <label htmlFor="wd-asn-display-grade"><strong>Display Grade as</strong></label>
        <select id="wd-asn-display-grade" defaultValue="percentage" style={{ padding: 8, maxWidth: 280 }}>
          <option value="percentage">Percentage</option>
          <option value="points">Points</option>
          <option value="complete-incomplete">Complete/Incomplete</option>
          <option value="letter">Letter Grade</option>
        </select>

        {/* Submission Type dropdown */}
        <label htmlFor="wd-asn-submission-type"><strong>Submission Type</strong></label>
        <select id="wd-asn-submission-type" defaultValue="online" style={{ padding: 8, maxWidth: 280 }}>
          <option value="online">Online</option>
          <option value="on-paper">On Paper</option>
          <option value="no-submission">No Submission</option>
        </select>

        {/* Online Entry Options checkboxes */}
        <fieldset style={{ border: "1px solid #eee", padding: 12 }}>
          <legend><strong>Online Entry Options</strong></legend>
          <label style={{ display: "block" }}>
            <input type="checkbox" defaultChecked /> Text Entry
          </label>
          <label style={{ display: "block" }}>
            <input type="checkbox" /> Website URL
          </label>
          <label style={{ display: "block" }}>
            <input type="checkbox" /> Media Recordings
          </label>
          <label style={{ display: "block" }}>
            <input type="checkbox" defaultChecked /> File Uploads
          </label>
        </fieldset>

        {/* Assign To with default value */}
        <label htmlFor="wd-asn-assign-to"><strong>Assign to</strong></label>
        <input
          id="wd-asn-assign-to"
          type="text"
          defaultValue="Everyone"
          style={{ padding: 8, maxWidth: 320 }}
        />

        {/* Dates: type date with default dates */}
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <div>
            <label htmlFor="wd-asn-due"><strong>Due</strong></label>
            <input id="wd-asn-due" type="date" defaultValue="2025-05-13" style={{ padding: 8, width: "100%" }} />
          </div>
          <div>
            <label htmlFor="wd-asn-avail-from"><strong>Available from</strong></label>
            <input id="wd-asn-avail-from" type="date" defaultValue="2025-05-02" style={{ padding: 8, width: "100%" }} />
          </div>
          <div>
            <label htmlFor="wd-asn-until"><strong>Until</strong></label>
            <input id="wd-asn-until" type="date" defaultValue="2025-06-15" style={{ padding: 8, width: "100%" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <Link href={base}><button type="button">Cancel</button></Link>
          <button type="submit">Save</button>
        </div>
      </form>
    </main>
  );
}