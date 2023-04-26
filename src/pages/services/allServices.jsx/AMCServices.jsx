import React from "react";

const AMCServices = () => {
  return (
    <div>
      <div className="head-text">AMC Services</div>
      <hr className="hr" />
      <div className="sub_head-text">AMC and Service Support</div>
      <ul className="features-list">
        <li>
          <b>Comprehensive AMC</b> prevent as well as corrective maintenance
          i.e. the spare parts or components are covered for replacment and
          repairs
        </li>
        <li>
          <b>Non-Comprehensive AMC </b> cover only preventive maintenance i.e.
          Repairs and replacement charges for spare parts or components will be
          charged extra at actual
        </li>
        <li>
          If the model and make is discontinued, then to be replaced by
          equivalent system with entire solution (if required) with same grade
          of system
        </li>
      </ul>
      <br />
      <div className="red-text">preventive maintenance</div>
      <ul className="features-list">
        <li>
          4 visits in a year for operation check, connetivity check of devices
          mentioned in the commercial proposal
        </li>
        <li>Extra visits will be charged extra at actual</li>
        <li>
          KiAM representative shall visit the site for carrying out preventive
          maintenance on all the systems coverded under AMC contract
        </li>
        <li>
          The preventive maintenance reports will be as per the format agreed
          mutually between customer and the KiAM
        </li>
      </ul>
    </div>
  );
};

export default AMCServices;
