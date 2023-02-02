import React from "react";
import "./products.css";
import { images } from "../../constants";
import { ProductsInfo } from "../../Data/ProductsData";
// import { servicesData } from "../../../Data/servicesData";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products app__container">
      <div className="products-left">
        <div className="head-text">Products</div>
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
      <div className="products-right app__flex">
        <div className="products-cards">
          {/* <div className="ball products-circle1"></div> */}
          {/* <div className="ball products-circle2"></div> */}
          {/* {servicesData.map((item, index) => ( */}
          {ProductsInfo.map((item, index) => (
            <div key={item.index} className="products-card">
              <img src={item.icon} alt="product" />
              <div className="products-card-textInfo">
                <h5>{item.name}</h5>
                <p>{item.short_desc}</p>
              </div>
            </div>
          ))}

          {/* ))} */}
          {/* <button className="button">Know More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
