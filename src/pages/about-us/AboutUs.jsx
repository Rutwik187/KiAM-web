import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../constants";
import Map from "./Maps";
import "./aboutUs.css";
import KiamManagement from "./kiam-management/KiamManagement";

const AboutUs = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setSlidesToShow(2);
    } else if (window.innerWidth <= 900) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(4);
    }
  }, []);
  const settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <KiamManagement />
      <div className="about_us app__container">
        <div className="head-text">Top Recent Sites</div>
        <hr className="hr" />
        <div className="p-text">
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </div>
        <img
          className="hero_aboutUs_dotted-img"
          src={images.dotted_bg}
          alt="dotted background"
        />
        <div className="about-us__sites-slider">
          <Slider {...settings}>
            <div className="about-us-recent-site">
              <img src={images.site1} alt="" />
              <div className="about-us-recent-site-caption">
                <div className="p-text">Style Union</div>
                <div>Pune</div>
              </div>
            </div>
            <div className="about-us-recent-site">
              <img src={images.site1} alt="" />
              <div className="about-us-recent-site-caption">
                <div className="p-text">Style Union</div>
                <div>Pune</div>
              </div>
            </div>
            <div className="about-us-recent-site">
              <img src={images.site1} alt="" />
              <div className="about-us-recent-site-caption">
                <div className="p-text">Style Union</div>
                <div>Pune</div>
              </div>
            </div>
            <div className="about-us-recent-site">
              <img src={images.site1} alt="" />
              <div className="about-us-recent-site-caption">
                <div className="p-text">Style Union</div>
                <div>Pune</div>
              </div>
            </div>
            <div className="about-us-recent-site">
              <img src={images.site1} alt="" />
              <div className="about-us-recent-site-caption">
                <div className="p-text">Style Union</div>
                <div>Pune</div>
              </div>
            </div>
            <div className="about-us-recent-site">
              <img src={images.site1} alt="" />
              <div className="about-us-recent-site-caption">
                <div className="p-text">Style Union</div>
                <div>Pune</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default AboutUs;
