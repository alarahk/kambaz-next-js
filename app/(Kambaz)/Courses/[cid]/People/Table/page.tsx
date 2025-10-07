'use client'

// people page
// simple roster layout with consistent course design

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Breadcrumb, Card, Table } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'

export default function PeoplePage() {
  const { cid } = useParams<{ cid: string }>()

  return (
    <div id="wd-people" className="p-3 container-xxl" style={{ maxWidth: '1100px' }}>
      {/* title + breadcrumbs */}
      <h4 className="fw-semibold mb-1">People</h4>
      <Breadcrumb className="mb-3 small">
        <Breadcrumb.Item linkAs={Link} href="/Dashboard">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href="/Courses">Courses</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href={`/Courses/${cid}/Home`}>Course Homepage</Breadcrumb.Item>
        <Breadcrumb.Item active>People</Breadcrumb.Item>
      </Breadcrumb>

      {/* table inside soft card */}
      <Card className="shadow-sm border-0">
        <div className="table-responsive">
          <Table hover className="mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Login ID</th>
                <th>Section</th>
                <th>Role</th>
                <th>Last Activity</th>
                <th>Total Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-nowrap"><FaUserCircle className="me-2 fs-4 text-secondary" />Tony Stark</td>
                <td>001234561S</td>
                <td>S101</td>
                <td>Student</td>
                <td>2020-10-01</td>
                <td>10:21:32</td>
              </tr>
              <tr>
                <td className="text-nowrap"><FaUserCircle className="me-2 fs-4 text-secondary" />Bruce Wayne</td>
                <td>001234562B</td>
                <td>S101</td>
                <td>TA</td>
                <td>2020-10-04</td>
                <td>05:12:10</td>
              </tr>
              <tr>
                <td className="text-nowrap"><FaUserCircle className="me-2 fs-4 text-secondary" />Natasha Romanoff</td>
                <td>001234563N</td>
                <td>S102</td>
                <td>Faculty</td>
                <td>2020-10-05</td>
                <td>20:05:11</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>

      <style jsx global>{`
        #wd-people .card { border-radius: 0.75rem; }
        #wd-people th, #wd-people td { white-space: nowrap; }
        #wd-people thead th { font-weight: 600; }
        #wd-people .breadcrumb { margin-top: 2px; }
      `}</style>
    </div>
  )
}