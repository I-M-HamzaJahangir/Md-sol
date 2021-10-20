import React from "react";
import "../assets/scss/header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Header = () => {
  return (
    <div>
      {/* Banner-Image-Start */}
      {/* Banner-Image-Start */}
      <div className="banner-img">
        {/* Navigation-Bar-Start */}
        {/* Navigation-Bar-Start */}
        <Navbar bg="transparent" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">
              <Image src={logo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="border-0"
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">HOME</Nav.Link>
                  <Nav.Link href="#action2">ABOUT</Nav.Link>
                  <Nav.Link href="#action2">SERVICES</Nav.Link>
                  <Nav.Link href="#action2">WORK</Nav.Link>
                  <Nav.Link href="#action2">TEAM</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {/* Nav-Bar-Ends */}
        {/* Nav-Bar-Ends */}
        {/* Banner-Text-Start */}
        {/* Banner-Text-Start */}
        <div className="text-section">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} className="left-section-text">
                <h1>WE</h1>
              </Col>

              <Col lg={6} md={6} sm={12} className="right-section-text">
                <h1>LAUNCH BRANDS</h1>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Banner-Text-ENDS */}
        {/* Banner-Text-ENDS */}
      </div>
      {/* Banner-Image-Ends */}
      {/* Banner-Image-Ends */}
    </div>
  );
};

export default Header;
