import React from "react";
import images from "../../../../constants/images";
import DemoModal from "../../../../components/demoModal/DemoModal";

const FirePanels = () => {
  return (
    <div>
      <div className="head-text">Fire Panels</div>
      <hr className="hr" />

      <div className="p-text">
        Detecting a fire early can mean the difference between losing everything
        and keeping loss and damage to a minimum.
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img
            src={images.firePanels}
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            alt=""
          />
        </div>

        <div
          style={{
            flex: 1.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="p-text">
            Few Months after installation Fire alarm and Fighting systems are
            most ignored systems and most of the time these systems are not
            working when required.
          </div>
          <br />
          <div className="bold-text">
            Our fire monitoring system entails remote monitoring of fire, smoke
            alarm, and system health by connecting fire panels to IoT network
            connective devices and pushing data to cloud hosted software, with a
            24*7 centralized monitoring station providing quick responses.
          </div>
        </div>
      </div>
      <br />
      <DemoModal />
    </div>
  );
};

export default FirePanels;
