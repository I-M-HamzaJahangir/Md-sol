import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import icon from "..//assets/images/down-arrow.png";
import { useState, useEffect } from "react";
// import Typewriter from "typewriter-effect";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [menuColor, setMenuColor] = useState(false);
  const mobileMenu = () => {
    if (menuColor) {
      setMenuColor(false);
    } else {
      setMenuColor(true);
    }
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <div className="main-header">
      {/* Banner-Image-Start */}
      {/* Banner-Image-Start */}
      <div className="banner-img" id="home">
        {/* Navigation-Bar-Start */}
        {/* Navigation-Bar-Start */}
        <Navbar
          collapseOnSelect
          className={
            colorChange ? "colorChange" : menuColor ? "background" : "navbar"
          }
          expand="false"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand className="navbar-brand" href="#home">
              <img src={logo} className="logo-img" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={mobileMenu}
              className="border-0 navbar-toggle-button"
              aria-controls="responsive-navb
              ar-nav"
            >
              <i className="fas fa-bars icon"></i>
            </Navbar.Toggle>
          </Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="nav-links-background"
                onClick={mobileMenu}
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-links-background"
                onClick={mobileMenu}
                href="#aboutUs"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className="nav-links-background"
                onClick={mobileMenu}
                href="#services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="nav-links-background"
                onClick={mobileMenu}
                href="#work"
              >
                Work
              </Nav.Link>
              <Nav.Link
                className="nav-links-background"
                onClick={mobileMenu}
                href="#clients"
              >
                Clients
              </Nav.Link>
              <Nav.Link
                className="nav-links-background"
                onClick={mobileMenu}
                href="#teem"
              >
                Our Teem
              </Nav.Link>
              <Nav.Link
                className="nav-links-background mb-3"
                onClick={mobileMenu}
                href="#contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* Nav-Bar-Ends */}
        {/* Nav-Bar-Ends */}
        {/* Banner-Text-Start */}
        {/* Banner-Text-Start */}

        <div className="wrapper">
          {/* left-section start */}
          {/* left-section start */}
          <Zoom duration={1400}>
            <div className="left-text-section">
              <div className="border-top-text">
                {/* <Typewriter
                  onInit={(typewiter) => {
                    typewiter
                      .pauseFor(1500)
                      .typeString("WEB & MOBILE DEVELOPMENT")
                      .start();
                  }}
                /> */}
                <Fade left delay={2000}>
                  WEB & MOBILE DEVELOPMENT
                </Fade>
              </div>
              <div className="left-heading">
                <h1>WE</h1>
              </div>
              <div className="border-bottom-text">
                {/* <Typewriter
                  onInit={(typewiter) => {
                    typewiter
                      .pauseFor(1500)
                      .typeString("MARKETING & UX/UI DESIGN")
                      .start();
                  }}
                /> */}
                <Fade right delay={2000}>
                  MARKETING & UX/UI DESIGN
                </Fade>
              </div>
            </div>
          </Zoom>
          {/* left-section ends */}
          {/* left-section ends */}
          {/* right-section start */}
          {/* right-section start */}
          <Zoom duration={1400}>
            <div className="right-text-section">
              <div className="right-heading">
                <h1>
                  LAUNCH <br /> BRANDS
                </h1>
              </div>
            </div>
          </Zoom>
          {/* right-section ends */}
          {/* right-section ends */}
        </div>

        {/* Banner-Text-ENDS */}
        {/* Banner-Text-ENDS */}
        {/* Banner-ICON-STARTS*/}
        {/* Banner-ICON-STARTS */}
        <div className="down-arrow-icon text-center">
          <a href="#aboutUs">
            <img src={icon} alt="" height="62" width="62" />
          </a>
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
