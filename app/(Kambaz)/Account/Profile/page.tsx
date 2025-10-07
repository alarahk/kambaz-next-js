'use client';
/**
 * Profile Page
 */

import Link from 'next/link';
import { useState } from 'react';

export default function ProfilePage() {
  const [form, setForm] = useState({
    username: 'alice',
    password: '123',
    first: 'Alice',
    last: 'Wonderland',
    dob: '',
    email: 'alice@wonderland.com',
    role: 'User',
  });

  const update = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [key]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div id="wd-account-profile" className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{background: "#fff"}}>
      {/* breadcrumb — tiny + helpful */}
      <nav className="mb-3 small text-muted" aria-label="breadcrumb">
        <Link href="/Dashboard" className="text-decoration-none text-muted">Dashboard</Link>
        <span className="px-2">/</span>
        <span>Account</span>
        <span className="px-2">/</span>
        <span className="fw-semibold text-dark">Profile</span>
      </nav>
      <div className="card shadow-sm border-0" style={{width: "100%", maxWidth: 420}}>
        <form className="card-body px-4 py-4" onSubmit={submit} autoComplete="off">
          <h2 className="fw-bold mb-4 mt-1 text-center">Profile</h2>
          {/* labels are visually hidden for a11y, placeholders carry the visual */}
          <label className="visually-hidden" htmlFor="pf-username">Username</label>
          <input id="pf-username" autoComplete="username" className="form-control mb-3 shadow-sm"
                 value={form.username} onChange={update('username')} placeholder="Username" />

          <label className="visually-hidden" htmlFor="pf-password">Password</label>
          <input id="pf-password" type="password" autoComplete="current-password" className="form-control mb-3 shadow-sm"
                 value={form.password} onChange={update('password')} placeholder="Password" />

          <label className="visually-hidden" htmlFor="pf-first">First name</label>
          <input id="pf-first" className="form-control mb-3 shadow-sm"
                 value={form.first} onChange={update('first')} placeholder="First name" />

          <label className="visually-hidden" htmlFor="pf-last">Last name</label>
          <input id="pf-last" className="form-control mb-3 shadow-sm"
                 value={form.last} onChange={update('last')} placeholder="Last name" />

          <label className="visually-hidden" htmlFor="pf-dob">Date of birth</label>
          <input id="pf-dob" type="date" className="form-control mb-3 shadow-sm"
                 value={form.dob} onChange={update('dob')} placeholder="mm/dd/yyyy" />

          <label className="visually-hidden" htmlFor="pf-email">Email</label>
          <input id="pf-email" type="email" autoComplete="email" className="form-control mb-3 shadow-sm"
                 value={form.email} onChange={update('email')} placeholder="Email" />

          <label className="visually-hidden" htmlFor="pf-role">Role</label>
          <input id="pf-role" className="form-control mb-4 shadow-sm"
                 value={form.role} onChange={update('role')} placeholder="Role" />

          <button type="submit" className="btn btn-dark w-100 mb-2">Save</button>
          <Link href="/Account/Signin" className="btn w-100" style={{background: "#c0392b", color: "#fff"}}>Sign out</Link>
        </form>
      </div>
      <style jsx>{`
        @media (min-width: 992px) {
          #wd-account-profile > .card {
            margin-top: 32px;
          }
        }
      `}</style>
      <div style={{marginBottom: 32}} />
    </div>
  );
}