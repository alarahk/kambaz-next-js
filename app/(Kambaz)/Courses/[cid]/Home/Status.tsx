/**
 * course status
 * simple block with publish state and import options
 * soft layout with consistent spacing and button hierarchy
 */
'use client'

import { MdDoNotDisturbAlt } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'
import { BiImport } from 'react-icons/bi'
import { LiaFileImportSolid } from 'react-icons/lia'
import { Button } from 'react-bootstrap'

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: 350 }} className="p-3">
      {/* section title */}
      <h5 className="fw-semibold mb-3">course status</h5>

      {/* publish buttons */}
      <div className="d-flex mb-3">
        <div className="w-50 pe-1">
          <Button variant="outline-secondary" size="sm" className="w-100">
            <MdDoNotDisturbAlt className="me-2 fs-6" /> unpublish
          </Button>
        </div>
        <div className="w-50 ps-1">
          <Button variant="success" size="sm" className="w-100">
            <FaCheckCircle className="me-2 fs-6" /> publish
          </Button>
        </div>
      </div>

      {/* import actions */}
      <Button
        variant="outline-secondary"
        size="sm"
        className="w-100 mb-2 text-start"
      >
        <BiImport className="me-2 fs-6" /> import existing content
      </Button>

      <Button
        variant="outline-secondary"
        size="sm"
        className="w-100 mb-2 text-start"
      >
        <LiaFileImportSolid className="me-2 fs-6" /> import from commons
      </Button>

      <Button
        variant="outline-secondary"
        size="sm"
        className="w-100 mb-2 text-start"
      >
        <LiaFileImportSolid className="me-2 fs-6" /> copy course material
      </Button>

      <Button
        variant="outline-secondary"
        size="sm"
        className="w-100 text-start"
      >
        <LiaFileImportSolid className="me-2 fs-6" /> view grading policy
      </Button>
    </div>
  )
}