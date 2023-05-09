import React from "react";
import "./kiamManagement.css";
import CountUp from "react-countup";

import profile1 from "../../../assets/pankaj_sir_profile.png";
import profile2 from "../../../assets/sheetal_map_profile.png";
import profile3 from "../../../assets/milind_sir_profile.png";

const KiamManagement = () => {
  return (
    <div className="KiamManagement">
      <div className="KiamManagement_TagLine app__container">
        <div className="head-text ">KIAM</div>
        <div className="sub_head-text">
          we create an unbeatable, unique experience in technology
        </div>
      </div>
      <div className="KiamManagement_Numbers app__container">
        <div className="KiamManagement_Number">
          <div
            style={{ fontSize: "1.3rem" }}
            className="p-text 
        "
          >
            Retail Store
          </div>
          <div className="sub_head-text bold-text">
            <CountUp
              end={1500}
              start={1000}
              duration={5}
              delay={0}
              suffix={"+"}
            />
          </div>
        </div>
        <div className="KiamManagement_Number">
          <div
            style={{ fontSize: "1.3rem" }}
            className="p-text 
        "
          >
            Warehouse
          </div>
          <div className="sub_head-text bold-text">
            <CountUp end={30} start={3} duration={5} delay={0} suffix={"+"} />
          </div>
        </div>
        <div className="KiamManagement_Number">
          <div
            style={{ fontSize: "1.3rem" }}
            className="p-text 
        "
          >
            Happy Clients
          </div>
          <div className="sub_head-text bold-text">
            <CountUp
              end={3000}
              start={2000}
              duration={5}
              delay={0}
              suffix={"+"}
            />
          </div>
        </div>
        <div className="KiamManagement_Number">
          <div
            style={{ fontSize: "1.3rem" }}
            className="p-text 
        "
          >
            Banks
          </div>
          <div className="sub_head-text bold-text">
            <CountUp
              end={1000}
              start={100}
              duration={5}
              delay={0}
              suffix={"+"}
            />
          </div>
        </div>
        <div className="KiamManagement_Number">
          <div
            style={{ fontSize: "1.3rem" }}
            className="p-text 
        "
          >
            Temple Jio Live
          </div>
          <div className="sub_head-text bold-text">
            <CountUp
              end={1000}
              start={100}
              duration={5}
              delay={0}
              suffix={"+"}
            />
          </div>
        </div>
      </div>

      <div className="kiamManagement_details app__container">
        <div className="kiamManagement_images app__flex-col">
          <div className="kiamManagement_profile">
            <img src={profile1} alt="" className="profile_img" />
            <div className="p-text">PANKAJ ZANWAR</div>
            <div className="p-text">MANAGING DIRECTOR </div>
          </div>
          <div className="kiamManagement_profile">
            <img src={profile2} alt="" className="profile_img" />
            <div className="p-text">SHEETAL ZANWAR</div>
            <div className="p-text">MANAGING DIRECTOR </div>
          </div>
          <div className="kiamManagement_profile">
            <img src={profile3} alt="" className="profile_img" />
            <div className="p-text">MILIND KADAM</div>
            <div className="p-text">MANAGING DIRECTOR </div>
          </div>
        </div>
        <div className="kiamManagement_desc">
          <div className="sub_head-text">
            <b>Who we are ?</b>
          </div>
          <br />
          <div className="p-text">
            <b>
              With an agile approach and outstanding solutions in IT that we
              customize for our clients, we create an unbeatable, unique
              experience in technology
            </b>
          </div>
          <br />
          <div className="p-text">
            Given our years of experience and expertise in niche areas of IT,
            our partnership is an invaluable asset to organizations who choose
            to work with us. We truly understand IT! And that is the foundation
            of how we are driven to deliver the unique experience that our
            clients usually look for.
          </div>
          <br />
          <br />
          <div className="sub_head-text">
            <b>Features</b>{" "}
          </div>
          <br />
          <div className="division">
            <div style={{ flex: 1 }}>
              <ul className="features-list">
                <li>ISO Certified</li>
                <li>Established In 1992</li>
                <li>PAN India Operations</li>
                <li>ISO Certified</li>
                <li>Established In 1992</li>
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <ul className="features-list">
                <li>PAN India Operations</li>
                <li>ISO Certified</li>
                <li>Established In 1992</li>
                <li>PAN India Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KiamManagement;
