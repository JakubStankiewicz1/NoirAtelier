import React from 'react';
import "./interiorDesign.css";
import InteriorDesignHero from '../../components/InteriorDesignHero/InteriorDesignHero';
import InteriorDesignPortfolio from '../../components/InteriorDesignPortfolio/InteriorDesignPortfolio';
import InteriorDesignServices from '../../components/InteriorDesignServices/InteriorDesignServices';
import InteriorDesignProcess from '../../components/InteriorDesignProcess/InteriorDesignProcess';
import InteriorDesignTestimonials from '../../components/InteriorDesignTestimonials/InteriorDesignTestimonials';
import InteriorDesignContact from '../../components/InteriorDesignContact/InteriorDesignContact';
import Fotter from '../../components/Fotter/Fotter';

const InteriorDesign = () => {
  return (
    <div className='interiorDesign'>
        <InteriorDesignHero />
        <InteriorDesignPortfolio />
        <InteriorDesignServices />
        <InteriorDesignProcess />
        <InteriorDesignTestimonials />
        <InteriorDesignContact />
        <Fotter />
    </div>
  )
}

export default InteriorDesign
