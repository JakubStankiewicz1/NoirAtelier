import React from 'react';
import "./faq.css";
import FaqHeader from '../../components/FaqHeader/FaqHeader';
import FaqSeeMore from '../../components/FaqSeeMore/FaqSeeMore';
import FaqPayments from '../../components/FaqPayments/FaqPayments';

const Faq = () => {
  return (
    <div className='faq'>
        <FaqHeader />
        <FaqSeeMore />
        <FaqPayments />
    </div>
  )
}

export default Faq