
'use client';

import { Form, Row, Col, Button } from 'react-bootstrap';

export default function AssignmentEditor({
  params,
}: {
  params: { cid: string; aid: string };
}) {
  const { cid, aid } = params;

  return (
    <div id="wd-assignment-editor" className="p-3">
      <div className="text-muted small mb-2">CS5610 SU1 24 MON/FRI › Assignments › <strong>{aid}</strong></div>
      <div className="text-secondary small mb-3">Edit assignment details, points, and submission options below.</div>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="m-0">Assignment: {aid}</h2>
        <div>
          <Button variant="outline-secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </div>
      <hr />

      {/* Top left fields */}
      <Form>
        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Assignment Name</Form.Label>
          <Form.Control
            id="wd-assignment-name"
            className="form-control"
            defaultValue={`Assignment ${aid}`}
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            id="wd-assignment-description"
            className="form-control"
            placeholder={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        {/* Two-column grid for the rest */}
        <Row className="g-4">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Points</Form.Label>
              <Form.Control
                id="wd-points"
                type="number"
                className="form-control"
                defaultValue={100}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Assignment Group</Form.Label>
              <Form.Select id="wd-assignment-group" className="form-control">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECTS</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Display Grade as</Form.Label>
              <Form.Select id="wd-display-grade" className="form-control" defaultValue="Percentage">
                <option>Points</option>
                <option>Percentage</option>
                <option>Letter Grade</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Submission Type</Form.Label>
              <Form.Select id="wd-submission-type" className="form-control" defaultValue="Online">
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </Form.Select>
              <div className="mt-2">
                <div className="fw-semibold small mb-1">Online Entry Options</div>
                {['Text Entry','Website URL','Media Recordings','Student Annotation','File Uploads'].map(label => (
                  <Form.Check key={label} type="checkbox" label={label} />
                ))}
              </div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <div className="border rounded p-3">
              <div className="fw-semibold mb-2">Assign</div>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Due</Form.Label>
                <Form.Control id="wd-due" type="date" className="form-control" />
              </Form.Group>

              <Row className="g-3">
                <Col>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Available from</Form.Label>
                    <Form.Control
                      id="wd-available-from"
                      type="date"
                      className="form-control"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Until</Form.Label>
                    <Form.Control id="wd-until" type="date" className="form-control" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />
        <div className="d-flex justify-content-end">
          <Button variant="outline-secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}