// import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { images } from "../../constants";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_row">
          <div className="footer_col">
            <div className="social_links">
              <div className="footer-logo">
                <img src={images.white_logo} alt="" />
              </div>
              <div className="footer-social-icons">
                <img src={images.instagram} alt="" />
                <img src={images.facebook} alt="" />
                <img src={images.linkedIn} alt="" />
              </div>
            </div>
          </div>
          <div className="footer_col">
            <h5 className="footer-head ">Head Office</h5>
            <ul>
              <li>
                {" "}
                <img src={images.location_footer} alt="location" /> 1st Floor,
                Block No.27, Electronic Co-op Estate, Satara Road, Swargate,
                Pune-411 009
              </li>
              <a href="tel:+91 02067479668 ">
                <li>
                  <img src={images.phone_footer} alt="phone" />
                  +91 02067479668
                </li>
              </a>
              <a href="tel:+91 9371255012">
                <li>+91 9371255012</li>
              </a>
              <a href="mailto:enquiry@kiam.in"></a>
              <li>
                <img src={images.mail_footer} alt="mail" />
                enquiry@kiam.in
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h5 className="footer-head">Mumbai Office</h5>
            <ul>
              <li>
                {" "}
                <img src={images.location_footer} alt="location" /> The Playce,
                CabinNo-4, Matharathon Maxima, Ground Floor, Bhandup(West)
                Mumbai-400 080
              </li>
              <a href="tel:+91 02067479668 ">
                <li>
                  <img src={images.phone_footer} alt="phone" />
                  +91 02067479668
                </li>
              </a>
              <a href="tel:+91 9371255012">
                <li>+91 9371255012</li>
              </a>
              <a href="mailto:enquiry@kiam.in">
                <li>
                  <img src={images.mail_footer} alt="mail" /> enquiry@kiam.in
                </li>
              </a>
            </ul>
          </div>
          <div className="footer_col">
            <h5 className="footer-head">Services </h5>
            <ul>
              <Link to="/services/2">
                <li>Access Control Solution</li>
              </Link>
              <Link to="/services/3">
                <li>24*7 Centralized Remote Monitoring</li>
              </Link>
              <Link to="/services/0">
                <li>Energy Saving Services</li>
              </Link>
              <Link to="/services/1">
                <li>AMC Services</li>
              </Link>
            </ul>
          </div>
          <div className="footer_col">
            <h5 className="footer-head">Products </h5>
            <ul>
              <Link to="/productCategory/access-control">
                <li> Access Control</li>
              </Link>
              <Link to="/productCategory/intrusion">
                <li>Instrusion</li>
              </Link>

              <Link to="/productCategory/cctv-system">
                <li>CCTV System</li>
              </Link>
              <Link to="/productCategory/energy-monitoring">
                <li>Energy Monitoring and Saving</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="p-text" style={{ color: "white" }}>
          &#169; KiAM 2023. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
