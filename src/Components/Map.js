import React from "react";
import logo from "../assets/images/logo.png";

const Map = () => {
  return (
    <div className="map-section-wrapper">
      <div className="flex-container">
        <div className="text-section">
          <div className="logo">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <div className="text-para">
            As a full-service software development company, MDSOL offers a range
            of technology services spanning in most demanded types of
            Technology.
          </div>
          <div className="phone mt-3">
            <span>Phone</span>
            <p>+92 317 7675689</p>
          </div>
          <div className="email">
            <span>Email</span>
            <p>info@mdsoltech.com</p>
          </div>
          <div className="access">
            <span>Access</span>
            <p>J Block Johar Town, Lahore</p>
          </div>
        </div>
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1750530.4005008677!2d71.77216360544499!3d31.026119010888564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d31.473739!2d74.253135!4m5!1s0x393b315778dea7d9%3A0xbad72fc74e55d42f!2sMultan%20Punjab!3m2!1d30.157458!2d71.5249154!5e0!3m2!1sen!2s!4v1635242510705!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
