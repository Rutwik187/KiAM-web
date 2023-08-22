import React from "react";
import { intrusionData } from "../../../../Data/ProductsData";
import DemoModal from "../../../../components/demoModal/DemoModal";

const AtmSensors = () => {
  return (
    <div>
      {intrusionData.slice(2, 3).map((item, index) => (
        <div key={index}>
          {
            <>
              <div className="head-text">{item.title}</div>
              <hr className="hr" />
              <div>
                <img
                  style={{ maxWidth: "60rem", margin: "1.5rem auto" }}
                  src={item.img}
                  alt=""
                  className="app__flex"
                />
                <div className="sub_head-text">{item.subTitle}</div>
                <div className="division">
                  <div style={{ flex: 1 }}>
                    {item.points.slice(0, 4).map((point, index) => (
                      <li
                        style={{ margin: "0.8rem" }}
                        key={index}
                        className="p-text"
                      >
                        {point}
                      </li>
                    ))}
                  </div>
                  <div style={{ flex: 1 }}>
                    {item.points.slice(4, 8).map((point, index) => (
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
                <DemoModal />
              </div>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default AtmSensors;
