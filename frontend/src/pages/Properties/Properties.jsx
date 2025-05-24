import React from 'react';
import "./properties.css";
import PropertiesHero from '../../components/PropertiesHero/PropertiesHero';
import PropertiesCollection from '../../components/PropertiesCollection/PropertiesCollection';
import PropertiesCollectionSubscribe from '../../components/PropertiesCollectionSubscribe/PropertiesCollectionSubscribe';

const Properties = () => {
  return (
    <div className='properties'>
        <PropertiesHero />
        <PropertiesCollection />
        <PropertiesCollectionSubscribe />
    </div>
  )
}

export default Properties