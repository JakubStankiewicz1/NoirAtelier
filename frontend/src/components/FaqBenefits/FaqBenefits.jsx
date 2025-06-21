import React from "react";
import "./faqBenefits.css";
import assets from "../../assets/assets";

const FaqBenefits = () => {
  return (
    <div className="faqBenefits">
      <div className="faqBenefitsContainer">
        {/* Left Part */}
        <div className="faqBenefitsContainerLeft">
          <div className="faqBenefitsContainerLeftContainer">
            <div className="faqBenefitsContainerLeftContainerOne">
              <div className="faqBenefitsContainerLeftContainerOneContainer">
                <p className="faqBenefitsContainerLeftContainerOneContainerText">
                  Benefits
                </p>
              </div>
            </div>

            <div className="faqBenefitsContainerLeftContainerTwo">
              <div className="faqBenefitsContainerLeftContainerTwoContainer">
                <p className="faqBenefitsContainerLeftContainerTwoContainerText cormorant-garamond-regular">
                  With us{" "}
                  <span className="faqBenefitsContainerLeftContainerTwoContainerTextSpan">
                    finding place
                  </span>{" "}
                  to live is easy as pie. Trust us!
                </p>
              </div>
            </div>

            <div className="faqBenefitsContainerLeftContainerThree">
              <div className="faqBenefitsContainerLeftContainerThreeContainer">
                <p className="faqBenefitsContainerLeftContainerThreeContainerText">
                  Our extensive portfolio offers premium properties in the most
                  sought-after locations. From luxury villas to exclusive
                  apartments, we provide personalized service, expert market
                  knowledge, and seamless transactions. With years of experience
                  in real estate, we understand your needs and deliver
                  exceptional results that exceed expectations.
                </p>
              </div>
            </div>

            <div className="faqBenefitsContainerLeftContainerFour">
              <div className="faqBenefitsContainerLeftContainerFourContainer">
                <div className="faqBenefitsContainerLeftContainerFourContainerButton">
                  <div className="faqBenefitsContainerLeftContainerFourContainerButtonContainer">
                    <p className="faqBenefitsContainerLeftContainerFourContainerButtonContainerText">
                      See More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="faqBenefitsContainerRight">
          <div className="faqBenefitsContainerRightContainer">
            {/* Top Part */}
            <div className="faqBenefitsContainerRightContainerTop">
              <div className="faqBenefitsContainerRightContainerTopContainer">
                <div className="faqBenefitsContainerRightContainerTopContainerOne">
                  <div className="faqBenefitsContainerRightContainerTopContainerOneContainer">
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/591/884/850/house-modern-mansions-architecture-wallpaper-preview.jpg"
                      alt=""
                      className="faqBenefitsContainerRightContainerTopContainerOneContainerImage"
                    />
                  </div>
                </div>
                <div className="faqBenefitsContainerRightContainerTopContainerTwo">
                  <div className="faqBenefitsContainerRightContainerTopContainerTwoContainer">
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0RCPb13oSGfnL_-Y5_ijhCbgI807hitA9LnYboCrBu4yxr3QKNHAqel2GiZH0lh0ej3uF976xpDhCZjM5dG-mazE36ZlVCE8EL9WXiLrZAiKjEf80WaLLz0P3R8gDRh2AR2PXHd1XThfTS6MNOkDLucN6ttIP43RJXW9fhNH7LdWo2EPhgWAes8Qy/s16000/beautiful-modern-house.jpg"
                      alt=""
                      className="faqBenefitsContainerRightContainerTopContainerTwoContainerImage"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Part */}
            <div className="faqBenefitsContainerRightContainerRight">
              <div className="faqBenefitsContainerRightContainerRightContainer">
                <div className="faqBenefitsContainerRightContainerRightContainerOne">
                  <div className="faqBenefitsContainerRightContainerRightContainerOneContainer">
                    <img
                      src="https://modernsteeldoors.com/wp-content/uploads/stock-photo-modern-house-1-scaled.jpg"
                      alt=""
                      className="faqBenefitsContainerRightContainerRightContainerOneContainerImage"
                    />
                  </div>
                </div>

                <div className="faqBenefitsContainerRightContainerRightContainerTwo">
                  <div className="faqBenefitsContainerRightContainerRightContainerTwoContainer">
                    <img
                      src="https://construction2style.com/wp-content/uploads/2023/07/1C5A0894-scaled.jpg"
                      alt=""
                      className="faqBenefitsContainerRightContainerRightContainerTwoContainerImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="propertiesCollectionLatestNewsContainerFifth">
        <div className="propertiesCollectionLatestNewsContainerFifthContainer">
          <div className="propertiesCollectionLatestNewsMarquee">
            <div className="propertiesCollectionLatestNewsMarqueeInner">
              <p className="propertiesCollectionLatestNewsContainerFifthContainerText">
                houses villas apartments rental & more houses&nbsp;&nbsp;
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBenefits;
