import React, { useState } from 'react';
import "./faqQuestions.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuMinus } from "react-icons/lu";

const FaqQuestions = () => {
  const [openIndex, setOpenIndex] = useState(4);

  const handleToggle = idx => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className='faqQuestions'>
        <div className="faqQuestionsContainer">


            {/* Top Part */}
            <div className="faqQuestionsContainerTop">
                <div className="faqQuestionsContainerTopDiv" />
            </div>


            {/* Bottom Part */}
            <div className="faqQuestionsContainerBottom">
                <div className="faqQuestionsContainerBottomContainer">

                    {/* Top Part */}
                    <div className="faqQuestionsContainerBottomContainerTop">
                        <div className="faqQuestionsContainerBottomContainerTopContainer">
                            <p className="faqQuestionsContainerBottomContainerTopContainerText cormorant-garamond-regular">
                                Frequently asked questions
                            </p>
                        </div>
                    </div>


                    {/* Bottom Part */}
                    <div className="faqQuestionsContainerBottomContainerBottom">
                        <div className="faqQuestionsContainerBottomContainerBottomContainer">

                            {/* Element 1 */}
                            <div className={`faqAccordionItem${openIndex === 0 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(0)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 0 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 0 ? ' open' : ''}`}>
                                        Nec magna bibendum
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 0 ? ' expanded' : ''}`}>
                                    Facilisis turpis ipsum netus. Tellus laoreet justo fringilla condimentum ex senectus conubia vehicula nullam tincidunt. Vehicula cras sem per non hendrerit.
                                </div>
                            </div>

                            {/* Element 2 */}
                            <div className={`faqAccordionItem${openIndex === 1 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(1)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 1 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 1 ? ' open' : ''}`}>
                                        Nec magna bibendum
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 1 ? ' expanded' : ''}`}>
                                    Facilisis turpis ipsum netus. Tellus laoreet justo fringilla condimentum ex senectus conubia vehicula nullam tincidunt. Vehicula cras sem per non hendrerit.
                                </div>
                            </div>

                            {/* Element 3 */}
                            <div className={`faqAccordionItem${openIndex === 2 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(2)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 2 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 2 ? ' open' : ''}`}>
                                        Nec magna bibendum
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 2 ? ' expanded' : ''}`}>
                                    Facilisis turpis ipsum netus. Tellus laoreet justo fringilla condimentum ex senectus conubia vehicula nullam tincidunt. Vehicula cras sem per non hendrerit.
                                </div>
                            </div>

                            {/* Element 4 */}
                            <div className={`faqAccordionItem${openIndex === 3 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(3)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 3 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 3 ? ' open' : ''}`}>
                                        Nec magna bibendum
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 3 ? ' expanded' : ''}`}>
                                    Facilisis turpis ipsum netus. Tellus laoreet justo fringilla condimentum ex senectus conubia vehicula nullam tincidunt. Vehicula cras sem per non hendrerit.
                                </div>
                            </div>

                            {/* Element 5 */}
                            <div className={`faqAccordionItem${openIndex === 4 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(4)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 4 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 4 ? ' open' : ''}`}>
                                        Nec magna bibendum
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 4 ? ' expanded' : ''}`}>
                                    Facilisis turpis ipsum netus. Tellus laoreet justo fringilla condimentum ex senectus conubia vehicula nullam tincidunt. Vehicula cras sem per non hendrerit.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export default FaqQuestions