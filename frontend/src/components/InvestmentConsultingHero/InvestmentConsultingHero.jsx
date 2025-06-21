import React from 'react';
import "./investmentConsultingHero.css";
import assets from '../../assets/assets';
import { FaChartPie, FaLightbulb } from 'react-icons/fa';

const InvestmentConsultingHero = () => {
  return (
    <div className='investmentConsultingHero'>
        <div className="investmentConsultingHeroContainer">

            {/* Top Part */}
            <div className="investmentConsultingHeroContainerTop">
                <div className="investmentConsultingHeroContainerTopContainer">
                    <div className="investmentConsultingHeroContainerTopContainerOne">
                        <div className="investmentConsultingHeroContainerTopContainerOneContainer">
                            <img src={assets.HomeHeroInfoSvg} alt="" className='investmentConsultingHeroContainerTopContainerOneContainerIcon' />
                        </div>
                    </div>

                    <div className="investmentConsultingHeroContainerTopContainerTwo">
                        <div className="investmentConsultingHeroContainerTopContainerTwoContainer">
                            <p className="investmentConsultingHeroContainerTopContainerTwoContainerText">
                                Investment Consulting
                            </p>
                        </div>
                    </div>

                    <div className="investmentConsultingHeroContainerTopContainerThree">
                        <div className="investmentConsultingHeroContainerTopContainerThreeContainer">
                            <h1 className="investmentConsultingHeroContainerTopContainerThreeContainerTitle cormorant-garamond-regular">
                                Ekspert Konsultacje Inwestycyjne
                            </h1>
                            <p className="investmentConsultingHeroContainerTopContainerThreeContainerText cormorant-garamond-regular">
                                Maksymalizuj zyski z inwestycji nieruchomościowych dzięki naszemu doświadczeniu i strategicznemu planowaniu. Oferujemy kompleksowe doradztwo inwestycyjne dopasowane do Twoich celów finansowych.
                            </p>
                        </div>
                    </div>

                    <div className="investmentConsultingHeroContainerTopContainerFour">
                        <div className="investmentConsultingHeroContainerTopContainerFourContainer">
                            <div className="investmentConsultingHeroContainerTopContainerFourContainerButton">
                                <div className="investmentConsultingHeroContainerTopContainerFourContainerButtonContainer">
                                    <p className="investmentConsultingHeroContainerTopContainerFourContainerButtonContainerText">
                                        Rozpocznij Konsultację
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="investmentConsultingHeroContainerBottom">
                <div className="investmentConsultingHeroContainerBottomContainer">
                    <div className="investmentConsultingHeroContainerBottomContainerOne">
                        <div className="investmentConsultingHeroContainerBottomContainerOneContainer">
                            <img 
                                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Investment Consulting" 
                                className='investmentConsultingHeroContainerBottomContainerOneContainerImg' 
                            />
                        </div>
                    </div>

                    <div className="investmentConsultingHeroContainerBottomContainerTwo">
                        <div className="investmentConsultingHeroContainerBottomContainerTwoContainer">
                            <div className="investmentConsultingHeroContainerBottomContainerTwoContainerStats">
                                <div className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        500+
                                    </h3>
                                    <p className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Udanych Inwestycji
                                    </p>
                                </div>
                                <div className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        25%
                                    </h3>
                                    <p className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Średni Zwrot z Inwestycji
                                    </p>
                                </div>
                                <div className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItem">
                                    <h3 className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItemNumber cormorant-garamond-regular">
                                        20+
                                    </h3>
                                    <p className="investmentConsultingHeroContainerBottomContainerTwoContainerStatsItemText">
                                        Lat Doświadczenia
                                    </p>
                                </div>
                            </div>
                              <div className="investmentConsultingHeroContainerBottomContainerTwoContainerFeatures">
                                <div className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItem">
                                    <div className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemIcon">
                                        <FaChartPie />
                                    </div>
                                    <div className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemContent">
                                        <h4 className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemTitle cormorant-garamond-regular">
                                            Analiza Portfela
                                        </h4>
                                        <p className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemDescription">
                                            Kompleksowa ocena i optymalizacja portfela inwestycyjnego
                                        </p>
                                    </div>
                                </div>
                                <div className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItem">
                                    <div className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemIcon">
                                        <FaLightbulb />
                                    </div>
                                    <div className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemContent">
                                        <h4 className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemTitle cormorant-garamond-regular">
                                            Strategia Inwestycyjna
                                        </h4>
                                        <p className="investmentConsultingHeroContainerBottomContainerTwoContainerFeaturesItemDescription">
                                            Personalizowane strategie dopasowane do Twoich celów
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

export default InvestmentConsultingHero
