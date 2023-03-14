import React from "react";
import { intrusionData } from "../../../../Data/ProductsData";

const PerimeterIntrusionSensors = () => {
  return (
    <div>
      {intrusionData.slice(3, 4).map((item, index) => (
        <div key={index}>
          {
            <>
              <div className="head-text">{item.title}</div>
              <hr className="hr" />

              {item.points1.map((point, index) => (
                <li style={{ margin: "0.8rem" }} key={index} className="p-text">
                  {point}
                </li>
              ))}

              <div className="division">
                <div style={{ flex: 1 }}>
                  <img
                    style={{ borderRadius: "10px", maxWidth: "100%" }}
                    src={item.img}
                    alt=""
                  />
                </div>
                <div style={{ flex: 1 }}>
                  {item.points2.map((point, index) => (
                    <li
                      style={{ margin: "0.8rem" }}
                      key={index}
                      className="p-text"
                    >
                      {point}
                    </li>
                  ))}
                </div>
              </div>
              <br />
              <br />
              <button style={{ margin: "auto" }} className="button app__flex">
                Book A Demo
              </button>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default PerimeterIntrusionSensors;
