import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselVariant } from "react-bootstrap/esm/Carousel";
import { CarouselItem } from "react-bootstrap";
import { Image } from "react-bootstrap";
import clientImage from "../assets/images/clients/client.jpg";

const ClientSlider = () => {
  return (
    <div className="slider-wrapper">
      {/* Heading Start */}
      <div className="heading">What our client says</div>
      <hr />
      {/* Heading End */}
      {/* Carousel Start */}
      <br />
      <br />
      <Carousel
        variant="dark"
        indicators={false}
        nextIcon={false}
        prevIcon={false}
        interval={3000}
        className="carouselColor"
      >
        <Carousel.Item>
          <div>
            <div className="client-image">
              {/* <Image
              className="d-block image"
              src={clientImage}
              alt="First slide"
            /> */}
            </div>
          </div>
          <div className="client-name">Martin Joe</div>
          <div className="client-review">
            <p className="client-review-text">
              The success of the mobile app counts on the effort of the
              developers and designers. MDSol Technologies provided it that
              enough qualified to create successful mobile apps.
            </p>
          </div>

          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="client-image">
            {/* <Image
              className="d-block image"
              src={clientImage}
              alt="Second slide"
            /> */}
          </div>
          <div className="client-name">Martin Joe</div>
          <div className="client-review">
            <p className="client-review-text">
              The success of the mobile app counts on the effort of the
              developers and designers. MDSol Technologies provided it that
              enough qualified to create successful mobile apps.
            </p>
          </div>
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="client-image">
            {/* <Image
              className="d-block image"
              src={clientImage}
              alt="Third slide"
            /> */}
          </div>
          <div className="client-name">Martin Joe</div>
          <div className="client-review">
            <p className="client-review-text">
              The success of the mobile app counts on the effort of the
              developers and designers. MDSol Technologies provided it that
              enough qualified to create successful mobile apps.
            </p>
          </div>
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      {/* Carousel Ends */}
    </div>
  );
};

export default ClientSlider;
