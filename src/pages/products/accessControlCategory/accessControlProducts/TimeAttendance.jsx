import React from "react";
import { accessControlData } from "../../../../Data/ProductsData";
import DemoModal from "../../../../components/demoModal/demoModal";

const TimeAttendance = () => {
  return (
    <div className="products__tabList">
      {accessControlData.slice(1, 2).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="p-text">{item.desc1}</div>
          <br />
          <div className="p-text">{item.desc2}</div>

          <div className="products__tablist-img-points">
            <img src={item.primaryImg} alt="access control" />
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <br />
              <DemoModal />
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeAttendance;
