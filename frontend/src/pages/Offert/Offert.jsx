import React from 'react';
import './offert.css';
import OffertHeader from '../../components/OffertHeader/OffertHeader';
import OffertDesign from '../../components/OffertDesign/OffertDesign';
import Fotter from '../../components/Fotter/Fotter';
import OffertVisualization from '../../components/OffertVisualization/OffertVisualization';

const Offert = () => {
  return (
    <div className='offert'>
        <OffertHeader />
        <OffertDesign />
        <OffertVisualization />
        <Fotter />
    </div>
  )
}

export default Offert