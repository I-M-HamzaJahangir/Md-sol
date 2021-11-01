import React from "react";
import logo from "../assets/images/logo.png";

const Map = () => {
  return (
    <div className="map-section-wrapper" id="contact">
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
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.926360982885!2d74.24940616478673!3d31.47121180671742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902250cbf8981%3A0xb8e4abf04221b953!2sBlock%20J1%20Block%20J%201%20Phase%202%20Johar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1635503444378!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
