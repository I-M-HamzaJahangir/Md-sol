import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import webImg from "../assets/images/about/1.jpg";
import mobImg from "../assets/images/about/2.jpg";
import netImg from "../assets/images/about/3.jpg";
const Services = () => {
  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <Container fluid>
          <Row>
            <Col lg={4} md={6} sm={6} xs={12} className="service-section ">
              <div className="service-heading ">
                <h1>
                  WEBSITE
                  <br />
                  DEVELOPMENT
                </h1>
                <div className="numbers">
                  <h2>01</h2>
                </div>
              </div>
              <div className="service-details">
                <div className="service-image">
                  <img src={webImg} alt="Box-1 Image" />
                </div>
                <div className="service-text-descr">
                  <p>
                    From websites to apps, we develop everything and make it a
                    perfect fit for your business. Manage your business
                    operations, workflow, and satisfy your entire lead with
                    high-end web solutions.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={12}
              className="service-section box-color"
            >
              <div className="service-heading ">
                <h1>
                  MOBILE
                  <br />
                  DEVELOPMENT
                </h1>
                <div className="numbers">
                  <h2>02</h2>
                </div>
              </div>
              <div className="service-details">
                <div className="service-image">
                  <img src={mobImg} alt="Box-2 Image" />
                </div>
                <div className="service-text-descr">
                  <p>
                    MDSol Tech empowers every app to engage the audience with
                    your business. Boost the trust of your audience with our
                    intuitive mobile apps, and let them be in touch with you.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12} className="service-section ">
              <div className="service-heading ">
                <h1>
                  BLOCK CHAIN
                  <br />
                  SERVICES
                </h1>
                <div className="numbers numberThree ">
                  <h2>03</h2>
                </div>
              </div>
              <div className="service-details">
                <div className="service-image">
                  <img src={netImg} alt="Box-3 Image" />
                </div>
                <div className="service-text-descr">
                  <p>
                    Host your website the best way, with no downtime or any
                    other errors that may halt your business. Our managed
                    hosting service enables you to appease and deliver the
                    finest service to your clients.
                  </p>
                </div>
              </div>
            </Col>
            {/* Second Row Starts */}
            {/* Second Row Starts */}
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={12}
              className="service-section box-color"
            >
              <div className="service-heading ">
                <h1>UI/UX</h1>
                <div className="numbers numberFour">
                  <h2>04</h2>
                </div>
              </div>
              <div className="service-details">
                <div className="service-image">
                  <img src={webImg} alt="Box-1 Image" />
                </div>
                <div className="service-text-descr">
                  <p>
                    User experience or user interaction, we care about both. We
                    know how to attract the audience to your website and mobile
                    app. Our lucrative designs begin the engagement right from
                    the front
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12} className="service-section">
              <div className="service-heading ">
                <h1>
                  Digital
                  <br />
                  MARKETING
                </h1>
                <div className="numbers numberFive">
                  <h2>05</h2>
                </div>
              </div>
              <div className="service-details">
                <div className="service-image">
                  <img src={mobImg} alt="Box-2 Image" />
                </div>
                <div className="service-text-descr">
                  <p>
                    Make your brand popular and notable throughout the world
                    with our supreme digital marketing services. Attract the
                    audience across every network and from every demography.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={12}
              className="service-section box-color"
            >
              <div className="service-heading ">
                <h1>
                  SEARCH ENGINE
                  <br />
                  OPTIMIZATION
                </h1>
                <div className="numbers numberSix">
                  <h2>06</h2>
                </div>
              </div>
              <div className="service-details">
                <div className="service-image">
                  <img src={netImg} alt="Box-3 Image" />
                </div>
                <div className="service-text-descr">
                  <p>
                    Earn a natural rank for your website on the search engine in
                    a short time with our expert SEO services. Along with that,
                    retain the top rank and keep on getting the juice of our SEO
                    strategies.
                  </p>
                </div>
              </div>
            </Col>
            {/* <Col lg={4} md={4} sm={6} xs={12}></Col> */}
            {/* <Col lg={4} md={4} sm={6} xs={12}></Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
