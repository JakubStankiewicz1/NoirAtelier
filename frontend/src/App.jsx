import React from 'react';
import "./app.css";
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Properties from './pages/Properties/Properties';
import Faq from './pages/Faq/Faq';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';

const App = () => {
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
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          </Routes>
          
        </div>
    </div>
  )
}

export default App