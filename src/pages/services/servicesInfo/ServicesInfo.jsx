import "./ServicesInfo.css";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../../constants";
import { servicesData } from "../../../Data/servicesData";
import { servicesInfo } from "../../../Data/servicesData";
import { HashLink } from "react-router-hash-link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useParams } from "react-router-dom";
import Testimonials from "../../../components/testimonials/Testimonials";

const ServicesInfo = ({ className }) => {
  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let { tabId } = useParams();

  if (typeof tabId === "undefined") {
    tabId = 0;
  }

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTabIndex(Number(tabId));
  }, [tabId]);

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className=" servicesInfo-container"
    >
      <div className="home_services-white app__container ">
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
          <TabList className="home_services-cards">
            {/* <div className="ball home_services-circle1"></div> */}
            {/* <div className="ball home_services-circle2"></div> */}
            {servicesData.map((item, index) => (
              <Tab key={item.id} className={`${item.id} home_services-card`}>
                <HashLink smooth to={`/services#${item.id}`}>
                  <img src={item.img} alt={item.title} />
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </HashLink>
              </Tab>
            ))}
            {/* <button className="button">Know More</button> */}
          </TabList>
        </div>
      </div>
      {servicesInfo.map((item) => (
        <TabPanel className="servicesInfoPanel" key={item.id} id={item.id}>
          <TabList className="home_services-side-cards">
            {servicesData.map((item, index) => (
              <Tab key={item.id} className="home_services-side-card">
                <HashLink smooth to={`/services#${item.id}`}>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </HashLink>
              </Tab>
            ))}
            {/* <button className="button">Know More</button> */}
          </TabList>
          <div className="complete-services-info ">
            <div className="servicesTextInfo" id={item.id}>
              <div className="head-text">{item.InfoTitle}</div>
              <hr />
              <div className="p-text">{item.InfoDesc1}</div>
              <br />
              <div className="p-text">{item.InfoDesc2}</div>
            </div>
            <div className="servicesImages">
              <div className="servicesImages-text">
                <img
                  className="corner-rectangle"
                  src={images.small_corner_rectangle}
                  alt="rectangle"
                />

                <div className="servicesImages-sub_text">
                  {item.ImgSecSub_Title}
                </div>
                <div className="head-text">{item.ImgSecTitle}</div>
                <hr />
                <div className="p-text">{item.ImgSecDesc}</div>
              </div>
              <div className="gallery-slider-desktop">
                <Slider
                  className="servicesImages-gallery servicesBenefits-slider1"
                  {...settings1}
                >
                  {servicesInfo[0].Imgs.map((item, index) => (
                    <div
                      className="servicesImages-gallery-img"
                      key={item.caption}
                    >
                      <img src={item.img} alt={item.caption} />
                      <div className="servicesImages-gallery-caption">
                        {item.caption}
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="servicesBenefits-gallery-block-2">
                  <img
                    className="gallery-dotted-bg"
                    src={images.dotted_bg}
                    alt="dotted background"
                  />

                  <Slider
                    className=" servicesImages-gallery servicesBenefits-slider2"
                    {...settings2}
                  >
                    {servicesInfo[0].Imgs.map((item, index) => (
                      <div
                        className="servicesImages-gallery-img"
                        key={item.caption}
                      >
                        <img src={item.img} alt={item.caption} />
                        <div className="servicesImages-gallery-caption">
                          {item.caption}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="servicesVideo">
              <div className="servicesVideo-player">
                <img src={item.video} alt="video" />
              </div>
              <div className="servicesVideo-text">
                <img
                  className="corner-rectangle"
                  src={images.small_corner_rectangle}
                  alt="rectangle"
                />
                <div className="head-text">{item.vidTitle}</div>
                <hr />
                <div className="p-text">{item.vidSubTitle}</div>
                <img
                  className="services-vid-dotted-bg"
                  src={images.dotted_bg_short}
                  alt="dotted-bg"
                />
              </div>
            </div>
            <Testimonials />
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ServicesInfo;
