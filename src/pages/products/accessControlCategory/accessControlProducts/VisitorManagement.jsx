import React from "react";
import { accessControlData } from "../../../../Data/ProductsData";

const VisitorManagement = () => {
  return (
    <div className="products__tabList">
      {accessControlData.slice(5, 6).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="p-text">{item.desc}</div>
          <br />

          <div className="products__tablist-img-points">
            <img src={item.primaryImg} alt="access control" />
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <br />
            </ul>
          </div>
          <div className="head-text">{item.title}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
            className="head-text"
          >
            <img style={{ width: "100%" }} src={item.secImg} alt="" />
            <button className="button">Book A Demo</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisitorManagement;
