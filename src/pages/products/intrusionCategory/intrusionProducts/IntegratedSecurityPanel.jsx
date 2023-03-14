import React from "react";
import images from "../../../../constants/images";

const IntegratedSecurityPanel = () => {
  return (
    <div>
      <div id="SH-VTG" className="head-text">
        Integrated Security Panel
      </div>
      <hr className="hr" />
      <br />
      <div className="p-text">
        SmartINTEGRA is a all-in-one integrated product that monitors Safety,
        Security & Efficiency systems such as:
      </div>

      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            src={images.integratedSecurityPannelImg}
            alt=""
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="sub_head-text">Features:</div>
          <ul className="features-list p-text">
            <li>Fire</li>
            <li className="p-text">Intrusion</li>
            <li className="p-text">Access Control</li>
            <li>Video Surveillance</li>
            <li>Temperature Monitoring</li>
            <li>Wall tamper output</li>
            <li>Energy Monitoring</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="sub_head-text">Integrated Security Panel Benefits</div>
      <br />
      <ul className="features-list">
        <li>
          Integrated Security system seamlessly communicates with each other
        </li>
        <li>Single platform and Single Vendor Solution</li>
        <li>
          Monitoring of multi- location at same instance -
          Branches/Offices/warehouse/Retail outlets
        </li>
        <li>
          Real-time Alarm alerts through SMS, mails, mobile app, Web for
          immediate action
        </li>
        <li>
          Database Host service available, reducing huge investment on IT
          infrastructure – Low operational cost
        </li>
        <li>
          Increase in productivity due to less human intervention and dependency
        </li>
      </ul>
      <br />

      <button style={{ margin: "auto" }} className="button app__flex">
        Book A Demo
      </button>
    </div>
  );
};

export default IntegratedSecurityPanel;
