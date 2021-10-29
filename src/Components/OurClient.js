import React from "react";
import logo1 from "../assets/images/logos/1.jpg";
import logo2 from "../assets/images/logos/2.jpg";
import logo3 from "../assets/images/logos/3.jpg";
import logo4 from "../assets/images/logos/4.jpg";
import logo5 from "../assets/images/logos/5.jpg";
import logo6 from "../assets/images/logos/6.jpg";
import logo7 from "../assets/images/logos/7.jpg";

const OurClient = () => {
  return (
    <div className="client-wrapper">
      <div className="heading-text"> Our Clients</div>
      <hr />
      <div className="desc-text">
        Map where your photos were taken and discover local points of interest.
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <img src={logo1} alt="" />
        </div>
        <div className="flex-item">
          <img src={logo2} alt="LOGO_1" />
        </div>
        <div className="flex-item">
          <img src={logo3} alt="LOGO_2" />
        </div>
        <div className="flex-item">
          <img src={logo4} alt="LOGO_3" />
        </div>
        <div className="flex-item">
          <img src={logo5} alt="LOGO_4" />
        </div>
        <div className="flex-item">
          <img src={logo6} alt="LOGO_5" />
        </div>
        <div className="flex-item">
          <img src={logo7} alt="LOGO_6" />
        </div>
      </div>
    </div>
  );
};

export default OurClient;
