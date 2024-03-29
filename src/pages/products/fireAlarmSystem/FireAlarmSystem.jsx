import "../productsLists.css";
import { Link } from "react-router-dom";
import { fireAlarmData } from "../../../Data/ProductsData";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { HashLink } from "react-router-hash-link";
import FirePanels from "./fireAlarmSystemProducts/FirePanels";
import FireSensors from "./fireAlarmSystemProducts/FireSensors";
import FireSeparationSystems from "./fireAlarmSystemProducts/FireSeparationSystems";

const FireAlarmSystem = () => {
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
          <HashLink smooth to="/productCategory/fire-alarm#CategoryProduct">
            <TabList className="productCategories-cards">
              {fireAlarmData.map((item, index) => (
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
          <FirePanels />
        </TabPanel>
        <TabPanel>
          <FireSensors />
        </TabPanel>
        <TabPanel>
          <FireSeparationSystems />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default FireAlarmSystem;
