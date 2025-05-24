import React from 'react';
import "./faqHeader.css";

const FaqHeader = () => {
  return (
    <div className='faqHeader'>
        <div className="faqHeaderContainer">

            <div className="faqHeaderContainerDiv">


                {/* Top Part */}
                <div className="faqHeaderContainerTop">
                    <div className="faqHeaderContainerTopContainer">
                        <p className="faqHeaderContainerTopContainerText">
                            Faq
                        </p>
                    </div>
                </div>


                {/* Bottom Part */}
                <div className="faqHeaderContainerBottom">
                    <div className="faqHeaderContainerBottomContainer">
                        <p className="faqHeaderContainerBottomContainerText cormorant-garamond-regular">
                            See frequently asked questions
                        </p>
                    </div>
                </div>



            </div>
            
        </div>
    </div>
  )
}

export default FaqHeader