import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ClientSlider = () => {
  return (
    <div id="clients" className="slider-wrapper">
      <div className="mini-wrapper">
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
              <div className="client-image"></div>
            </div>
            <div className="client-name">Martin Joe</div>
            <div className="client-review">
              <p className="client-review-text">
                The success of the mobile app counts on the effort of the
                developers and designers. MDSol Technologies provided it that
                enough qualified to create successful mobile apps.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="client-image"></div>
            <div className="client-name">Martin Joe</div>
            <div className="client-review">
              <p className="client-review-text">
                The success of the mobile app counts on the effort of the
                developers and designers. MDSol Technologies provided it that
                enough qualified to create successful mobile apps.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="client-image"></div>
            <div className="client-name">Martin Joe</div>
            <div className="client-review">
              <p className="client-review-text">
                The success of the mobile app counts on the effort of the
                developers and designers. MDSol Technologies provided it that
                enough qualified to create successful mobile apps.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
        {/* Carousel Ends */}
      </div>
    </div>
  );
};

export default ClientSlider;
