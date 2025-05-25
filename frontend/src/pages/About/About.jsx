import React from 'react';
import "./about.css";
import AboutHero from '../../components/AboutHero/AboutHero';
import AboutOurTeam from '../../components/AboutOurTeam/AboutOurTeam';

const About = () => {
  return (
    <div className='about'>
        <AboutHero />
        <AboutOurTeam />
    </div>
  )
}

export default About