import React from 'react';
import "./faq.css";
import FaqHeader from '../../components/FaqHeader/FaqHeader';
import FaqSeeMore from '../../components/FaqSeeMore/FaqSeeMore';
import FaqPayments from '../../components/FaqPayments/FaqPayments';
import FaqQuestions from '../../components/FaqQuestions/FaqQuestions';

const Faq = () => {
  return (
    <div className='faq'>
        <FaqHeader />
        <FaqSeeMore />
        <FaqPayments />
        <FaqQuestions />
    </div>
  )
}

export default Faq