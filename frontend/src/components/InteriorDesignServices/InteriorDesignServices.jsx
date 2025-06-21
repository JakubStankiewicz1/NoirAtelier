import React from "react";
import "./interiorDesignServices.css";

const InteriorDesignServices = () => {
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: "Projektowanie Wnętrz",
      description: "Kompleksowe projekty wnętrz dopasowane do Twojego stylu życia",
      features: ["Wizualizacje 3D", "Dobór kolorów", "Projekt oświetlenia"],
      color: "gradient1"
    },
    {
      id: 2,
      icon: "🏠",
      title: "Aranżacja Przestrzeni",
      description: "Optymalne wykorzystanie każdego metra kwadratowego",
      features: ["Planowanie układu", "Ergonomia", "Funkcjonalność"],
      color: "gradient2"
    },
    {
      id: 3,
      icon: "🛋️",
      title: "Dobór Mebli",
      description: "Starannie wyselekcjonowane meble i akcesoria",
      features: ["Meble na wymiar", "Tkaniny premium", "Akcesoria dekoracyjne"],
      color: "gradient3"
    },
    {
      id: 4,
      icon: "💡",
      title: "Projekt Oświetlenia",
      description: "Nowoczesne rozwiązania oświetleniowe",
      features: ["Oświetlenie LED", "Smart home", "Klimat wnętrza"],
      color: "gradient4"
    }
  ];

  return (
    <div className="interiorDesignServices">
      <div className="interiorDesignServicesContainer">
        <div className="interiorDesignServicesHeader">
          <h2 className="interiorDesignServicesHeaderTitle cormorant-garamond-regular">
            Nasze Specjalizacje
          </h2>
          <p className="interiorDesignServicesHeaderDescription">
            Oferujemy kompleksowe usługi projektowania wnętrz na najwyższym poziomie
          </p>
        </div>

        <div className="interiorDesignServicesGrid">
          {services.map((service, index) => (
            <div key={service.id} className={`interiorDesignServicesCard ${service.color}`}>
              <div className="interiorDesignServicesCardIcon">
                {service.icon}
              </div>
              <h3 className="interiorDesignServicesCardTitle cormorant-garamond-regular">
                {service.title}
              </h3>
              <p className="interiorDesignServicesCardDescription">
                {service.description}
              </p>
              <ul className="interiorDesignServicesCardFeatures">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignServices;
