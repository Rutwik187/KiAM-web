import React from "react";
import images from "../../../../constants/images";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";

const AdvancedAIBased = () => {
  return (
    <div>
      <div className="head-text">Advanced AI based</div>
      <hr className="hr" />
      <div className="p-text">
        Using AI camera we can get the details of access to unauthorised areas
        and alarm can be generated for the same
      </div>
      <ul className="features-list">
        <li>
          Alarm Activation by distinguishing people & vehicles from other moving
          objects such as leaves, raindrops, shadows, and manymore. Therefore
          the security staff can focus on real threats, saving time & manpower.
        </li>
        <li>Line crossing detection @ perimeter</li>
        <li>Area mapping through camera for restricted zone</li>
      </ul>
      <div className="division">
        <div style={{ flex: 1 }}>
          <img src={images.cctvAi1} alt="" className="products-img" />
        </div>
        <div style={{ flex: 1 }}>
          {" "}
          <img src={images.cctvAi2} alt="" className="products-img" />
        </div>
      </div>
      <ButtonBookDemo />
    </div>
  );
};

export default AdvancedAIBased;
