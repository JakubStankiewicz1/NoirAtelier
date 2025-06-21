import React, { useEffect, useState } from "react";
import "./interiorDesignHero.css";
import { FaHome, FaStar, FaHeart, FaTrophy, FaPalette, FaLightbulb, FaImage, FaLeaf, FaPlay, FaBullseye, FaBolt, FaGem } from "react-icons/fa";

const InteriorDesignHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
    { number: "200+", label: "Projektów", icon: <FaHome /> },
    { number: "15+", label: "Lat Doświadczenia", icon: <FaStar /> },
    { number: "98%", label: "Zadowolonych Klientów", icon: <FaHeart /> },
    { number: "50+", label: "Nagród", icon: <FaTrophy /> },
  ];

  return (
    <div className="interiorDesignHero">
      {" "}
      {/* Floating Elements */}
      {/* <div className="interiorDesignHeroFloatingElements">
        <div className="interiorDesignHeroFloatingElement element1"><FaGem /></div>
        <div className="interiorDesignHeroFloatingElement element2"><FaPalette /></div>
        <div className="interiorDesignHeroFloatingElement element3"><FaLightbulb /></div>
        <div className="interiorDesignHeroFloatingElement element4"><FaImage /></div>
        <div className="interiorDesignHeroFloatingElement element5"><FaLeaf /></div>
      </div> */}
      <div className="interiorDesignHeroContainer">
        {/* Left Content */}
        <div className="interiorDesignHeroLeft" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="interiorDesignHeroLeftContent">
            {" "}
            {/* <div className="interiorDesignHeroLeftBadge">
              <span className="interiorDesignHeroLeftBadgeIcon">
                <FaPalette />
              </span>
              <span className="interiorDesignHeroLeftBadgeText">Premium Interior Design</span>
            </div> */}
            <h1 className="interiorDesignHeroLeftTitle">
              <span className="interiorDesignHeroLeftTitleLine1 cormorant-garamond-regular">Tworzymy</span>
              <span className="interiorDesignHeroLeftTitleLine2 cormorant-garamond-regular">Przestrzenie</span>
              <span className="interiorDesignHeroLeftTitleLine3 cormorant-garamond-regular">Marzeń</span>
            </h1>
            <p className="interiorDesignHeroLeftDescription">
              Odkryj niezwykłe możliwości swojego wnętrza. Nasze ekskluzywne projekty łączą funkcjonalność z estetyką, tworząc przestrzenie, które
              inspirują i zachwycają każdego dnia.
            </p>
            <div className="interiorDesignHeroLeftButtons">
              <button className="interiorDesignHeroLeftButtonPrimary">
                <span>Zobacz Portfolio</span>
                <div className="interiorDesignHeroLeftButtonPrimaryArrow">→</div>
              </button>{" "}
              <button className="interiorDesignHeroLeftButtonSecondary">
                <span>
                  <FaPlay />
                </span>
                <span>Obejrzyj Film</span>
              </button>
            </div>
            <div className="interiorDesignHeroLeftStats">
              {stats.map((stat, index) => (
                <div key={index} className="interiorDesignHeroLeftStatItem">
                  <div className="interiorDesignHeroLeftStatIcon">{stat.icon}</div>
                  <div className="interiorDesignHeroLeftStatContent">
                    <span className="interiorDesignHeroLeftStatNumber cormorant-garamond-regular">{stat.number}</span>
                    <span className="interiorDesignHeroLeftStatLabel">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="interiorDesignHeroRight">
          <div className="interiorDesignHeroRightContainer">
            {/* Main Image Slider */}
            <div className="interiorDesignHeroRightMainImage">
              {images.map((image, index) => (
                <div key={index} className={`interiorDesignHeroRightMainImageSlide ${index === currentImage ? "active" : ""}`}>
                  <img src={image} alt={`Interior Design ${index + 1}`} />
                  <div className="interiorDesignHeroRightMainImageOverlay">
                    <div className="interiorDesignHeroRightMainImageOverlayContent">
                      <span className="interiorDesignHeroRightMainImageOverlayText">
                        {index === 0 && "Luksusowe Salony"}
                        {index === 1 && "Eleganckie Sypialnie"}
                        {index === 2 && "Nowoczesne Kuchnie"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Image Navigation Dots */}
              <div className="interiorDesignHeroRightImageDots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`interiorDesignHeroRightImageDot ${index === currentImage ? "active" : ""}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
            {/* Decorative Elements */}
            {/* <div className="interiorDesignHeroRightDecorative">
              <div className="interiorDesignHeroRightDecorativeCircle circle1"></div>
              <div className="interiorDesignHeroRightDecorativeCircle circle2"></div>
              <div className="interiorDesignHeroRightDecorativeSquare square1"></div>
              <div className="interiorDesignHeroRightDecorativeSquare square2"></div>
            </div> */}{" "}
            {/* Floating Cards */}
            <div className="interiorDesignHeroRightFloatingCards">
              <div className="interiorDesignHeroRightFloatingCard card1">
                <div className="interiorDesignHeroRightFloatingCardIcon">
                  <FaBullseye />
                </div>
                <div className="interiorDesignHeroRightFloatingCardText">
                  <span>Indywidualne</span>
                  <span>Podejście</span>
                </div>
              </div>
              <div className="interiorDesignHeroRightFloatingCard card2">
                <div className="interiorDesignHeroRightFloatingCardIcon">
                  <FaBolt />
                </div>
                <div className="interiorDesignHeroRightFloatingCardText">
                  <span>Szybka</span>
                  <span>Realizacja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignHero;
