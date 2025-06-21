import React from "react";
import "./faqSeeMore.css";
import assets from "../../assets/assets";

const FaqSeeMore = () => {
  return (
    <div className="faqSeeMore">
      <div className="faqSeeMoreContainer">
        {/* Left Part */}
        <div className="faqSeeMoreContainerLeft">
          <div className="faqSeeMoreContainerLeftContainer">
            {/* Top Part */}
            <div className="faqSeeMoreContainerLeftContainerTop">
              <div className="faqSeeMoreContainerLeftContainerTopContainer">
                <p className="faqSeeMoreContainerLeftContainerTopContainerText cormorant-garamond-regular">
                  We are here{" "}
                  <span className="faqSeeMoreContainerLeftContainerTopContainerTextSpan">
                    to help you
                  </span>{" "}
                  with your problems
                </p>
              </div>
            </div>{" "}
            {/* Middle Part */}
            <div className="faqSeeMoreContainerLeftContainerMiddle">
              <div className="faqSeeMoreContainerLeftContainerMiddleContainer">
                <p className="faqSeeMoreContainerLeftContainerMiddleContainerText">
                  Our dedicated support team is available 24/7 to assist you
                  with any questions or concerns regarding your luxury property
                  experience. Whether you need help with booking a viewing,
                  understanding our services, or navigating through our
                  exclusive collections, we're committed to providing
                  exceptional customer service that matches the sophistication
                  of NoirAtelier.
                </p>
              </div>
            </div>
            {/* Bottom Part */}
            <div className="faqSeeMoreContainerLeftContainerBottom">
              <div className="faqSeeMoreContainerLeftContainerBottomContainer">
                <div className="faqSeeMoreContainerLeftContainerBottomContainerButton">
                  <div className="faqSeeMoreContainerLeftContainerBottomContainerButtonContainer">
                    <p className="faqSeeMoreContainerLeftContainerBottomContainerButtonContainerText">
                      See More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="faqSeeMoreContainerRight">
          <div className="faqSeeMoreContainerRightContainer">
            <img
              src={assets.FaqSeeMoreImage}
              alt=""
              className="faqSeeMoreContainerRightContainerImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSeeMore;
