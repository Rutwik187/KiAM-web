import "../productsLists.css";

import { energyMonitoringData } from "../../../Data/ProductsData";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { HashLink } from "react-router-hash-link";
import SmartMetering from "./energyMonitoringProducts/SmartMetering";
import SmartHVAC from "./energyMonitoringProducts/SmartHVAC";
import LightControl from "./energyMonitoringProducts/LightControl";
import UPSMonitoring from "./energyMonitoringProducts/UPSMonitoring";
import { Link } from "react-router-dom";

const EnergyMonitoring = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={currentTabIndex} onSelect={setCurrentTabIndex}>
      <div className="products__tabs app__container section-shadow">
        <div className="products__tabs-head">
          <div className="sub_head-text">Select Product</div>
          <Link to="/productCategory">
            <button className="button">Show Category</button>
          </Link>
        </div>
        <div className="products__tabs-body">
          <HashLink
            smooth
            to="/productCategory/energy-monitoring#CategoryProduct"
          >
            <TabList className="productCategories-cards">
              {energyMonitoringData.map((item, index) => (
                <Tab
                  key={index}
                  className="productCategories-card specificProduct-card"
                >
                  {/* <img src={item.icon} alt="product" /> */}
                  <div className="productCategories-card-textInfo">
                    <h5>{item.title}</h5>
                  </div>
                </Tab>
              ))}
            </TabList>
          </HashLink>
        </div>
      </div>
      <div className="app__container" id="CategoryProduct">
        <TabPanel>
          <SmartMetering />
        </TabPanel>
        <TabPanel>
          <SmartHVAC />
        </TabPanel>
        <TabPanel>
          <LightControl />
        </TabPanel>
        <TabPanel>
          <UPSMonitoring />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default EnergyMonitoring;
