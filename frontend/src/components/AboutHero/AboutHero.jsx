import React from "react";
import "./aboutHero.css";
import assets from "../../assets/assets";

const AboutHero = () => {
  return (
    <div className="aboutHero">
      <div className="aboutHeroContainer">
        {/* Top Part */}
        <div className="aboutHeroContainerTop">
          <div className="aboutHeroContainerTopContainer">
            <div className="aboutHeroContainerTopContainerOne">
              <div className="aboutHeroContainerTopContainerOneContainer">
                <img
                  src={assets.HomeHeroInfoSvg}
                  alt=""
                  className="aboutHeroContainerTopContainerOneContainerIcon"
                />
              </div>
            </div>
            <div className="aboutHeroContainerTopContainerTwo">
              <div className="aboutHeroContainerTopContainerTwoContainer">
                <p className="aboutHeroContainerTopContainerTwoContainerText">
                  About us
                </p>
              </div>
            </div>{" "}
            <div className="aboutHeroContainerTopContainerThree">
              <div className="aboutHeroContainerTopContainerThreeContainer">
                <p className="aboutHeroContainerTopContainerThreeContainerText cormorant-garamond-regular">
                  At Noir Atelier, we believe that finding the perfect home
                  should be an extraordinary experience. Founded with a passion
                  for luxury real estate, we specialize in connecting discerning
                  clients with exceptional properties that reflect their unique
                  lifestyle and aspirations.
                </p>
              </div>
            </div>
            <div className="aboutHeroContainerTopContainerFour">
              <div className="aboutHeroContainerTopContainerFourContainer">
                <div className="aboutHeroContainerTopContainerFourContainerButton">
                  <div className="aboutHeroContainerTopContainerFourContainerButtonContainer">
                    <p className="aboutHeroContainerTopContainerFourContainerButtonContainerText">
                      See More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="aboutHeroContainerBottom">
          <div className="aboutHeroContainerBottomContainer">
            {/* Top Part */}
            <div className="aboutHeroContainerBottomContainerTop">
              <div className="aboutHeroContainerBottomContainerTopContainer">
                <div className="aboutHeroContainerBottomContainerTopContainerOne">
                  <div className="aboutHeroContainerBottomContainerTopContainerOneContainer">
                    <img
                      src="https://www.nichiha.com/uploads/blog/the-top-exterior-design-trends-for-florida-homes-in-2022/Nichiha-Residential-VintageWood-WoodSeries-Modern-Horizontal-SingleFamily.jpg?t=1653004006"
                      alt=""
                      className="aboutHeroContainerBottomContainerTopContainerOneContainerImage"
                    />
                  </div>
                </div>

                <div className="aboutHeroContainerBottomContainerTopContainerTwo">
                  <div className="aboutHeroContainerBottomContainerTopContainerTwoContainer">
                    <img
                      src="https://www.luxxu.net/blog/wp-content/uploads/2017/02/20-Incredible-Modern-Houses-Around-the-United-States-new-york.jpg"
                      alt=""
                      className="aboutHeroContainerBottomContainerTopContainerTwoContainerImage"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Part */}
            <div className="aboutHeroContainerBottomContainerBottom">
              <div className="aboutHeroContainerBottomContainerBottomContainer">
                <div className="aboutHeroContainerBottomContainerBottomContainerOne">
                  <div className="aboutHeroContainerBottomContainerBottomContainerOneContainer">
                    <img
                      src="https://static.dezeen.com/uploads/2017/08/rodin-residence-molly-bell_dezeen_2364_col_9-852x568.jpg"
                      alt=""
                      className="aboutHeroContainerBottomContainerBottomContainerOneContainerImage"
                    />
                  </div>
                </div>

                <div className="aboutHeroContainerBottomContainerBottomContainerTwo">
                  <div className="aboutHeroContainerBottomContainerBottomContainerTwoContainer">
                    <img
                      src="https://inhabit.corcoran.com/wp-content/uploads/2022/07/DSC05516.ARW_-1024x684.jpg"
                      alt=""
                      className="aboutHeroContainerBottomContainerBottomContainerTwoContainerImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
