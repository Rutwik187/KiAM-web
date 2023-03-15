import React from "react";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";
import images from "../../../../constants/images";

const CctvCamera = () => {
  return (
    <div>
      <div className="head-text">CCTV Camera</div>
      <hr className="hr" />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img
            src={images.cctvCamera}
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            alt=""
          />
        </div>
        <div className="app__flex-col" style={{ flex: 1 }}>
          <div className="p-text">
            CCTV is a critical security component for all facilities. Video
            Surveillance helps identify security incidents and take actions.
          </div>
          <br />
          <div className="p-text">
            The majority of locations have CCTV installed, however it is not
            being watched effectively. When needed, footage is most likely
            unavailable because the DVR/NVR is not powered or the HDD has
            failed. Other possibilities include repositioning the camera,
            camouflaging the camera, or the camera not working.
          </div>
          <br />
          <div className="p-text">
            This can be taken care with KiAM 24 x 7 CCTV monitoring services.
          </div>
        </div>
      </div>

      <div className="division">
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>Event based Video surveillance</li>
            <li>Night time CCTV monitoring</li>
            <li>
              Evidence support with Event based image and video storage on Cloud
            </li>
            <li>Pattern Analysis for Proactive actions</li>
            <li>DVR/ NVR status and recording check</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>CCTV Alarm and break down monitoring:</li>
            <ul className="features-list">
              <li>CCTV Camera status</li>
              <li>Camera Mask</li>
              <li>Camera position shift</li>
            </ul>
            <li>CCTV system AMC management</li>
            <li>Weekly /Monthly MIS reports for analysis and actions</li>
          </ul>
        </div>
      </div>

      <ButtonBookDemo />
    </div>
  );
};

export default CctvCamera;
