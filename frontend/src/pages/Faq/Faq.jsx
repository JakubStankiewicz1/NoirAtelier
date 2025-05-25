import React from 'react';
import "./faq.css";
import FaqHeader from '../../components/FaqHeader/FaqHeader';
import FaqSeeMore from '../../components/FaqSeeMore/FaqSeeMore';
import FaqPayments from '../../components/FaqPayments/FaqPayments';
import FaqQuestions from '../../components/FaqQuestions/FaqQuestions';
import FaqBenefits from '../../components/FaqBenefits/FaqBenefits';
import Fotter from '../../components/Fotter/Fotter';

const Faq = () => {
  return (
    <div className='faq'>
        <FaqHeader />
        <FaqSeeMore />
        <FaqPayments />
        <FaqQuestions />
        <FaqBenefits />
        <Fotter />
    </div>
  )
}

export default Faq