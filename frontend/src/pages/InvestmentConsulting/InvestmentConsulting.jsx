import React from "react";
import "./investmentConsulting.css";
import InvestmentConsultingHero from "../../components/InvestmentConsultingHero/InvestmentConsultingHero";
import InvestmentConsultingServices from "../../components/InvestmentConsultingServices/InvestmentConsultingServices";
import InvestmentConsultingProcess from "../../components/InvestmentConsultingProcess/InvestmentConsultingProcess";
import InvestmentConsultingTestimonials from "../../components/InvestmentConsultingTestimonials/InvestmentConsultingTestimonials";
import InvestmentConsultingContact from "../../components/InvestmentConsultingContact/InvestmentConsultingContact";
import Fotter from "../../components/Fotter/Fotter";

const InvestmentConsulting = () => {
  return (
    <div className="investmentConsulting">
      <InvestmentConsultingHero />
      <InvestmentConsultingServices />
      <InvestmentConsultingProcess />
      <InvestmentConsultingTestimonials />
      <InvestmentConsultingContact />
      <Fotter />
    </div>
  );
};

export default InvestmentConsulting;
