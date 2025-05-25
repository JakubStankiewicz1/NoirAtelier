import React from 'react';
import "./about.css";
import AboutHero from '../../components/AboutHero/AboutHero';
import AboutOurTeam from '../../components/AboutOurTeam/AboutOurTeam';
import AboutContactUs from '../../components/AboutContactUs/AboutContactUs';

const About = () => {
  return (
    <div className='about'>
        <AboutHero />
        <AboutOurTeam />
        <AboutContactUs />
    </div>
  )
}

export default About