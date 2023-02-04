import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { images } from "../../constants";

import Data from "./data.json";
import "./aboutUs.css";

const Maps = () => {
  const icon = new Icon({
    iconUrl: images.redDot,
    iconSize: [35, 35],
  });
  //   const [activePark, setActivePark] = useState(null);
  return (
    <MapContainer
      center={[20.593683, 78.962883]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {Data.map((data) => (
        <Marker
          onClick={() => {
            // setActivePark(park);
            console.log("hi");
          }}
          key={data.Id}
          position={[data.Latitude, data.Longitude]}
          icon={icon}
        >
          <Popup>
            <div className="maps_popup">
              <img className="shop-img" src={images.PNGJwellers} alt="shop" />
              <div className="maps_popup-title">
                PNG Jewellery, {data.Location}
              </div>
              <hr />
              {/* <div className="p-text">Project</div> */}

              <div className="p-text">
                Security for jewellery store. <br />
                CCTC, 24/7 Monitoring, intrusion panel
              </div>
              <div className="maps_popup-services">
                <img src={images.totalMonitoring} alt="total monitoring" />
                <img src={images.cctv} alt="cctv" />
                <img
                  src={images.instructionalPanel}
                  alt="instructional Panel"
                />
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
