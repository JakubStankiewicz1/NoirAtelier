import React, { useState } from "react";
import "./offertVisualization.css";
import assets from "../../assets/assets";

const OffertVisualization = ({ offerData }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = offerData?.visualizations || [
    assets.HomeHeroImageTwo,
    assets.HomeHeroImageThree,
    assets.PropertiesCollectionOne,
    assets.PropertiesCollectionOne,
    assets.PropertiesCollectionLatestNewsOne,
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="offertVisualization">
      <div className="offertVisualizationContainer">
        {/* Top Part */}
        <div className="offertVisualizationContainerTop">
          <div className="offertVisualizationContainerTopContainer">
            <p className="offertVisualizationContainerTopContainerText cormorant-garamond-regular">
              Wizualizacja elewacji
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="offertVisualizationContainerDivider">
          <div className="offertVisualizationContainerDividerLine" />
        </div>

        {/* Bottom Part */}
        <div className="offertVisualizationContainerBottom">
          <div className="offertVisualizationContainerBottomContainer">
            <div className="offertVisualizationContainerBottomContainerTop">
              <img
                src={images[selectedImage]}
                key={selectedImage}
                alt=""
                className="offertVisualizationContainerBottomContainerTopImage"
              />
            </div>

            <div className="offertVisualizationContainerBottomContainerBottom">
              {images.map((image, index) => (
                <div
                  key={`gallery-${index}`}
                  onClick={() => handleImageClick(index)}
                  className={`offertVisualizationContainerBottomContainerBottomItem ${selectedImage === index ? "active" : ""}`}
                >
                  <img
                    src={image}
                    alt=""
                    className="offertVisualizationContainerBottomContainerBottomItemImage"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffertVisualization;
