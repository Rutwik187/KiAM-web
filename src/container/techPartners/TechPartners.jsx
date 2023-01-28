import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../constants";
import "./techPartners.css";
const TechPartners = () => {
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
    <div className="TechPartners app__container">
      <div className="tech_partners-head">
        <div className=" head-text ">Our Technology Partners</div>
      </div>
      <div className="tech_partners-slider">
        <Slider {...settings}>
          <div className="tech_partner-logo">
            <img src={images.partner1} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={images.partner2} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={images.partner3} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={images.partner1} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={images.partner4} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={images.partner2} alt="client" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TechPartners;
