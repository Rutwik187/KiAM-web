import React from "react";
import { accessControlData } from "../../../../Data/ProductsData";
import DemoModal from "../../../../components/demoModal/demoModal";

const LiftAccessControl = () => {
  return (
    <div className="products__tabList">
      {accessControlData.slice(6, 7).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="p-text">{item.desc1}</div>

          <div className="products__tablist-img-points">
            <img src={item.primaryImg} alt="access control" />
            <ul>
              <div className="sub_head-text">{item.subTitle1}</div>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <br />
            </ul>
          </div>
          <div className="sub_head-text">{item.subTitle2}</div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <ul
              style={{
                marginTop: "1rem",
                flexDirection: "column",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {item.points2.slice(0, 2).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <br />
            </ul>

            <ul
              style={{
                marginTop: "1rem",
                flexDirection: "column",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {item.points2.slice(2, 4).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <br />
            </ul>
          </div>
          <DemoModal />
        </div>
      ))}
    </div>
  );
};

export default LiftAccessControl;
