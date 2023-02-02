import React from "react";
import "./products.css";

import { ProductsInfo } from "../../Data/ProductsData";
import { images } from "../../constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

import Testimonials from "../../components/testimonials/Testimonials";
const Products = () => {
  return (
    <Tabs className="products app__container">
      <div className="products-hero ">
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
      </div>

      {ProductsInfo.map((item, index) => (
        <TabPanel key={index}>
          <div className="product-info">
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

          <div className="product-benefits">
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
      <Testimonials />
    </Tabs>
  );
};

export default Products;
