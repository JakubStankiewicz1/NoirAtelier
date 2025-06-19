import React from 'react';
import "./home.css";
import HomeHero from '../../components/HomeHero/HomeHero';
import HomeHeroInfo from '../../components/HomeHeroInfo/HomeHeroInfo';
import HomeWelcome from '../../components/HomeWelcome/HomeWelcome';
import HomeDatesInfo from '../../components/HomeDatesInfo/HomeDatesInfo';
import HomeVideo from '../../components/HomeVideo/HomeVideo';
import HomeOurServices from '../../components/HomeOurServices/HomeOurServices';
import Fotter from '../../components/Fotter/Fotter';

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <HomeHero />
            <HomeHeroInfo />
            <HomeWelcome />
            <HomeDatesInfo />
            <HomeVideo />
            <HomeOurServices />
            <Fotter />
        </div>
    </div>
  )
}

export default Home