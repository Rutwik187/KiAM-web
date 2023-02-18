import React, { useState } from "react";
import "./productCategories.css";

import { ProductCategories } from "../../Data/ProductsData";
import { images } from "../../constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import Testimonials from "../../components/testimonials/Testimonials";
const productCategories = () => {
  return (
    <div className="productCategories">
      <div className=" app__container productCategories-hero section-shadow">
        <div className="productCategories-left">
          <div className="head-text">products</div>
          <hr className="hr" />
          <p className="p-text">
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className="button">Get A Demo Today</button>

          <img
            className="hero_productCategories_dotted-img"
            src={images.dotted_bg}
            alt="dotted background"
          />
        </div>
        <div className="productCategories-right app__flex">
          <div className="sub_head-text">Select Product Category</div>
          <div className="productCategories-cards">
            {ProductCategories.map((item, index) => (
              <Link
                to={`/productCategory/${item.route}`}
                key={index}
                className="productCategories-card"
              >
                <img src={item.icon} alt="product" />
                <div className="productCategories-card-textInfo">
                  <h5>{item.name}</h5>
                  <p>{item.short_desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="app__container">
        <Testimonials />
      </div>
    </div>
  );
};

export default productCategories;
