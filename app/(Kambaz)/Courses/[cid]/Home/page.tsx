/**
 * course home
 * structure for course overview
 * shows title + crumbs + lecture dropdowns
 * minimal accordion layout for reading flow
 */
'use client'

// base imports
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Row, Col, Accordion, ListGroup, Button } from 'react-bootstrap'

// course id map
const COURSE_TITLES: Record<string, string> = {
  '1234': 'CS1234 React JS',
  '225988': 'CS5610.18616.202610',
  'CS9101': 'CS9101 Node',
}

export default function CourseHome() {
  // get current course id
  const params = useParams()
  const courseId = String((params as Record<string, string | string[]>).cid)
  const courseTitle = COURSE_TITLES[courseId] || courseId

  // collapse all sections
  const collapseAll = () => {
    const container = document.getElementById('wd-home-modules-preview')
    if (!container) return
    container
      .querySelectorAll('.accordion-item .accordion-button:not(.collapsed)')
      .forEach(btn => (btn as HTMLButtonElement).click())
  }

  // expand all sections
  const expandAll = () => {
    const container = document.getElementById('wd-home-modules-preview')
    if (!container) return
    container
      .querySelectorAll('.accordion-item .accordion-button.collapsed')
      .forEach(btn => (btn as HTMLButtonElement).click())
  }

  return (
    <div id="wd-course-home" className="container-fluid px-3 pt-3">
      {/* course title */}
      <h4 className="fw-semibold mb-2">{courseTitle}</h4>

      {/* crumbs for quick nav */}
      <Row className="mb-3">
        <Col>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small mb-0">
              <li className="breadcrumb-item">
                <Link href="/Dashboard" className="text-muted">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/Courses" className="text-muted">Courses</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href={`/Courses/${courseId}`} className="text-muted">Course Homepage</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>
        </Col>
      </Row>

      {/* expand/collapse controls */}
      <Row className="align-items-center mb-3">
        <Col className="d-flex justify-content-end gap-2">
          <Button size="sm" variant="outline-secondary" onClick={expandAll}>
            Expand All
          </Button>
          <Button size="sm" variant="outline-secondary" onClick={collapseAll}>
            Collapse All
          </Button>
        </Col>
      </Row>

      {/* lectures */}
      <Row className="g-3 mx-0">
        <Col lg={12}>
          <Accordion alwaysOpen id="wd-home-modules-preview">
            {/* lecture 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Lecture 1 - building interfaces + assignment 1
              </Accordion.Header>
              <Accordion.Body className="p-3 bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>
                <ListGroup variant="flush" className="border rounded bg-white">
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>overview</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>setting up html + react</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>environment setup</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>creating first react app</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>assignment 1 intro</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>

            {/* lecture 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Lecture 2 - prototyping ui + layout logic
              </Accordion.Header>
              <Accordion.Body className="p-3 bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>
                <ListGroup variant="flush" className="border rounded bg-white">
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>wireframes</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>low fidelity concepts</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>html structure</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>creating a prototype</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>assignment 2 notes</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>

            {/* lecture 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Lecture 3 - visual design + css + bootstrap
              </Accordion.Header>
              <Accordion.Body className="p-3 bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>
                <ListGroup variant="flush" className="border rounded bg-white">
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>css basics</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>bootstrap grid</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>responsive layout</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>assignment 3 prep</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>

            {/* lecture 4 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Lecture 4 - components + reusable design
              </Accordion.Header>
              <Accordion.Body className="p-3 bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>
                <ListGroup variant="flush" className="border rounded bg-white">
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>modular components</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>state + props basics</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>component patterns</ListGroup.Item>
                  <ListGroup.Item className="bg-white text-dark" style={{ color: '#000', backgroundColor: '#fff' }}>assignment 4 walkthrough</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  )
}