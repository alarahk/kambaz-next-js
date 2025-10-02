/**
 * AssignmentEditorPage
 * Editor for a single assignment. Includes default values, proper input types,
 * dropdowns for group/grade/display/submission, online entry checkboxes,
 * and date fields (Due, Available from, Until) with defaults.
 */
import Link from "next/link";

export default function AssignmentEditorPage({
  params,
}: {
  params: { cid: string; aid: string };
}) {
  const { cid, aid } = params;

  const field = {
    display: "grid",
    gap: 6,
    marginBottom: 14,
  } as const;

  const input = {
    padding: "8px 10px",
    border: "1px solid #cbd5e1",
    borderRadius: 6,
  } as const;

  const card = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 16,
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
  } as const;

  return (
    <main id="wd-assignment-editor" style={{ maxWidth: 860, margin: "0 auto", padding: 20 }}>
      <p style={{ color: "#4b5563", margin: "0 0 12px" }}>
        Edit details for this assignment. Save to apply changes or Cancel to
        go back to the assignments list.
      </p>

      <div style={card}>
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>Edit Assignment</h2>

        {/* Name */}
        <div style={field}>
          <label htmlFor="wd-assignment-name"><strong>Assignment Name</strong></label>
          <input
            id="wd-assignment-name"
            type="text"
            defaultValue={`A${aid} – Example assignment`}
            style={input}
          />
        </div>

        {/* Description */}
        <div style={field}>
          <label htmlFor="wd-assignment-description"><strong>Description</strong></label>
          <textarea
            id="wd-assignment-description"
            defaultValue="Provide instructions for the assignment here."
            rows={4}
            style={{ ...input, resize: "vertical" }}
          />
        </div>

        {/* Points */}
        <div style={field}>
          <label htmlFor="wd-assignment-points"><strong>Points</strong></label>
          <input id="wd-assignment-points" type="number" defaultValue={100} style={input} />
        </div>

        {/* Group */}
        <div style={field}>
          <label htmlFor="wd-assignment-group"><strong>Assignment Group</strong></label>
          <select id="wd-assignment-group" style={input} defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        {/* Display Grade as */}
        <div style={field}>
          <label htmlFor="wd-display-grade"><strong>Display Grade as</strong></label>
          <select id="wd-display-grade" style={input} defaultValue="Points">
            <option>Points</option>
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
            <option>Letter Grade</option>
          </select>
        </div>

        {/* Submission Type */}
        <div style={field}>
          <label htmlFor="wd-submission-type"><strong>Submission Type</strong></label>
          <select id="wd-submission-type" style={input} defaultValue="Online">
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </select>
        </div>

        {/* Online Entry Options */}
        <div style={field}>
          <span><strong>Online Entry Options</strong></span>
          <label style={{ display: "flex", gap: 8 }}>
            <input id="wd-entry-text" type="checkbox" defaultChecked /> Text Entry
          </label>
          <label style={{ display: "flex", gap: 8 }}>
            <input id="wd-entry-url" type="checkbox" /> Website URL
          </label>
          <label style={{ display: "flex", gap: 8 }}>
            <input id="wd-entry-media" type="checkbox" /> Media Recordings
          </label>
          <label style={{ display: "flex", gap: 8 }}>
            <input id="wd-entry-file" type="checkbox" /> File Uploads
          </label>
        </div>

        {/* Assign to */}
        <div style={field}>
          <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
          <input id="wd-assign-to" type="text" defaultValue="Everyone" style={input} />
        </div>

        {/* Dates */}
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div style={field}>
            <label htmlFor="wd-due-date"><strong>Due</strong></label>
            <input id="wd-due-date" type="date" defaultValue="2025-05-13" style={input} />
          </div>
          <div style={field}>
            <label htmlFor="wd-available-from"><strong>Available from</strong></label>
            <input id="wd-available-from" type="date" defaultValue="2025-05-06" style={input} />
          </div>
          <div style={field}>
            <label htmlFor="wd-available-until"><strong>Until</strong></label>
            <input id="wd-available-until" type="date" defaultValue="2025-05-20" style={input} />
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <Link href={`/Courses/${cid}/Assignments`} id="wd-cancel" style={{ ...input, textDecoration: "none", padding: "8px 12px", background: "#f8fafc" }}>Cancel</Link>
          <button id="wd-save" style={{ ...input, padding: "8px 12px" }}>Save</button>
        </div>
      </div>
    </main>
  );
}