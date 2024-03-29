import React, { useState, useEffect } from "react";
import { images } from "../../../constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./homeProducts.css";
import { homeProductsData } from "../../../Data/ProductsData";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div>
      <Tabs
        className="home_products-desktop app__container section-shadow"
        selectedIndex={currentTabIndex}
        onSelect={setCurrentTabIndex}
      >
        <img
          className="home_products_semi-circle-outline"
          src={images.outline_semiCircle}
          alt="design"
        />
        <img
          className="home_products_corner-circle"
          src={images.small_corner_rectangle}
          alt="design"
        />
        <div className="home_products_info ">
          {homeProductsData.map((item, index) => (
            <TabPanel
              key={item.id}
              className={currentTabIndex === index ? "swipe-in" : "swipe-out"}
            >
              <div className="home_product-selected-product_info">
                <div className="home_product_img mtb-2">
                  <img src={item.img} alt="access control " />
                </div>
                <div className="sub_head-text bold-text">{item.title}</div>
                <p className="p-text mtb-2">{item.desc}</p>
                <Link to={`/productCategory/${item.linkTo}`}>
                  <p className="arrow-button">Know More -&gt; </p>
                </Link>
              </div>
            </TabPanel>
          ))}
        </div>

        <div className="home_products-list">
          <div className="head-text">Products</div>
          <hr />
          <div className="p-text">
            We build read made websites, mobile applications, and elaborate
            online business services.
          </div>

          <TabList className="home_products-tablist">
            {homeProductsData.map((item) => (
              <Tab key={item.id}>{item.title}</Tab>
            ))}
          </TabList>
        </div>
      </Tabs>

      <div className="home_products-mobile app__container">
        <div className="head-text">Products</div>
        <hr />
        <div className="p-text">
          We build read made websites, mobile applications, and elaborate online
          business services.
        </div>
        <Tabs
          className="home_product-mobile_tab app__container"
          selectedIndex={currentTabIndex}
          onSelect={setCurrentTabIndex}
        >
          <div className="home_products-list">
            <TabList className="home_products-tablist">
              {homeProductsData.map((item) => (
                <Tab key={item.id}>{item.title}</Tab>
              ))}
            </TabList>
          </div>
          <div className="home_products_info ">
            {homeProductsData.map((item, index) => (
              <TabPanel
                key={item.id}
                className={currentTabIndex === index ? "swipe-in" : "swipe-out"}
              >
                <div className="home_product-selected-product_info">
                  <div className="home_product_img mtb-2">
                    <img src={item.img} alt="access control " />
                  </div>
                  <div className="sub_head-text bold-text">{item.title}</div>
                  <p className="p-text mtb-2">{item.desc}</p>
                  <Link to={`/productCategory/${item.linkTo}`}>
                    <p className="arrow-button">Know More -&gt; </p>
                  </Link>
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeProducts;
