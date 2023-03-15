import "../productsLists.css";

import { cctvSystemData } from "../../../Data/ProductsData";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import EnterpriseStorage from "./cctvSystemProducts/EnterpriseStorage";
import AdvancedAIBased from "./cctvSystemProducts/AdvancedAIBased";

import CctvCamera from "./cctvSystemProducts/CctvCamera";
import CctvMonitoring from "./cctvSystemProducts/CctvMonitoring";
import ESurveillancePanel from "./cctvSystemProducts/ESurveillancePanel";
import CctvAuditing from "./cctvSystemProducts/CctvAuditing";

const CctvSystem = () => {
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
          <HashLink smooth to="/productCategory/cctv-system/#CategoryProduct">
            <TabList className="productCategories-cards">
              {cctvSystemData.map((item, index) => (
                <Tab key={index} className="productCategories-card">
                  <img src={item.icon} alt="product" />
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
          <CctvCamera />
        </TabPanel>
        <TabPanel>
          <EnterpriseStorage />
        </TabPanel>
        <TabPanel>
          <CctvMonitoring />
        </TabPanel>
        <TabPanel>
          <CctvAuditing />
        </TabPanel>
        <TabPanel>
          <AdvancedAIBased />
        </TabPanel>
        <TabPanel>
          <ESurveillancePanel />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default CctvSystem;
