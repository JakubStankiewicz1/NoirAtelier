import React from "react";
import "./luxuryRentalsServices.css";
import {
  FaKey,
  FaBell,
  FaWifi,
  FaCar,
  FaSwimmer,
  FaUtensils,
  FaHome,
  FaShieldAlt,
} from "react-icons/fa";

const LuxuryRentalsServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaKey />,
      title: "Wynajem Krótkoterminowy",
      description:
        "Luksusowe apartamenty i wille na krótkie pobyty z pełnym wyposażeniem premium.",
    },
    {
      id: 2,
      icon: <FaHome />,
      title: "Wynajem Długoterminowy",
      description:
        "Ekskluzywne nieruchomości na dłuższe okresy z elastycznymi warunkami najmu.",
    },
    {
      id: 3,
      icon: <FaBell />,
      title: "Usługi Concierge",
      description:
        "Całodobowa obsługa concierge zapewniająca najwyższy standard obsługi klienta.",
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Pełne Ubezpieczenie",
      description:
        "Kompleksowe ubezpieczenie nieruchomości i odpowiedzialności cywilnej.",
    },
    {
      id: 5,
      icon: <FaWifi />,
      title: "Premium Amenities",
      description:
        "Najwyższej klasy udogodnienia: internet, TV, sprzęt kuchenny i wiele więcej.",
    },
    {
      id: 6,
      icon: <FaCar />,
      title: "Parking & Transport",
      description:
        "Bezpieczne miejsca parkingowe i usługi transportowe na życzenie.",
    },
  ];

  return (
    <div className="luxuryRentalsServices">
      <div className="luxuryRentalsServicesContainer">
        {/* Header */}
        <div className="luxuryRentalsServicesHeader">
          <div className="luxuryRentalsServicesHeaderContainer">
            <p className="luxuryRentalsServicesHeaderSubtitle">Nasze Usługi</p>
            <h2 className="luxuryRentalsServicesHeaderTitle cormorant-garamond-regular">
              Luksusowe Usługi Wynajmu
            </h2>
            <p className="luxuryRentalsServicesHeaderDescription">
              Oferujemy kompleksowe usługi wynajmu luksusowych nieruchomości z
              najwyższym standardem obsługi
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="luxuryRentalsServicesGrid">
          {services.map((service) => (
            <div key={service.id} className="luxuryRentalsServicesCard">
              <div className="luxuryRentalsServicesCardIcon">
                {service.icon}
              </div>
              <div className="luxuryRentalsServicesCardContent">
                <h3 className="luxuryRentalsServicesCardTitle cormorant-garamond-regular">
                  {service.title}
                </h3>
                <p className="luxuryRentalsServicesCardDescription">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="luxuryRentalsServicesFeatures">
          <div className="luxuryRentalsServicesFeaturesContainer">
            <div className="luxuryRentalsServicesFeaturesLeft">
              <h3 className="luxuryRentalsServicesFeaturesTitle cormorant-garamond-regular">
                Dodatkowe Udogodnienia
              </h3>
              <ul className="luxuryRentalsServicesFeaturesList">
                <li>
                  <FaSwimmer /> Prywatne baseny i spa
                </li>
                <li>
                  <FaUtensils /> Prywatny szef kuchni na życzenie
                </li>
                <li>
                  <FaCar /> Luksusowe samochody do wynajęcia
                </li>
                <li>
                  <FaWifi /> Szybki internet i smart home
                </li>
              </ul>
            </div>
            <div className="luxuryRentalsServicesFeaturesRight">
              <div className="luxuryRentalsServicesFeaturesImage">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury amenities"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRentalsServices;
