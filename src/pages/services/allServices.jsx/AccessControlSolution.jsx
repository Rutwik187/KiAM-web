import React from "react";
import solutionImg from "../../../assets/services-img/access-control-soln.jpg";
const AccessControlSolution = () => {
  return (
    <div>
      <div className="head-text">Access Control Solution</div>
      <hr className="hr" />
      <div className="sub_head-text">Access Software</div>
      <br />
      <div className="division">
        <div style={{ flex: 1 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
          ></iframe>
        </div>
        <div style={{ flex: 1 }}>
          <div className="p-text">
            KiAM being authorised reseller of Allegion Plc. - Interflex &
            Schlage in India. KiAM’s Access Control System allows end-users to
            control the entrance and the exit, to prevent theft and maintain
            privacy of different areas in a premise and provides advance access
            management solution.
            <br />
            <br />
            It acts as a security multiplier for Cash Counters, Storage Rooms
            and vault rooms of high value Retail stores, Warehouses, Bank
            branches, and Commercial offices.
            <br />
            <br /> Daily or Weekly Access Reports are generated for analysis of
            authorized and unauthorized transactions.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="sub_head-text">
        Show Graphics With All Access Solutions
      </div>

      <img style={{ width: "100%", margin: "auto" }} src={solutionImg} alt="" />
      <br />
      <div className="sub_head-text">
        Our Capability and Deployment Methodology
      </div>
      <div className="division">
        <ul className="features-list" style={{ flex: 1 }}>
          <li>Solution Provider for Multilocation offices / premises</li>
          <li>
            Eco System developed with in house team . No third party dependency
          </li>
          <li>Ticket management system to manage breakdown calls</li>
          <li>OEM Certification Periodically.</li>
          <li>Spares Availability</li>
        </ul>
      </div>
      <ul className="features-list" style={{ flex: 1 }}>
        <li>24X7 NOCC & Support Centre</li>
        <li>More than 3000+ Installations</li>
        <li>10K + Camera monitored real time @ our NOCC</li>
        <li>AMC & Support Service PAN India</li>
        <li>
          Lab Setup & New Investment done in R&D , Process & OEM Engagements
        </li>
      </ul>
    </div>
  );
};

export default AccessControlSolution;
