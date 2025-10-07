'use client'

// modules page
// same rhythm as home: title, crumbs, controls, accordion modules

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumb, Badge, Button, Accordion, ListGroup, Dropdown, Card, ProgressBar } from 'react-bootstrap'
import { BsGripVertical } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'

// local controls
import ModulesControls from './ModulesControls'
import ModuleControlButtons from './ModuleControlButtons'
import LessonControlButtons from './LessonControlButtons'

const COURSE_TITLES: Record<string, string> = {
  '1234': 'CS1234 React JS',
  '5161': 'CS5161 TS',
  '9101': 'CS9101 Node',
}

// shape
type Lesson = { id: string; title: string }
type Module = { id: string; title: string; lessons: Lesson[] }

// placeholders for modules + lessons
const MODULES: Module[] = [
  { id: 'm1', title: 'week 1 • topic 1', lessons: [
    { id: 'l1', title: 'lesson 1 • subtopic a' },
    { id: 'l2', title: 'lesson 2 • subtopic b' },
    { id: 'l3', title: 'lesson 3 • subtopic c' },
  ]},
  { id: 'm2', title: 'week 2 • topic 2', lessons: [
    { id: 'l1', title: 'lesson 1 • subtopic a' },
    { id: 'l2', title: 'lesson 2 • subtopic b' },
    { id: 'l3', title: 'lesson 3 • subtopic c' },
  ]},
  { id: 'm3', title: 'week 3 • topic 3', lessons: [
    { id: 'l1', title: 'lesson 1 • subtopic a' },
    { id: 'l2', title: 'lesson 2 • subtopic b' },
    { id: 'l3', title: 'lesson 3 • subtopic c' },
  ]},
  { id: 'm4', title: 'week 4 • topic 4', lessons: [
    { id: 'l1', title: 'lesson 1 • subtopic a' },
    { id: 'l2', title: 'lesson 2 • subtopic b' },
    { id: 'l3', title: 'lesson 3 • subtopic c' },
  ]},
]

// total  progress (placeholder)
const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessons.length, 0)
const COMPLETED_LESSONS = 0 
const COURSE_PERCENT = TOTAL_LESSONS ? Math.round((COMPLETED_LESSONS / TOTAL_LESSONS) * 100) : 0

export default function ModulesPage() {
  // route param
  const { cid } = useParams<{ cid: string }>()
  const courseTitle = COURSE_TITLES[String(cid)] || `Course ${cid}`

  // expand / collapse all — clicks the accordion toggles
  const expandAll = () => {
    document
      .querySelectorAll<HTMLButtonElement>('#wd-modules-accordion .accordion-button.collapsed')
      .forEach(btn => btn.click())
  }
  const collapseAll = () => {
    document
      .querySelectorAll<HTMLButtonElement>('#wd-modules-accordion .accordion-button:not(.collapsed)')
      .forEach(btn => btn.click())
  }

  return (
    <div id="wd-modules" className="p-3 container-xxl" style={{maxWidth:'1100px'}}>
      {/* title and crumbs — same pattern as home */}
      <h4 className="fw-semibold mb-1" style={{letterSpacing:'0.2px'}}>{courseTitle}</h4>
      <Breadcrumb className="mb-3 small text-muted">
        <Breadcrumb.Item linkAs={Link} href="/Dashboard">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href="/Courses">Courses</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href={`/Courses/${cid}/Home`}>Course Homepage</Breadcrumb.Item>
        <Breadcrumb.Item active>Modules</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="mb-3 shadow-sm border-0 wd-progress-card" style={{background:'#fff'}}>
        <Card.Body className="py-3 px-3 d-flex flex-column gap-2">
          <div className="d-flex align-items-baseline justify-content-between">
            <div className="fw-semibold" style={{letterSpacing:'.2px'}}>Course Progress</div>
            <span className="badge text-bg-light border">{COURSE_PERCENT}%</span>
          </div>
          <ProgressBar now={COURSE_PERCENT} variant="success" aria-label="overall course progress" />
          <div className="small text-muted">{COMPLETED_LESSONS} of {TOTAL_LESSONS} lessons completed</div>
        </Card.Body>
      </Card>

      <div className="wd-sticky-bar">
        <div className="wd-controls d-flex gap-2 order-2 order-sm-1 align-items-center flex-wrap" role="toolbar" aria-label="Modules actions">
          <Button className="wd-btn" onClick={collapseAll}>Collapse All</Button>
          <Button className="wd-btn" onClick={expandAll}>Expand All</Button>
          <Button className="wd-btn">View Progress</Button>
          <Dropdown>
            <Dropdown.Toggle className="wd-btn" id="dropdown-publish-all" variant="secondary" >
              Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Publish Selected</Dropdown.Item>
              <Dropdown.Item>Publish All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className="wd-btn btn-danger" aria-label="Add module">+ Module</Button>
        </div>
      </div>

      {/* modules — accordion like home lectures */}
      <Accordion flush alwaysOpen id="wd-modules-accordion" className="d-flex flex-column gap-3">
        {MODULES.map((m, idx) => (
          <Accordion.Item eventKey={String(idx)} key={m.id} className="border rounded-3 overflow-hidden">
            <Accordion.Header>
              <div className="w-100 d-flex align-items-center justify-content-between py-1">
                <div className="d-flex align-items-center gap-2">
                  <BsGripVertical className="text-secondary" aria-hidden />
                  <span className="fw-semibold text-capitalize" style={{fontSize:'0.95rem'}}>{m.title}</span>
                  <span className="text-muted small ms-1">• {m.lessons.length} lessons</span>
                  <Badge bg="light" text="secondary" className="border ms-2">module</Badge>
                  <FaCheckCircle className="text-success ms-2 wd-single-check" aria-hidden />
                </div>
                <div
                  className="ms-1 module-controls"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <ModuleControlButtons />
                </div>
              </div>
            </Accordion.Header>

            <Accordion.Body className="p-0 bg-white text-dark border-top">
              <ListGroup variant="flush" className="rounded-0">
                {m.lessons.map((lesson) => (
                  <ListGroup.Item
                    className="d-flex align-items-center justify-content-between py-3 bg-white text-dark"
                    style={{ borderLeft:'4px solid var(--bs-success)', borderBottom:'1px solid var(--bs-border-color)'}}
                    key={lesson.id}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsGripVertical className="text-secondary" aria-hidden />
                      <span className="fw-normal text-capitalize" style={{fontSize:'0.95rem'}}>{lesson.title}</span>
                    </div>
                    <div
                      className="lesson-controls"
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                    >
                      <LessonControlButtons />
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <style jsx global>{`
        /* --- Modules page rhythm & polish (matches Home) --- */
        #wd-modules-accordion .accordion-item { border-color: var(--bs-border-color); }
        #wd-modules-accordion .accordion-header { background: #f8f9fa; }
        #wd-modules-accordion .accordion-button { background: #f8f9fa; }
        #wd-modules-accordion .accordion-button:not(.collapsed) { box-shadow: inset 0 -1px 0 var(--bs-border-color); }
        #wd-modules-accordion .list-group-item { background: #fff; }

        /* lessons: subtle green bar on left, consistent with rubric */
        #wd-modules-accordion .list-group-item { border-left: 4px solid var(--bs-success) !important; }

        /* hide any extra publish checkmarks that child controls might inject */
        #wd-modules-accordion .accordion-header .module-controls .bi-check,
        #wd-modules-accordion .accordion-header .module-controls .bi-check-circle,
        #wd-modules-accordion .accordion-header .module-controls .fa-check,
        #wd-modules-accordion .accordion-header .module-controls .fa-check-circle {
          display: none !important;
        }
        /* keep exactly one visible check we render */
        #wd-modules-accordion .accordion-header .wd-single-check { display: inline-block !important; }

        /* action icon affordances */
        #wd-modules-accordion .accordion-header .module-controls [role="button"],
        #wd-modules-accordion .accordion-header .module-controls button,
        #wd-modules-accordion .accordion-header .module-controls .dropdown-toggle {
          color: #212529;
        }

        /* breadcrumb sizing */
        #wd-modules .breadcrumb { margin-top: 2px; }

        /* prevent accordion toggle when interacting with nested dropdowns/controls */
        #wd-modules-accordion .module-controls,
        #wd-modules-accordion .lesson-controls {
          display: inline-flex;
          align-items: center;
          gap: .25rem;
        }
        /* keep dropdowns above accordion clipping */
        #wd-modules-accordion .dropdown-menu {
          z-index: 1080;
        }

        /* sticky actions bar for better ergonomics */
        #wd-modules .wd-sticky-bar{
          position: sticky;
          top: 12px;
          z-index: 1030;
          background: #fff;
          border: 1px solid var(--bs-border-color);
          border-radius: 0.75rem;
          padding: .5rem .75rem;
          margin-bottom: 1rem;
          box-shadow: 0 1px 2px rgba(0,0,0,.04);
        }
        /* lesson row hover for clarity */
        #wd-modules-accordion .list-group-item:hover{
          background: #f9fbff !important;
        }

        /* --- Top controls: consistent look & spacing (matches Home) --- */
        #wd-modules .wd-controls {
          gap: 0.75rem;
          flex-wrap: wrap;
          align-items: center;
        }
        #wd-modules .wd-controls .btn,
        #wd-modules .wd-controls .dropdown-toggle {
          --wd-btn-bg: #e9ecef; /* neutral grey */
          --wd-btn-border: var(--bs-border-color);
          --wd-btn-color: #212529;
          padding: 0.5rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.2;
          border-radius: 0.5rem;
          background: var(--wd-btn-bg);
          border: 1px solid var(--wd-btn-border);
          color: var(--wd-btn-color);
          box-shadow: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          height: 38px;
          min-height: 38px;
        }
        #wd-modules .wd-controls .btn:hover,
        #wd-modules .wd-controls .dropdown-toggle:hover {
          background: #dee2e6;
          border-color: var(--bs-border-color);
          color: var(--wd-btn-color);
        }
        #wd-modules .wd-controls .btn:active,
        #wd-modules .wd-controls .dropdown-toggle:active {
          background: #dfe3e7;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
        }
        /* Danger action (+ Module) should stay red and readable, same size */
        #wd-modules .wd-controls .btn-danger {
          background: #c9363e;
          border-color: #c02f36;
          color: #fff;
          padding: 0.5rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.2;
          border-radius: 0.5rem;
          height: 38px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          box-shadow: none;
        }
        #wd-modules .wd-controls .btn-danger:hover {
          background: #b62b33;
          border-color: #ad2630;
          color: #fff;
        }
        /* progress card spacing harmony */
        #wd-modules .card.shadow-sm { border-radius: 0.75rem; }
        #wd-modules .card .badge { font-weight: 500; }

        @media (max-width: 576px){
          #wd-modules .wd-controls .btn,
          #wd-modules .wd-controls .dropdown-toggle{
            flex: 1 1 auto;
            width: 100%;
          }
          #wd-modules .wd-progress-card{ margin-top: .25rem; }
        }
      `}</style>
    </div>
  )
}