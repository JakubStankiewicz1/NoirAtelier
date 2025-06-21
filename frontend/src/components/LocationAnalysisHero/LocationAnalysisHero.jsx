import React from 'react';
import "./locationAnalysisHero.css";
import assets from '../../assets/assets';
import { FaChartBar, FaMapMarkerAlt } from 'react-icons/fa';

const LocationAnalysisHero = () => {
  return (
    <div className='locationAnalysisHero'>
        <div className="locationAnalysisHeroContainer">

            {/* Top Part */}
            <div className="locationAnalysisHeroContainerTop">
                <div className="locationAnalysisHeroContainerTopContainer">
                    <div className="locationAnalysisHeroContainerTopContainerOne">
                        <div className="locationAnalysisHeroContainerTopContainerOneContainer">
                            <img src={assets.HomeHeroInfoSvg} alt="" className='locationAnalysisHeroContainerTopContainerOneContainerIcon' />
                        </div>
                    </div>

                    <div className="locationAnalysisHeroContainerTopContainerTwo">
                        <div className="locationAnalysisHeroContainerTopContainerTwoContainer">
                            <p className="locationAnalysisHeroContainerTopContainerTwoContainerText">
                                Location Analysis
                            </p>
                        </div>
                    </div>

                    <div className="locationAnalysisHeroContainerTopContainerThree">
                        <div className="locationAnalysisHeroContainerTopContainerThreeContainer">
                            <h1 className="locationAnalysisHeroContainerTopContainerThreeContainerTitle cormorant-garamond-regular">
                                Profesjonalna Analiza Lokalizacji
                            </h1>
                            <p className="locationAnalysisHeroContainerTopContainerThreeContainerText cormorant-garamond-regular">
                                Podejmuj najlepsze decyzje inwestycyjne dzięki naszej szczegółowej analizie lokalizacji. Oceniamy potencjał każdej nieruchomości pod kątem rentowności, wzrostu wartości i atrakcyjności dla najemców.
                            </p>
                        </div>
                    </div>

                    <div className="locationAnalysisHeroContainerTopContainerFour">
                        <div className="locationAnalysisHeroContainerTopContainerFourContainer">
                            <div className="locationAnalysisHeroContainerTopContainerFourContainerButton">
                                <div className="locationAnalysisHeroContainerTopContainerFourContainerButtonContainer">
                                    <p className="locationAnalysisHeroContainerTopContainerFourContainerButtonContainerText">
                                        Zamów Analizę
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="locationAnalysisHeroContainerBottom">
                <div className="locationAnalysisHeroContainerBottomContainer">
                    <div className="locationAnalysisHeroContainerBottomContainerOne">
                        <div className="locationAnalysisHeroContainerBottomContainerOneContainer">
                            <img 
                                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Location Analysis" 
                                className='locationAnalysisHeroContainerBottomContainerOneContainerImg' 
                            />
                        </div>
                    </div>

                    <div className="locationAnalysisHeroContainerBottomContainerTwo">
                        <div className="locationAnalysisHeroContainerBottomContainerTwoContainer">
                            <div className="locationAnalysisHeroContainerBottomContainerTwoContainerStats">
                                <div className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        1000+
                                    </h3>
                                    <p className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Przeanalizowanych Lokalizacji
                                    </p>
                                </div>
                                <div className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        95%
                                    </h3>
                                    <p className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Trafność Prognoz
                                    </p>
                                </div>
                                <div className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        15+
                                    </h3>
                                    <p className="locationAnalysisHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Lat Doświadczenia
                                    </p>
                                </div>
                            </div>
                              <div className="locationAnalysisHeroContainerBottomContainerTwoContainerFeatures">
                                <div className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItem">
                                    <div className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemIcon">
                                        <FaChartBar />
                                    </div>
                                    <div className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemContent">
                                        <h4 className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemTitle cormorant-garamond-regular">
                                            Analiza Rynkowa
                                        </h4>
                                        <p className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemDescription">
                                            Szczegółowe dane o trendy cenowych i potencjale wzrostu
                                        </p>
                                    </div>
                                </div>
                                <div className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItem">
                                    <div className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemIcon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemContent">
                                        <h4 className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemTitle cormorant-garamond-regular">
                                            Mapa Infrastruktury
                                        </h4>
                                        <p className="locationAnalysisHeroContainerBottomContainerTwoContainerFeaturesItemDescription">
                                            Ocena dostępności komunikacji i udogodnień
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
  )
}

export default LocationAnalysisHero
