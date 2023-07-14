import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../constants";
import "./techPartners.css";

import techPartner1 from "../../assets/techPartner1.jpg";
import techPartner2 from "../../assets/techPartner2.jpg";
import techPartner3 from "../../assets/techPartner3.jpg";
import techPartner4 from "../../assets/techPartner4.jpg";
import techPartner5 from "../../assets/techPartner5.jpeg";
import techPartner6 from "../../assets/techPartner6.jpeg";
import techPartner7 from "../../assets/techPartner7.jpg";
import techPartner8 from "../../assets/techPartner8.jpg";
import techPartner9 from "../../assets/techPartner9.jpg";
import techPartner10 from "../../assets/techPartner10.jpg";
import techPartner15 from "../../assets/techPartner15.jpg";
import techPartner11 from "../../assets/techPartner11.jpg";
import techPartner12 from "../../assets/techPartner12.jpg";
import techPartner13 from "../../assets/techPartner13.jpg";
import techPartner14 from "../../assets/techPartner14.jpg";

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
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="TechPartners app__container">
      <div className="tech_partners-head">
        <div className=" head-text ">
          WE EMBRACE THE FUTURE TOGETHER WITH PIONEERING BRANDS.
        </div>
        <hr className="hr" style={{ margin: "1rem auto" }} />
      </div>
      <div className="tech_partners-slider">
        <Slider {...settings}>
          <div className="tech_partner-logo">
            <img src={techPartner1} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner2} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner3} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner4} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner5} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner6} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner7} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner8} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner9} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner10} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner11} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner12} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner13} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner14} alt="client" />
          </div>
          <div className="tech_partner-logo">
            <img src={techPartner15} alt="client" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TechPartners;
