import React from "react";
import "./buySellSupportProcess.css";
import { FaSearch, FaFileContract, FaHandshake, FaKey, FaCalculator, FaCogs, FaUsers, FaClipboardCheck } from "react-icons/fa";

const BuySellSupportProcess = () => {
  const buyProcess = [
    {
      step: "01",
    //   icon: <FaSearch />,
      title: "Konsultacja i Analiza Potrzeb",
      description: "Poznajemy Twoje potrzeby, budżet i preferencje. Przeprowadzamy szczegółową analizę Twoich wymagań.",
      details: ["Analiza budżetu", "Określenie lokalizacji", "Wybór typu nieruchomości", "Ustalenie harmonogramu"],
    },
    {
      step: "02",
    //   icon: <FaFileContract />,
      title: "Wyszukiwanie i Selekcja",
      description: "Profesjonalne wyszukiwanie nieruchomości spełniających Twoje kryteria z dostępu do ekskluzywnych ofert.",
      details: ["Wyszukiwanie ofert", "Analiza dokumentów", "Prezentacja opcji", "Organizacja oglądania"],
    },
    {
      step: "03",
    //   icon: <FaHandshake />,
      title: "Negocjacje i Oferta",
      description: "Profesjonalne prowadzenie negocjacji cenowych i warunków zakupu w Twoim imieniu.",
      details: ["Negocjacje ceny", "Ustalenie warunków", "Przygotowanie oferty", "Reprezentacja klienta"],
    },
    {
      step: "04",
    //   icon: <FaKey />,
      title: "Finalizacja i Przekazanie",
      description: "Kompletna obsługa formalno-prawna transakcji i przekazanie kluczy do Twojej nowej nieruchomości.",
      details: ["Przygotowanie umów", "Obsługa notarialna", "Rozliczenia finansowe", "Przekazanie nieruchomości"],
    },
  ];

  const sellProcess = [
    {
      step: "01",
    //   icon: <FaCalculator />,
      title: "Wycena i Strategia",
      description: "Profesjonalna wycena nieruchomości i opracowanie optymalnej strategii sprzedaży.",
      details: ["Analiza rynkowa", "Wycena nieruchomości", "Strategia cenowa", "Plan marketingowy"],
    },
    {
      step: "02",
    //   icon: <FaCogs />,
      title: "Przygotowanie i Staging",
      description: "Przygotowanie nieruchomości do sprzedaży z profesjonalnym home staging i sesją zdjęciową.",
      details: ["Home staging", "Sesja fotograficzna", "Materiały promocyjne", "Przygotowanie dokumentów"],
    },
    {
      step: "03",
    //   icon: <FaUsers />,
      title: "Marketing i Promocja",
      description: "Kompleksowa kampania marketingowa z wykorzystaniem wszystkich kanałów sprzedażowych.",
      details: ["Kampania reklamowa", "Portale internetowe", "Media społecznościowe", "Pokazy nieruchomości"],
    },
    {
      step: "04",
    //   icon: <FaClipboardCheck />,
      title: "Sprzedaż i Rozliczenie",
      description: "Finalizacja sprzedaży z kompletną obsługą prawno-finansową i rozliczeniami.",
      details: ["Kwalifikacja nabywców", "Finalizacja umów", "Rozliczenia", "Przekazanie kluczy"],
    },
  ];

  return (
    <div className="buySellSupportProcess">
      <div className="buySellSupportProcessContainer">
        {/* Header */}
        <div className="buySellSupportProcessHeader">
          <p className="buySellSupportProcessHeaderSubtitle cormorant-garamond-regular">Jak Pracujemy</p>
          <h2 className="buySellSupportProcessHeaderTitle cormorant-garamond-regular">
            Nasz <span className="highlight">Sprawdzony Proces</span>
          </h2>
          <p className="buySellSupportProcessHeaderDescription">
            Dzięki naszemu doświadczeniu wypracowaliśmy skuteczne procesy, które gwarantują bezproblemową realizację Twoich celów nieruchomościowych.
          </p>
        </div>

        {/* Buy Process */}
        <div className="buySellSupportProcessSection">
          <div className="buySellSupportProcessSectionHeader">
            {/* <div className="buySellSupportProcessSectionIcon buy">
              <FaSearch />
            </div> */}
            <h3 className="buySellSupportProcessSectionTitle cormorant-garamond-regular">Proces Kupna Nieruchomości</h3>
          </div>

          <div className="buySellSupportProcessSteps">
            {buyProcess.map((step, index) => (
              <div key={index} className="buySellSupportProcessStep">
                <div className="buySellSupportProcessStepLeft">
                  <div className="buySellSupportProcessStepNumber">{step.step}</div>
                  {/* <div className="buySellSupportProcessStepIcon">{step.icon}</div> */}
                </div>
                <div className="buySellSupportProcessStepContent">
                  <h4 className="buySellSupportProcessStepTitle cormorant-garamond-regular">{step.title}</h4>
                  <p className="buySellSupportProcessStepDescription">{step.description}</p>
                  <ul className="buySellSupportProcessStepDetails">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="buySellSupportProcessStepDetail">
                        <span className="buySellSupportProcessStepDetailDot"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* {index < buyProcess.length - 1 && <div className="buySellSupportProcessStepConnector"></div>} */}
              </div>
            ))}
          </div>
        </div>

        {/* Sell Process */}
        <div className="buySellSupportProcessSection">
          <div className="buySellSupportProcessSectionHeader">
            {/* <div className="buySellSupportProcessSectionIcon sell">
              <FaHandshake />
            </div> */}
            <h3 className="buySellSupportProcessSectionTitle cormorant-garamond-regular">Proces Sprzedaży Nieruchomości</h3>
          </div>

          <div className="buySellSupportProcessSteps">
            {sellProcess.map((step, index) => (
              <div key={index} className="buySellSupportProcessStep">
                <div className="buySellSupportProcessStepLeft">
                  <div className="buySellSupportProcessStepNumber">{step.step}</div>
                  {/* <div className="buySellSupportProcessStepIcon">{step.icon}</div> */}
                </div>
                <div className="buySellSupportProcessStepContent">
                  <h4 className="buySellSupportProcessStepTitle cormorant-garamond-regular">{step.title}</h4>
                  <p className="buySellSupportProcessStepDescription">{step.description}</p>
                  <ul className="buySellSupportProcessStepDetails">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="buySellSupportProcessStepDetail">
                        <span className="buySellSupportProcessStepDetailDot"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* {index < sellProcess.length - 1 && <div className="buySellSupportProcessStepConnector"></div>} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellSupportProcess;
