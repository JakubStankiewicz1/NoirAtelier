import React from "react";
import "./properties.css";
import PropertiesHero from "../../components/PropertiesHero/PropertiesHero";
import PropertiesCollection from "../../components/PropertiesCollection/PropertiesCollection";
import PropertiesCollectionSubscribe from "../../components/PropertiesCollectionSubscribe/PropertiesCollectionSubscribe";
import PropertiesCollectionLatestNews from "../../components/PropertiesCollectionLatestNews/PropertiesCollectionLatestNews";
import Fotter from "../../components/Fotter/Fotter";

const Properties = () => {
  return (
    <div className="properties">
      <PropertiesHero />
      <PropertiesCollection />
      <PropertiesCollectionSubscribe />
      <PropertiesCollectionLatestNews />
      <Fotter />
    </div>
  );
};

export default Properties;
