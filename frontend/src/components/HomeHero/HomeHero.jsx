import React from 'react';
import "./homeHero.css";
import assets from '../../assets/assets';

const HomeHero = () => {
  return (
    <div className='homeHero'>
        <div className="homeHeroContainer">


            {/* Top Part */}
            <div className="homeHeroContainerTop">
                <div className="homeHeroContainerTopContainer">

                    <div className="homeHeroContainerTopContainerOne">
                        <div className="homeHeroContainerTopContainerOneDiv"></div>
                    </div>

                    <div className="homeHeroContainerTopContainerTwo">
                        <div className="homeHeroContainerTopContainerTwoContainer">
                            <img src={assets.HomeHeroImageOne} alt="" className='homeHeroContainerTopContainerTwoContainerImage' />
                        </div>
                    </div>
                </div>

                <div className="homeHeroContainerTopText">
                    <div className="homeHeroContainerTopTextContainer"></div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default HomeHero