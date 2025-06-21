import React from "react";
import "./locationAnalysisFeatures.css";
import {
  FaChartLine,
  FaMapMarkedAlt,
  FaBuilding,
  FaUsers,
  FaCar,
  FaGraduationCap,
  FaClock,
  FaMapMarkerAlt,
  FaChartBar,
  FaStar,
  FaRobot,
  FaArrowUp,
  FaMap,
  FaDatabase,
} from "react-icons/fa";

const LocationAnalysisFeatures = () => {
  const features = [
    {
      id: 1,
      icon: <FaChartLine />,
      title: "Analiza Trendów Cenowych",
      description:
        "Szczegółowe dane o zmianach cen nieruchomości w ostatnich 5 latach oraz prognozy na przyszłość",
      stats: "95% dokładność prognoz",
    },
    {
      id: 2,
      icon: <FaMapMarkedAlt />,
      title: "Mapa Heat Map",
      description:
        "Wizualna reprezentacja najgorętszych lokalizacji z podziałem na strefy inwestycyjne",
      stats: "Ponad 1000 obszarów",
    },
    {
      id: 3,
      icon: <FaBuilding />,
      title: "Planowanie Urbanistyczne",
      description:
        "Informacje o planowanych inwestycjach infrastrukturalnych i rozwoju miasta",
      stats: "Dane z 15 miast",
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: "Analiza Demograficzna",
      description:
        "Szczegółowe dane o wieku, dochodach i strukturze społecznej mieszkańców",
      stats: "Aktualizacja co 6 miesięcy",
    },
    {
      id: 5,
      icon: <FaCar />,
      title: "Dostępność Komunikacyjna",
      description:
        "Ocena połączeń komunikacyjnych, dostępności parkingów i planowanych inwestycji",
      stats: "100+ punktów komunikacyjnych",
    },
    {
      id: 6,
      icon: <FaGraduationCap />,
      title: "Infrastruktura Edukacyjna",
      description:
        "Mapa szkół, przedszkoli i uczelni z oceną jakości nauczania",
      stats: "Ranking TOP 50 szkół",
    },
  ];
  const highlights = [
    {
      number: "24/7",
      text: "Dostęp do platformy online",
      icon: <FaClock />,
    },
    {
      number: "500+",
      text: "Lokalizacji w bazie",
      icon: <FaMapMarkerAlt />,
    },
    {
      number: "15+",
      text: "Różnych wskaźników",
      icon: <FaChartBar />,
    },
    {
      number: "98%",
      text: "Zadowolonych klientów",
      icon: <FaStar />,
    },
  ];

  return (
    <div className="locationAnalysisFeatures">
      <div className="locationAnalysisFeaturesContainer">
        {/* Header */}
        <div className="locationAnalysisFeaturesHeader">
          <div className="locationAnalysisFeaturesHeaderContainer">
            <p className="locationAnalysisFeaturesHeaderSubtitle">
              Nasze Możliwości
            </p>
            <h2 className="locationAnalysisFeaturesHeaderTitle cormorant-garamond-regular">
              Zaawansowane Narzędzia Analityczne
            </h2>
            <p className="locationAnalysisFeaturesHeaderDescription">
              Wykorzystujemy najnowocześniejsze technologie i bazy danych, aby
              dostarczyć Ci najdokładniejsze informacje o każdej lokalizacji.
            </p>
          </div>
        </div>
        {/* Features Grid */}
        <div className="locationAnalysisFeaturesGrid">
          {features.map((feature) => (
            <div key={feature.id} className="locationAnalysisFeaturesCard">
              {" "}
              <div className="locationAnalysisFeaturesCardHeader">
                <div className="locationAnalysisFeaturesCardIcon">
                  {feature.icon}
                </div>
                <div className="locationAnalysisFeaturesCardStats">
                  {feature.stats}
                </div>
              </div>
              <div className="locationAnalysisFeaturesCardContent">
                <h3 className="locationAnalysisFeaturesCardTitle cormorant-garamond-regular">
                  {feature.title}
                </h3>
                <p className="locationAnalysisFeaturesCardDescription">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>{" "}
       
        {/* Technology Section */}
        <div className="locationAnalysisFeaturesTechnology">
          <div className="locationAnalysisFeaturesTechnologyContainer">
            <div className="locationAnalysisFeaturesTechnologyLeft">
              <h3 className="locationAnalysisFeaturesTechnologyTitle cormorant-garamond-regular">
                Wykorzystujemy Najnowsze Technologie
              </h3>
              <p className="locationAnalysisFeaturesTechnologyDescription">
                Nasza platforma analityczna łączy dane z różnych źródeł,
                wykorzystując sztuczną inteligencję i uczenie maszynowe do
                generowania precyzyjnych prognoz rynkowych.
              </p>
              <div className="locationAnalysisFeaturesTechnologyFeatures">
                <div className="locationAnalysisFeaturesTechnologyFeature">
                  <span className="locationAnalysisFeaturesTechnologyFeatureIcon">
                    <FaRobot />
                  </span>
                  <span className="locationAnalysisFeaturesTechnologyFeatureText">
                    Sztuczna Inteligencja
                  </span>
                </div>{" "}
                <div className="locationAnalysisFeaturesTechnologyFeature">
                  <span className="locationAnalysisFeaturesTechnologyFeatureIcon">
                    <FaArrowUp />
                  </span>
                  <span className="locationAnalysisFeaturesTechnologyFeatureText">
                    Algorytmy Predykcyjne
                  </span>
                </div>
                <div className="locationAnalysisFeaturesTechnologyFeature">
                  <span className="locationAnalysisFeaturesTechnologyFeatureIcon">
                    <FaMap />
                  </span>
                  <span className="locationAnalysisFeaturesTechnologyFeatureText">
                    GIS i Mapy Satelitarne
                  </span>
                </div>
                <div className="locationAnalysisFeaturesTechnologyFeature">
                  <span className="locationAnalysisFeaturesTechnologyFeatureIcon">
                    <FaDatabase />
                  </span>
                  <span className="locationAnalysisFeaturesTechnologyFeatureText">
                    Real-time Data
                  </span>
                </div>
              </div>
            </div>

            <div className="locationAnalysisFeaturesTechnologyRight">
              <div className="locationAnalysisFeaturesTechnologyImage">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Advanced Analytics Technology"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysisFeatures;
