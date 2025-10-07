/**
 * AssignmentEditorPage
 * Editor for a single assignment. Includes default values, proper input types,
 * dropdowns for group/grade/display/submission, online entry checkboxes,
 * and date fields (Due, Available from, Until) with defaults.
 */
'use client';
import Link from 'next/link';
import { Button, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { FaPlus, FaSearch, FaCheckCircle } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';

export default function AssignmentsList({ params }: { params: { cid: string } }) {
  const { cid } = params;

  const Section = ({ title, percent, items }:{ title:string; percent?:string; items:{ aid:string; name:string; sub:string }[] }) => (
    <div className="mb-4 border rounded">
      <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom bg-light">
        <h6 className="m-0 text-uppercase small fw-semibold">{title}</h6>
        {percent && <span className="badge text-bg-secondary">{percent}</span>}
      </div>
      <ListGroup variant="flush">
        {items.map(i => (
          <ListGroup.Item key={i.aid} className="py-3" style={{ borderLeft: '3px solid green' }}>
            <div className="d-flex justify-content-between align-items-start">
              <div className="pe-3">
                <Link href={`/Courses/${cid}/Assignments/${i.aid}`} className="text-decoration-none">
                  <div className="fw-semibold">{i.name}</div>
                </Link>
                <div className="text-secondary small">{i.sub}</div>
              </div>
              <div className="text-nowrap">
                <FaCheckCircle className="text-success me-3" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );

  return (
    <div id="wd-assignments" className="p-1">
      <div className="text-muted small mb-2">CS5610 SU1 24 MON/FRI › <strong>Assignments</strong></div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="flex-grow-1 me-3" style={{ maxWidth: 420 }}>
          <InputGroup>
            <InputGroup.Text><FaSearch /></InputGroup.Text>
            <Form.Control placeholder="Search..." aria-label="Search for Assignment" />
          </InputGroup>
        </div>
        <div className="text-nowrap">
          <Button variant="secondary" className="me-2"><FaPlus className="me-2" /> Group</Button>
          <Button variant="danger"><FaPlus className="me-2" /> Assignment</Button>
        </div>
      </div>
      <hr className="my-4" />
      <Section title="Assignments" percent="40% of Total" items={[
        { aid:'A1', name:'A1 — HTML',            sub:'Multiple Modules • Due May 15 • 100 pts' },
        { aid:'A2', name:'A2 — CSS + Bootstrap', sub:'Multiple Modules • Due May 22 • 100 pts' },
        { aid:'A3', name:'A3 — JavaScript + React', sub:'Multiple Modules • Due May 29 • 100 pts' },
      ]}/>
      <Section title="Quizzes" percent="20% of Total" items={[
        { aid:'Q1', name:'Q1 — HTML/CSS', sub:'Available May 16 • Due May 16 • 25 pts' },
        { aid:'Q2', name:'Q2 — JS/React', sub:'Available May 23 • Due May 23 • 25 pts' },
      ]}/>
    </div>
  );
}