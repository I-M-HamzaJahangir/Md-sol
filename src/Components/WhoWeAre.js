import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";
const WhoWeAre = () => {
  return (
    <div className="whoweare-wrapper" id="aboutUs">
      <Container fluid>
        <Row>
          {/* Image Column Starts */}
          <Col lg={6} md={12} sm={12} xs={12} className="image-section"></Col>
          {/* Image Column Ends */}
          {/* Text Column Starts */}

          <Col lg={6} md={12} sm={12} xs={12} className="text-section">
            <Slide right>
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
                  development services. Our turnkey web solutions and mobile
                  apps can leverage the best in class business experience with
                  utmost performance. We dedicate our efforts to quality and
                  focus on only bringing you the best. Certainly, you get the
                  most out of the online venture.
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
            </Slide>
          </Col>

          {/* Text Column Ends */}
        </Row>
      </Container>
    </div>
  );
};

export default WhoWeAre;
