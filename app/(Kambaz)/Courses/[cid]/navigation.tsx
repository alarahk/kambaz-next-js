'use client'

// course nav sidebar
// highlights current page

import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'

export default function CourseNavigation() {
  const pathname = usePathname() || ''
  const { cid } = useParams<{ cid: string }>()
  const base = `/Courses/${cid}`

  const items = [
    { label: 'Home', href: `${base}/Home` },
    { label: 'Modules', href: `${base}/Modules` },
    { label: 'Piazza', href: `${base}/Piazza` },
    { label: 'Zoom', href: `${base}/Zoom` },
    { label: 'Assignments', href: `${base}/Assignments` },
    { label: 'Quizzes', href: `${base}/Quizzes` },
    { label: 'Grades', href: `${base}/Grades` },
    { label: 'People', href: `${base}/People/Table` }, ]

  const isActive = (href: string) =>
    pathname.toLowerCase().startsWith(href.toLowerCase())

  return (
    <nav
      aria-label="course navigation"
      id="wd-courses-nav"
      className="list-group fs-6 text-start rounded-0"
    >
      {items.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          prefetch={false}
          className={`list-group-item border-0 py-2 px-3 ${
            isActive(href)
              ? 'bg-black text-white fw-semibold'
              : 'text-muted'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}