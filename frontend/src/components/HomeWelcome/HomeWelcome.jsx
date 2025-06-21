import React from "react";
import "./homeWelcome.css";

const HomeWelcome = () => {
  return (
    <div className="homeWelcome">
      <div className="homeWelcomeContainer">
        {/* Top Part */}
        <div className="homeWelcomeContainerTop">
          <div className="homeWelcomeContainerTopContainer">
            <p className="homeWelcomeContainerTopContainerText">Welcome</p>
          </div>
        </div>{" "}
        {/* Bottom Part */}
        <div className="homeWelcomeContainerBottom">
          <div className="homeWelcomeContainerBottomContainer">
            <div className="homeWelcomeContainerBottomContainerDiv">



              <div className="homeWelcomeContainerBottomContainerOne">
                <div className="homeWelcomeContainerBottomContainerOneFirst">
                  <div className="homeWelcomeContainerBottomContainerOneFirstOne">
                    <p className="homeWelcomeContainerBottomContainerOneFirstOneText cormorant-garamond-regular">Luxury</p>
                  </div>
                </div>

                <div className="homeWelcomeContainerBottomContainerOneSecond">
                  <div className="homeWelcomeContainerBottomContainerOneSecondOne">
                    <p className="homeWelcomeContainerBottomContainerOneSecondOneText cormorant-garamond-regular">Properties</p>
                  </div>
                </div>

                <div className="homeWelcomeContainerBottomContainerOneThird">
                  <div className="homeWelcomeContainerBottomContainerOneThirdOne">
                    <p className="homeWelcomeContainerBottomContainerOneThirdOneText cormorant-garamond-regular">Await</p>
                  </div>
                </div>
              </div>



              <div className="homeWelcomeContainerBottomContainerTwo">
                <div className="homeWelcomeContainerBottomContainerTwoContainer">
                  <p className="homeWelcomeContainerBottomContainerTwoContainerText cormorant-garamond-regular">Your Discovery</p>
                </div>
              </div>
            </div>
            

            <div className="homeWelcomeContainerBottomContainerThree">
              <p className="homeWelcomeContainerBottomContainerThreeText cormorant-garamond-regular">Experience unparalleled elegance and</p>
            </div>

            <div className="homeWelcomeContainerBottomContainerFour">
              <div className="homeWelcomeContainerBottomContainerFourContainer">
                <p className="homeWelcomeContainerBottomContainerFourContainerText cormorant-garamond-regular">sophisticated living since 1976.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWelcome;
