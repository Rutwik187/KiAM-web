import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { images } from "../../../constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import { Link } from "react-router-dom";

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
        <div className="hero ">
          <div className="hero_left">
            <div className="head-text">Iot Based</div>
            <div className="sub_head-text">Energy Monitoring System</div>
            <div className="hero1_highlight">
              <div>Save Power Cost by</div>
              <div>15% to 20%</div>
            </div>

            <Link
              to="/productCategory/energy-monitoring"
              style={{ zIndex: "100" }}
            >
              <button className="button">Know More</button>
            </Link>
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
        <div className="hero ">
          <div className="hero_left">
            <div className="head-text">Smart INTEGRA</div>
            <br />
            <div
              className="sub_head-text"
              style={{
                color: "#282828",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
                lineHeight: "150%",
              }}
            >
              all in one integrated product that monitors Safety, Security &
              Efficiency systems
            </div>
            <br />
            <div>
              <ul
                style={{
                  color: "#282828",
                  fontSize: 15,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  zIndex: "100",
                }}
              >
                <li>Fire</li>
                <li>Intrusion</li>
                <li>Access Control</li>
                <li>Video Surveillance</li>
                <li>Temperature Monitoring</li>
                <li>Energy Monitoring</li>
              </ul>
            </div>

            <Link to="/productCategory/intrusion" style={{ zIndex: "100" }}>
              <button className="button">Know More</button>
            </Link>
            <img
              className="hero_dotted-img"
              src={images.dotted_bg}
              alt="dotted background"
            />
          </div>
          <div className="hero_right app__flex">
            <img src={images.carousel2} alt="" />
          </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div className="hero ">
          <div className="hero_left">
            <div className="head-text">People Counting System</div>
            <br />
            <div
              className="sub_head-text"
              style={{
                color: "#282828",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
                lineHeight: "150%",
              }}
            >
              understanding the number of consumers coming into your shop as
              well as the areas they visit most
            </div>
            <br />
            <div
              className="sub_head-text"
              style={{
                color: "#282828",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
                lineHeight: "150%",
              }}
            >
              Real time people counting with advanced 3D- IR -IOT based
              technology gives 98% accuracy & most comprehensive personalized
              reports.
            </div>
            <br />
            <button className="button">Know More</button>
            <img
              className="hero_dotted-img"
              src={images.dotted_bg}
              alt="dotted background"
            />
          </div>
          <div className="hero_right app__flex">
            <img src={images.carousel3} alt="" />
          </div>
        </div>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default DummyHero;
