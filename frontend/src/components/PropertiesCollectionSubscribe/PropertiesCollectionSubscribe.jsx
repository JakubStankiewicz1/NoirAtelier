import React from "react";
import "./propertiesCollectionSubscribe.css";

const PropertiesCollectionSubscribe = () => {
  return (
    <div className="propertiesCollectionSubscribe">
      <div className="propertiesCollectionSubscribeContainer">
        {/* First Part */}
        <div className="propertiesCollectionSubscribeContainerFirst">
          <div className="propertiesCollectionSubscribeContainerFirstContainer">
            <p className="propertiesCollectionSubscribeContainerFirstContainerText">
              SUBSCRIBE
            </p>
          </div>
        </div>
        {/* Second Part */}
        <div className="propertiesCollectionSubscribeContainerSecond">
          <div className="propertiesCollectionSubscribeContainerSecondContainer">
            <p className="propertiesCollectionSubscribeContainerSecondContainerText cormorant-garamond-regular">
              Stay tuned about new offer and promotions
            </p>
          </div>
        </div>
        {/* Third Part */}
        <div className="propertiesCollectionSubscribeContainerThird">
          <div className="propertiesCollectionSubscribeContainerThirdContainer">
            <div className="propertiesCollectionSubscribeContainerThirdContainerOne">
              <div className="propertiesCollectionSubscribeContainerThirdContainerOneContainer">
                <input
                  type="text"
                  placeholder="Your Mail"
                  className="propertiesCollectionSubscribeContainerThirdContainerOneContainerInput"
                />
              </div>
            </div>

            <div className="propertiesCollectionSubscribeContainerThirdContainerTwo">
              <div className="propertiesCollectionSubscribeContainerThirdContainerTwoContainer">
                <div className="propertiesCollectionSubscribeContainerThirdContainerTwoContainerButton">
                  <div className="propertiesCollectionSubscribeContainerThirdContainerTwoContainerButtonContainer">
                    <p className="propertiesCollectionSubscribeContainerThirdContainerTwoContainerButtonContainerText">
                      Subscribe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Fourth Part */}
        <div className="propertiesCollectionSubscribeContainerFourth">
          <div className="propertiesCollectionSubscribeContainerFourthContainer">
            <p className="propertiesCollectionSubscribeContainerFourthContainerText">
              Join thousands of satisfied subscribers and be the first to know
              about exclusive property listings, market insights, and special
              investment opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCollectionSubscribe;
