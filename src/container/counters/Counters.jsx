import React from "react";
import "./counter.css";
import CountUp from "react-countup";

const Counters = () => {
  return (
    <div className="hero-figures app__container">
      <div className="sub_head-text">Some Numbers</div>
      <div>
        <span>
          <CountUp end={100000} start={95000} duration={4} delay={0} />
        </span>
        <span>Sensors</span>
      </div>
      <div>
        <span>
          <CountUp end={2000} start={1500} duration={4} delay={0} />
        </span>
        <span>Sites</span>
      </div>
      <div>
        <span>
          <CountUp end={20} start={12} duration={4} delay={0} />
        </span>
        <span>Projects</span>
      </div>
    </div>
  );
};

export default Counters;
