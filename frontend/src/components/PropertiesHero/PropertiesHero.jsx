import React from 'react';
import "./propertiesHero.css";

const PropertiesHero = () => {
  return (
    <div className='propertiesHero'>
        <div className="propertiesHeroContainer">
            {/* Top Part */}
            <div className="propertiesHeroContainerTop">
                <div className="propertiesHeroContainerTopContainer">
                    <p className="propertiesHeroContainerTopContainerText">
                        PROPERTIES
                    </p>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="propertiesHeroContainerBottom">
                <div className="propertiesHeroContainerBottomContainer">
                    <p className="propertiesHeroContainerBottomContainerText cormorant-garamond-regular">
                        See the collection of our appartments
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertiesHero