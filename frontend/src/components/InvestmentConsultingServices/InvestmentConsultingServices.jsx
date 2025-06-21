import React from 'react';
import "./investmentConsultingServices.css";
import { FaChartLine, FaBullseye, FaFileContract, FaCalculator, FaGlobe, FaShieldAlt, FaCogs, FaUsers } from 'react-icons/fa';

const InvestmentConsultingServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaChartLine />,
      title: "Analiza Rynku",
      description: "Kompleksowa analiza trendów rynkowych i możliwości inwestycyjnych w różnych segmentach nieruchomości."
    },
    {
      id: 2,
      icon: <FaBullseye />,
      title: "Strategia Inwestycyjna",
      description: "Opracowanie spersonalizowanej strategii inwestycyjnej dopasowanej do Twoich celów i tolerancji ryzyka."
    },
    {
      id: 3,
      icon: <FaFileContract />,
      title: "Due Diligence",
      description: "Szczegółowa weryfikacja prawna i finansowa nieruchomości przed dokonaniem inwestycji."
    },
    {
      id: 4,
      icon: <FaCalculator />,
      title: "Analiza ROI",
      description: "Precyzyjne obliczenia zwrotu z inwestycji z uwzględnieniem wszystkich kosztów i potencjalnych dochodów."
    },
    {
      id: 5,
      icon: <FaGlobe />,
      title: "Dywersyfikacja Portfela",
      description: "Strategiczne rozłożenie inwestycji w różnych lokalizacjach i typach nieruchomości dla minimalizacji ryzyka."
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Zarządzanie Ryzykiem",
      description: "Identyfikacja i minimalizacja potencjalnych zagrożeń inwestycyjnych poprzez odpowiednie zabezpieczenia."
    },
    {
      id: 7,
      icon: <FaCogs />,
      title: "Optymalizacja Podatkowa",
      description: "Doradztwo w zakresie optymalizacji obciążeń podatkowych związanych z inwestycjami nieruchomościowymi."
    },
    {
      id: 8,
      icon: <FaUsers />,
      title: "Doradztwo Strategiczne",
      description: "Długoterminowe wsparcie i doradztwo w rozwijaniu i zarządzaniu portfelem inwestycyjnym."
    }
  ];

  return (
    <div className='investmentConsultingServices'>
      <div className="investmentConsultingServicesContainer">
        {/* Header */}
        <div className="investmentConsultingServicesHeader">
          <div className="investmentConsultingServicesHeaderContainer">
            <p className="investmentConsultingServicesHeaderSubtitle">Nasze Usługi</p>
            <h2 className="investmentConsultingServicesHeaderTitle cormorant-garamond-regular">
              Kompleksowe Doradztwo Inwestycyjne
            </h2>
            <p className="investmentConsultingServicesHeaderDescription">
              Oferujemy pełen zakres usług doradczych, które pomogą Ci maksymalizować zyski z inwestycji nieruchomościowych przy jednoczesnym minimalizowaniu ryzyka.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="investmentConsultingServicesGrid">
          {services.map((service) => (
            <div key={service.id} className="investmentConsultingServicesCard">
              <div className="investmentConsultingServicesCardIcon">
                {service.icon}
              </div>
              <div className="investmentConsultingServicesCardContent">
                <h3 className="investmentConsultingServicesCardTitle cormorant-garamond-regular">
                  {service.title}
                </h3>
                <p className="investmentConsultingServicesCardDescription">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="investmentConsultingServicesCTA">
          <div className="investmentConsultingServicesCTAContainer">
            <h3 className="investmentConsultingServicesCTATitle cormorant-garamond-regular">
              Gotowy na Inteligentne Inwestycje?
            </h3>
            <p className="investmentConsultingServicesCTADescription">
              Skontaktuj się z nami, aby otrzymać bezpłatną konsultację i rozpocząć budowanie rentownego portfela nieruchomości.
            </p>
            <div className="investmentConsultingServicesCTAButton">
              <span>Bezpłatna Konsultacja</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default InvestmentConsultingServices
