import React from "react";
import "./homeServices.css";
import { images } from "../../../constants";
import { servicesData } from "../../../Data/servicesData";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="home_services app__container_padding section-shadow">
      <img
        className="home_services_light-red-bg"
        src={images.light_red_bg}
        alt="light red bg"
      />

      <div className="home_services-left">
        <div className="head-text">Services</div>
        <hr />
        <p className="p-text">
          We build ready made websites, mobile applications, and elaborate
          online business services.
        </p>
        {/* <button className="button">Know More</button> */}
        <img
          className="hero_services_dotted-img"
          src={images.dotted_bg}
          alt="dotted background"
        />
      </div>
      <div className="home_services-right app__flex">
        <div className="home_services-cards">
          {/* <div className="ball home_services-circle1"></div> */}
          {/* <div className="ball home_services-circle2"></div> */}
          {servicesData.map((item, index) => (
            <div key={item.id} className={`${item.id} home_services-card`}>
              <Link state={{ tab_id: index }} to={`/services/${index}`}>
                <img src={item.img} alt={item.title} />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </Link>
            </div>
          ))}
          {/* <button className="button">Know More</button> */}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
