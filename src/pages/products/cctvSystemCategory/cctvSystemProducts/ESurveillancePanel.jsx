import React from "react";
import { images } from "../../../../constants";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";

const ESurveillancePanel = () => {
  return (
    <div>
      <div className="head-text">E-surveillance Panel</div>
      <hr className="hr" />
      <div className="p-text">
        KiAM provides multiple options for cameras, CCTV solution. Our designs
        can be integrated with an NMS/RMS solution and can be viewed from a
        common platform. We have solutions with analogue, IP and Wi-Fi-based
        technologies. We offer a solution with local storage and integration
        with DVR/NVR for remote visibility. Our solutions allow for remote
        access of Video/Images as per need or can be pushed to cloud as per
        defined logic. KiAM platform is ready for future needs like AI/ML-based
        advanced algorithm.
      </div>
      <br />
      <div className="sub_head-text">Features</div>
      <div className="p-text">
        Captures from any camera source Our updated algorithms work on video
        from any camera source
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img src={images.cctvESurveillance} alt="" />
        </div>
        <div className="app__flex-col" style={{ flex: 1 }}>
          <ul className="features-list">
            <li>
              Real-time recording Our AI camera analyzes and detects improper
              movements
            </li>
            <li>
              Customized dashboard We provide a detail customized video
              analytics report for better understanding
            </li>
            <li>
              Object recognition Our AI/ML camera capable of recognizing objects
              like sharp objects, unattended objects, etc
            </li>
            <li>
              Alarms Provides alarms to take necessary action to prevent
              untoward incidents
            </li>
          </ul>
        </div>
      </div>
      <ButtonBookDemo />
    </div>
  );
};

export default ESurveillancePanel;
