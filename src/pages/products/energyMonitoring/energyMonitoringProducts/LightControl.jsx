import React from "react";
import { ButtonGroup } from "react-bootstrap";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";
import { images } from "../../../../constants";

const LightControl = () => {
  return (
    <div>
      <div className="head-text">Light and Signage Control</div>
      <hr className="hr" />
      <img src={images.smartHVAC1} alt="" className="products-img" />
      <br />
      <ButtonBookDemo />
    </div>
  );
};

export default LightControl;
