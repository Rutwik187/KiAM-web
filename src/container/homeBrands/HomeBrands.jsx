import "./homeBrands.css";
import React, { useState } from "react";
import { images } from "../../constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { brandsData } from "../../Data/brandsData";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeBrands = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home_brands app__container">
      <div className="head-text home_brand-head">
        WE EMBRACE THE FUTURE TOGETHER WITH PIONEERING BRANDS.
      </div>

      <Tabs
        className="home_brand-content"
        selectedIndex={currentTabIndex}
        onSelect={setCurrentTabIndex}
      >
        <div className="home_brands-reviews">
          {brandsData.map((item, index) => (
            <TabPanel
              key={item.id}
              className={currentTabIndex === index ? "swipe-in" : "swipe-out"}
            >
              <div className="home_brands-review-logo  app__flex">
                <img
                  className="home_brand-review-logo_dotted-bg"
                  src={images.dotted_bg_short}
                  alt="dotted bg"
                />
                <img src={item.img} alt="logo img" />
              </div>
              <div className="sub_head-text bold-text mtb-2">{item.name}</div>
              <p>{item.testimonial}</p>
            </TabPanel>
          ))}
        </div>
        <TabList className="home_brands-logos">
          {brandsData.map((item) => (
            <Tab key={item.id}>
              <img src={item.img} alt="brand logo" />
            </Tab>
          ))}
        </TabList>
      </Tabs>

      <Carousel
        className="home_brands-mobile"
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        // fade={true}
      >
        {brandsData.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="home_brands-reviews">
              <div className="home_brands-review-logo  app__flex">
                <img
                  className="home_brand-review-logo_dotted-bg"
                  src={images.dotted_bg_short}
                  alt="dotted bg"
                />
                <img src={item.img} alt="logo img" />
              </div>
              <div className="sub_head-text bold-text mtb-2">{item.name}</div>
              <p>{item.testimonial}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBrands;
