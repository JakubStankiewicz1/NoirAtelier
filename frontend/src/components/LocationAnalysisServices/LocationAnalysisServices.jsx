import React from 'react';
import "./locationAnalysisServices.css";
import { FaMapMarkerAlt, FaChartLine, FaBuilding, FaRoad, FaSchool, FaShoppingCart, FaHospital, FaSubway } from 'react-icons/fa';

const LocationAnalysisServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title: "Analiza Lokalizacji",
      description: "Szczegółowa ocena potencjału lokalizacji z uwzględnieniem wszystkich czynników wpływających na wartość nieruchomości."
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Prognozy Cenowe",
      description: "Profesjonalne prognozy wzrostu cen nieruchomości oparte na analizie trendów rynkowych i planach rozwoju miasta."
    },
    {
      id: 3,
      icon: <FaBuilding />,
      title: "Analiza Demograficzna",
      description: "Ocena składu demograficznego okolicy i przewidywanych zmian wpływających na popyt na nieruchomości."
    },
    {
      id: 4,
      icon: <FaRoad />,
      title: "Infrastruktura Komunikacyjna",
      description: "Szczegółowa analiza dostępności komunikacji publicznej, głównych szlaków komunikacyjnych i planowanych inwestycji."
    },
    {
      id: 5,
      icon: <FaSchool />,
      title: "Udogodnienia Edukacyjne",
      description: "Ocena dostępności szkół, przedszkoli, uczelni wyższych i ich wpływu na atrakcyjność lokalizacji."
    },
    {
      id: 6,
      icon: <FaShoppingCart />,
      title: "Handel i Usługi",
      description: "Analiza dostępności centrów handlowych, sklepów, restauracji i innych punktów usługowych w okolicy."
    },
    {
      id: 7,
      icon: <FaHospital />,
      title: "Opieka Zdrowotna",
      description: "Ocena dostępności placówek medycznych, szpitali i aptek wpływających na jakość życia mieszkańców."
    },
    {
      id: 8,
      icon: <FaSubway />,
      title: "Transport Publiczny",
      description: "Szczegółowa analiza sieci transportu publicznego, częstotliwości połączeń i planowanych rozbudów."
    }
  ];

  return (
    <div className='locationAnalysisServices'>
      <div className="locationAnalysisServicesContainer">
        {/* Header */}
        <div className="locationAnalysisServicesHeader">
          <div className="locationAnalysisServicesHeaderContainer">
            <p className="locationAnalysisServicesHeaderSubtitle">Nasze Usługi</p>
            <h2 className="locationAnalysisServicesHeaderTitle cormorant-garamond-regular">
              Kompleksowa Analiza Lokalizacji
            </h2>
            <p className="locationAnalysisServicesHeaderDescription">
              Oferujemy wszechstronną analizę każdego aspektu lokalizacji, który może wpłynąć na wartość i rentowność Twojej inwestycji nieruchomościowej.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="locationAnalysisServicesGrid">
          {services.map((service) => (
            <div key={service.id} className="locationAnalysisServicesCard">
              <div className="locationAnalysisServicesCardIcon">
                {service.icon}
              </div>
              <div className="locationAnalysisServicesCardContent">
                <h3 className="locationAnalysisServicesCardTitle cormorant-garamond-regular">
                  {service.title}
                </h3>
                <p className="locationAnalysisServicesCardDescription">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="locationAnalysisServicesCTA">
          <div className="locationAnalysisServicesCTAContainer">
            <h3 className="locationAnalysisServicesCTATitle cormorant-garamond-regular">
              Potrzebujesz Profesjonalnej Analizy?
            </h3>
            <p className="locationAnalysisServicesCTADescription">
              Skontaktuj się z nami, aby otrzymać szczegółową analizę lokalizacji dopasowaną do Twoich potrzeb inwestycyjnych.
            </p>
            <div className="locationAnalysisServicesCTAButton">
              <span>Zamów Analizę</span>
            </div>
          </div>
        </div> */}





      </div>
    </div>
  )
}

export default LocationAnalysisServices
