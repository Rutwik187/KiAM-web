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
            <div className="map-pop-up">
              {/* <h1>{data.Location}</h1>
              <p>Total cases: {data.Total_Cases}</p>
              <p>New cases (1 day*): {data.New_Cases_Per_Day}</p>
              <p>
                Cases per 1 million people: {data.Cases_Per_1_Million_People}
              </p>
              <p>Deaths: {data.Deaths}</p> */}
              <div className="sub_head-text">
                PNG Jewellery, {data.Location}
              </div>
              <hr className="hr" />
              <div className="p-text">CK Store, Mumbai</div>
              <hr className="hr" />
              <div className="p-text">sales: {data.Deaths}</div>
              <hr className="hr" />
              <div className="p-text">ICICI, Ghansoli, Mumbai</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
