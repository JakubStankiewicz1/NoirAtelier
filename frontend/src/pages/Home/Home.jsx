import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeHeroInfo from '../../components/HomeHeroInfo/HomeHeroInfo';
import HomeWelcome from '../../components/HomeWelcome/HomeWelcome';

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <HomeHero />
            <HomeHeroInfo />
            <HomeWelcome />
        </div>
    </div>
  )
}

export default Home