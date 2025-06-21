import React from "react";
import "./luxuryRentals.css";
import LuxuryRentalsHero from "../../components/LuxuryRentalsHero/LuxuryRentalsHero";
import LuxuryRentalsServices from "../../components/LuxuryRentalsServices/LuxuryRentalsServices";
import LuxuryRentalsPortfolio from "../../components/LuxuryRentalsPortfolio/LuxuryRentalsPortfolio";
import LuxuryRentalsTestimonials from "../../components/LuxuryRentalsTestimonials/LuxuryRentalsTestimonials";
import LuxuryRentalsContact from "../../components/LuxuryRentalsContact/LuxuryRentalsContact";
import Fotter from "../../components/Fotter/Fotter";

const LuxuryRentals = () => {
  return (
    <div className="luxuryRentals">
      <LuxuryRentalsHero />
      <LuxuryRentalsServices />
      <LuxuryRentalsPortfolio />
      <LuxuryRentalsTestimonials />
      <Fotter />
    </div>
  );
};

export default LuxuryRentals;
