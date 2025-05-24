import React from 'react';
import "./faqSeeMore.css";
import assets from '../../assets/assets';

const FaqSeeMore = () => {
  return (
    <div className="faqSeeMore">
        <div className="faqSeeMoreContainer">

            {/* Left Part */}
            <div className="faqSeeMoreContainerLeft">
                <div className="faqSeeMoreContainerLeftContainer">

                    {/* Top Part */}
                    <div className="faqSeeMoreContainerLeftContainerTop">
                        <div className="faqSeeMoreContainerLeftContainerTopContainer">
                            <p className="faqSeeMoreContainerLeftContainerTopContainerText cormorant-garamond-regular">
                                We are here <span className='faqSeeMoreContainerLeftContainerTopContainerTextSpan'>to help you</span> with your problems
                            </p>
                        </div>
                    </div>

                    {/* Middle Part */}
                    <div className="faqSeeMoreContainerLeftContainerMiddle">
                        <div className="faqSeeMoreContainerLeftContainerMiddleContainer">
                            <p className="faqSeeMoreContainerLeftContainerMiddleContainerText">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="faqSeeMoreContainerLeftContainerBottom">
                        <div className="faqSeeMoreContainerLeftContainerBottomContainer">
                            <div className="faqSeeMoreContainerLeftContainerBottomContainerButton">
                                <div className="faqSeeMoreContainerLeftContainerBottomContainerButtonContainer">
                                    <p className="faqSeeMoreContainerLeftContainerBottomContainerButtonContainerText">
                                        See More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* Right Part */}
            <div className="faqSeeMoreContainerRight">
                <div className="faqSeeMoreContainerRightContainer">
                    <img src={assets.FaqSeeMoreImage} alt="" className='faqSeeMoreContainerRightContainerImage' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default FaqSeeMore