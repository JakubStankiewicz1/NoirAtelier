import React from 'react';
import "./aboutContactUs.css";
import assets from '../../assets/assets';

const AboutContactUs = () => {
  return (
    <div className='aboutContactUs'>
        <div className="aboutContactUsContainer">
            {/* Top Part */}
            <div className="aboutContactUsContainerTop">
                <div className="aboutContactUsContainerTopContainer">

                    {/* Element */}
                    <div className="aboutContactUsContainerTopContainerElement">
                        <div className="aboutContactUsContainerTopContainerElementContainer">
                            <div className="aboutContactUsContainerTopContainerElementContainerTop">
                                <div className="aboutContactUsContainerTopContainerElementContainerTopContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerTopContainerText">
                                        4
                                    </p>
                                </div>
                            </div>

                            <div className="aboutContactUsContainerTopContainerElementContainerBottom">
                                <div className="aboutContactUsContainerTopContainerElementContainerBottomContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerBottomContainerText">
                                        Villas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Element */}
                    <div className="aboutContactUsContainerTopContainerElement">
                        <div className="aboutContactUsContainerTopContainerElementContainer">
                            <div className="aboutContactUsContainerTopContainerElementContainerTop">
                                <div className="aboutContactUsContainerTopContainerElementContainerTopContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerTopContainerText">
                                        4
                                    </p>
                                </div>
                            </div>

                            <div className="aboutContactUsContainerTopContainerElementContainerBottom">
                                <div className="aboutContactUsContainerTopContainerElementContainerBottomContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerBottomContainerText">
                                        Houses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Element */}
                    <div className="aboutContactUsContainerTopContainerElement">
                        <div className="aboutContactUsContainerTopContainerElementContainer">
                            <div className="aboutContactUsContainerTopContainerElementContainerTop">
                                <div className="aboutContactUsContainerTopContainerElementContainerTopContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerTopContainerText">
                                        28
                                    </p>
                                </div>
                            </div>

                            <div className="aboutContactUsContainerTopContainerElementContainerBottom">
                                <div className="aboutContactUsContainerTopContainerElementContainerBottomContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerBottomContainerText">
                                        Appartments
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Element */}
                    <div className="aboutContactUsContainerTopContainerElement">
                        <div className="aboutContactUsContainerTopContainerElementContainer">
                            <div className="aboutContactUsContainerTopContainerElementContainerTop">
                                <div className="aboutContactUsContainerTopContainerElementContainerTopContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerTopContainerText">
                                        5
                                    </p>
                                </div>
                            </div>

                            <div className="aboutContactUsContainerTopContainerElementContainerBottom">
                                <div className="aboutContactUsContainerTopContainerElementContainerBottomContainer">
                                    <p className="aboutContactUsContainerTopContainerElementContainerBottomContainerText">
                                        Agents
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>











            {/* Bottom Part */}
            <div className="aboutContactUsContainerBottom">
                <div className="aboutContactUsContainerBottomContainer">
                    <div className="aboutContactUsContainerBottomContainerOne">
                        <div className="aboutContactUsContainerBottomContainerOneContainer">
                            <div className="aboutContactUsContainerBottomContainerOneContainerOne">
                                <div className="aboutContactUsContainerBottomContainerOneContainerOneContainer">
                                    <img src={assets.HomeHeroImageThree} alt="" className='aboutContactUsContainerBottomContainerOneContainerOneContainerImage' />
                                </div>
                            </div>

                            <div className="aboutContactUsContainerBottomContainerOneContainerTwo">
                                <div className="aboutContactUsContainerBottomContainerOneContainerTwoContainer">
                                    <img src={assets.HomeHeroImageThree} alt="" className='aboutContactUsContainerBottomContainerOneContainerTwoContainerImage' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="aboutContactUsContainerBottomContainerBottom">
                        <div className="aboutContactUsContainerBottomContainerBottomContainer">
                            <div className="aboutContactUsContainerBottomContainerBottomContainerTop">
                                <div className="aboutContactUsContainerBottomContainerBottomContainerTopContainer">
                                    <p className="aboutContactUsContainerBottomContainerBottomContainerTopContainerText cormorant-garamond-regular">
                                        Contact us and discover the world of modern housing
                                    </p>
                                </div>
                            </div>

                            <div className="aboutContactUsContainerBottomContainerBottomContainerBottom">
                                <div className="aboutContactUsContainerBottomContainerBottomContainerBottomContainer">
                                    <div className="aboutContactUsContainerBottomContainerBottomContainerBottomContainerButton">
                                        <div className="aboutContactUsContainerBottomContainerBottomContainerBottomContainerButtonContainer">
                                            <p className="aboutContactUsContainerBottomContainerBottomContainerBottomContainerButtonContainerText">
                                                Contact Us
                                            </p>
                                        </div>
                                    </div>
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

export default AboutContactUs