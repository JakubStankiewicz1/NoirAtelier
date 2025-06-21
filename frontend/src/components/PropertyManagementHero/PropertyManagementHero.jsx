import React from 'react';
import "./propertyManagementHero.css";
import assets from '../../assets/assets';

const PropertyManagementHero = () => {
  return (
    <div className='propertyManagementHero'>
        <div className="propertyManagementHeroContainer">

            {/* Top Part */}
            <div className="propertyManagementHeroContainerTop">
                <div className="propertyManagementHeroContainerTopContainer">
                    <div className="propertyManagementHeroContainerTopContainerOne">
                        <div className="propertyManagementHeroContainerTopContainerOneContainer">
                            <img src={assets.HomeHeroInfoSvg} alt="" className='propertyManagementHeroContainerTopContainerOneContainerIcon' />
                        </div>
                    </div>

                    <div className="propertyManagementHeroContainerTopContainerTwo">
                        <div className="propertyManagementHeroContainerTopContainerTwoContainer">
                            <p className="propertyManagementHeroContainerTopContainerTwoContainerText">
                                Property Management
                            </p>
                        </div>
                    </div>                    <div className="propertyManagementHeroContainerTopContainerThree">
                        <div className="propertyManagementHeroContainerTopContainerThreeContainer">
                            <h1 className="propertyManagementHeroContainerTopContainerThreeContainerTitle cormorant-garamond-regular">
                                Professional Property Management
                            </h1>
                            <p className="propertyManagementHeroContainerTopContainerThreeContainerText cormorant-garamond-regular">
                                Maximize your investment returns with our comprehensive property management services. We offer a professional approach that ensures peace of mind and steady income from your investment.
                            </p>
                        </div>
                    </div>

                    <div className="propertyManagementHeroContainerTopContainerFour">
                        <div className="propertyManagementHeroContainerTopContainerFourContainer">                            <div className="propertyManagementHeroContainerTopContainerFourContainerButton">
                                <div className="propertyManagementHeroContainerTopContainerFourContainerButtonContainer">
                                    <p className="propertyManagementHeroContainerTopContainerFourContainerButtonContainerText">
                                        Contact Us
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="propertyManagementHeroContainerBottom">
                <div className="propertyManagementHeroContainerBottomContainer">
                    <div className="propertyManagementHeroContainerBottomContainerOne">
                        <div className="propertyManagementHeroContainerBottomContainerOneContainer">
                            <img 
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Property Management" 
                                className='propertyManagementHeroContainerBottomContainerOneContainerImg' 
                            />
                        </div>
                    </div>

                    <div className="propertyManagementHeroContainerBottomContainerTwo">
                        <div className="propertyManagementHeroContainerBottomContainerTwoContainer">
                            <div className="propertyManagementHeroContainerBottomContainerTwoContainerStats">                                <div className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        500+
                                    </h3>
                                    <p className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Managed Properties
                                    </p>
                                </div>
                                <div className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        98%
                                    </h3>
                                    <p className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Satisfied Clients
                                    </p>
                                </div>
                                <div className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        15+
                                    </h3>
                                    <p className="propertyManagementHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Years of Experience
                                    </p>
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

export default PropertyManagementHero
