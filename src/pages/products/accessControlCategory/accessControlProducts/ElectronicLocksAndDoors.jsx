import React from "react";
import { accessControlData } from "../../../../Data/ProductsData";

const ElectronicLocksAndDoors = () => {
  return (
    <div className="products__tabList">
      {accessControlData.slice(4, 5).map((item, index) => (
        <div key={index}>
          <div className="head-text">{item.title}</div>
          <hr className="hr" />
          <div className="red-text">{item.subTitle1}</div>
          <ul>
            {item.desc1Points.map((point, index) => (
              <li className="p-text" key={index}>
                {point}
              </li>
            ))}
          </ul>

          <div className="products__tablist-img-points">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <img src={item.img} alt="access control" />
              <div className="p-text">{item.imgDesc}</div>
            </div>
            <div>
              <div className="red-text">{item.subTitle2}</div>
              <ul>
                {item.desc2Points.map((point, index) => (
                  <li className="p-text" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="red-text">{item.subTitle3}</div>
          <div className="p-text">{item.desc3}</div>
          <ul>
            {item.desc3Points.map((point, index) => (
              <li className="p-text" key={index}>
                {point}
              </li>
            ))}
          </ul>
          <img
            style={{
              padding: "2rem",
              border: "2px solid red",
              margin: "2rem auto",
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            src={item.architectureImg}
            alt="architecture"
          />
          <div className="red-text">{item.subtitle4}</div>
          <ul>
            {item.notesDesc.map((point, index) => (
              <li className="p-text" key={index}>
                {point}
              </li>
            ))}
          </ul>

          <br />
          <br />
          <div className="red-text">{item.subtitle5}</div>
          <div
            className="architecture-flex"
            style={{ display: "flex", gap: "1rem" }}
          >
            <div
              style={{
                flex: "1",
                paddingRight: "1rem",
                borderRight: "2px solid grey",
              }}
            >
              <div className="red-text">End User</div>
              <ul>
                {item.endUser.map((point, index) => (
                  <li className="p-text" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: "1" }}>
              <div className="red-text">Client User</div>
              <ul>
                {item.clientUser.map((point, index) => (
                  <li className="p-text" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <br />
          <br />
          <div className="red-text">{item.subtitle6}</div>
          <ul>
            {item.partnerDesc.map((point, index) => (
              <li className="p-text" key={index}>
                {point}
              </li>
            ))}
          </ul>
          <div className="red-text">{item.subtitle7}</div>
          <ul>
            {item.serviceDesc.map((point, index) => (
              <li className="p-text" key={index}>
                {point}
              </li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <img
              style={{
                padding: "2rem",
                border: "2px solid red",
                margin: "1rem auto",
                maxWidth: "100%",
              }}
              src={item.systemImg}
              alt="systemImg"
            />
            <div className="p-text">{item.systemImgDesc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElectronicLocksAndDoors;
