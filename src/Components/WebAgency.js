import React from "react";
import Slide from "react-reveal/Slide";

const WebAgency = () => {
  return (
    <div className="web-agency-wrapper">
      <div className="banner-image">
        <div className="text-sec">
          <Slide left>
            <div className="main-heading">
              A Passionate <br /> Web Agency
            </div>
          </Slide>
          <Slide left>
            <div className="sub-heading">
              Intensive for People, <br /> Growth, and Products
            </div>
            <hr />
          </Slide>
          <Slide left>
            <div className="first-para">
              MDSol Tech has everything you need to make your business
              successful. Whether that be the responsive websites, the web, and
              mobile apps or the digital presence. We are passionate about your
              success. And we turn the tides in your favor for fabulous results.
            </div>
            <div className="second-para">
              The extensive website development solutions enable you to catch up
              with the highest profits. And with our mobile app solutions, you
              turn your every lead into a staunch customer.
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default WebAgency;
