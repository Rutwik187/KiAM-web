import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Counters from "./container/counters/Counters";
import Hero from "./container/hero/Hero";
import DummyHero from "./container/hero_dummy/DummyHero";
import HomeServices from "./container/homeServices/HomeServices";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* <DummyHero /> */}
      <Counters />
      <HomeServices />
    </div>
  );
}

export default App;
