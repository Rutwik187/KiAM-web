import "../productsLists.css";
import AtmSensors from "./intrusionProducts/AtmSensors";
import BranchMonitoring from "./intrusionProducts/BranchMonitoring";
import IntegratedSecurityPanel from "./intrusionProducts/IntegratedSecurityPanel";
import PirMonitoringSensors from "./intrusionProducts/PirMonitorSensors";
import PerimeterIntrusionSensors from "./intrusionProducts/PerimeterIntrusionSensors";
import SensorsForBank from "./intrusionProducts/SensorsForBanks";
import { intrusionData } from "../../../Data/ProductsData";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const Intrusion = () => {
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
          <HashLink smooth to="/productCategory/intrusion#CategoryProduct">
            <TabList className="productCategories-cards">
              {intrusionData.map((item, index) => (
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
          <BranchMonitoring />
        </TabPanel>
        <TabPanel>
          <SensorsForBank />
        </TabPanel>
        <TabPanel>
          <AtmSensors />
        </TabPanel>
        <TabPanel>
          <PerimeterIntrusionSensors />
        </TabPanel>
        <TabPanel>
          <PirMonitoringSensors />
        </TabPanel>
        <TabPanel>
          <IntegratedSecurityPanel />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Intrusion;
