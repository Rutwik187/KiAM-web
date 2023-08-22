import React from "react";
import images from "../../../../constants/images";
import DemoModal from "../../../../components/demoModal/demoModal";

const FireSensors = () => {
  return (
    <div>
      <div className="head-text">Sensors</div>
      <hr className="hr" />
      <div className="division">
        <div style={{ flex: 1 }}>
          <ul className="features-list p-text">
            <li>Removal Sensor - ATM, UPS, Cheque Drop Box, Air Conditioner</li>
            <li>Vibration Sensor – To avoid ATM machine tampering</li>
            <li>Door Open Sensor – Door Open/close monitoring</li>
            <li>Panic / Duress Button</li>
            <li>Smoke Detector – For fire alarm</li>
            <li>Alarm panel tamper & Alarm panel Enclosure Tamper</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul className="features-list p-text">
            <li>Glass Break Detector</li>
            <li>Motion/ Occupancy Sensor</li>
            <li>Power Input – Mains Input (ON / OFF), Panel Battery Low</li>
            <li>Power Output - UPS Output (ON / OFF)</li>
            <li>
              Monitoring of environment/ Analog inputs like Temperature and
              Humidity
            </li>
            <li>Monitoring of AC power</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="sub_head-text">Monitoring Panel – Sensors</div>
      <img
        src={images.fireSensors}
        style={{ borderRadius: "10px", maxWidth: "100%" }}
        alt=""
      />
      <DemoModal />
    </div>
  );
};

export default FireSensors;
