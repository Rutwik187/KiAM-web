import energySaving1 from "../../../assets/services-img/energy-saving-1.jpg";
import energySaving2 from "../../../assets/services-img/energy-saving-2.jpg";
import energySaving3 from "../../../assets/services-img/energy-saving-3.jpg";

import specifications1 from "../../../assets/services-img/sensor_based_gateway.jpg";
import specifications2 from "../../../assets/services-img/controller_based_gateway.jpg";
import specifications3 from "../../../assets/services-img/ethernet_based_gateway.jpg";

const EnergySavingServices = () => {
  return (
    <div>
      <div className="head-text">Energy Saving Services</div>
      <hr className="hr" />
      <div className="sub_head-text">IOT Gateway</div>
      <br />
      <div className="p-text">
        IoT gateway is an electronic or embedded device that acts as a bridge
        between on-site devices/equipments like sensors/loggers/ programmable
        controllers and server hosted on-site or in the cloud. The number of
        interfaces gateway supports typically determines the type and number of
        on-site devices it can be interfaced with and also its applications or
        end usage.
      </div>
      <ul className="features-list">
        <li>
          Supports interfaces like BLE, Wi-FI, Ethernet and Bluetooth.
          Additionally, interfaces like ZigBee or any particular interfaces can
          be provided if required. In general the gateway design is flexible
          enough to customize it to accommodate client requirements.
        </li>
        <li>
          Can be connected with data Loggers, energy meters, and programmable
          logic controllers (PLC) over serial or Ethernet interface using
          communication protocols like Modbus, BACNet or proprietary protocols
          (if protocol document is available/provided)
        </li>
        <li>
          Can communicate with Analog/Digital Sensor Hubs where individual
          sensors (temperature, pressure, flow) are aggregated and connected
          with Gateway over serial bus (SPI) or I2C.
        </li>
      </ul>
      <br />
      <div className="p-text">
        Equally important is Gateway’s ability to compute and communicate with
        servers/platforms. Gateway offers enough space and computing power to
        implement analytics. It supports MQTT, HTTP (REST) and TCP-IP to
        communicate with, cloud platforms like AWS, Microsoft Azure and others.
      </div>

      <br />
      <div className="sub_head-text">Controller interface GSM Gateway</div>
      <br />
      <div className="product__tablist-product-img-features-cards">
        <div className="product__tablist-product-img-features-card">
          <img src={energySaving1} alt="product" />
          <div className="p-text">Controller interface GSM Gateway</div>
        </div>
        <div className="product__tablist-product-img-features-card">
          <img src={energySaving2} alt="product" />
          <div className="p-text">Sensor interface GSM gateway</div>
        </div>
        <div className="product__tablist-product-img-features-card">
          <img src={energySaving3} alt="product" />
          <div className="p-text">Ethernet Gateway</div>
        </div>
      </div>

      <br />
      <div className="sub_head-text">Applications</div>
      <div className="division">
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>Diesel Genset</li>
            <li>HV Chillers</li>
            <li>Compressor</li>
          </ul>
        </div>
        <div style={{ flex: 3 }}>
          <ul className="features-list">
            <li>Backhoe</li>
            <li>Energy Meters</li>
            <li>Gear Box</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnergySavingServices;
