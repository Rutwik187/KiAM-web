import React from "react";
import ButtonBookDemo from "../../../../components/ButtonBookDemo";
import { images } from "../../../../constants";

const UPSMonitoring = () => {
  return (
    <div>
      <div className="head-text">UPS / DG Monitoring</div>
      <hr className="hr" />
      <div className="division">
        <div style={{ flex: 1 }}>
          <div className="sub_head-text">UPS Monitoring</div>
          <br />
          <img src={images.UPSMonitoringImg} alt="" className="products-img" />
        </div>
        <div className="app__flex-col" style={{ flex: 1 }}>
          <div className="sub_head-text">Benifits of UPS Monitoring</div>
          <br />
          <ul className="features-list">
            <li>
              It helps to measure the input and output parameters of the UPS.
            </li>
            <li>
              UPS monitoring helps to enhance the effective service life of
              batteries.
            </li>
            <li>Check the health & status of the UPS batteries.</li>
            <li>
              Monitor the temperature of the UPS and send an alarm if it crosses
              the normal temperature level.
            </li>
            <li>
              UPS monitoring gives an estimate of the battery charge remaining.
              It also provides the battery backup time remaining before it
              turns.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <div className="sub_head-text">DG Monitoring System In India</div>
          <br />
          <div className="p-text">
            KiAM Provides top level DG(Diesel Genset Monitoring) Monitoring
            System and an Intelligent IOT solution for real-time monitoring and
            managing of DG sets to avoid wasting valuable business time over
            generator failures.
          </div>
          <br />
          <div className="p-text">
            Solution uses cutting edge technologies such as Artificial
            Intelligence and Big Data Analytics to analyze DG parameters to make
            informed business decisions that will enable consumers to reduce
            OPEX and increase efficiency.
          </div>
          <br />
          <div className="p-text">
            KiAM provides DG Monitoring System based on accurate tools for fuel
            consumption measurement.
          </div>
          <br />
          <div className="p-text">
            The solution is thus suitable for a variety of businesses such as
            mining, manufacturing, offices and universities.
          </div>
        </div>
        <div style={{ flex: 1 }} className="app__flex-col">
          <img src={images.DGMonitoringImg} alt="" className="products-img" />
        </div>
      </div>
      <br />
      <div className="sub_head-text">
        Remote Generator Monitoring Key Features
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>Greater Efficiency</li>
            <li>Theft (Fraud) Prevention</li>
            <li>Cost Savings</li>
            <li>Improved Data Accuracy</li>
            <li>Precise Billing</li>
            <li>Unrestricted Access To Information</li>
            <li>Power Generation Reports</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>Monitors Fuel Level & Consumption</li>
            <li>Battery Voltage Monitoring</li>
            <li>Maintains Temperature Profile Of The Generator</li>
            <li>Keeps Automatic Record Of Run Hours</li>
            <li>Alarms Over Email And SMS</li>
            <li>Alarm History And Reset Reports</li>
            <li>Manage Thousands Of Generators On A Single Platform.</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="sub_head-text">Value Proposition</div>
      <br />
      <div className="p-tex">Delivers unique values and seamless benefits</div>

      <ul className="features-list">
        <li>
          <span className="bold-text:">Enhanced Security:</span>Enhanced
          Security
        </li>
        <li>
          <span className="bold-text:">Minimize OPEX:</span>Predictive
          maintenance of DGs can pave the way for reduced maintenance cost and
          operating expenses
        </li>
        <li>
          <span className="bold-text:">Predictive maintenance:</span>Provide
          timely advice to ON/OFF the DGs if it is under-utilized or
          over-utilized for a period of time
        </li>
        <li>
          <span className="bold-text:">High Value Data Analytics: </span>Various
          patterns can be obtained and reported:
          <br />
          <ul className="features-list">
            <li>Fuel Pattern</li>
            <li>Load Pattern</li>
            <li>Uptime/Downtime</li>
            <li>Uptime/Downtime</li>
          </ul>
        </li>
        <li>
          <span className="bold-text:">Reduced fuel bills: </span>Significantly
          reduce the DG fuel bill by avoiding:
          <ul className="features-list">
            <li>Fuel Wastage</li>
            <li>Fuel Theft</li>
            <li>Fuel Pilferage</li>
          </ul>
        </li>
        <li>
          <span className="bold-text:">Ensure Optimal Load: </span> Maintaining
          optimal load for DG is critical.
          <ul className="features-list">
            <li>Less optimal load results in carbon buildup inside the DG</li>

            <li>Overloading reduces its efficiency</li>
          </ul>
        </li>
      </ul>

      <ButtonBookDemo />
    </div>
  );
};

export default UPSMonitoring;
