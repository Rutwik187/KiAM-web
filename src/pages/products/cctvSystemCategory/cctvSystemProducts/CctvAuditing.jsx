import React from "react";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";
import { images } from "../../../../constants";

const CctvAuditing = () => {
  return (
    <div>
      <div className="head-text">CCTV Auditing and Time Lapse</div>
      <hr className="hr" />
      <ul className="features-list ">
        <li>CCTV Camera installed but used only for post-mortem</li>
        <li>
          Management cannot view 24 hours of video because of time constrains
        </li>
        <li>
          One day video compressed in 1 min can help management understand
          operational data easily for retail store, warehouse, manufacturing
          unit and offices
        </li>
        <li>Audit can be conducted using timelapse video</li>
        <li>Planogram compliance and deviation is easily visible</li>
        <li>
          Marketing content, bill boards, audit is easy as over the month data
          can be viewed in just 5 mins
        </li>
        <li>Helps in understanding Construction progress monitoring</li>
      </ul>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
          ></iframe>
        </div>
        <div style={{ flex: 1 }}>
          <img src={images.cctvAuditing} alt="" className="products-img" />
        </div>
      </div>
      <ButtonBookDemo />
    </div>
  );
};

export default CctvAuditing;
