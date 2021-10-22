import React from "react";
import { Grid, Row, Col, Container } from "react-bootstrap";

const ImageGallery = () => {
  return (
    <div className="image-gallery-wrapper">
      <div className="first-row-images">
        <Container fluid>
          {/* first row */}
          <Row className="first-row">
            {/* <div className=""> */}
            <Col lg={3} className="cols">
              <div className="image-one"></div>
            </Col>
            {/* <div className=""> */}
            <Col md={6} className="cols">
              <div className="image-two"></div>
            </Col>
            {/* </div> */}
            {/* <div className=""> */}
            <Col lg={3} className="cols">
              <div className="image-three"></div>
            </Col>
            {/* </div> */}
          </Row>
          {/* second row */}
          <Row>
            <Col lg={3} className="">
              {/* first nested row */}
              <Row>
                <div className="layout">
                  <Col className="image-four"></Col>
                </div>
              </Row>
              {/* first nested row */}
              {/* second nested row */}
              <Row>
                <div className="layout">
                  <Col className="image-five"></Col>
                </div>
              </Row>
              {/* second nested row */}
            </Col>

            {/* mid column */}
            <Col lg={6}>
              <Row>
                <Col className="">
                  <Row>
                    <div className="layout">
                      <Col className="image-six"></Col>
                    </div>
                  </Row>
                  <Row>
                    <div className="layout">
                      <Col className="image-seven"></Col>
                    </div>
                  </Row>
                </Col>
                <Col className="">
                  <Row>
                    <div className="layoyt">
                      <Col className="image-eight"></Col>
                    </div>
                  </Row>
                  {/* first nested row */}
                  {/* second nested row */}
                  <Row>
                    <div className="layout">
                      <Col className="image-nine"></Col>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
            {/* mid-coloumn end */}

            <Col lg={3} className="">
              <Row>
                <div className="layout">
                  <Col className="image-ten"></Col>
                </div>
              </Row>
              <Row>
                <div className="layout">
                  <Col className="image-eleven"></Col>
                </div>
              </Row>
            </Col>
          </Row>
          {/* second row end */}
        </Container>
      </div>

      <br />
      <br />
    </div>
  );
};

export default ImageGallery;
