import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import AboutUs from "./pages/about-us/AboutUs";
import ErrorPage from "./pages/error-page/ErrorPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contactUs/ContactUs";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:tabId" element={<Services />} />
          <Route path="/products" element={<Products />} />
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
