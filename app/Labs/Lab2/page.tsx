'use client';
import "./index.css";
import { Container } from "react-bootstrap";

import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Padding from "./Padding";
import Margins from "./Margins";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import Float from "./Float";
import Positions from "./Positions";
import ReactIcons from "./ReactIcons";
import Zindex from "./Zindex";
import BootstrapForms from "./BootstrapForms";
import BootstrapLists from "./BootstrapLists";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <Container id="wd-lab2">
      <h1>CS5610 2025 Labs</h1>
      <h2>Lab 2 — HTML/CSS Basics</h2>
      <nav style={{ marginBottom: 16 }}>
        <a href="#wd-css-id-selectors">ID selectors</a>
        <span> · </span>
        <a href="#wd-css-class-selectors">Class selectors</a>
        <span> · </span>
        <a href="#wd-css-document-structure">Document structure</a>
        <span> · </span>
        <a href="#wd-css-colors">Colors</a>
        <span> · </span>
        <a href="#wd-css-background-colors">Backgrounds</a>
        <span> · </span>
        <a href="#wd-css-paddings">Padding</a>
        <span> · </span>
        <a href="#wd-css-margins">Margins</a>
        <span> · </span>
        <a href="#wd-css-borders">Borders</a>
        <span> · </span>
        <a href="#wd-css-borders">Corners</a>
        <span> · </span>
        <a href="#wd-css-dimensions">Dimensions</a>
        <span> · </span>
        <a href="#wd-css-grid-layout">Grid</a>
        <span> · </span>
        <a href="#wd-css-flex">Flex</a>
        <span> · </span>
        <a href="#wd-float-divs">Float</a>
        <span> · </span>
        <a href="#wd-css-position-relative">Positions</a>
        <span> · </span>
        <a href="#wd-react-icons-sampler">Icons</a>
        <span> · </span>
        <a href="#wd-z-index">Z-index</a>
        <span> · </span>
        <a href="#wd-bs-grid-system">Bootstrap grid</a>
        <span> · </span>
        <a href="#wd-bs-responsive-grids">Responsive grid</a>
        <span> · </span>
        <a href="#wd-bs-responsive-dramatic">Dramatic grids</a>
        <span> · </span>
        <a href="#wd-css-styling-tables">Tables</a>
        <span> · </span>
        <a href="#wd-css-responsive-tables">Responsive tables</a>
        <span> · </span>
        <a href="#wd-css-styling-forms">Forms</a>
        <span> · </span>
        <a href="#wd-css-styling-lists">Lists</a>
        <span> · </span>
        <a href="#wd-css-navigating-with-tabs">Navigation</a>
      </nav>
      <h2 style={{ fontWeight: "bold" }}>Lab 2 - Cascading Style Sheets</h2>
      <h3 style={{ fontWeight: "bold" }}>Styling with the STYLE attribute</h3>
      <div id="wd-css-id-selectors">
        <h3 style={{ fontWeight: "bold" }}>ID selectors</h3>
        <p id="wd-id-selector-1">
Instead of changing the look and feel of all the 
elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
Here&apos;s another paragraph using a different ID and a different look and
          feel
        </p>
      </div>

      <div id="wd-css-class-selectors">
  <h3 style={{ fontWeight: "bold" }}>Class selectors</h3>

  <p className="wd-class-selector">
Instead of using IDs to refer to elements, you can use an elements CLASS attribute
  </p>

  <h4 className="wd-class-selector">
This heading has same style as paragraph above
  </h4>

  <div id="wd-css-document-structure">
    <div className="wd-selector-1">
      <h3 style={{ fontWeight: "bold" }}>Document structure selectors</h3>
      <div className="wd-selector-2">
        Selectors can be combined to refer elements in particular
        places in the document
        <p className="wd-selector-3">
          This paragraphs red background is referenced as
          <br />
          .selector-2 .selector3<br />
          meaning the descendant of some ancestor.<br />
          <span className="wd-selector-4">
            Whereas this span is a direct child of its parent
          </span><br />
            You can combine these relationships to create specific 
            styles depending on the document structure
        </p>
      </div>
    </div>
  </div>
  </div>
      <ForegroundColors />
      <BackgroundColors />
      <Padding />
      <Margins />
      <Borders />
      <Corners />
      <Dimensions />
      <GridLayout />
      <Flex />
      <Float />
      <Positions />
      <ReactIcons />
      <Zindex />
      <BootstrapForms />
      <BootstrapLists />
      <BootstrapNavigation />
    </Container>
  );
}