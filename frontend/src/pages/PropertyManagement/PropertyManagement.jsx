import React from 'react';
import "./propertyManagement.css";
import PropertyManagementHero from '../../components/PropertyManagementHero/PropertyManagementHero';
import PropertyManagementServices from '../../components/PropertyManagementServices/PropertyManagementServices';
import PropertyManagementFeatures from '../../components/PropertyManagementFeatures/PropertyManagementFeatures';
import PropertyManagementTestimonials from '../../components/PropertyManagementTestimonials/PropertyManagementTestimonials';
import PropertyManagementContact from '../../components/PropertyManagementContact/PropertyManagementContact';
import Fotter from '../../components/Fotter/Fotter';

const PropertyManagement = () => {
  return (
    <div className='propertyManagement'>
        <PropertyManagementHero />
        <PropertyManagementServices />
        <PropertyManagementFeatures />
        <PropertyManagementTestimonials />
        <PropertyManagementContact />
        <Fotter />
    </div>
  )
}

export default PropertyManagement
