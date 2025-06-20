import React from "react";
import "./homeOurServices.css";
import {
  FaHome,
  FaChartLine,
  FaPaintBrush,
  FaHandshake,
  FaKey,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeOurServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaHome />,
      title: "Property Management",
      description:
        "Comprehensive property management services to maximize your investment returns and maintain property value.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Investment Consulting",
      description:
        "Expert guidance on real estate investments with market analysis and strategic portfolio planning.",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      icon: <FaPaintBrush />,
      title: "Interior Design",
      description:
        "Premium interior design services to transform your property into a luxurious living space.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      icon: <FaHandshake />,
      title: "Buy & Sell Support",
      description:
        "End-to-end support for buying and selling premium properties with dedicated client service.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      icon: <FaKey />,
      title: "Luxury Rentals",
      description:
        "Exclusive luxury rental properties with concierge services and premium amenities.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      icon: <FaMapMarkerAlt />,
      title: "Location Analysis",
      description:
        "Detailed location analysis and market research for optimal property investment decisions.",
      image:
        "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="homeOurServices">
      <div className="homeOurServicesContainer">
        {/* Header Section */}
        <div className="homeOurServicesHeader">
          {" "}
          <div className="homeOurServicesHeaderContainer">
            <p className="homeOurServicesHeaderSubtitle cormorant-garamond-regular">
              Co Oferujemy
            </p>
            <h2 className="homeOurServicesHeaderTitle cormorant-garamond-regular cormorant-garamond-regular">
              Nasze Premium Usługi
            </h2>
            <p className="homeOurServicesHeaderDescription ">
              Odkryj nasz kompleksowy zakres luksusowych usług
              nieruchomościowych, które przekroczą Twoje oczekiwania
            </p>
          </div>
        </div>{" "}
        {/* Services Grid */}
        <div className="homeOurServicesGrid">
          {services.map((service) => (
            <div key={service.id} className="homeOurServicesCard">
              <div className="homeOurServicesCardImage">
                <img src={service.image} alt={service.title} />
                <div className="homeOurServicesCardImageOverlay">
                  <div className="homeOurServicesCardIcon">{service.icon}</div>
                </div>
              </div>
              <div className="homeOurServicesCardContent">
                <h3 className="homeOurServicesCardTitle cormorant-garamond-regular">
                  {service.title}
                </h3>
                <p className="homeOurServicesCardDescription">
                  {service.description}
                </p>
                {service.id === 1 ? (
                  <Link
                    to="/property-management"
                    className="homeOurServicesCardButton"
                  >
                    <span>Learn More</span>
                    <div className="homeOurServicesCardButtonArrow">→</div>
                  </Link>
                ) : service.id === 2 ? (
                  <Link
                    to="/investment-consulting"
                    className="homeOurServicesCardButton"
                  >
                    <span>Learn More</span>
                    <div className="homeOurServicesCardButtonArrow">→</div>
                  </Link>
                ) : service.id === 3 ? (
                  <Link
                    to="/interior-design"
                    className="homeOurServicesCardButton"
                  >
                    <span>Learn More</span>
                    <div className="homeOurServicesCardButtonArrow">→</div>
                  </Link>
                ) : service.id === 4 ? (
                  <Link
                    to="/buy-sell-support"
                    className="homeOurServicesCardButton"
                  >
                    <span>Learn More</span>
                    <div className="homeOurServicesCardButtonArrow">→</div>
                  </Link>
                ) : service.id === 5 ? (
                  <Link
                    to="/luxury-rentals"
                    className="homeOurServicesCardButton"
                  >
                    <span>Learn More</span>
                    <div className="homeOurServicesCardButtonArrow">→</div>
                  </Link>
                ) : service.id === 6 ? (
                  <Link
                    to="/location-analysis"
                    className="homeOurServicesCardButton"
                  >
                    <span>Learn More</span>
                    <div className="homeOurServicesCardButtonArrow">→</div>
                  </Link>
                ) : (
                  <div className="homeOurServicesCardButton">
                    <span>Learn More</span>
                    <div className="homeOurServicesCardButtonArrow">→</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>{" "}

      </div>
    </div>
  );
};

export default HomeOurServices;
