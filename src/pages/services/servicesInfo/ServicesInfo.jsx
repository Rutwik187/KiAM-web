import "./ServicesInfo.css";
import { images } from "../../../constants";
import { servicesData } from "../../../Data/servicesData";
import { servicesInfo } from "../../../Data/servicesData";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ServicesInfo = () => {
  return (
    <Tabs className="app__container servicesInfo-container">
      <div className="home_services ">
        {/* <img
        className="home_services_light-red-bg"
        src={images.light_red_bg}
        alt="light red bg"
      /> */}
        <div className="home_services-left">
          <div className="head-text">Services</div>
          <hr />
          <p className="p-text">
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className="button">Know More</button>
          <img
            className="hero_services_dotted-img"
            src={images.dotted_bg}
            alt="dotted background"
          />
        </div>
        <div className="home_services-right app__flex">
          <TabList className="home_services-cards">
            {/* <div className="ball home_services-circle1"></div> */}
            {/* <div className="ball home_services-circle2"></div> */}
            {servicesData.map((item, index) => (
              <Tab key={item.id} className={`${item.id} home_services-card`}>
                <img src={item.img} alt={item.title} />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </Tab>
            ))}
            {/* <button className="button">Know More</button> */}
          </TabList>
        </div>
      </div>
      {servicesInfo.map((item) => (
        <TabPanel key={item.id}>
          <div className="servicesTextInfo">
            <div className="head-text">{item.InfoTitle}</div>
            <hr />
            <div className="p-text">{item.InfoDesc1}</div>
            <br />
            <div className="p-text">{item.InfoDesc2}</div>
          </div>
          <div className="servicesImages">
            <div className="servicesImages-text">
              <img
                className="corner-rectangle"
                src={images.small_corner_rectangle}
                alt="rectangle"
              />

              <div className="servicesImages-sub_text">
                {item.ImgSecSub_Title}
              </div>
              <div className="head-text">{item.ImgSecTitle}</div>
              <hr />
              <div className="p-text">{item.ImgSecDesc}</div>
            </div>
            <div className="servicesImages-gallery">
              {servicesInfo[0].Imgs.map((item, index) => (
                <div
                  className={`servicesImages-gallery${
                    index + 1
                  } servicesImages-gallery-img`}
                  key={item.caption}
                >
                  <img src={item.img} alt={item.caption} />
                  <div className="servicesImages-gallery-caption">
                    {item.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="servicesVideo">
            <div className="servicesVideo-player">
              <img src={item.video} alt="video" />
            </div>
            <div className="servicesVideo-text">
              <img
                className="corner-rectangle"
                src={images.small_corner_rectangle}
                alt="rectangle"
              />
              <div className="head-text">{item.vidTitle}</div>
              <hr />
              <div className="p-text">{item.vidSubTitle}</div>
              <img
                className="services-vid-dotted-bg"
                src={images.dotted_bg_short}
                alt="dotted-bg"
              />
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ServicesInfo;
