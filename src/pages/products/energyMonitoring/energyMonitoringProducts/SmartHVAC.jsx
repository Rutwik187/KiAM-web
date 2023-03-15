import React from "react";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";
import { images } from "../../../../constants";

const SmartHVAC = () => {
  return (
    <div>
      <div className="head-text">Smart HVAC and AC Control</div>
      <hr className="hr" />
      <div className="p-text">
        Electrical energy consumption related data is treated and reflected
        within the system and then this data is transfered to the LAN or Cloud
        server. Advanced Analytics feature helps you to gather data and process
        it to develop energy consumption patterns, compare historical
        consumption, and predict future energy needs.
      </div>
      <br />
      <div className="bold-text">IoT Solution for energy control - HVAC</div>
      <br />
      <img src={images.smartHVAC1} alt="" className="products-img" />
      <br />
      <ButtonBookDemo />
    </div>
  );
};

export default SmartHVAC;
