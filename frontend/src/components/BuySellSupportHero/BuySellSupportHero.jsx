import React, { useEffect, useState } from "react";
import "./buySellSupportHero.css";
import {
  FaHandshake,
  FaStar,
  FaHome,
  FaTrophy,
  FaKey,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const BuySellSupportHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "500+", label: "Sprzedanych Nieruchomości", icon: <FaHome /> },
    { number: "10+", label: "Lat Doświadczenia", icon: <FaStar /> },
    { number: "95%", label: "Zadowolonych Klientów", icon: <FaHandshake /> },
    { number: "100+", label: "Ekspertów", icon: <FaUsers /> },
  ];

  return (
    <div className="buySellSupportHero">
      <div className="buySellSupportHeroContainer">
        {/* Left Content */}
        <div
          className="buySellSupportHeroLeft"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="buySellSupportHeroLeftContent">


            <h1 className="buySellSupportHeroLeftTitle cormorant-garamond-regular">
              Kompleksowe Wsparcie w{" "}
              <span className="buySellSupportHeroLeftTitleHighlight">
                Kupnie i Sprzedaży
              </span>
            </h1>
            <p className="buySellSupportHeroLeftDescription">
              Oferujemy pełne wsparcie w procesie kupna i sprzedaży
              nieruchomości premium. Nasz zespół ekspertów zapewnia
              profesjonalne doradztwo, analizę rynku i kompleksową obsługę na
              każdym etapie transakcji.
            </p>
            <div className="buySellSupportHeroLeftFeatures">
              <div className="buySellSupportHeroLeftFeature">
                <FaShieldAlt className="buySellSupportHeroLeftFeatureIcon" />
                <span>Bezpieczne Transakcje</span>
              </div>
              <div className="buySellSupportHeroLeftFeature">
                <FaChartLine className="buySellSupportHeroLeftFeatureIcon" />
                <span>Analiza Rynku</span>
              </div>
              <div className="buySellSupportHeroLeftFeature">
                <FaKey className="buySellSupportHeroLeftFeatureIcon" />
                <span>Kompleksowa Obsługa</span>
              </div>
            </div>
            <div className="buySellSupportHeroLeftButtons">
              <button className="buySellSupportHeroLeftButtonPrimary">
                <span>Rozpocznij Proces</span>
                <div className="buySellSupportHeroLeftButtonArrow">→</div>
              </button>
              <button className="buySellSupportHeroLeftButtonSecondary">
                <span>Dowiedz się Więcej</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="buySellSupportHeroRight"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="buySellSupportHeroRightImageContainer">
            <div className="buySellSupportHeroRightImageWrapper">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Buy Sell Support ${index + 1}`}
                  className={`buySellSupportHeroRightImage ${index === currentImage ? "active" : ""}`}
                />
              ))}
              <div className="buySellSupportHeroRightImageOverlay">
                <div className="buySellSupportHeroRightImageOverlayContent">
                  <FaHandshake className="buySellSupportHeroRightImageOverlayIcon" />
                  <span>Zaufany Partner</span>
                </div>
              </div>
            </div>
            <div className="buySellSupportHeroRightImageDots">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`buySellSupportHeroRightImageDot ${index === currentImage ? "active" : ""}`}
                  onClick={() => setCurrentImage(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="buySellSupportHeroStats">
        <div className="buySellSupportHeroStatsContainer">
          {stats.map((stat, index) => (
            <div key={index} className="buySellSupportHeroStatItem">
              <div className="buySellSupportHeroStatIcon">{stat.icon}</div>
              <div className="buySellSupportHeroStatContent">
                <div className="buySellSupportHeroStatNumber cormorant-garamond-regular">
                  {stat.number}
                </div>
                <div className="buySellSupportHeroStatLabel">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuySellSupportHero;
