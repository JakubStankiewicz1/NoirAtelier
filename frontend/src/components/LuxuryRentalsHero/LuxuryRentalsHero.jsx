import React from "react";
import "./luxuryRentalsHero.css";
import assets from "../../assets/assets";

const LuxuryRentalsHero = () => {
  return (
    <div className="luxuryRentalsHero">
      <div className="luxuryRentalsHeroContainer">
        {/* Top Part */}
        <div className="luxuryRentalsHeroContainerTop">
          <div className="luxuryRentalsHeroContainerTopContainer">
            <div className="luxuryRentalsHeroContainerTopContainerOne">
              <div className="luxuryRentalsHeroContainerTopContainerOneContainer">
                <img
                  src={assets.HomeHeroInfoSvg}
                  alt=""
                  className="luxuryRentalsHeroContainerTopContainerOneContainerIcon"
                />
              </div>
            </div>

            <div className="luxuryRentalsHeroContainerTopContainerTwo">
              <div className="luxuryRentalsHeroContainerTopContainerTwoContainer">
                <p className="luxuryRentalsHeroContainerTopContainerTwoContainerText">
                  Luxury Rentals
                </p>
              </div>
            </div>

            <div className="luxuryRentalsHeroContainerTopContainerThree">
              <div className="luxuryRentalsHeroContainerTopContainerThreeContainer">
                <h1 className="luxuryRentalsHeroContainerTopContainerThreeContainerTitle cormorant-garamond-regular">
                  Ekskluzywne Luksusowe Wynajem
                </h1>
                <p className="luxuryRentalsHeroContainerTopContainerThreeContainerText cormorant-garamond-regular">
                  Odkryj nasze wybrane kolekcje najpiękniejszych luksusowych
                  nieruchomości do wynajmu. Oferujemy wyjątkowe doświadczenia
                  mieszkaniowe z najwyższej klasy udogodnieniami i usługami
                  concierge.
                </p>
              </div>
            </div>

            <div className="luxuryRentalsHeroContainerTopContainerFour">
              <div className="luxuryRentalsHeroContainerTopContainerFourContainer">
                <div className="luxuryRentalsHeroContainerTopContainerFourContainerButton">
                  <div className="luxuryRentalsHeroContainerTopContainerFourContainerButtonContainer">
                    <p className="luxuryRentalsHeroContainerTopContainerFourContainerButtonContainerText">
                      Przeglądaj Oferty
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="luxuryRentalsHeroContainerBottom">
          <div className="luxuryRentalsHeroContainerBottomContainer">
            <div className="luxuryRentalsHeroContainerBottomContainerOne">
              <div className="luxuryRentalsHeroContainerBottomContainerOneContainer">
                <h2 className="luxuryRentalsHeroContainerBottomContainerOneContainerTitle cormorant-garamond-regular">
                  100+
                </h2>
                <p className="luxuryRentalsHeroContainerBottomContainerOneContainerText">
                  Luksusowych Nieruchomości
                </p>
              </div>
            </div>

            <div className="luxuryRentalsHeroContainerBottomContainerTwo">
              <div className="luxuryRentalsHeroContainerBottomContainerTwoContainer">
                <h2 className="luxuryRentalsHeroContainerBottomContainerTwoContainerTitle cormorant-garamond-regular">
                  24/7
                </h2>
                <p className="luxuryRentalsHeroContainerBottomContainerTwoContainerText">
                  Obsługa Concierge
                </p>
              </div>
            </div>

            <div className="luxuryRentalsHeroContainerBottomContainerThree">
              <div className="luxuryRentalsHeroContainerBottomContainerThreeContainer">
                <h2 className="luxuryRentalsHeroContainerBottomContainerThreeContainerTitle cormorant-garamond-regular">
                  5★
                </h2>
                <p className="luxuryRentalsHeroContainerBottomContainerThreeContainerText">
                  Średnia Ocena Klientów
                </p>
              </div>
            </div>

            <div className="luxuryRentalsHeroContainerBottomContainerFour">
              <div className="luxuryRentalsHeroContainerBottomContainerFourContainer">
                <h2 className="luxuryRentalsHeroContainerBottomContainerFourContainerTitle cormorant-garamond-regular">
                  15+
                </h2>
                <p className="luxuryRentalsHeroContainerBottomContainerFourContainerText">
                  Lat Doświadczenia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRentalsHero;
