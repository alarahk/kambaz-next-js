import Link from "next/link";

export default function ProfilePage() {
  return (
    <main id="wd-profile" style={{ padding: "1rem", maxWidth: 720 }}>
      <h1 style={{ marginTop: 0 }}>Profile</h1>

      <form style={{ display: "grid", gap: 12 }}>
        <label htmlFor="wd-prof-username"><strong>Username</strong></label>
        <input id="wd-prof-username" type="text" defaultValue="jdoe" />

        <label htmlFor="wd-prof-first"><strong>First name</strong></label>
        <input id="wd-prof-first" type="text" defaultValue="Jane" />

        <label htmlFor="wd-prof-last"><strong>Last name</strong></label>
        <input id="wd-prof-last" type="text" defaultValue="Doe" />

        <label htmlFor="wd-prof-password"><strong>Password</strong></label>
        <input id="wd-prof-password" type="password" defaultValue="••••••••" />

        <label htmlFor="wd-prof-dob"><strong>Date of birth</strong></label>
        <input id="wd-prof-dob" type="date" defaultValue="2000-01-01" />

        <label htmlFor="wd-prof-email"><strong>Email</strong></label>
        <input id="wd-prof-email" type="email" defaultValue="jdoe@example.com" />

        <label htmlFor="wd-prof-role"><strong>Role</strong></label>
        <select id="wd-prof-role" defaultValue="Student">
          <option>Student</option>
          <option>Faculty</option>
          <option>TA</option>
          <option>Admin</option>
        </select>

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <Link href="/Account/Signin"><button type="button">Sign out</button></Link>
          <button type="submit">Save</button>
        </div>
      </form>
    </main>
  );
}