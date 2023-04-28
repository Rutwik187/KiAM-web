import Navbar from "../../components/navbar/Navbar";
import ContactUs from "../../components/contactUs/ContactUs";
import Counters from "./counters/Counters";
import Footer from "../../components/footer/Footer";
import Hero from "./hero/Hero";
import HomeBrands from "./homeBrands/HomeBrands";
import HomeProducts from "./homeProducts/HomeProducts";
import HomeServices from "./homeServices/HomeServices";
import HomeVideo from "./homeVideo/HomeVideo";
import TechPartners from "../../components/techPartners/TechPartners";
import Timeline from "./timeline/Timeline";
import WhatMakesUsDiff from "./whatMakesUsDiff/WhatMakesUsDiff";
import HomeTestimonials from "./homeTestimonials/HomeTestimonials";

const home = () => {
  return (
    <>
      <div className="heroAndCounters">
        <Hero />
        <Counters />
      </div>

      <HomeServices />
      <HomeProducts />
      <HomeVideo />
      {/* <Timeline /> */}
      <WhatMakesUsDiff />
      <HomeTestimonials />
      {/* <HomeBrands /> */}
      <TechPartners />
    </>
  );
};

export default home;
