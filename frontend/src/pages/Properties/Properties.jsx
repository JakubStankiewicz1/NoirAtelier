import React from 'react';
import "./properties.css";
import PropertiesHero from '../../components/PropertiesHero/PropertiesHero';
import PropertiesCollection from '../../components/PropertiesCollection/PropertiesCollection';

const Properties = () => {
  return (
    <div className='properties'>
        <PropertiesHero />
        <PropertiesCollection />
    </div>
  )
}

export default Properties