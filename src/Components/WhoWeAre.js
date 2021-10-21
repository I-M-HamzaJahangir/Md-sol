import React from "react";
import "../assets/scss/whoweare.scss";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
const WhoWeAre = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} sm={12} className="image-section"></Col>
          <Col lg={6} md={6} sm={12} className="text-section">
            <div className="heading">
              <h1>
                A Web Agency <br /> Focused On
              </h1>
            </div>
            <div className="subHeading">
              <h6>Vision, Product And People</h6>
              <hr color="#77BF43" />
            </div>
            <div className="text-description">
              <p>
                MDSol is here to deliver you the bespoke web and mobile app
                development services. Our turnkey web solutions and mobile apps
                can leverage the best in class business experience with utmost
                performance. We dedicate our efforts to quality and focus on
                only bringing you the best. Certainly, you get the most out of
                the online venture.
              </p>
              <p>
                Take this into practicality with the words of our clients whom
                we have beenserving the finest digital presence products. The
                online presence of your business can lead you to not just
                double, or triple, indeed ten times higherROI.
              </p>
              <p>
                So let us begin today, to strengthen your business right away!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhoWeAre;
