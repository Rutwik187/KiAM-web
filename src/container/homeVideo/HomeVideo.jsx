import React from "react";
import "./homeVideo.css";
import { images } from "../../constants";
const HomeVideo = () => {
  return (
    <div className="home_video app__container">
      <div className="head-text">Great Integrated Active Monitoring</div>
      <div className="sub_head-text bold-text">since 2016</div>
      <hr />
      <div className="p-text">
        We build ready made websites, mobile applications, and elaborate online
        business services.
      </div>
      <img className="mtb-2" src={images.video_img} alt="video" />
    </div>
  );
};

export default HomeVideo;
