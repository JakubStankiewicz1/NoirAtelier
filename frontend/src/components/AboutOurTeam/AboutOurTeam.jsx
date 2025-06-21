import React from "react";
import "./aboutOurTeam.css";
import assets from "../../assets/assets";

const AboutOurTeam = () => {
  return (
    <div className="aboutOurTeam">
      <div className="aboutOurTeamContainer">
        {/* Top Part */}
        <div className="aboutOurTeamContainerTop">
          <div className="aboutOurTeamContainerTopContainer">
            <div className="aboutOurTeamContainerTopContainerOne">
              <p className="aboutOurTeamContainerTopContainerOneText">
                Our Team
              </p>
            </div>

            <div className="aboutOurTeamContainerTopContainerTwo">
              <div className="aboutOurTeamContainerTopContainerTwoContainer">
                <p className="aboutOurTeamContainerTopContainerTwoContainerText cormorant-garamond-regular">
                  Meet{" "}
                  <span className="aboutOurTeamContainerTopContainerTwoContainerTextSpan">
                    our agents
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="aboutOurTeamContainerBottom">
          <div className="aboutOurTeamContainerBottomContainer">
            {/* Element */}
            <div className="aboutOurTeamContainerBottomContainerElement">
              <div className="aboutOurTeamContainerBottomContainerElementContainer">
                {/* Left Part */}
                <div className="aboutOurTeamContainerBottomContainerElementContainerLeft">
                  <div className="aboutOurTeamContainerBottomContainerElementContainerLeftContainer">
                    <img
                      src={assets.AboutOurTeamImageOne}
                      alt=""
                      className="aboutOurTeamContainerBottomContainerElementContainerLeftContainerImage"
                    />
                  </div>
                </div>

                {/* Right Part */}
                <div className="aboutOurTeamContainerBottomContainerElementContainerRight">
                  <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainer">
                    <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOne">
                      <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOneContainer">
                        <p className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOneContainerText cormorant-garamond-regular">
                          Sarah Mitchell
                        </p>
                      </div>
                    </div>

                    <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwo">
                      <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwoContainer">
                        <p className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwoContainerText">
                          Senior Real Estate Agent with over 8 years of
                          experience in luxury properties. Sarah specializes in
                          high-end residential sales and has an exceptional
                          track record of matching clients with their dream
                          homes. Her attention to detail and personalized
                          approach make her invaluable to our team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Element */}
            <div className="aboutOurTeamContainerBottomContainerElement">
              <div className="aboutOurTeamContainerBottomContainerElementContainer">
                {/* Left Part */}
                <div className="aboutOurTeamContainerBottomContainerElementContainerLeft">
                  <div className="aboutOurTeamContainerBottomContainerElementContainerLeftContainer">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                      className="aboutOurTeamContainerBottomContainerElementContainerLeftContainerImage"
                    />
                  </div>
                </div>

                {/* Right Part */}
                <div className="aboutOurTeamContainerBottomContainerElementContainerRight">
                  <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainer">
                    <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOne">
                      <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOneContainer">
                        <p className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOneContainerText cormorant-garamond-regular">
                          Michael Rodriguez
                        </p>
                      </div>
                    </div>

                    <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwo">
                      <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwoContainer">
                        <p className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwoContainerText">
                          Property Investment Specialist and Market Analyst with
                          12 years in commercial real estate. Michael excels at
                          identifying emerging market trends and investment
                          opportunities. His strategic insights have helped
                          numerous clients build successful property portfolios
                          and maximize their returns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Element */}
            <div className="aboutOurTeamContainerBottomContainerElement">
              <div className="aboutOurTeamContainerBottomContainerElementContainer">
                {/* Left Part */}
                <div className="aboutOurTeamContainerBottomContainerElementContainerLeft">
                  <div className="aboutOurTeamContainerBottomContainerElementContainerLeftContainer">
                    <img
                      src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="aboutOurTeamContainerBottomContainerElementContainerLeftContainerImage"
                    />
                  </div>
                </div>

                {/* Right Part */}
                <div className="aboutOurTeamContainerBottomContainerElementContainerRight">
                  <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainer">
                    <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOne">
                      <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOneContainer">
                        <p className="aboutOurTeamContainerBottomContainerElementContainerRightContainerOneContainerText cormorant-garamond-regular">
                          Emily Chen
                        </p>
                      </div>
                    </div>

                    <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwo">
                      <div className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwoContainer">
                        <p className="aboutOurTeamContainerBottomContainerElementContainerRightContainerTwoContainerText">
                          Client Relations Manager and First-Time Buyer
                          Specialist with 6 years of experience. Emily is
                          passionate about guiding new homeowners through the
                          buying process, making it smooth and stress-free. Her
                          multilingual abilities and cultural sensitivity make
                          her perfect for our diverse clientele.
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
  );
};

export default AboutOurTeam;
