import React from "react";
import "./whatMakesUsDiff.css";
import iso from "../../../assets/iso.png";
import IndiaMap from "../../../assets/map.png";

const WhatMakesUsDiff = () => {
  return (
    <div className="app__container whatMakesUsDiff_container app__flex-col">
      <div className="head-text" style={{ textAlign: "center" }}>
        What Makes Us different from others
      </div>

      <div className="p-text" style={{ textAlign: "center" }}>
        With an agile approach and outstanding solutions in IT that we customize
        for our clients, we create an unbeatable, unique experience in
        technology
      </div>
      <hr className="hr" />
      <div className="app__flex whatMakesUsDiff_icons">
        <img src={iso} alt="" />
        <div style={{ textAlign: "center" }} className="sub_head-text">
          <b>
            Established In <br /> 1992
          </b>{" "}
        </div>
        <img src={IndiaMap} alt="" />
      </div>
      <div style={{ textAlign: "center" }} className="p-text">
        Given our years of experience and expertise in niche areas of IT, our
        partnership is an invaluable asset to organizations who choose to work
        with us. We truly understand IT! And that is the foundation of how we
        are driven to deliver the unique experience that our clients usually
        look for.
      </div>
    </div>
  );
};

export default WhatMakesUsDiff;
