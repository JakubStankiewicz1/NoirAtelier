import React, { useState } from "react";
import "./offertHeader.css";
import assets from "../../assets/assets";

const OffertHeader = ({ offerData }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Używamy danych z props lub domyślne dane fallback
  const allImages = offerData?.gallery || [
    assets.HomeHeroImageOne,
    assets.HomeHeroImageTwo,
    assets.HomeHeroImageThree,
    assets.PropertiesCollectionOne,
    assets.PropertiesCollectionLatestNewsOne,
  ];

  // const allImages = [
  //   ...images,
  //   ...images.slice(0, Math.min(7, images.length)), // Dodajemy kolejne zdjęcia (powtarzając pierwsze)
  // ];

  const propertyData = offerData?.propertyData || [
    { label: "Powierzchnia użytkowa", value: "326,23 m²" },
    { label: "Powierzchnia garażu", value: "44,62 m²" },
    { label: "Powierzchnia zabudowy", value: "448,79 m²" },
    { label: "Wysokość budynku", value: "6,68 m" },
    { label: "Kąt nachylenia dachu", value: "25 °" },
    { label: "Min. wymiary działki", value: "32,20 x 35,05m" },
  ];

  const handleImageClick = (index) => {
    console.log(`Clicked image ${index}, current: ${selectedImage}`);
    setSelectedImage(index);
  };

  return (
    <div className="offertHeader">
      <div className="offertHeaderContainer">
        {/* Top Part */}
        <div className="offertHeaderContainerTop">
          <div className="offertHeaderContainerTopContainer">            <div className="offertHeaderContainerTopContainerOne">
              <p className="offertHeaderContainerTopContainerOneText cormorant-garamond-regular">
                {offerData?.name || "BrickHouse 118"}
              </p>
            </div>

            <div className="offertHeaderContainerTopContainerTwo">
              <p className="offertHeaderContainerTopContainerTwoText">
                {offerData?.description || "Projekt domu parterowego w kształcie litery U, duża strefa dzienna, 4 sypialnie, garderoby, pokój rekreacyjny, garaż na 2 auta"}
              </p>
            </div>
          </div>
        </div>{" "}



        
        {/* Bottom Part */}
        <div className="offertHeaderContainerBottom">
          <div className="offertHeaderContainerBottomContainer">
            {/* Left Part - Main Image + Gallery */}



            
            <div className="offertHeaderContainerBottomContainerLeft">
              {" "}
              {/* Main Image */}
              <div className="offertHeaderMainImageContainer">
                <img
                  src={allImages[selectedImage]}
                  alt="Main property view"
                  className="offertHeaderMainImage"
                  key={selectedImage} // Force re-render for animation
                />
              </div>
              {/* Image Gallery */}
              <div className="offertHeaderGallery">
                {allImages.map((image, index) => (
                  <div
                    key={`gallery-${index}`}
                    className={`offertHeaderGalleryItem ${selectedImage === index ? "active" : ""}`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={image} alt={`Property view ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>





            {/* Right Part - Property Data */}
            <div className="offertHeaderContainerBottomContainerRight">
              <div className="offertHeaderPropertyData">
                <div className="offertHeaderPropertyDataContainer">
                  {propertyData.map((item, index) => (
                    <div key={index} className="offertHeaderPropertyDataItem">
                      <div className="offertHeaderPropertyDataLabel">{item.label}</div>
                      <div className="offertHeaderPropertyDataValue">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffertHeader;
