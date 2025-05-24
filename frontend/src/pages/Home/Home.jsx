import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeHeroInfo from '../../components/HomeHeroInfo/HomeHeroInfo';

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <HomeHero />
            <HomeHeroInfo />
        </div>
    </div>
  )
}

export default Home