import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeHeroInfo from '../../components/HomeHeroInfo/HomeHeroInfo';
import HomeWelcome from '../../components/HomeWelcome/HomeWelcome';
import HomeDatesInfo from '../../components/HomeDatesInfo/HomeDatesInfo';
import HomeVideo from '../../components/HomeVideo/HomeVideo';

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <HomeHero />
            <HomeHeroInfo />
            <HomeWelcome />
            <HomeDatesInfo />
            <HomeVideo />
        </div>
    </div>
  )
}

export default Home