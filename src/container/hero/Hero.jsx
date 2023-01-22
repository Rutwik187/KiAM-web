import React from "react";
import { images } from "../../constants";
import "./hero.css";

const hero = () => {
  return (
    <div className="hero app__container">
      <div className="hero_left">
        <div className="head-text">Iot Based</div>
        <div className="sub_head-text">Energy Monitoring System</div>
        <div className="hero1_highlight">
          <div>Save Power Cost by</div>
          <div>15% to 20%</div>
        </div>

        <button className="button">Know More</button>
        <img
          className="hero_dotted-img"
          src={images.dotted_bg}
          alt="dotted background"
        />
      </div>
      <div className="hero_right app__flex">
        <img src={images.hero1} alt="" />
      </div>
    </div>
  );
};

export default hero;
