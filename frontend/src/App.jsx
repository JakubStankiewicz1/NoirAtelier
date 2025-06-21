import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Properties from "./pages/Properties/Properties";
import Faq from "./pages/Faq/Faq";
import Blog from "./pages/Blog/Blog";
import BlogElement from "./pages/BlogElement/BlogElement";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Offert from "./pages/Offert/Offert";
import PropertyManagement from "./pages/PropertyManagement/PropertyManagement";
import InteriorDesign from "./pages/InteriorDesign/InteriorDesign";
import InvestmentConsulting from "./pages/InvestmentConsulting/InvestmentConsulting";
import BuySellSupport from "./pages/BuySellSupport/BuySellSupport";
import LuxuryRentals from "./pages/LuxuryRentals/LuxuryRentals";
import LocationAnalysis from "./pages/LocationAnalysis/LocationAnalysis";

const App = () => {
  const location = useLocation();

  // Przewijanie na górę przy każdej zmianie strony
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogElement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/offert/:id" element={<Offert />} />
          <Route path="/offert" element={<Offert />} /> 
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/interior-design" element={<InteriorDesign />} /> 
          <Route path="/investment-consulting" element={<InvestmentConsulting />} />
          <Route path="/buy-sell-support" element={<BuySellSupport />} />
          <Route path="/luxury-rentals" element={<LuxuryRentals />} />
          <Route path="/location-analysis" element={<LocationAnalysis />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
