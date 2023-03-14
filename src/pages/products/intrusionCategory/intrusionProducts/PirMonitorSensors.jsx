import React from "react";
import { images } from "../../../../constants";
import "../intrusion.css";
import { HashLink } from "react-router-hash-link";

const PirMonitorSensors = () => {
  return (
    <>
      <div className="head-text">PIR Motion Sensors</div>
      <hr className="hr" />
      <div className="p-text">
        Passive infrared sensors (PIR) are motion detectors that open the output
        relay contacts to generate an alarm signal, when an intruder in a secure
        location is detected. PIR can has curtain or volumetric type of
        detection zone.
      </div>
      <br />
      <div className="p-text">
        You can find following products :{" "}
        <HashLink smooth to="/productCategory/intrusion#Pyrone-4i">
          PYRONE-4i
        </HashLink>{" "}
        ,{" "}
        <HashLink smooth to="/productCategory/intrusion#Pyrone-4-v1">
          PYRONE-4 Vers.1
        </HashLink>{" "}
        ,
        <HashLink smooth to="/productCategory/intrusion#Steklo-2">
          STEKLO-2
        </HashLink>{" "}
        ,{" "}
        <HashLink smooth to="/productCategory/intrusion#SH-VTG">
          SH-VTG
        </HashLink>
      </div>
      <br />

      {/* Pyrone-4i */}

      <div id="Pyrone-4i" className="sub_head-text">
        PYRONE-4i
      </div>
      <div className="division">
        <div style={{ flex: 1 }}>
          <img
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            src={images.pyrone4i}
            alt=""
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="sub_head-text">Features:</div>
          <ul className="features-list p-text">
            <li>Wide angle with PET immunity up to 20 kg</li>
            <li className="p-text">Digital temperature compensation</li>
            <li className="p-text">Ttamper protection</li>
            <li className="p-text">Sensitivity adjustment</li>
            <li className="p-text">
              Alarm output: energized Form A (NC) relay
            </li>
            <li className="p-text">Swivel bracket supplied</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="sub_head-text">Specifications:</div>
      <br />
      <table>
        <tr>
          <td>Maximum detection range</td>
          <td> 10 m</td>
        </tr>
        <tr>
          <td>Mounting height</td>
          <td> 2.3m</td>
        </tr>
        <tr>
          <td>Power supply, V DC</td>
          <td> 8 - 30 V DC</td>
        </tr>
        <tr>
          <td>Current consumption, max</td>
          <td>12mA </td>
        </tr>
        <tr>
          <td>IP rating</td>
          <td>IP41</td>
        </tr>
        <tr>
          <td>Operating temperature</td>
          <td> -30 - +50° C</td>
        </tr>
        <tr>
          <td>Dimensions</td>
          <td> 90x60x50 mm</td>
        </tr>
      </table>
      <br />
      <button className="button app__flex">Pyrone 4i Guide</button>

      <br />
      <br />

      {/*  PYRONE-4 Vers.1*/}
      <div id="Pyrone-4-v1" className="sub_head-text">
        PYRONE-4 Vers.1
      </div>
      <br />
      <div className="p-text">
        Designed to detect intrusion in the protected indoor area
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            src={images.pyrone4v1}
            alt=""
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="sub_head-text">Features:</div>
          <br />
          <ul className="features-list p-text">
            <li>Three models varying by lens type:</li>
            <ul className="features-list p-text">
              <li>Pyrone-4: wide angle</li>
              <li>Pyrone-4B: vertical curtain,</li>
              <li>
                Pyrone-4D: pet immunity to the animals with weight up to 20 kg
                (cats and smooth-haired dogs).
              </li>
            </ul>
          </ul>
          <ul className="features-list p-text">
            <li>
              Spherical lens providing the field of view without any deviations,
              high capturing capability and look down zones building
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <ul className="features-list p-text">
            <li>Discrete adjustment of detect ability</li>
            <li>Bug guard</li>
            <li>Power supply 8-30V DC</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul className="features-list p-text">
            <li>Microprocessor signal analysis</li>
            <li>Energized Form A (NC) alarm relay</li>
            <li>Bracket for additional order</li>
          </ul>
        </div>
      </div>

      <br />
      <div className="sub_head-text">Specifications:</div>
      <br />
      <table>
        <tr>
          <th>Detection range:</th>
        </tr>
        <tr>
          <td>Pyrone-4</td>
          <td> 12 m</td>
        </tr>
        <tr>
          <td>Mounting height</td>
          <td> 10m</td>
        </tr>
        <tr>
          <td>Power supply, V DC</td>
          <td> 8 - 30 V DC</td>
        </tr>
        <tr>
          <td>Current consumption, max</td>
          <td> 12mA</td>
        </tr>
        <tr>
          <td>IP rating</td>
          <td> 1IP41</td>
        </tr>
        <tr>
          <td>Operating temperature</td>
          <td> -30 - +50° C</td>
        </tr>
        <tr>
          <td>Dimensions</td>
          <td> 90x60x50 mm</td>
        </tr>
      </table>
      <br />
      <button className="button app__flex">Pyrone 4i Guide</button>
      <br />
      <br />

      {/* steklo-2 */}
      <div id="Steklo-2" className="sub_head-text">
        STEKLO-2
      </div>

      <div className="p-text">Glass break detector</div>
      <div className="division">
        <div style={{ flex: 1 }}>
          <img
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            src={images.steklo2}
            alt=""
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="sub_head-text">Features:</div>
          <ul className="features-list p-text">
            <li>
              Detecting destruction of the following types of construction
              glasses: common, quenched, patterned, armored, multilayer and
              protected with polymer tape (laminated), glass hollow blocks
            </li>
            <li className="p-text">Detector is powered via the loop</li>
            <li className="p-text">Adjustable sensitivity</li>
            <li className="p-text">Testing mode</li>
            <li className="p-text">
              Generation of alarm signals by increase of current consumption
            </li>
            <li className="p-text">Swivel bracket supplied</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="sub_head-text">Specifications:</div>
      <br />
      <table>
        <tr>
          <td>Detection range</td>
          <td> 6 m</td>
        </tr>
        <tr>
          <td>Minimum controlled glass area</td>
          <td> 0,1 m2</td>
        </tr>
        <tr>
          <td>Power supply, V DC</td>
          <td> 15 - 30 V DC</td>
        </tr>
        <tr>
          <td>Current consumption in standby mode, max</td>
          <td>1mA </td>
        </tr>
        <tr>
          <td>Current consumption</td>
          <td>12mA </td>
        </tr>
        <tr>
          <td>IP rating</td>
          <td>IP30</td>
        </tr>
        <tr>
          <td>Operating temperature</td>
          <td>-20 - +45° С</td>
        </tr>
        <tr>
          <td>Dimensions</td>
          <td> 80x80x35 mm</td>
        </tr>
      </table>
      <br />
      <button className="button app__flex">STEKLO-2</button>

      <br />
      <br />

      {/* SH-VTG */}

      <div id="SH-VTG" className="sub_head-text">
        SH-VTG
      </div>
      <br />
      <div className="p-text">
        ATM security vibration, Tilt and Gas detector
      </div>
      <div className="p-text">
        Triple technology seismic vibration & tilt & gas detector
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img
            style={{ borderRadius: "10px", maxWidth: "100%" }}
            src={images.shvtg}
            alt=""
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="sub_head-text">Features:</div>
          <ul className="features-list p-text">
            <li>
              Detects attempts of break-in and theft of ATMs, safes and other
              bank protection equipment
            </li>
            <li className="p-text">
              Controls the changing of the detectors tilt relative to its
              initial position
            </li>
            <li className="p-text">
              Wide range of detectable attacks, such as thermal lance, acetylene
              torch, drilling, diamond drill, electric cutting, hammers,
              chisels, explosion, etc.
            </li>
            <li className="p-text">
              Detection of flammable gases pre-explosive concentration (10% of
              dangerous density)
            </li>
            <li className="p-text">Cover tamper output</li>
            <li className="p-text">Wall tamper output</li>
            <li className="p-text">
              Alarm output: energized Form A two NC relays
            </li>
            <li className="p-text">PC configuration</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="sub_head-text">Specifications:</div>
      <br />
      <table>
        <tr>
          <td>Detection range</td>
          <td> 6 m</td>
        </tr>
        <tr>
          <td>Minimum controlled glass area</td>
          <td> 0,1 m2</td>
        </tr>
        <tr>
          <td>Power supply, V DC</td>
          <td> 15 - 30 V DC</td>
        </tr>
        <tr>
          <td>Current consumption in standby mode, max</td>
          <td>1mA </td>
        </tr>
        <tr>
          <td>Current consumption </td>
          <td>12mA </td>
        </tr>
        <tr>
          <td>IP rating</td>
          <td>IP30</td>
        </tr>
        <tr>
          <td>Operating temperature</td>
          <td>-20 - +45° С</td>
        </tr>
        <tr>
          <td>Dimensions</td>
          <td> 80x80x35 mm</td>
        </tr>
      </table>
      <br />
      <button className="button app__flex">STEKLO-2</button>

      <br />
      <button style={{ margin: "auto" }} className="button app__flex">
        Book A Demo
      </button>
    </>
  );
};

export default PirMonitorSensors;
