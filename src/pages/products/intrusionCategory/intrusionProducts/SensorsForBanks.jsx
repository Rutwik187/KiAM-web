import React from "react";
import { intrusionData } from "../../../../Data/ProductsData";
import DemoModal from "../../../../components/demoModal/DemoModal";

const SensorsForBanks = () => {
  return (
    <div>
      {intrusionData.slice(1, 2).map((item, index) => (
        <div key={index}>
          {
            <>
              <div className="head-text">{item.title}</div>
              <hr className="hr" />
              <div className="app__flex-col">
                <img
                  style={{ width: "100%", margin: "1.5rem 0" }}
                  src={item.img}
                  alt=""
                />
                <div className="division">
                  <div style={{ flex: 1 }}>
                    <div className="sub_head-text">{item.subTitle1}</div>
                    {item.points1.map((point, index) => (
                      <li
                        key={index}
                        style={{ margin: "0.8rem" }}
                        className="p-text"
                      >
                        {point}
                      </li>
                    ))}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="sub_head-text">{item.subTitle2}</div>
                    {item.points2.map((point, index) => (
                      <li
                        key={index}
                        style={{ margin: "0.8rem" }}
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

export default SensorsForBanks;
