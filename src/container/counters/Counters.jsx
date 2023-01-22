import React from "react";
import "./counter.css";
// import NumberCounter from "number-counter";

const Counters = () => {
  return (
    <div className="hero-figures app__container">
      <div className="sub_head-text">Some Numbers</div>
      <div>
        <span>
          {/* <NumberCounter end={100000} start={85000} delay={7} /> */}
        </span>
        <span>Sensors</span>
      </div>
      <div>
        <span>{/* <NumberCounter end={2000} start={1500} delay={7} /> */}</span>
        <span>Sites</span>
      </div>
      <div>
        <span>{/* <NumberCounter end={20} start={12} delay={7} /> */}</span>
        <span>Projects</span>
      </div>
    </div>
  );
};

export default Counters;
