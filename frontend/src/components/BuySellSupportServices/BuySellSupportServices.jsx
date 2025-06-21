import React from "react";
import "./buySellSupportServices.css";
import { FaHandshake, FaChartLine, FaFileContract, FaHome, FaUsers, FaShieldAlt, FaKey, FaCogs, FaSearch, FaCalculator, FaClipboardCheck, FaHeadset } from "react-icons/fa";

const BuySellSupportServices = () => {
  const buyServices = [
    {
      icon: <FaSearch />,
      title: "Wyszukiwanie Nieruchomości",
      description: "Profesjonalne wyszukiwanie nieruchomości zgodnych z Twoimi kryteriami i budżetem.",
      features: ["Analiza rynku", "Selekcja ofert", "Prezentacja opcji"]
    },
    {
      icon: <FaChartLine />,
      title: "Analiza Wartości",
      description: "Szczegółowa analiza wartości rynkowej i potencjału inwestycyjnego nieruchomości.",
      features: ["Wycena rynkowa", "Analiza ROI", "Prognoza wartości"]
    },
    {
      icon: <FaFileContract />,
      title: "Negocjacje i Umowy",
      description: "Profesjonalne prowadzenie negocjacji cenowych i przygotowanie dokumentacji.",
      features: ["Negocjacje ceny", "Przygotowanie umów", "Doradztwo prawne"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Zabezpieczenie Transakcji",
      description: "Kompleksowe zabezpieczenie procesu kupna przed ryzykami prawno-finansowymi.",
      features: ["Weryfikacja dokumentów", "Kontrola zadłużeń", "Ubezpieczenie"]
    }
  ];

  const sellServices = [
    {
      icon: <FaCalculator />,
      title: "Wycena Nieruchomości",
      description: "Profesjonalna wycena Twojej nieruchomości z analizą konkurencji rynkowej.",
      features: ["Wycena rynkowa", "Analiza konkurencji", "Strategia cenowa"]
    },
    {
      icon: <FaCogs />,
      title: "Przygotowanie do Sprzedaży",
      description: "Kompleksowe przygotowanie nieruchomości do prezentacji potencjalnym nabywcom.",
      features: ["Home staging", "Sesja fotograficzna", "Materiały marketingowe"]
    },
    {
      icon: <FaUsers />,
      title: "Marketing i Promocja",
      description: "Skuteczna promocja nieruchomości w mediach i kanałach sprzedażowych.",
      features: ["Kampanie reklamowe", "Portale nieruchomości", "Media społecznościowe"]
    },
    {
      icon: <FaKey />,
      title: "Finalizacja Sprzedaży",
      description: "Profesjonalne przeprowadzenie procesu sprzedaży od oferty do przekazania kluczy.",
      features: ["Kwalifikacja kupców", "Finalizacja umów", "Przekazanie nieruchomości"]
    }
  ];

  return (
    <div className="buySellSupportServices">
      <div className="buySellSupportServicesContainer">
        {/* Header */}
        <div className="buySellSupportServicesHeader">
          <div className="buySellSupportServicesHeaderContent">
            <p className="buySellSupportServicesHeaderSubtitle cormorant-garamond-regular">Nasze Usługi</p>
            <h2 className="buySellSupportServicesHeaderTitle cormorant-garamond-regular">
              Kompleksowe Wsparcie w <span className="highlight">Kupnie i Sprzedaży</span>
            </h2>
            <p className="buySellSupportServicesHeaderDescription">
              Oferujemy pełen zakres usług związanych z kupnem i sprzedażą nieruchomości premium. 
              Nasz doświadczony zespół zapewni Ci profesjonalne wsparcie na każdym etapie transakcji.
            </p>
          </div>
        </div>

        {/* Buy Services Section */}
        <div className="buySellSupportServicesSection">
          <div className="buySellSupportServicesSectionHeader">
            <div className="buySellSupportServicesSectionIcon">
              <FaHome />
            </div>
            <div className="buySellSupportServicesSectionTitleContainer">
              <h3 className="buySellSupportServicesSectionTitle cormorant-garamond-regular">Usługi dla Kupujących</h3>
              <p className="buySellSupportServicesSectionDescription">
                Pomożemy Ci znaleźć idealną nieruchomość i przeprowadzimy Cię przez cały proces zakupu
              </p>
            </div>
          </div>
          <div className="buySellSupportServicesGrid">
            {buyServices.map((service, index) => (
              <div key={index} className="buySellSupportServicesCard">
                <div className="buySellSupportServicesCardIcon">
                  {service.icon}
                </div>
                <div className="buySellSupportServicesCardContent">
                  <h4 className="buySellSupportServicesCardTitle cormorant-garamond-regular">{service.title}</h4>
                  <p className="buySellSupportServicesCardDescription">{service.description}</p>
                  <ul className="buySellSupportServicesCardFeatures">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="buySellSupportServicesCardFeature">
                        <FaClipboardCheck className="buySellSupportServicesCardFeatureIcon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sell Services Section */}
        <div className="buySellSupportServicesSection">
          <div className="buySellSupportServicesSectionHeader">
            <div className="buySellSupportServicesSectionIcon sell">
              <FaHandshake />
            </div>
            <div className="buySellSupportServicesSectionTitleContainer">
              <h3 className="buySellSupportServicesSectionTitle cormorant-garamond-regular">Usługi dla Sprzedających</h3>
              <p className="buySellSupportServicesSectionDescription">
                Skutecznie sprzedamy Twoją nieruchomość w najlepszej możliwej cenie i czasie
              </p>
            </div>
          </div>
          <div className="buySellSupportServicesGrid">
            {sellServices.map((service, index) => (
              <div key={index} className="buySellSupportServicesCard">
                <div className="buySellSupportServicesCardIcon">
                  {service.icon}
                </div>
                <div className="buySellSupportServicesCardContent">
                  <h4 className="buySellSupportServicesCardTitle cormorant-garamond-regular">{service.title}</h4>
                  <p className="buySellSupportServicesCardDescription">{service.description}</p>
                  <ul className="buySellSupportServicesCardFeatures">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="buySellSupportServicesCardFeature">
                        <FaClipboardCheck className="buySellSupportServicesCardFeatureIcon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>




        {/* CTA Section */}
        {/* <div className="buySellSupportServicesCTA">
          <div className="buySellSupportServicesCTAContent">
            <FaHeadset className="buySellSupportServicesCTAIcon" />
            <div className="buySellSupportServicesCTAText">
              <h3 className="buySellSupportServicesCTATitle cormorant-garamond-regular">
                Gotowy na Profesjonalne Wsparcie?
              </h3>
              <p className="buySellSupportServicesCTADescription">
                Skontaktuj się z nami już dziś i rozpocznij proces kupna lub sprzedaży z pełnym wsparciem ekspertów
              </p>
            </div>
            <button className="buySellSupportServicesCTAButton">
              <span>Rozpocznij Współpracę</span>
              <div className="buySellSupportServicesCTAButtonArrow">→</div>
            </button>
          </div>
        </div> */}





      </div>
    </div>
  );
};

export default BuySellSupportServices;
