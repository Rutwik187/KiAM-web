import React from "react";
import Testimonials from "../../components/testimonials.jsx/Testimonials";
import ServicesInfo from "./servicesInfo/ServicesInfo";
import TechPartners from "../../components/techPartners/TechPartners";

const Services = () => {
  return (
    <div>
      <ServicesInfo />
      <Testimonials />
      <TechPartners />
    </div>
  );
};

export default Services;
