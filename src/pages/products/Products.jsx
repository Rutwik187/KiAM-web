import React, { useState } from "react";
import "./products.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsInfo } from "../../Data/ProductsData";
import { images } from "../../constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

import Testimonials from "../../components/testimonials/Testimonials";
const Products = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="products "
    >
      <div className=" app__container products-hero section-shadow">
        <div className="products-left">
          <div className="head-text">Products</div>
          <hr className="hr" />
          <p className="p-text">
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </p>
          {/* <button className="button">Know More</button> */}
          <img
            className="hero_products_dotted-img"
            src={images.dotted_bg}
            alt="dotted background"
          />
        </div>
        <div className="products-right app__flex">
          <TabList className="products-cards">
            {ProductsInfo.map((item, index) => (
              <Tab key={item.index} className="products-card">
                <img src={item.icon} alt="product" />
                <div className="products-card-textInfo">
                  <h5>{item.name}</h5>
                  <p>{item.short_desc}</p>
                </div>
              </Tab>
            ))}
          </TabList>
        </div>
        <img
          className="products-page-semi-circle"
          src={images.outline_semiCircle}
          alt="design"
        />
      </div>

      <div className="products-hero-mobile ">
        <div className="products-left">
          <div className="head-text">Products</div>
          <hr className="hr" />
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
        <div className="products-right  app__flex">
          <TabList>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={5000}
              // fade={true}
            >
              <Carousel.Item>
                <div className="products-cards">
                  {ProductsInfo.slice(0, 6).map((item, index) => (
                    <Tab key={item.index} className="products-card">
                      <img src={item.icon} alt="product" />
                      <div className="products-card-textInfo">
                        <h5>{item.name}</h5>
                        <p>{item.short_desc}</p>
                      </div>
                    </Tab>
                  ))}
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="products-cards">
                  {ProductsInfo.slice(6, 12).map((item, index) => (
                    <Tab key={item.index} className="products-card">
                      <img src={item.icon} alt="product" />
                      <div className="products-card-textInfo">
                        <h5>{item.name}</h5>
                        <p>{item.short_desc}</p>
                      </div>
                    </Tab>
                  ))}
                </div>
              </Carousel.Item>
            </Carousel>
          </TabList>
        </div>
      </div>

      {ProductsInfo.map((item, index) => (
        <TabPanel key={index}>
          <div className="product-info app__container">
            <div className="head-text">{item.title}</div>
            <hr className="hr" />
            <div className="p-text">{item.title_desc}</div>
            <div className="product-desc-img">
              <div className="product-img">
                <img src={item.img} alt="" />
              </div>
              <div className="product-desc">
                <ul>
                  {ProductsInfo[index].desc_li.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="product-benefits app__container">
            <div className="head-text">{item.benefits_title}</div>
            <hr className="hr" />
            <div className="p-text">{item.benefits_desc}</div>
            <div className="product-benefits-vid-desc">
              <div className="products-benefits-vid">
                <img src={item.vid} alt="video" />
              </div>

              <div className="products-benefits-desc">
                <ul>
                  {ProductsInfo[index].benefits_li.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
      <div className="app__container">
        <Testimonials />
      </div>
    </Tabs>
  );
};

export default Products;
