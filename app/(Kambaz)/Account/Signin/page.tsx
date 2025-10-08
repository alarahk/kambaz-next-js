/****
 * @file Signin Page
 * Sign-in screen for Kambaz users. 
 */
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function SigninPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission and navigate to Dashboard
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/Dashboard');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <main className={`d-flex justify-content-center align-items-center ${inter.className}`} style={{ minWidth: '320px', maxWidth: '400px', width: '100%' }}>
        {/* Card container for the sign-in form */}
        <div className="card p-4 w-100">
          <h2 className="mb-4 text-center">Sign In</h2>
          {/* Sign-in form */}
          <form onSubmit={handleSignIn}>
            {/* Username input field with helper text */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="form-text">Enter your Kambaz username.</div>
            </div>
            {/* Password input field with helper text */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="form-text">Your password is kept secure.</div>
            </div>
            {/* Sign In button triggers navigation to Dashboard */}
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>
          <p className="text-center mt-3">
            Don’t have an account?{' '}
            <Link href="/Account/Signup" className="text-decoration-none text-primary fw-semibold">
              Sign up here.
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}