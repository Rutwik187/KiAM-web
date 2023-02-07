import React from "react";

import ServicesInfo from "./servicesInfo/ServicesInfo";
import TechPartners from "../../components/techPartners/TechPartners";

const Services = () => {
  return (
    <div>
      <ServicesInfo className="white-bg" />

      <TechPartners />
    </div>
  );
};

export default Services;
