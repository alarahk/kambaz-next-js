/****
 * kambaz global navigation sidebar
 * refined design
 * serif uni name
 * white nav icons + red accent for active
 */

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineDashboard } from 'react-icons/ai'
import { IoCalendarOutline } from 'react-icons/io5'
import { FaInbox, FaRegCircleUser } from 'react-icons/fa6'

export default function Navigation() {
  const pathname = usePathname()

  // simple, balanced nav items
  const navItems = [
    { href: '/Account/Profile', label: 'Account', icon: <FaRegCircleUser size={22} /> },
    { href: '/Dashboard', label: 'Dashboard', icon: <AiOutlineDashboard size={22} /> },
    { href: '/Calendar', label: 'Calendar', icon: <IoCalendarOutline size={22} /> },
    { href: 'https://mail.google.com', label: 'Inbox', icon: <FaInbox size={22} />, external: true },
  ]

  return (
    <aside
      id="wd-kambaz-navigation"
      className="d-flex flex-column align-items-center bg-black text-white position-fixed top-0 bottom-0"
      style={{ width: 140, paddingTop: 12, paddingBottom: 12, justifyContent: 'space-between', rowGap: 8, boxShadow: 'inset -1px 0 0 #171717' }}
    >
      <div className="d-flex flex-column align-items-center w-100">
        {/* logo text instead of broken image */}
        <Link
          href="https://www.northeastern.edu/"
          target="_blank"
          id="wd-neu-link"
          className="mb-2 text-decoration-none d-flex flex-column align-items-center w-100"
          style={{
            fontFamily: 'Georgia, Times New Roman, serif',
            color: '#e11d2f',
            fontSize: 11,
            lineHeight: 1.15,
            letterSpacing: 0.4,
            fontWeight: 500,
            textTransform: 'none',
            textAlign: 'center'
          }}
        >
          <span>Northeastern</span>
          <span>University</span>
        </Link>
        <div aria-hidden className="w-100" style={{height:1, background:'#1f1f1f'}} />

        {/* main nav links */}
        <nav className="d-flex flex-column align-items-center w-100 mt-2">
          {navItems.map((item) => {
            const isActive = !item.external && (pathname?.toLowerCase().startsWith(item.href.toLowerCase().startsWith('/account') ? '/account' : item.href.toLowerCase()))
            const commonClasses = 'text-decoration-none d-flex flex-column align-items-center py-2 w-100'
            const activeStyle = isActive
              ? { color: '#e11d2f', borderLeft: '4px solid #e11d2f', backgroundColor: '#101010' }
              : { color: '#ffffff' }
            return (
              <div key={item.href} className="text-center w-100 mb-3 d-flex justify-content-center">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonClasses}`}
                    style={activeStyle}
                  >
                    <div className="d-flex flex-column align-items-center w-100" style={{rowGap:4}}>
                      {item.icon}
                      <span className="small mt-1">{item.label}</span>
                    </div>
                  </a>
                ) : (
                  <Link href={item.href} className={`${commonClasses}`} style={activeStyle}>
                    <div className="d-flex flex-column align-items-center w-100" style={{rowGap:4}}>
                      {item.icon}
                      <span className="small mt-1">{item.label}</span>
                    </div>
                  </Link>
                )}
              </div>
            )
          })}
        </nav>
      </div>

      <div className="w-100 mt-auto px-2">
        <div aria-hidden className="w-100 mb-2" style={{height:1, background:'#1f1f1f'}} />
        <Link
          href="/Account/Signin"
          className="text-decoration-none d-flex justify-content-center align-items-center w-100"
          style={{
            color: '#ffffff',
            background: '#111',
            border: '1px solid #2a2a2a',
            borderRadius: 8,
            padding: '8px 10px'
          }}
        >
          Sign out
        </Link>
      </div>

      {/* subtle hover + type rules */}
      <style jsx global>{`
        #wd-kambaz-navigation a:hover {
          color: #e11d2f;
          background-color: #101010;
        }
        #wd-kambaz-navigation span { font-size: 0.75rem; letter-spacing: .3px; }
        #wd-kambaz-navigation nav a,
        #wd-kambaz-navigation nav .active { transition: background-color .15s ease, color .15s ease; }
      `}</style>
    </aside>
  )
}