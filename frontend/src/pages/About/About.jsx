import React from "react";
import "./about.css";
import AboutHero from "../../components/AboutHero/AboutHero";
import AboutOurTeam from "../../components/AboutOurTeam/AboutOurTeam";
import AboutContactUs from "../../components/AboutContactUs/AboutContactUs";
import Fotter from "../../components/Fotter/Fotter";

const About = () => {
  return (
    <div className="about">
      <AboutHero />
      <AboutOurTeam />
      <AboutContactUs />
      <Fotter />
    </div>
  );
};

export default About;
