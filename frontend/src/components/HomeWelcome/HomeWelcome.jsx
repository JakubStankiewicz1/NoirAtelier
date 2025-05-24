import React from 'react';
import "./homeWelcome.css";

const HomeWelcome = () => {
  return (
    <div className='homeWelcome'>
        <div className="homeWelcomeContainer">
            {/* Top Part */}
            <div className="homeWelcomeContainerTop">
                <div className="homeWelcomeContainerTopContainer">
                    <p className="homeWelcomeContainerTopContainerText">
                        Welcome
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="homeWelcomeContainerBottom">
                <div className="homeWelcomeContainerBottomContainer">

                    <div className="homeWelcomeContainerBottomContainerDiv">
                        <div className="homeWelcomeContainerBottomContainerOne">

                            <div className="homeWelcomeContainerBottomContainerOneFirst">
                                <div className="homeWelcomeContainerBottomContainerOneFirstOne">
                                    <p className="homeWelcomeContainerBottomContainerOneFirstOneText cormorant-garamond-regular">
                                        Adi
                                    </p>
                                </div>
                                <div className="homeWelcomeContainerBottomContainerOneFirstDiv" />
                            </div>

                            <div className="homeWelcomeContainerBottomContainerOneSecond">
                                <div className="homeWelcomeContainerBottomContainerOneSecondOne">
                                    <p className="homeWelcomeContainerBottomContainerOneSecondOneText cormorant-garamond-regular">
                                        pisicing
                                    </p>
                                </div>
                                <div className="homeWelcomeContainerBottomContainerOneSecondDiv" />
                            </div>

                            <div className="homeWelcomeContainerBottomContainerOneThird">
                                <div className="homeWelcomeContainerBottomContainerOneThirdOne">
                                    <p className="homeWelcomeContainerBottomContainerOneThirdOneText cormorant-garamond-regular">
                                        elit
                                    </p>
                                </div>
                                <div className="homeWelcomeContainerBottomContainerOneThirdOneDiv" />
                            </div>

                            <p className="homeWelcomeContainerBottomContainerTwoContainerTextTextOne">

                            </p>

                        </div>

                        <div className="homeWelcomeContainerBottomContainerTwo">
                            <div className="homeWelcomeContainerBottomContainerTwoContainer">
                                <p className="homeWelcomeContainerBottomContainerTwoContainerText cormorant-garamond-regular">
                                    sed do eiusmod
                                </p>
                            </div>
                        </div>
                    </div>





                    <div className="homeWelcomeContainerBottomContainerThree">
                        <p className="homeWelcomeContainerBottomContainerThreeText cormorant-garamond-regular">
                            tempor incididunt ut labore et
                        </p>
                    </div>

                    <div className="homeWelcomeContainerBottomContainerFour">
                        <div className="homeWelcomeContainerBottomContainerFourContainer">
                            <p className="homeWelcomeContainerBottomContainerFourContainerText cormorant-garamond-regular">
                                dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeWelcome