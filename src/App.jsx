import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Counters from "./container/counters/Counters";
import Hero from "./container/hero/Hero";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Counters />
    </div>
  );
}

export default App;
