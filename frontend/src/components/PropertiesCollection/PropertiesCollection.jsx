import React from "react";
import "./propertiesCollection.css";
import assets from "../../assets/assets";
import { getAllOffers } from "../../data/offersData";
import { useNavigate } from "react-router-dom";

const PropertiesCollection = () => {
  const navigate = useNavigate();
  const offers = getAllOffers();

  const handleOfferClick = (offerId) => {
    navigate(`/offert/${offerId}`);
  };
  return (
    <div className="propertiesCollection">
      <div className="propertiesCollectionContainer">
        <div className="propertiesCollectionContainerElemenets">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="propertiesCollectionContainerElementOne"
            >
              <div className="propertiesCollectionContainerElementOneContainer">
                {/* Left Part */}
                <div
                  className={`propertiesCollectionContainerElementOneContainerLeft ${index % 2 === 1 ? "order-2" : ""}`}
                >
                  <div className="propertiesCollectionContainerElementOneContainerLeftContainer">
                    <div className="propertiesCollectionContainerElementOneContainerLeftContainerOne">
                      <div className="propertiesCollectionContainerElementOneContainerLeftContainerOneContainer">
                        <p className="propertiesCollectionContainerElementOneContainerLeftContainerOneContainerText cormorant-garamond-regular">
                          {offer.name}
                        </p>
                      </div>
                    </div>
                    <div className="propertiesCollectionContainerElementOneContainerLeftContainerTwo">
                      <div className="propertiesCollectionContainerElementOneContainerLeftContainerTwoContainer">
                        <p className="propertiesCollectionContainerElementOneContainerLeftContainerTwoContainerText">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                    <div className="propertiesCollectionContainerElementOneContainerLeftContainerThree">
                      <div className="propertiesCollectionContainerElementOneContainerLeftContainerThreeContainer">
                        <div
                          className="propertiesCollectionContainerElementOneContainerLeftContainerThreeContainerButton"
                          onClick={() => handleOfferClick(offer.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="propertiesCollectionContainerElementOneContainerLeftContainerThreeContainerButtonContainer">
                            <p className="propertiesCollectionContainerElementOneContainerLeftContainerThreeContainerButtonContainerText">
                              See More
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Part */}
                <div
                  className={`propertiesCollectionContainerElementOneContainerRight ${index % 2 === 1 ? "propertiesCollectionContainerElementTwoContainerRight order-1" : ""}`}
                >
                  <div
                    className={`propertiesCollectionContainerElementOneContainerRightContainer ${index % 2 === 1 ? "propertiesCollectionContainerElementTwoContainerRightContainer" : ""}`}
                  >
                    <img
                      src={offer.mainImage}
                      alt={offer.name}
                      className={`propertiesCollectionContainerElementOneContainerRightContainerImage ${index % 2 === 1 ? "propertiesCollectionContainerElementTwoContainerRightContainerImage" : ""}`}
                      onClick={() => handleOfferClick(offer.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesCollection;
