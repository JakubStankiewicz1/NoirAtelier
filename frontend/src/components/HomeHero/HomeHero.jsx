import React, { useEffect, useState } from 'react';
import "./homeHero.css";
import assets from '../../assets/assets';

const images = [
  assets.HomeHeroImageOne,
  assets.HomeHeroImageTwo,
  assets.HomeHeroImageThree,
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='homeHero'>
        <div className="homeHeroContainer">


            {/* Top Part */}
            <div className="homeHeroContainerTop">
                <div className="homeHeroContainerTopContainer">

                    <div className="homeHeroContainerTopContainerOne">
                        <div className="homeHeroContainerTopContainerOneDiv"></div>
                    </div>

                    <div className="homeHeroContainerTopContainerTwo">
                        <div className="homeHeroContainerTopContainerTwoContainer">
                            <div className="homeHeroContainerTopContainerTwoContainerDiv">
                                <img
                                    src={images[current]}
                                    alt=""
                                    className="homeHeroContainerTopContainerTwoContainerImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="homeHeroContainerTopText">
                    <div className="homeHeroContainerTopTextContainer">
                        {/* Div One */}
                        <div className="homeHeroContainerTopTextContainerOne">
                            <div className="homeHeroContainerTopTextContainerOneContainer">
                                <p className="homeHeroContainerTopTextContainerOneContainerTextOne cormorant-garamond-regular">
                                    Find
                                </p>

                                <p className="homeHeroContainerTopTextContainerOneContainerTextTwo cormorant-garamond-regular">
                                    The
                                </p>
                            </div>
                        </div>

                        {/* Div Two */}
                        <div className="homeHeroContainerTopTextContainerTwo">
                            <div className="homeHeroContainerTopTextContainerTwoContainer">
                                <p className="homeHeroContainerTopTextContainerTwoContainerText cormorant-garamond-regular">
                                    Perfect
                                </p>
                            </div>
                        </div>

                        {/* Div Three */}
                        <div className="homeHeroContainerTopTextContainerThree">
                            <div className="homeHeroContainerTopTextContainerThreeContainer">
                                <div className="homeHeroContainerTopTextContainerThreeContainerOne">
                                    <p className="homeHeroContainerTopTextContainerThreeContainerOneText cormorant-garamond-regular">
                                        Place
                                    </p>
                                </div>

                                <div className="homeHeroContainerTopTextContainerThreeContainerTwo">
                                    <p className="homeHeroContainerTopTextContainerThreeContainerTwoText cormorant-garamond-regular">
                                        Since 1976
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Div Four */}
                        <div className="homeHeroContainerTopTextContainerFour">
                            <div className="homeHeroContainerTopTextContainerFourContainer">
                                <p className="homeHeroContainerTopTextContainerFourContainerText cormorant-garamond-regular">
                                    To Live
                                </p>
                            </div>
                        </div>








                        {/* Div Five */}
                        <div className="homeHeroContainerTopTextContainerFive">
                            {/* Element */}
                                <div className="homeHeroContainerTopThirdContainerLeftContainerElement">
                                    <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainer">
                                        {/* Top Part */}
                                        <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTop">
                                            <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTopContainer">
                                                <p className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTopContainerText">
                                                    01
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Part */}
                                        <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerBottom">
                                            <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerBottomDiv" />
                                        </div>
                                    </div>
                                </div>


                                {/* Element */}
                                <div className="homeHeroContainerTopThirdContainerLeftContainerElement">
                                    <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainer">
                                        {/* Top Part */}
                                        <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTop">
                                            <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTopContainer">
                                                <p className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTopContainerText">
                                                    02
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Part */}
                                        <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerBottom">
                                            <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerBottomDiv" />
                                        </div>
                                    </div>
                                </div>



                                {/* Element */}
                                <div className="homeHeroContainerTopThirdContainerLeftContainerElement">
                                    <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainer">
                                        {/* Top Part */}
                                        <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTop">
                                            <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTopContainer">
                                                <p className="homeHeroContainerTopThirdContainerLeftContainerElementContainerTopContainerText">
                                                    03
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Part */}
                                        <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerBottom">
                                            <div className="homeHeroContainerTopThirdContainerLeftContainerElementContainerBottomDiv" />
                                        </div>
                                    </div>
                                </div>
                        </div>




                        {/* Div Six */}
                        {/* <div className="homeHeroContainerTopTextContainerSix"></div> */}
                    </div>
                </div>


                {/* Third Part */}
                <div className="homeHeroContainerTopThird">
                    <div className="homeHeroContainerTopThirdContainer">
                        {/* Left Part */}
                        <div className="homeHeroContainerTopThirdContainerLeft">
                            <div className="homeHeroContainerTopThirdContainerLeftContainer">





                                








                            </div>
                        </div>

                        {/* Middle Part */}
                        <div className="homeHeroContainerTopThirdContainerMiddle"></div>

                        {/* Right Part */}
                        <div className="homeHeroContainerTopThirdContainerRight">
                            <div className="homeHeroContainerTopThirdContainerRightContainer">
                                <div className="homeHeroContainerTopThirdContainerRightContainerButton">
                                    <div className="homeHeroContainerTopThirdContainerRightContainerButtonContainer">
                                        <p className="homeHeroContainerTopThirdContainerRightContainerButtonContainerText">
                                            See More
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

            {/* Middle Part */}
            {/* <div className="homeHeroContainerMiddle">
                <div className="homeHeroContainerMiddleContainer">
                    <div className="homeHeroContainerMiddleContainerOne">
                        <div className="homeHeroContainerMiddleContainerOneContainer">
                            <p className="homeHeroContainerMiddleContainerOneContainerText">
                                Welcome
                            </p>
                        </div>
                    </div>

                    <div className="homeHeroContainerMiddleContainerTwo"></div>
                </div>
            </div> */}



        </div>
    </div>
  )
}

export default HomeHero