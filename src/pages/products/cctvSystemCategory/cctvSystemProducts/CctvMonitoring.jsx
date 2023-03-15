import React from "react";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";
import { images } from "../../../../constants";

const CctvMonitoring = () => {
  return (
    <>
      <div className="head-text">CCTV Multi-location Monitoring</div>
      <hr className="hr" />
      <img
        src={images.cctvMultiLocationMonitoring}
        alt=""
        className="products-img"
      />
      <br />
      <ButtonBookDemo />
    </>
  );
};

export default CctvMonitoring;
