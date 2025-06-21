import React from 'react';
import "./locationAnalysis.css";
import LocationAnalysisHero from '../../components/LocationAnalysisHero/LocationAnalysisHero';
import LocationAnalysisServices from '../../components/LocationAnalysisServices/LocationAnalysisServices';
import LocationAnalysisProcess from '../../components/LocationAnalysisProcess/LocationAnalysisProcess';
import LocationAnalysisFeatures from '../../components/LocationAnalysisFeatures/LocationAnalysisFeatures';
import LocationAnalysisTestimonials from '../../components/LocationAnalysisTestimonials/LocationAnalysisTestimonials';
import LocationAnalysisContact from '../../components/LocationAnalysisContact/LocationAnalysisContact';
import Fotter from '../../components/Fotter/Fotter';

const LocationAnalysis = () => {
  return (
    <div className='locationAnalysis'>
        <LocationAnalysisHero />
        <LocationAnalysisServices />
        <LocationAnalysisProcess />
        <LocationAnalysisFeatures />
        {/* <LocationAnalysisTestimonials /> */}
        {/* <LocationAnalysisContact /> */}
        <Fotter />
    </div>
  )
}

export default LocationAnalysis