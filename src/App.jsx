import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Counters from "./container/counters/Counters";
import Hero from "./container/hero/Hero";
import DummyHero from "./container/hero_dummy/DummyHero";
import HomeBrands from "./container/homeBrands/HomeBrands";
import HomeProducts from "./container/homeProducts/HomeProducts";
import HomeServices from "./container/homeServices/HomeServices";
import HomeVideo from "./container/homeVideo/HomeVideo";
import TechPartners from "./container/techPartners/TechPartners";
import Timeline from "./container/timeline/Timeline";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Counters />
      <HomeServices />
      <HomeProducts />
      <HomeVideo />
      <Timeline />
      <HomeBrands />
      <TechPartners />
      {/* <DummyHero /> */}
    </div>
  );
}

export default App;
