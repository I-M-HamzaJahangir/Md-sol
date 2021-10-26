import React from "react";
import fbook from "../assets/images/logos/facebook.png";
import twitter from "../assets/images/logos/twitter.png";
import gplus from "../assets/images/logos/google.png";
import insta from "../assets/images/logos/instagram.png";

const SocialMedia = () => {
  return (
    <div className="footer-sec-wrapper">
      <div className="social-media-icons">
        <div className="facebook">
          <img src={fbook} alt="" />
        </div>
        <div className="twitter">
          <img src={twitter} alt="" />
        </div>
        <div className="gplus">
          <img src={gplus} alt="" />
        </div>
        <div className="insta">
          <img src={insta} alt="" />
        </div>
      </div>
      <div className="copy-right">
        <p>Copyrights © 2020 MDSOLTECH.com </p>
      </div>
    </div>
  );
};

export default SocialMedia;
