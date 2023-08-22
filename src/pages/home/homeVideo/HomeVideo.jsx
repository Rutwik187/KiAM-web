import React from "react";
import "./homeVideo.css";
import video from "../../../assets/video.mp4";
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
      <video controls autoplay className="home-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeVideo;
