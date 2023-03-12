import "./accessControl.css";
import AccessController from "./accessControlProducts/AccessController";
import { accessControlData } from "../../../Data/ProductsData";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TimeAttendance from "./accessControlProducts/TimeAttendance";
import Biometric from "./accessControlProducts/Biometric";
import AccessCard from "./accessControlProducts/AccessCard";
import ElectronicLocksAndDoors from "./accessControlProducts/ElectronicLocksAndDoors";
import VisitorManagement from "./accessControlProducts/VisitorManagement";
import LiftAccessControl from "./accessControlProducts/LiftAccessControl";
import DoorInterLocking from "./accessControlProducts/DoorInterLocking";

import { HashLink } from "react-router-hash-link";

const AccessControl = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={currentTabIndex} onSelect={setCurrentTabIndex}>
      <div className="products__tabs app__container section-shadow">
        <div className="products__tabs-head">
          <div className="sub_head-text">Select Product</div>
          <button className="button">Show Category</button>
        </div>
        <div className="products__tabs-body">
          <HashLink smooth to="/productCategory/access-control#CategoryProduct">
            <TabList className="productCategories-cards">
              {accessControlData.map((item, index) => (
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
          <ElectronicLocksAndDoors />
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

export default AccessControl;
