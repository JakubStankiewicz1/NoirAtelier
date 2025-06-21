import React from "react";
import "./locationAnalysisProcess.css";
import {
  FaSearch,
  FaChartBar,
  FaFileAlt,
  FaHandshake,
  FaFilePdf,
  FaPhone,
  FaSync,
} from "react-icons/fa";

const LocationAnalysisProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Konsultacja i Briefing",
      description:
        "Omawiamy Twoje potrzeby, cele inwestycyjne i preferencje dotyczące lokalizacji. Ustalamy zakres analizy i kryteria oceny.",
      duration: "1-2 dni",
    },
    {
      id: 2,
      icon: <FaChartBar />,
      title: "Zbieranie Danych",
      description:
        "Gromadzimy dane rynkowe, demograficzne, planistyczne i infrastrukturalne dotyczące wybranej lokalizacji.",
      duration: "3-5 dni",
    },
    {
      id: 3,
      icon: <FaFileAlt />,
      title: "Analiza i Raportowanie",
      description:
        "Przeprowadzamy szczegółową analizę wszystkich czynników i przygotowujemy kompleksowy raport z wizualizacjami.",
      duration: "5-7 dni",
    },
    {
      id: 4,
      icon: <FaHandshake />,
      title: "Prezentacja Wyników",
      description:
        "Prezentujemy wyniki analizy, udzielamy rekomendacji i odpowiadamy na wszystkie pytania dotyczące raportu.",
      duration: "1 dzień",
    },
  ];

  return (
    <div className="locationAnalysisProcess">
      <div className="locationAnalysisProcessContainer">
        {/* Header */}
        <div className="locationAnalysisProcessHeader">
          <div className="locationAnalysisProcessHeaderContainer">
            <p className="locationAnalysisProcessHeaderSubtitle">Nasz Proces</p>
            <h2 className="locationAnalysisProcessHeaderTitle cormorant-garamond-regular">
              Jak Przeprowadzamy Analizę Lokalizacji
            </h2>
            <p className="locationAnalysisProcessHeaderDescription">
              Nasz sprawdzony 4-etapowy proces gwarantuje kompleksową i rzetelną
              analizę każdej lokalizacji, dostarczając Ci wszystkich informacji
              potrzebnych do podjęcia świadomej decyzji inwestycyjnej.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="locationAnalysisProcessSteps">
          {steps.map((step, index) => (
            <div key={step.id} className="locationAnalysisProcessStep">


              <div className="locationAnalysisProcessStepContent">
                <div className="locationAnalysisProcessStepIcon">
                  {step.icon}
                </div>

                <div className="locationAnalysisProcessStepDetails">
                  <div className="locationAnalysisProcessStepHeader">
                    <h3 className="locationAnalysisProcessStepTitle cormorant-garamond-regular">
                      {step.title}
                    </h3>
                    <span className="locationAnalysisProcessStepDuration">
                      {step.duration}
                    </span>
                  </div>

                  <p className="locationAnalysisProcessStepDescription">
                    {step.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="locationAnalysisProcessTimeline">
          <div className="locationAnalysisProcessTimelineContainer">
            <div className="locationAnalysisProcessTimelineHeader">
              <h3 className="locationAnalysisProcessTimelineTitle cormorant-garamond-regular">
                Całkowity Czas Realizacji
              </h3>
              <div className="locationAnalysisProcessTimelineDuration">
                <span className="locationAnalysisProcessTimelineNumber">
                  10-15
                </span>
                <span className="locationAnalysisProcessTimelineUnit">
                  dni roboczych
                </span>
              </div>
            </div>
            <div className="locationAnalysisProcessTimelineFeatures">
              <div className="locationAnalysisProcessTimelineFeature">
                <span className="locationAnalysisProcessTimelineFeatureIcon">
                  <FaFilePdf />
                </span>
                <span className="locationAnalysisProcessTimelineFeatureText">
                  Szczegółowy raport PDF
                </span>
              </div>
              <div className="locationAnalysisProcessTimelineFeature">
                <span className="locationAnalysisProcessTimelineFeatureIcon">
                  <FaPhone />
                </span>
                <span className="locationAnalysisProcessTimelineFeatureText">
                  Konsultacja telefoniczna
                </span>
              </div>
              <div className="locationAnalysisProcessTimelineFeature">
                <span className="locationAnalysisProcessTimelineFeatureIcon">
                  <FaSync />
                </span>
                <span className="locationAnalysisProcessTimelineFeatureText">
                  30 dni wsparcia poanalizowego
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysisProcess;
