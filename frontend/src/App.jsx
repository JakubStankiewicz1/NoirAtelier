import React, { useEffect } from 'react';
import "./App.css";
import Home from './pages/Home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Properties from './pages/Properties/Properties';
import Faq from './pages/Faq/Faq';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Offert from './pages/Offert/Offert';

const App = () => {
  const location = useLocation();

  // Przewijanie na górę przy każdej zmianie strony
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='app'>
        <div className="appContainer">

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offert" element={<Offert />} />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          </Routes>
          
        </div>
    </div>
  )
}

export default App