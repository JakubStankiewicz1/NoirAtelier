import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <HomeHero />
        </div>
    </div>
  )
}

export default Home