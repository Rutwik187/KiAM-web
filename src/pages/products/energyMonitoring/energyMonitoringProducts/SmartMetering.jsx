import React from "react";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";

const SmartMetering = () => {
  return (
    <div>
      <div className="head-text">Smart Metering</div>
      <hr className="hr" />
      <div className="p-text">
        Energy management software helps organisations save money and minimise
        their carbon footprints by reducing & optimising their energy usage. Our
        IoT Based Energy Monitoring System has saved people up to 15% - 20% off
        their electricity bills of our clients by raising their awareness. Our
        aim is to create a sustainable world with its IoT technology and people
        expertise to lower costs, drive efficiencies and reduce environmental
        impact.
      </div>
      <br />
      <div className="sub_head-text">Energy Monitoring System Benefits</div>
      <div className="division">
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>Future proof IoT solution.</li>
            <li>Wifi - Wireless</li>
            <li>Control AC as per standard ( No warranty issues) .</li>
            <li>Use same IR remote interface to control AC.</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>
              Historical data analysis and comparison for decision making.
            </li>
            <li>Occupancy based energy equipment control.</li>
            <li>
              With Data Analytics, analyse Customer pattern through retail
              analytics.
            </li>
          </ul>
        </div>
      </div>
      <ButtonBookDemo />
    </div>
  );
};

export default SmartMetering;
