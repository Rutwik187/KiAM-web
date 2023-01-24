import React from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import "./dummyHero.css";

const DummyHero = () => {
  return (
    <div>
      <Tabs>
        <div className="tablist">
          <TabList>
            <Tab>
              <p>Title 1</p>
            </Tab>
            <Tab>
              <p>Title 2</p>
            </Tab>
            <Tab>
              <p>Title 3</p>
            </Tab>
            <Tab>
              <p>Title 4</p>
            </Tab>
            <Tab>
              <p>Title 5</p>
            </Tab>
          </TabList>
        </div>
        <div className="tab-pannel">
          <TabPanel>
            <div className="panel-content">
              <h2>Any content 1</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Any content 2</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Any content 3</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Any content 4</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Any content 5</h2>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};
export default DummyHero;
