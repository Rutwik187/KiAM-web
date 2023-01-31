// import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { images } from "../../constants";
import "./footer.css";

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
              <li>
                <img src={images.phone_footer} alt="phone" />
                +91 02067479668 / +91 9371255012
              </li>
              <li>
                <img src={images.mail_footer} alt="mail" /> enquiry@kiam.in
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
                Mumbar-400 080
              </li>
              <li>
                <img src={images.phone_footer} alt="phone" />
                +91 020 68 / +91 9371255012
              </li>
              <li>
                <img src={images.mail_footer} alt="mail" /> enquiry@kiam.in
              </li>
            </ul>
          </div>
          <div className="footer_col">
            <h5 className="footer-head">Services </h5>
            <ul>
              <li> Access Control Solution</li>
              <li>24*7 Centralized Remote Monitoring</li>
              <li>Energy Saving Services</li>
              <li>AMC Services</li>
            </ul>
          </div>
          <div className="footer_col">
            <h5 className="footer-head">Products </h5>
            <ul>
              <li> Access Control</li>
              <li>Instrusion</li>
              <li>Fire Alarm System</li>
              <li>CCTV System</li>
              <li>Energy Monitoring and Saving</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="p-text">&#169; KiAM 2023. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
