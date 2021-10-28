import React from "react";
import { Grid, Row, Col, Container } from "react-bootstrap";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import img1 from "../assets/images/Work/1.jpg";
import img2 from "../assets/images/Work/2.jpg";
import img3 from "../assets/images/Work/3.jpg";
import img4 from "../assets/images/Work/4.jpg";
import img8 from "../assets/images/Work/8.jpg";
import img5 from "../assets/images/Work/5.jpg";
import img9 from "../assets/images/Work/9.jpg";
import img6 from "../assets/images/Work/6.jpg";
import img10 from "../assets/images/Work/10.jpg";
import img7 from "../assets/images/Work/7.jpg";
import img11 from "../assets/images/Work/11.jpg";
import thumbnail1 from "../assets/images/Work/thumbnail-1.jpg";
import thumbnail2 from "../assets/images/Work/thumbnail-2.jpg";
import thumbnail3 from "../assets/images/Work/thumbnail3.jpg";
import thumbnail4 from "../assets/images/Work/thumbnail-4.jpg";
import thumbnail8 from "../assets/images/Work/thumbnail8.jpg";
import thumbnail5 from "../assets/images/Work/thumbnail-5.jpg";
import thumbnail9 from "../assets/images/Work/thumbnail-9.jpg";
import thumbnail6 from "../assets/images/Work/thumbnail-6.jpg";
import thumbnail10 from "../assets/images/Work/thumbnail-10.jpg";
import thumbnail7 from "../assets/images/Work/thumbnail-7.jpg";
import thumbnail11 from "../assets/images/Work/thumbnail-11.jpg";

const ImageGallery = () => {
  return (
    <div className="image-gallery-wrapper">
      <div className="first-row-images">
        <Container fluid>
          <Gallery>
            {/* first row start */}
            <Row className="first-row">
              <Col lg={3} md={3} sm={12} xs={12}>
                <div className="image-one">
                  <Item
                    original={img1}
                    // thumbnail={thumbnail1}
                    width="960"
                    height="540"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={thumbnail1}
                        className="img-fluid image-one"
                      />
                    )}
                  </Item>
                </div>
              </Col>

              <Col lg={6} md={6} sm={12} xs={12}>
                <div>
                  <Item original={img2} width="960" height="540">
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={thumbnail2}
                        className="img-fluid"
                      />
                    )}
                  </Item>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12}>
                <div className="image-one">
                  <Item original={img3} width="960" height="540">
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={thumbnail3}
                        className="img-fluid image-one"
                      />
                    )}
                  </Item>
                </div>
              </Col>
            </Row>
            {/* first row end */}
            {/* second row start */}
            <Row className="second-row">
              <Col lg={3} md={3} sm={12} xs={12}>
                {/* first nested row */}
                <Row>
                  <div className="mt-3">
                    <Item original={img4} width="960" height="540">
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={thumbnail4}
                          className="img-fluid"
                        />
                      )}
                    </Item>
                  </div>
                </Row>
                {/* first nested row */}
                {/* second nested row */}
                <Row>
                  <div className="mt-3">
                    <Item original={img8} width="960" height="540">
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={thumbnail8}
                          className="img-fluid"
                        />
                      )}
                    </Item>
                  </div>
                </Row>
                {/* second nested row */}
              </Col>

              {/* mid column */}
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row>
                  {/* first-column-of-images start */}
                  {/* first-column-of-images start */}
                  <Col lg={6} md={6}>
                    {/* <Row> */}
                    <div className="mt-3 ">
                      <Item original={img5} width="960" height="540">
                        {({ ref, open }) => (
                          <img
                            ref={ref}
                            onClick={open}
                            src={thumbnail5}
                            className="img-fluid"
                          />
                        )}
                      </Item>
                    </div>
                    {/* </Row>
                    <Row> */}
                    <div className="mt-3">
                      <Item original={img9} width="960" height="540">
                        {({ ref, open }) => (
                          <img
                            ref={ref}
                            onClick={open}
                            src={thumbnail9}
                            className="img-fluid"
                          />
                        )}
                      </Item>
                    </div>
                    {/* </Row> */}
                  </Col>
                  {/* first-column-of-images Ends */}
                  {/* first-column-of-images Ends */}
                  {/* second-column-of-images starts */}
                  {/* second-column-of-images starts */}

                  <Col lg={6} md={6}>
                    {/* <Row> */}
                    <div className="mt-3">
                      <Item original={img6} width="960" height="540">
                        {({ ref, open }) => (
                          <img
                            ref={ref}
                            onClick={open}
                            src={thumbnail6}
                            className="img-fluid"
                          />
                        )}
                      </Item>
                    </div>
                    {/* </Row> */}
                    {/* first nested row */}
                    {/* second nested row */}
                    {/* <Row> */}
                    <div className="mt-3">
                      <Item original={img10} width="960" height="540">
                        {({ ref, open }) => (
                          <img
                            ref={ref}
                            onClick={open}
                            src={thumbnail10}
                            className="img-fluid"
                          />
                        )}
                      </Item>
                    </div>
                    {/* </Row> */}
                  </Col>
                  {/* second-column-of-images starts */}
                  {/* second-column-of-images starts */}
                </Row>
              </Col>
              {/* mid-coloumn end */}

              <Col lg={3} md={3} sm={12} xs={12}>
                <Row>
                  <div className="mt-3">
                    <Item original={img7} width="960" height="540">
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={thumbnail7}
                          className="img-fluid"
                        />
                      )}
                    </Item>
                  </div>
                </Row>
                <Row>
                  <div className="mt-3">
                    <Item original={img11} width="960" height="540">
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={thumbnail11}
                          className="img-fluid"
                        />
                      )}
                    </Item>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* second row end */}
          </Gallery>
        </Container>
      </div>

      <br />
      <br />
    </div>
  );
};

export default ImageGallery;
