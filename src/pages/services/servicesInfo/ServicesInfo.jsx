import "./ServicesInfo.css";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../../constants";
import { servicesData } from "../../../Data/servicesData";
import { HashLink } from "react-router-hash-link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useParams } from "react-router-dom";
import Testimonials from "../../../components/testimonials/Testimonials";

import AccessControlSolution from "../allServices.jsx/AccessControlSolution";
import EnergySavingServices from "../allServices.jsx/EnergySavingServices";
import RemoteMonitoringSystem from "../allServices.jsx/RemoteMonitoringSystem";
import AMCServices from "../allServices.jsx/AMCServices";

const ServicesInfo = ({ className }) => {
  let { tabId } = useParams();

  if (typeof tabId === "undefined") {
    tabId = 0;
  }

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTabIndex(Number(tabId));
  }, [tabId]);

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className=" servicesInfo-container "
    >
      <div className="home_services-white app__container ">
        <img
          className="home_services_light-red-bg"
          src={images.light_red_bg}
          alt="light red bg"
        />

        <div className="home_services-left">
          <div className="head-text">Services</div>
          <hr />
          <p className="p-text">
            We build ready made websites, mobile applications, and elaborate
            online business services.
          </p>
          {/* <button className="button">Know More</button> */}
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
                <HashLink smooth to={`/services#${item.id}`}>
                  <img src={item.img} alt={item.title} />
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </HashLink>
              </Tab>
            ))}
            {/* <button className="button">Know More</button> */}
          </TabList>
        </div>
      </div>

      <TabList className="home_services-side-cards">
        {servicesData.map((item, index) => (
          <Tab key={index} className="home_services-side-card">
            <HashLink smooth to={`/services#${item.id}`}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </HashLink>
          </Tab>
        ))}
      </TabList>
      <div className="services-details">
        <TabPanel>
          <div id="home_service_card-1">
            <EnergySavingServices />
          </div>
        </TabPanel>

        <TabPanel>
          <div id="home_service_card-2">
            <AMCServices />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="home_service_card-3">
            <AccessControlSolution />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="home_service_card-4">
            <RemoteMonitoringSystem />
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default ServicesInfo;
