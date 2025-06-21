import React from "react";
import "./contactHeader.css";

const ContactHeader = () => {
  return (
    <div className="contactHeader">
      <div className="contactHeaderContainer">
        {/* Top Part */}
        <div className="contactHeaderContainerTop">
          <div className="contactHeaderContainerTopContainer">
            <p className="contactHeaderContainerTopContainerText">Contact</p>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="contactHeaderContainerBottom">
          <div className="contactHeaderContainerBottomContainer">
            <p className="contactHeaderContainerBottomContainerText cormorant-garamond-regular">
              Please feel free{" "}
              <span className="contactHeaderContainerBottomContainerTextSpan">
                to contact
              </span>{" "}
              us if you have a question or just want to say hallo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
