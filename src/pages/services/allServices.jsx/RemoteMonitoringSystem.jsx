import React from "react";
import cms from "../../../assets/services-img/remoteMonitoringSystem.jpg";
import bankMonitoring from "../../../assets/services-img/bank-monitoring.jpg";
import bankBranchMonitoring from "../../../assets/services-img/bank-branch-monitoring.jpg";
import bankMonitoringStoring from "../../../assets/services-img/Bank-Branch-Monitoring-large.png";
import kiamEffectiveSoln from "../../../assets/services-img/kiam-effective-solutions.jpg";
import hourlyHearbeatReport from "../../../assets/services-img/hourly_heartbeat_report.jpg";
import monthlyHearbeatReport from "../../../assets/services-img/monthly_heartbeat_report.jpg";
import opexCapex from "../../../assets/services-img/opex-capex.jpg";
import panicAlaram from "../../../assets/services-img/panic-alram.jpg";
import panicAlaramFull from "../../../assets/services-img/panic-alarm-full.jpg";
import guradPetrolSystem from "../../../assets/services-img/guard_petrol_system.jpg";
const RemoteMonitoringSystem = () => {
  return (
    <div>
      <div className="head-text">24 x 7 Centralized Remote Monitoring</div>
      <hr className="hr" />
      <div className="sub_head-text">CMS</div>
      <br />
      <div className="division">
        <div style={{ flex: 2 }}>
          <img style={{ width: " 100%" }} src={cms} alt="" />
        </div>
        <div style={{ flex: 3 }}>
          <div className="p-text">
            KiAM make multi location offices/ premises safe, secure and
            efficient by using unique IoT based integrated solution with 24*7
            monitoring platform. KiAM provides System Integration services, AMC,
            24*7 Centralized Monitoring of alert and notifications from
            different systems like Fire Alarm, Access Control, Biometrics,
            Intrusion alarm, Video Surveillance, Entrance Automation, Guard
            Monitoring, Environmental Parameter Monitoring like Temperature and
            humidity along with Energy monitoring. <br />
            <br />
            Our integrated solutions give you the ability to design and build
            your security and safety systems which works 24*7 and cost optimized
            and easy to use.
          </div>
        </div>
      </div>
      <br />
      <div className="red-text">Centralized Monitoring System Advantages</div>
      <div className="division">
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>
              Get data of all sites/branches/stores and working status (health)
              of instruments
            </li>
            <li>
              Alerts immediately in case of an emergency such as fire, theft
              etc.
            </li>
            <li>Branches/stores open & close status and time</li>
            <li>Easy to analyse the power consumption of all locations</li>
            <li>Power failure update of different locations</li>
            <li>Possible to keep a tap on attendance centrally</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul className="features-list">
            <li>Device active status of all locations</li>
            <li>
              Vendor management (maintenance / housekeeping / security) i.e.
              sending alerts to third party vendors – Service Ticket Management
            </li>
            <li>
              Web-based admin access for viewing various ticket data, task flow,
              and action reports for respective sites
            </li>
            <li>Time and status of branches/stores that are open and closed</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="sub_head-text">Banking Monitoring</div>
      <br />
      <div className="p-text">
        The banking industry in India is a highly regulated sector with strict
        norms from Reserve Bank of India. IoT, AI & ML driven bank and ATM
        security solutions ensure the robust security of valuable assets and
        investments that are prone to various risks. It also helps businesses
        improve operational efficiency for better customer experience.
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <img style={{ width: "100%" }} src={bankMonitoring} alt="" />
        </div>
        <div style={{ flex: 1 }}>
          <div className="bold-text">
            Challenges faced by the banking industry
          </div>
          <ul className="features-list">
            <li>A Fragmented Ecosystem</li>
            <li>Video Retrieval</li>
            <li>Man-guarding</li>
            <li>Blocked Visibility</li>
            <li>Device Health Management</li>
            <li>Energy Management</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="red-text">Bank Monitoring Solutions</div>
      <div className="division">
        <ul style={{ flex: 1 }} className="features-list">
          <li>Uninterrupted Monitoring</li>
          <li>Unified Platform</li>
          <li>Secure Cloud Storage</li>
          <li>Remote Device Management</li>
        </ul>
        <ul style={{ flex: 1 }} className="features-list">
          <li>Actionable Insights</li>
          <li>A Dedicated Command Center</li>
          <li>Minimal Reliability on Human Judgment</li>
          <li>Automatic System Upgrade</li>
        </ul>
      </div>
      <br />
      <br />
      <div className="sub_head-text">Bank Branch Monitoring</div>

      <div className="red-text">
        Remote Management And E-Surveillance For Bank Branches Monitoring
      </div>

      <div className="division">
        <div style={{ flex: 2 }}>
          <img style={{ width: "100%" }} src={bankBranchMonitoring} alt="" />
        </div>
        <div className="p-text" style={{ flex: 2 }}>
          Security of high-value BFSI assets tracking is extremely critical. The
          loss of infrastructural services like electricity, cooling, UPS,
          batteries, or failure of other backup systems, especially in banks,
          would affect business continuity that could cause damages worth
          hundreds of thousands of dollars. <br /> <br />
          KiAM IoT solution for banking warrants asset security and performance,
          and minimizes energy inefficiency and equipment downtime, while
          reducing costs.
        </div>
      </div>
      <br />
      <div className="red-text">Benefits of Remote Management</div>
      <div className="division">
        <ul className="features-list" style={{ flex: 1 }}>
          <li>Up To 20% Energy Savings</li>
          <li>Higher Infrastructure Uptime</li>
        </ul>
        <ul className="features-list" style={{ flex: 1 }}>
          <li>Enhanced Equipment Health</li>
          <li>Smart Asset And Personnel Security</li>
        </ul>
      </div>
      <br />
      <img style={{ width: "100%" }} src={bankMonitoringStoring} alt="" />
      <br />
      <br />
      <br />
      <div className="sub_head-text">
        Fire Alarm, Intrusion Alarm Alert Monitoring
      </div>
      <div className="p-text">
        Detecting a fire early can mean the difference between losing everything
        and keeping loss and damage to a minimum.
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3UyeG0ch45Q?autoplay=1&mute=1"
          ></iframe>
        </div>
        <div style={{ flex: 1 }}>
          <div className="p-text">
            Few Months after installation Fire alarm and Fighting systems are
            most ignored systems and most of the time these systems are not
            working when required.
            <br />
            <br />
            Our fire monitoring system entails remote monitoring of fire, smoke
            alarm, and system health by connecting fire panels to IoT network
            connective devices and pushing data to cloud hosted software, with a
            24*7 centralised monitoring station providing quick responses.
          </div>
        </div>
      </div>
      <br />
      <img style={{ width: "100%" }} src={kiamEffectiveSoln} alt="" />
      <br />
      <br />
      <div className="sub_head-text">System health check and reporting</div>
      <br />
      <div className="p-text">
        KiAM provides System Integration services, AMC, 24*7 Centralized
        Monitoring of alert and notifications from different systems like Fire
        Alarm, Access Control, Biometrics, Intrusion alarm, Video Surveillance,
        Entrance Automation, Guard Monitoring, Environmental Parameter
        Monitoring like Temperature and humidity along with Energy monitoring.
      </div>
      <div className="red-text">Full system health monitoring</div>

      <ul className="features-list" style={{ flex: 1 }}>
        <li>Health data updated every 15 minutes</li>
        <li>Dashboard to show health on monthly and daily basis</li>
        <li>Ensured system and up and running and actions are taken</li>
      </ul>
      <div className="red-text">Hourly Heartbeat Report</div>
      <img style={{ width: "100%" }} src={hourlyHearbeatReport} alt="" />
      <br />
      <br />
      <div className="red-text">Monthly Heartbeat Report</div>
      <img style={{ width: "100%" }} src={monthlyHearbeatReport} alt="" />

      <br />
      <br />
      <br />
      <div className="sub_head-text">
        Rental OPEX based services (3 year contract)
      </div>
      <br />
      <div className="division">
        <div style={{ flex: 2 }}>
          <img style={{ width: "100%" }} src={opexCapex} alt="" />
        </div>
        <div style={{ flex: 3 }}>
          <div className="p-text">
            CAPEX (CAPital EXpense) – is the money an organization or corporate
            entity spends to buy, maintain, or improve its fixed assets, such as
            buildings, vehicles, equipment, or land. <br /> <br />
            OPEX (OPerating EXpense) – is an ongoing cost for running a product,
            business, or system
          </div>
        </div>
      </div>
      <br />
      <div className="red-text">Opex Benifits</div>
      <ul className="features-list">
        <li>
          <b>Cost-cutting:</b> It’s not necessary to invest in advance a large
          amount of money, and this can become of fundamental importance when
          you have a small budget; moreover, the capital saved can be invested
          to finance long-term initiatives that can translate into higher
          profits
        </li>
        <li>
          <b>Flexibility:</b> There is no need to invest large amounts today to
          make sure you meet requirements that will come out in two years; you
          can start with a small investment, expand the system when needed (or
          reduce it once the subscription period is over) or even stop or
          replace a service if it doesn’t offer what you need. You will never
          get stuck with the amortization of resources that you no longer use.
        </li>
        <li>
          <b>Predictability:</b> Since you do not pay to buy an asset but for
          its use, the supplier must continue to provide a level of
          product/service performance based on the agreements made.
        </li>
        <li>
          <b>Other advantages: </b> It’s worth mentioning that the transition to
          the Opex model implies other advantages and optimizations.
        </li>
      </ul>
      <br />
      <div className="sub_head-text">Panic Alarm Monitoring</div>
      <br />
      <div className="division">
        <div style={{ flex: 2 }}>
          <img style={{ width: "100%" }} src={panicAlaram} alt="" />
        </div>
        <div style={{ flex: 3 }}>
          <div className="p-text">
            <b>Wireless panic alarm system</b> is a full proof method to alert
            in case of any emergency situations. <br /> <br />
            The alarm system consists of panic buttons and sirens. These panic
            button located at various strategic locations in premises or in
            mobile with various staff on duty. <br />
            <br />
            Wireless panic alarm systems are well developed as per latest
            technology trends that ensure to benefit the client business and
            their customers as well.
            <br />
          </div>
        </div>
      </div>
      <br />
      <div className="red-text">Advantages of wireless panic alarm system</div>
      <div className="division">
        <ul className="features-list" style={{ flex: 1 }}>
          <li>Handle panic situations.</li>
          <li>Avoid accidents.</li>
          <li>Discrete communication</li>
          <li>Wireless installation</li>
        </ul>

        <ul className="features-list" style={{ flex: 1 }}>
          <li>Modular & flexible systems</li>
          <li>Low maintenance cost system</li>
          <li>Technology oriented and user friendly</li>
        </ul>
      </div>
      <br />
      <img src={panicAlaramFull} style={{ width: "100%" }} alt="" />
      <br />
      <br />
      <br />
      <div className="sub_head-text">Guard Patrolling</div>
      <br />
      <div className="division">
        <div style={{ flex: 2 }}>
          <img style={{ width: "100%" }} src={guradPetrolSystem} alt="" />
        </div>
        <div style={{ flex: 3 }}>
          <div className="red-text">Applicable In:</div>
          <ul className="features-list">
            <li>Security Companies</li>
            <li>Educational Institute</li>
            <li>Warehouses</li>
            <li>Manufacturing Facilities</li>
            <li>Cleaning & maintenance services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RemoteMonitoringSystem;
