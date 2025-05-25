import React from 'react';
import "./faqBenefits.css";
import assets from '../../assets/assets';

const FaqBenefits = () => {
  return (
    <div className='faqBenefits'>
        <div className="faqBenefitsContainer">
            {/* Left Part */}
            <div className="faqBenefitsContainerLeft">
                <div className="faqBenefitsContainerLeftContainer">
                    <div className="faqBenefitsContainerLeftContainerOne">
                        <div className="faqBenefitsContainerLeftContainerOneContainer">
                            <p className="faqBenefitsContainerLeftContainerOneContainerText">
                                Benefits
                            </p>
                        </div>
                    </div>

                    <div className="faqBenefitsContainerLeftContainerTwo">
                        <div className="faqBenefitsContainerLeftContainerTwoContainer">
                            <p className="faqBenefitsContainerLeftContainerTwoContainerText cormorant-garamond-regular">
                                With us <span className='faqBenefitsContainerLeftContainerTwoContainerTextSpan'>finding place</span> to live is easy as pie. Trust us!
                            </p>
                        </div>
                    </div>
                    
                    <div className="faqBenefitsContainerLeftContainerThree">
                        <div className="faqBenefitsContainerLeftContainerThreeContainer">
                            <p className="faqBenefitsContainerLeftContainerThreeContainerText">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="faqBenefitsContainerLeftContainerFour">
                        <div className="faqBenefitsContainerLeftContainerFourContainer">
                            <div className="faqBenefitsContainerLeftContainerFourContainerButton">
                                <div className="faqBenefitsContainerLeftContainerFourContainerButtonContainer">
                                    <p className="faqBenefitsContainerLeftContainerFourContainerButtonContainerText">
                                        See More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            {/* Right Part */}
            <div className="faqBenefitsContainerRight">
                <div className="faqBenefitsContainerRightContainer">
                    {/* Top Part */}
                    <div className="faqBenefitsContainerRightContainerTop">
                        <div className="faqBenefitsContainerRightContainerTopContainer">
                            <div className="faqBenefitsContainerRightContainerTopContainerOne">
                                <div className="faqBenefitsContainerRightContainerTopContainerOneContainer">
                                    <img src={assets.FaqBenefitsImageOne} alt="" className='faqBenefitsContainerRightContainerTopContainerOneContainerImage' />
                                </div>
                            </div>
                            <div className="faqBenefitsContainerRightContainerTopContainerTwo">
                                <div className="faqBenefitsContainerRightContainerTopContainerTwoContainer">
                                    <img src={assets.FaqBenefitsImageOne} alt="" className='faqBenefitsContainerRightContainerTopContainerTwoContainerImage' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="faqBenefitsContainerRightContainerRight">
                        <div className="faqBenefitsContainerRightContainerRightContainer">
                            <div className="faqBenefitsContainerRightContainerRightContainerOne">
                                <div className="faqBenefitsContainerRightContainerRightContainerOneContainer">
                                    <img src={assets.FaqBenefitsImageOne} alt="" className='faqBenefitsContainerRightContainerRightContainerOneContainerImage' />
                                </div>
                            </div>

                            <div className="faqBenefitsContainerRightContainerRightContainerTwo">
                                <div className="faqBenefitsContainerRightContainerRightContainerTwoContainer">
                                    <img src={assets.FaqBenefitsImageOne} alt="" className='faqBenefitsContainerRightContainerRightContainerTwoContainerImage' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>



        <div className="propertiesCollectionLatestNewsContainerFifth">
                <div className="propertiesCollectionLatestNewsContainerFifthContainer">
                    <div className="propertiesCollectionLatestNewsMarquee">
                        <div className="propertiesCollectionLatestNewsMarqueeInner">
                            <p className="propertiesCollectionLatestNewsContainerFifthContainerText">
                                houses villas apartments rental & more houses&nbsp;&nbsp;
                            </p>
                            <p className="propertiesCollectionLatestNewsContainerFifthContainerText">
                                houses villas apartments rental & more houses&nbsp;&nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FaqBenefits