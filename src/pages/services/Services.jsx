import React from "react";
import Testimonials from "../../components/testimonials.jsx/Testimonials";
import HomeServices from "../home/homeServices/HomeServices";
import ServicesInfo from "./servicesInfo/ServicesInfo";
import TechPartners from "../../components/techPartners/TechPartners";

const Services = () => {
  return (
    <div>
      <HomeServices />
      <ServicesInfo />
      <Testimonials />
      <TechPartners />
    </div>
  );
};

export default Services;
