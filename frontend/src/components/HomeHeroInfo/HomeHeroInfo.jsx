import React from "react";
import "./homeHeroInfo.css";
import assets from "../../assets/assets";

const HomeHeroInfo = () => {
  return (
    <div className="homeHeroInfo">
      <div className="homeHeroInfoContainer">
        {/* Left Part */}
        <div className="homeHeroInfoContainerLeft">
          <div className="homeHeroInfoContainerLeftContainer">
            {/* Element */}
            <div className="homeHeroInfoContainerLeftContainerElement">
              <div className="homeHeroInfoContainerLeftContainerElementContainer">
                {/* Top Part */}
                <div className="homeHeroInfoContainerLeftContainerElementContainerTop">
                  <p className="homeHeroInfoContainerLeftContainerElementContainerTopText">
                    01
                  </p>
                </div>

                {/* Bottom Part */}
                <div className="homeHeroInfoContainerLeftContainerElementContainerBottom">
                  <div className="homeHeroInfoContainerLeftContainerElementContainerBottomDiv" />
                </div>
              </div>
            </div>

            {/* Element */}
            <div className="homeHeroInfoContainerLeftContainerElement">
              <div className="homeHeroInfoContainerLeftContainerElementContainer">
                {/* Top Part */}
                <div className="homeHeroInfoContainerLeftContainerElementContainerTop">
                  <p className="homeHeroInfoContainerLeftContainerElementContainerTopText">
                    02
                  </p>
                </div>

                {/* Bottom Part */}
                <div className="homeHeroInfoContainerLeftContainerElementContainerBottom">
                  <div className="homeHeroInfoContainerLeftContainerElementContainerBottomDiv" />
                </div>
              </div>
            </div>

            {/* Element */}
            <div className="homeHeroInfoContainerLeftContainerElement">
              <div className="homeHeroInfoContainerLeftContainerElementContainer">
                {/* Top Part */}
                <div className="homeHeroInfoContainerLeftContainerElementContainerTop">
                  <p className="homeHeroInfoContainerLeftContainerElementContainerTopText">
                    03
                  </p>
                </div>

                {/* Bottom Part */}
                <div className="homeHeroInfoContainerLeftContainerElementContainerBottom">
                  <div className="homeHeroInfoContainerLeftContainerElementContainerBottomDiv" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Part */}
        <div className="homeHeroInfoContainerMiddle">
          <div className="homeHeroInfoContainerMiddleContainer">
            <img
              src={assets.HomeHeroInfoSvg}
              alt=""
              className="homeHeroInfoContainerMiddleContainerSvg"
            />
          </div>
        </div>

        {/* Right Part */}
        <div className="homeHeroInfoContainerRight">
          <div className="homeHeroInfoContainerRightContainer">
            <div className="homeHeroInfoContainerRightContainerButton">
              <div className="homeHeroInfoContainerRightContainerButtonContainer">
                <p className="homeHeroInfoContainerRightContainerButtonContainerText">
                  See More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroInfo;
