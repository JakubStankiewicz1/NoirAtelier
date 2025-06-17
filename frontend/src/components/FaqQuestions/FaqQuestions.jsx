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
                        <div className="faqQuestionsContainerBottomContainerBottomContainer">                            {/* Element 1 */}
                            <div className={`faqAccordionItem${openIndex === 0 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(0)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 0 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 0 ? ' open' : ''}`}>
                                        How do I schedule a property viewing?
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 0 ? ' expanded' : ''}`}>
                                    Simply contact our team through our website or call us directly. We offer flexible scheduling options including evenings and weekends to accommodate your busy lifestyle. Our luxury property specialists will arrange a personalized viewing experience tailored to your preferences.
                                </div>
                            </div>                            {/* Element 2 */}
                            <div className={`faqAccordionItem${openIndex === 1 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(1)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 1 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 1 ? ' open' : ''}`}>
                                        What financing options are available?
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 1 ? ' expanded' : ''}`}>
                                    We offer comprehensive financing solutions including traditional mortgages, luxury property loans, and flexible payment plans. Our financial advisors work with premium lenders to secure competitive rates and terms that match your investment goals and financial situation.
                                </div>
                            </div>                            {/* Element 3 */}
                            <div className={`faqAccordionItem${openIndex === 2 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(2)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 2 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 2 ? ' open' : ''}`}>
                                        Are virtual tours available for properties?
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 2 ? ' expanded' : ''}`}>
                                    Yes, we provide high-quality virtual tours and 360-degree property walkthroughs for all our luxury listings. You can explore properties from anywhere in the world with our immersive technology, making it convenient to narrow down your choices before scheduling in-person visits.
                                </div>
                            </div>                            {/* Element 4 */}
                            <div className={`faqAccordionItem${openIndex === 3 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(3)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 3 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 3 ? ' open' : ''}`}>
                                        What makes Noir Atelier properties unique?
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 3 ? ' expanded' : ''}`}>
                                    Our properties are carefully curated for their exceptional architecture, prime locations, and luxury amenities. Each property undergoes rigorous quality assessment and offers exclusive features such as private gardens, premium finishes, smart home technology, and access to elite community amenities.
                                </div>
                            </div>                            {/* Element 5 */}
                            <div className={`faqAccordionItem${openIndex === 4 ? ' open' : ''}`}>
                                <div className="faqAccordionHeader" onClick={() => handleToggle(4)}>
                                    <span className="faqAccordionIcon">
                                        {openIndex === 4 ? <LuMinus /> : <MdKeyboardArrowDown />}
                                    </span>
                                    <span className={`faqAccordionTitle${openIndex === 4 ? ' open' : ''}`}>
                                        How long does the purchase process typically take?
                                    </span>
                                </div>
                                <div className={`faqAccordionContent${openIndex === 4 ? ' expanded' : ''}`}>
                                    The luxury property purchase process typically takes 30-60 days from offer acceptance to closing. This timeline includes property inspections, financing approvals, legal documentation, and final walkthroughs. Our dedicated team expedites the process while ensuring all details are thoroughly handled for your peace of mind.
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