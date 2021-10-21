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
import icon from "..//assets/images/down-arrow.png";
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
          <Container fluid className="setNavWidth">
            <Navbar.Brand href="#">
              <Image src={logo} className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="border-0 small"
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

        <div className="wrapper">
          <div className="left-text-section">
            <div className="border-top-text">WEB & MOBILE DEVELOPMENT</div>
            <div className="left-heading">
              <h1>WE</h1>
            </div>
            <div className="border-bottom-text">MARKETING & UX/UI DESIGN</div>
          </div>
          <div className="right-text-section">
            <div className="right-heading">
              <h1>
                LAUNCH <br /> BRANDS
              </h1>
            </div>
          </div>
        </div>

        {/* Banner-Text-ENDS */}
        {/* Banner-Text-ENDS */}
        {/* Banner-ICON-STARTS*/}
        {/* Banner-ICON-STARTS */}
        <div className="down-arrow-icon text-center">
          <img src={icon} alt="" height="62" width="62" />
        </div>

        {/* Banner-ICON-ENDS*/}
        {/* Banner-ICON-ENDS */}
      </div>
      {/* Banner-Image-Ends */}
      {/* Banner-Image-Ends */}
    </div>
  );
};

export default Header;
