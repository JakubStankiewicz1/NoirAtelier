import React from "react";
import "./propertiesCollectionLatestNews.css";
import { PiSquaresFourFill } from "react-icons/pi";
import assets from "../../assets/assets";
import { FiClock } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PropertiesCollectionLatestNews = () => {
  return (
    <div className="propertiesCollectionLatestNews">
      <div className="propertiesCollectionLatestNewsContainer">
        {/* First Part */}
        <div className="propertiesCollectionLatestNewsContainerFirst">
          <div className="propertiesCollectionLatestNewsContainerFirstContainer">
            <p className="propertiesCollectionLatestNewsContainerFirstContainerText">OUR LATEST NEWS</p>
          </div>
        </div>
        {/* Second Part */}
        <div className="propertiesCollectionLatestNewsContainerSecond">
          <div className="propertiesCollectionLatestNewsContainerSecondContainer">
            <p className="propertiesCollectionLatestNewsContainerSecondContainerText cormorant-garamond-regular">
              Be on time with news that we provide <span className="propertiesCollectionLatestNewsContainerSecondContainerTextTextOne">for you</span>
            </p>
          </div>
        </div>
        {/* Third Part */}
        <div className="propertiesCollectionLatestNewsContainerThird">
          <div className="propertiesCollectionLatestNewsContainerThirdContainer">
            {/* Element 1 */}
            <div className="propertiesCollectionLatestNewsContainerThirdContainerElement">
              <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainer">
                {/* Top Part */}
                <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTop">
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainer">
                    <img
                      src="https://www.kiavi.com/hubfs/north_carolina.jpg"
                      alt=""
                      className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainerImage"
                    />
                  </div>
                </div>

                {/* Bottom Part */}
                <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottom">
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainer">
                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOne">
                      <p className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOneText">
                        Real Estate Market Trends for 2025: What Investors Need to Know
                      </p>
                    </div>

                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwo">
                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwoDiv" />
                    </div>

                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThree">
                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainer">
                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeft">
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOne">
                            <FaUserCircle className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOneIcon" />
                          </div>
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwo">
                            <p className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwoText">
                              admin
                            </p>
                          </div>
                        </div>

                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRight">
                          <FiClock className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightIcon" />
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightText">
                            December 20, 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Element 2 */}
            <div className="propertiesCollectionLatestNewsContainerThirdContainerElement">
              <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainer">
                {/* Top Part */}
                <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTop">
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainer">
                    <img
                      src="https://media.architecturaldigest.com/photos/569992ccc6772b76145675a2/16:9/w_2580,c_limit/retreat-the-modern-house-in-nature-01.jpg"
                      alt=""
                      className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainerImage"
                    />
                  </div>
                </div>

                {/* Bottom Part */}
                <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottom">
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainer">
                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOne">
                      <p className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOneText">
                        Sustainable Architecture: Green Building Trends in Luxury Real Estate
                      </p>
                    </div>

                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwo">
                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwoDiv" />
                    </div>

                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThree">
                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainer">
                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeft">
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOne">
                            <FaUserCircle className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOneIcon" />
                          </div>
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwo">
                            <p className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwoText">
                              admin
                            </p>
                          </div>
                        </div>

                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRight">
                          <FiClock className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightIcon" />
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightText">
                            November 15, 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Element 3 */}
            <div className="propertiesCollectionLatestNewsContainerThirdContainerElement">
              <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainer">
                {/* Top Part */}
                <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTop">
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainer">
                    <img
                      src="https://waynealarm.com/wp-content/uploads/2021/09/5495536031-smarthome-1000x536-1.jpeg"
                      alt=""
                      className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerTopContainerImage"
                    />
                  </div>
                </div>

                {/* Bottom Part */}
                <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottom">
                  <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainer">
                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOne">
                      <p className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerOneText">
                        Smart Home Technology Integration in Modern Properties
                      </p>
                    </div>

                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwo">
                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerTwoDiv" />
                    </div>

                    <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThree">
                      <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainer">
                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeft">
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOne">
                            <FaUserCircle className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftOneIcon" />
                          </div>
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwo">
                            <p className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerLeftTwoText">
                              admin
                            </p>
                          </div>
                        </div>

                        <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRight">
                          <FiClock className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightIcon" />
                          <div className="propertiesCollectionLatestNewsContainerThirdContainerElementContainerBottomContainerThreeContainerRightText">
                            October 28, 2024
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
        {/* Fourth Part */}
        <div className="propertiesCollectionLatestNewsContainerFourth">
          <div className="propertiesCollectionLatestNewsContainerFourthContainer">
            <NavLink to="/blog" className="propertiesCollectionLatestNewsContainerFourthContainerButton">
              {/* Left Part */}
              <div className="propertiesCollectionLatestNewsContainerFourthContainerLeft">
                <PiSquaresFourFill className="propertiesCollectionLatestNewsContainerFourthContainerLeftImage" />
              </div>

              {/* Right Part */}
              <div className="propertiesCollectionLatestNewsContainerFourthContainerRight">
                <p className="propertiesCollectionLatestNewsContainerFourthContainerRightText">See More</p>
              </div>
            </NavLink>
          </div>
        </div>
        {/* Fifth Part */}
        <div className="propertiesCollectionLatestNewsContainerFifth">
          <div className="propertiesCollectionLatestNewsContainerFifthContainer">
            <div className="propertiesCollectionLatestNewsMarquee">
              <div className="propertiesCollectionLatestNewsMarqueeInner">
                <span className="propertiesCollectionLatestNewsContainerFifthContainerText">
                  LUXURY ESTATES • PREMIUM VILLAS • EXCLUSIVE APARTMENTS • NOIR ATELIER • LUXURY ESTATES • PREMIUM VILLAS • EXCLUSIVE APARTMENTS •
                  NOIR ATELIER • LUXURY ESTATES • PREMIUM VILLAS • EXCLUSIVE APARTMENTS • NOIR ATELIER •
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCollectionLatestNews;
