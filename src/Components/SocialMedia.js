import React from "react";
import fbook from "../assets/images/logos/facebook.png";
import twitter from "../assets/images/logos/twitter.png";
import gplus from "../assets/images/logos/google.png";
import insta from "../assets/images/logos/instagram.png";

const SocialMedia = () => {
  return (
    <div className="footer-sec-wrapper">
      <div className="social-media-icons">
        <div className="facebook flex-item">
          <a href="/#">
            <img src={fbook} alt="" />
          </a>
        </div>
        <div className="twitter flex-item">
          <a href="/#">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="gplus flex-item">
          <a href="/#">
            <img src={gplus} alt="" />
          </a>
        </div>
        <div className="insta flex-item">
          <a href="/#">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyrights © 2021 MDSOLTECH.com </p>
      </div>
    </div>
  );
};

export default SocialMedia;
