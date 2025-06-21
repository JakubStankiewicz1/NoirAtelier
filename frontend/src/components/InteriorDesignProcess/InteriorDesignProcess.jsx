import React from "react";
import "./interiorDesignProcess.css";
import { FiMessageCircle, FiEdit3, FiTool, FiArrowRight } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";

const InteriorDesignProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Konsultacja",
      icon: <FiMessageCircle />,
      description: "Poznajemy Twoje potrzeby i marzenia",
    },
    {
      id: 2,
      title: "Koncepcja",
      icon: <HiLightBulb />,
      description: "Tworzymy unikalną koncepcję projektu",
    },
    {
      id: 3,
      title: "Projekt",
      icon: <FiEdit3 />,
      description: "Przygotowujemy szczegółowe wizualizacje",
    },
    {
      id: 4,
      title: "Realizacja",
      icon: <FiTool />,
      description: "Wcielamy projekt w życie",
    },
  ];

  return (
    <div className="interiorDesignProcess">
      <div className="interiorDesignProcessContainer">
        <h2 className="interiorDesignProcessTitle cormorant-garamond-regular">
          Jak Pracujemy
        </h2>
        <div className="interiorDesignProcessSteps">
          {steps.map((step, index) => (
            <div key={step.id} className="interiorDesignProcessStep">
              <div className="interiorDesignProcessStepIcon">{step.icon}</div>
              <h3 className="interiorDesignProcessStepTitle">{step.title}</h3>
              <p className="interiorDesignProcessStepDescription">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="interiorDesignProcessStepArrow">
                  <FiArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignProcess;
