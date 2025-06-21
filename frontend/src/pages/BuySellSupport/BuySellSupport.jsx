import React from 'react';
import './buySellSupport.css';
import BuySellSupportHero from '../../components/BuySellSupportHero/BuySellSupportHero';
import BuySellSupportServices from '../../components/BuySellSupportServices/BuySellSupportServices';
import BuySellSupportProcess from '../../components/BuySellSupportProcess/BuySellSupportProcess';
import BuySellSupportTestimonials from '../../components/BuySellSupportTestimonials/BuySellSupportTestimonials';
import BuySellSupportContact from '../../components/BuySellSupportContact/BuySellSupportContact';
import Fotter from '../../components/Fotter/Fotter';

const BuySellSupport = () => {
  return (
    <div className='buySellSupport'>
      <BuySellSupportHero />
      <BuySellSupportServices />
      <BuySellSupportProcess />
      {/* <BuySellSupportTestimonials /> */}
      {/* <BuySellSupportContact /> */}
      <Fotter />
    </div>
  )
}

export default BuySellSupport