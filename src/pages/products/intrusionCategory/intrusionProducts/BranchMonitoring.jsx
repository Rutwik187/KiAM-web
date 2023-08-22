import React from "react";
import { intrusionData } from "../../../../Data/ProductsData";
import DemoModal from "../../../../components/demoModal/DemoModal";

const BranchMonitoring = () => {
  return (
    <div>
      {intrusionData.slice(0, 1).map((item, index) => (
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
                    {item.points.slice(4, 9).map((point, index) => (
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

export default BranchMonitoring;
