import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../constants";
import Map from "./Maps";
import "./aboutUs.css";

const AboutUs = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setSlidesToShow(2);
    } else if (window.innerWidth <= 900) {
      setSlidesToShow(3);
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
      <div className="about_us-recent_sites app__container">
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
        <div>
          <Slider {...settings}>
            <img src={images.site1} alt="" />
            <img src={images.site1} alt="" />
            <img src={images.site1} alt="" />
            <img src={images.site1} alt="" />
            <img src={images.site1} alt="" />
            <img src={images.site1} alt="" />
          </Slider>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default AboutUs;
