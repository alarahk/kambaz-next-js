/**
 * Kambaz Dashboard screen. Uses React-Bootstrap Grid + Cards to render
 * a responsive grid of published courses.
 */
'use client';

import Link from 'next/link';
import { Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';

const COURSES = [
  { id: '1234', title: 'Course 1', desc: 'Full Stack software developer', img: '/images/reactjs.jpg' },
  { id: '5678', title: 'Course 2', desc: 'HTML CSS Bootstrap', img: '/images/react.png' },
  { id: '9101', title: 'Course 3', desc: 'APIs and Servers', img: '/images/reactjs.jpg' },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-4" style={{ maxWidth: '1000px', marginLeft: '2rem', paddingLeft: '2rem' }}>
      {/* header toolbar */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 id="wd-dashboard-title" className="m-0">Dashboard</h2>
        <InputGroup style={{ maxWidth: 360 }}>
          <Form.Control placeholder="Search courses" aria-label="Search courses" />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>
      </div>

      <h5 id="wd-dashboard-published" className="text-muted mb-3">
        Published Courses <span className="badge text-bg-secondary ms-1">{COURSES.length}</span>
      </h5>

      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} className="g-4 justify-content-start">
          {COURSES.map((c) => (
            <Col key={c.id} className="wd-dashboard-course">
              <Card className="h-100 shadow-sm border-0 text-center" style={{ minHeight: 220, maxWidth: 280, margin: '0 auto 1rem 0', backgroundColor: '#ffffff', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                <Card.Img variant="top" src={c.img} alt={c.title} style={{ height: '100px', objectFit: 'cover', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="text-truncate" title={c.title}>
                      {c.title}
                    </Card.Title>
                    <p className="text-muted small mb-2">Description and topics placeholder</p>
                  </div>
                  <Link href={`/Courses/${c.id}/Home`} className="btn btn-primary btn-sm mt-auto">
                    Go to course
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <style jsx>{`
          .wd-dashboard-course:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
}
