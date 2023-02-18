import "./securityCategory.css";
import AccessController from "./securityProducts/AccessController";
import { securityData } from "../../../Data/ProductsData";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TimeAttendance from "./securityProducts/TimeAttendance";
import Biometric from "./securityProducts/Biometric";
import AccessCard from "./AccessCard";
import ElectrionicCards from "./securityProducts/ElectrionicCards";
import VisitorManagement from "./securityProducts/VisitorManagement";
import LiftAccessControl from "./securityProducts/LiftAccessControl";
import DoorInterLocking from "./securityProducts/DoorInterLocking";

import { HashLink } from "react-router-hash-link";

const SecurityCategory = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={currentTabIndex} onSelect={setCurrentTabIndex}>
      <div className="products__tabs app__container section-shadow">
        <div className="products__tabs-head">
          <div className="sub_head-text">Select Product</div>
          <button className="button">Show Category</button>
        </div>
        <div className="products__tabs-body">
          <HashLink smooth to="/productCategory/security#CategoryProduct">
            <TabList className="productCategories-cards">
              {securityData.map((item, index) => (
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
          <AccessController />
        </TabPanel>
        <TabPanel>
          <TimeAttendance />
        </TabPanel>
        <TabPanel>
          <Biometric />
        </TabPanel>
        <TabPanel>
          <AccessCard />
        </TabPanel>
        <TabPanel>
          <ElectrionicCards />
        </TabPanel>
        <TabPanel>
          <VisitorManagement />
        </TabPanel>
        <TabPanel>
          <LiftAccessControl />
        </TabPanel>
        <TabPanel>
          <DoorInterLocking />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default SecurityCategory;
