import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const ClientSlider = () => {
  return (
    <div id="clients" className="slider-wrapper">
      <div className="mini-wrapper">
        {/* Heading Start */}
        <Fade right>
          <div className="heading">What our client says</div>
        </Fade>
        <hr />
        {/* Heading End */}
        {/* Carousel Start */}
        <br />
        <br />
        <Zoom duration={1500}>
          <Carousel
            variant="dark"
            indicators={false}
            nextIcon={false}
            prevIcon={false}
            interval={2000}
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
        </Zoom>
        {/* Carousel Ends */}
      </div>
    </div>
  );
};

export default ClientSlider;
