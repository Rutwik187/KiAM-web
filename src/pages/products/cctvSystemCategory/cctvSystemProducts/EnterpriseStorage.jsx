import React from "react";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";
import { images } from "../../../../constants";

const EnterpriseStorage = () => {
  return (
    <div>
      <div className="head-text">Enterprise Storage</div>
      <hr className="hr" />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img src={images.enterpriseStorage} alt="" className="product-img" />
        </div>
        <div className="app__flex-col" style={{ flex: 1 }}>
          <ul className="features-list">
            <li>Strong Local Area Network</li>
            <li>Network security precautions with Firewalls</li>
            <li>
              Primary & Secondary Server with Redundancy mode ensuring that
              there will be no down-time when primary server fails and secondary
              takes over
            </li>
            <li>Adequate Bandwidth</li>
            <li>Data on Highly redundant NAS (Network Attached Storage)</li>
            <li>
              Multiple VPN Network provider with fail-safe & Auto-Switch Over
            </li>
            <li>
              Best Practices for data center monitoring and server room
              monitoring have been taken care of
            </li>
          </ul>
        </div>
      </div>

      <ButtonBookDemo />
    </div>
  );
};

export default EnterpriseStorage;
