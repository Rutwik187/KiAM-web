import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { images } from "../../../constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";

function DummyHero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={5000}
      // fade={true}
    >
      <Carousel.Item>
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
      </Carousel.Item>
      <Carousel.Item>
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
      </Carousel.Item>
      <Carousel.Item>
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
      </Carousel.Item>
    </Carousel>
  );
}

export default DummyHero;
