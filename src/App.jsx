import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import ProductCategories from "./pages/products/ProductCategories";
import AboutUs from "./pages/about-us/AboutUs";
import ErrorPage from "./pages/error-page/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contactUs/ContactUs";
import AccessControl from "./pages/products/accessControlCategory/AccessControl";
import Intrusion from "./pages/products/intrusionCategory/Intrusion";
import FireAlarmSystem from "./pages/products/fireAlarmSystem/FireAlarmSystem";
import CctvSystem from "./pages/products/cctvSystemCategory/CctvSystem";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:tabId" element={<Services />} />
          <Route path="/productCategory" element={<ProductCategories />} />
          <Route
            path="/productCategory/access-control"
            element={<AccessControl />}
          />
          <Route path="/productCategory/intrusion" element={<Intrusion />} />

          <Route
            path="/productCategory/fire-alarm"
            element={<FireAlarmSystem />}
          />

          <Route path="/productCategory/cctv-system" element={<CctvSystem />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
