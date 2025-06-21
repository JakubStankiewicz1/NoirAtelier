import React from "react";
import "./investmentConsultingProcess.css";
import {
  FaUserTie,
  FaChartLine,
  FaFileContract,
  FaRocket,
  FaClipboardList,
  FaPhone,
  FaChartBar,
} from "react-icons/fa";

const InvestmentConsultingProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserTie />,
      title: "Konsultacja Wstępna",
      description:
        "Poznajemy Twoje cele inwestycyjne, budżet, tolerancję ryzyka i preferencje. Przeprowadzamy analizę obecnej sytuacji finansowej.",
      duration: "1-2 dni",
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Analiza i Strategia",
      description:
        "Analizujemy rynek, identyfikujemy możliwości inwestycyjne i opracowujemy spersonalizowaną strategię inwestycyjną.",
      duration: "5-7 dni",
    },
    {
      id: 3,
      icon: <FaFileContract />,
      title: "Plan Implementacji",
      description:
        "Tworzymy szczegółowy plan realizacji inwestycji z harmonogramem, budżetem i listą konkretnych działań do podjęcia.",
      duration: "3-5 dni",
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: "Wsparcie w Realizacji",
      description:
        "Pomagamy w implementacji strategii, monitorujemy postępy i dostosowujemy plan do zmieniających się warunków rynkowych.",
      duration: "Ciągłe",
    },
  ];

  return (
    <div className="investmentConsultingProcess">
      <div className="investmentConsultingProcessContainer">
        {/* Header */}
        <div className="investmentConsultingProcessHeader">
          <div className="investmentConsultingProcessHeaderContainer">
            <p className="investmentConsultingProcessHeaderSubtitle">
              Nasz Proces
            </p>
            <h2 className="investmentConsultingProcessHeaderTitle cormorant-garamond-regular">
              Jak Budujemy Twoją Strategię Inwestycyjną
            </h2>
            <p className="investmentConsultingProcessHeaderDescription">
              Nasz sprawdzony 4-etapowy proces gwarantuje stworzenie optymalnej
              strategii inwestycyjnej dopasowanej do Twoich indywidualnych
              potrzeb i celów finansowych.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="investmentConsultingProcessSteps">
          {steps.map((step, index) => (
            <div key={step.id} className="investmentConsultingProcessStep">

              <div className="investmentConsultingProcessStepContent">
                <div className="investmentConsultingProcessStepIcon">
                  {step.icon}
                </div>

                <div className="investmentConsultingProcessStepDetails">
                  <div className="investmentConsultingProcessStepHeader">
                    <h3 className="investmentConsultingProcessStepTitle cormorant-garamond-regular">
                      {step.title}
                    </h3>
                    <span className="investmentConsultingProcessStepDuration">
                      {step.duration}
                    </span>
                  </div>

                  <p className="investmentConsultingProcessStepDescription">
                    {step.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InvestmentConsultingProcess;
