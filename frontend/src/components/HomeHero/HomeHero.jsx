import React, { useEffect, useState } from 'react';
import "./homeHero.css";
import assets from '../../assets/assets';

const images = [
  assets.HomeHeroImageOne,
  assets.HomeHeroImageTwo,
  assets.HomeHeroImageThree,
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    // Natychmiastowa zmiana bez opóźnienia
    setCurrent(index);
    
    // Zatrzymaj automatyczne przełączanie na chwilę
    if (intervalId) {
      clearInterval(intervalId);
    }
    
    // Wznów automatyczne przełączanie po 10 sekundach
    setTimeout(() => {
      const newInterval = setInterval(() => {
        setCurrent(prev => (prev + 1) % images.length);
      }, 5000);
      setIntervalId(newInterval);
    }, 10000);
  };

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
                            <div className="homeHeroContainerTopContainerTwoContainerDiv">
                                <img
                                    src={images[current]}
                                    alt=""
                                    className="homeHeroContainerTopContainerTwoContainerImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="homeHeroContainerTopText">
                    <div className="homeHeroContainerTopTextContainer">
                        {/* Div One */}
                        <div className="homeHeroContainerTopTextContainerOne">
                            <div className="homeHeroContainerTopTextContainerOneContainer">
                                <p className="homeHeroContainerTopTextContainerOneContainerTextOne cormorant-garamond-regular">
                                    Find
                                </p>

                                <p className="homeHeroContainerTopTextContainerOneContainerTextTwo cormorant-garamond-regular">
                                    The
                                </p>
                            </div>
                        </div>

                        {/* Div Two */}
                        <div className="homeHeroContainerTopTextContainerTwo">
                            <div className="homeHeroContainerTopTextContainerTwoContainer">
                                <p className="homeHeroContainerTopTextContainerTwoContainerText cormorant-garamond-regular">
                                    Perfect
                                </p>
                            </div>
                        </div>

                        {/* Div Three */}
                        <div className="homeHeroContainerTopTextContainerThree">
                            <div className="homeHeroContainerTopTextContainerThreeContainer">
                                <div className="homeHeroContainerTopTextContainerThreeContainerOne">
                                    <p className="homeHeroContainerTopTextContainerThreeContainerOneText cormorant-garamond-regular">
                                        Place
                                    </p>
                                </div>

                                <div className="homeHeroContainerTopTextContainerThreeContainerTwo">
                                    <p className="homeHeroContainerTopTextContainerThreeContainerTwoText cormorant-garamond-regular">
                                        Since 1976
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Div Four */}
                        <div className="homeHeroContainerTopTextContainerFour">
                            <div className="homeHeroContainerTopTextContainerFourContainer">
                                <p className="homeHeroContainerTopTextContainerFourContainerText cormorant-garamond-regular">
                                    To Live
                                </p>
                            </div>
                        </div>


                        <div className="homeHeroContainerTopTextContainerFive">
                            
                        </div>


                    </div>
                </div>                

                {/* Slider Navigation - Left Side */}
                <div className="homeHeroSliderNavigation">
                    <div className="homeHeroSliderNavigationContainer">
                        {images.map((_, index) => (
                            <div 
                                key={index}
                                className={`homeHeroSliderNavigationItem ${current === index ? 'active' : ''}`}
                                onClick={() => handleSlideChange(index)}
                            >
                                <span className="homeHeroSliderNavigationNumber cormorant-garamond-regular">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default HomeHero