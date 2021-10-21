import React from "react";
import "../assets/scss/services.scss";
import { Row, Col, Container } from "react-bootstrap";
import webImg from "../assets/images/about/1.jpg";
const Services = () => {
  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <Container fluid>
          <Row>
            <Col lg={4} md={4} sm={6} xs={12} className="service-section">
              <div className="service-heading">
                <h1>WEBSITE DEVELOPMENT</h1>
              </div>
              <div className="service-details">
                <div className="service-image">
                  <img src={webImg} alt="Box-1 Image" className="img-fluid" />
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
            <Col lg={4} md={4} sm={6} xs={12}></Col>
            <Col lg={4} md={4} sm={6} xs={12}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
