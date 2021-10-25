import React from "react";
import { Grid, Row, Col, Container } from "react-bootstrap";

const ImageGallery = () => {
  return (
    <div className="image-gallery-wrapper">
      <div className="first-row-images">
        <Container fluid>
          {/* first row */}
          <Row className="first-row">
            <Col lg={3}>
              <div className="image-one"></div>
            </Col>
            <Col md={6}>
              <div className="image-two"></div>
            </Col>
            <Col lg={3}>
              <div className="image-three"></div>
            </Col>
          </Row>
          {/* second row */}
          <Row>
            <Col lg={3}>
              {/* first nested row */}
              <Row>
                <div>
                  <Col className="image-four"></Col>
                </div>
              </Row>
              {/* first nested row */}
              {/* second nested row */}
              <Row>
                <div>
                  <Col className="image-five"></Col>
                </div>
              </Row>
              {/* second nested row */}
            </Col>

            {/* mid column */}
            <Col lg={6}>
              <Row>
                <Col>
                  <Row>
                    <div>
                      <Col className="image-six"></Col>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <Col className="image-seven"></Col>
                    </div>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <div>
                      <Col className="image-eight"></Col>
                    </div>
                  </Row>
                  {/* first nested row */}
                  {/* second nested row */}
                  <Row>
                    <div>
                      <Col className="image-nine"></Col>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
            {/* mid-coloumn end */}

            <Col lg={3}>
              <Row>
                <div>
                  <Col className="image-ten"></Col>
                </div>
              </Row>
              <Row>
                <div>
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
