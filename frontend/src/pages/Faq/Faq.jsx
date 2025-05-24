import React from 'react';
import "./faq.css";
import FaqHeader from '../../components/FaqHeader/FaqHeader';
import FaqSeeMore from '../../components/FaqSeeMore/FaqSeeMore';

const Faq = () => {
  return (
    <div className='faq'>
        <FaqHeader />
        <FaqSeeMore />
    </div>
  )
}

export default Faq