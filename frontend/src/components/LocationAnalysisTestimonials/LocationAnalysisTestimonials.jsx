import React from "react";
import "./locationAnalysisTestimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const LocationAnalysisTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      position: "Inwestor Nieruchomościowy",
      company: "Kowalska Investments",
      rating: 5,
      text: "Dzięki analizie lokalizacji od NoirAtelier udało mi się wybrać idealne miejsce na mój pierwszy apartament inwestycyjny. Ich prognozy okazały się być na 100% trafne - wartość nieruchomości wzrosła o 15% w pierwszym roku!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      investment: "Apartament 65m² - Centrum Warszawy",
    },
    {
      id: 2,
      name: "Michał Nowak",
      position: "Developer",
      company: "Nowak Development",
      rating: 5,
      text: "Profesjonalizm i dokładność analizy NoirAtelier przekonały mnie do współpracy przy każdym nowym projekcie. Ich raporty pomagają mi podejmować najlepsze decyzje inwestycyjne i minimalizować ryzyko.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      investment: "Kompleks mieszkaniowy - 120 jednostek",
    },
    {
      id: 3,
      name: "Katarzyna Wójcik",
      position: "Właścicielka agencji nieruchomości",
      company: "Premium Real Estate",
      rating: 5,
      text: "Korzystam z analiz NoirAtelier dla moich klientów już od 3 lat. Ich szczegółowe raporty pomagają mi doradzać najlepsze lokalizacje, a klienci zawsze są zadowoleni z wyników inwestycji.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      investment: "Ponad 50 transakcji rocznie",
    },
    {
      id: 4,
      name: "Robert Jankowski",
      position: "Inwestor Instytucjonalny",
      company: "Capital Partners Fund",
      rating: 5,
      text: "Analiza NoirAtelier to podstawa naszych decyzji inwestycyjnych. Ich metodologia i precyzja danych pozwalają nam na optymalizację portfela nieruchomości i maksymalizację zwrotów dla naszych inwestorów.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      investment: "Portfolio 500M+ PLN",
    },
  ];

  const stats = [
    {
      number: "98%",
      text: "Dokładność prognoz",
      description: "Nasze prognozy cenowe są trafne w 98% przypadków",
    },
    {
      number: "500+",
      text: "Zadowolonych klientów",
      description: "Zaufało nam już ponad 500 inwestorów",
    },
    {
      number: "15+",
      text: "Lat doświadczenia",
      description: "Ponad 15 lat analizy rynku nieruchomości",
    },
    {
      number: "1000+",
      text: "Przeanalizowanych lokalizacji",
      description: "Przeanalizowaliśmy ponad 1000 różnych lokalizacji",
    },
  ];

  return (
    <div className="locationAnalysisTestimonials">
      <div className="locationAnalysisTestimonialsContainer">
        {/* Header */}
        <div className="locationAnalysisTestimonialsHeader">
          <div className="locationAnalysisTestimonialsHeaderContainer">
            <p className="locationAnalysisTestimonialsHeaderSubtitle">
              Opinie Klientów
            </p>
            <h2 className="locationAnalysisTestimonialsHeaderTitle cormorant-garamond-regular">
              Co Mówią o Naszych Analizach
            </h2>
            <p className="locationAnalysisTestimonialsHeaderDescription">
              Poznaj opinie inwestorów, którzy dzięki naszym analizom
              lokalizacji osiągnęli sukces na rynku nieruchomości.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="locationAnalysisTestimonialsGrid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="locationAnalysisTestimonialsCard"
            >
              <div className="locationAnalysisTestimonialsCardHeader">
                <div className="locationAnalysisTestimonialsCardQuote">
                  <FaQuoteLeft />
                </div>
                <div className="locationAnalysisTestimonialsCardRating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>

              <div className="locationAnalysisTestimonialsCardContent">
                <p className="locationAnalysisTestimonialsCardText">
                  {testimonial.text}
                </p>

                <div className="locationAnalysisTestimonialsCardInvestment">
                  <span className="locationAnalysisTestimonialsCardInvestmentLabel">
                    Inwestycja:
                  </span>
                  <span className="locationAnalysisTestimonialsCardInvestmentValue">
                    {testimonial.investment}
                  </span>
                </div>
              </div>

              <div className="locationAnalysisTestimonialsCardFooter">
                <div className="locationAnalysisTestimonialsCardProfile">
                  <div className="locationAnalysisTestimonialsCardAvatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="locationAnalysisTestimonialsCardInfo">
                    <h4 className="locationAnalysisTestimonialsCardName">
                      {testimonial.name}
                    </h4>
                    <p className="locationAnalysisTestimonialsCardPosition">
                      {testimonial.position}
                    </p>
                    <p className="locationAnalysisTestimonialsCardCompany">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="locationAnalysisTestimonialsStats">
          <div className="locationAnalysisTestimonialsStatsContainer">
            <div className="locationAnalysisTestimonialsStatsHeader">
              <h3 className="locationAnalysisTestimonialsStatsTitle cormorant-garamond-regular">
                Nasze Osiągnięcia w Liczbach
              </h3>
            </div>

            <div className="locationAnalysisTestimonialsStatsGrid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="locationAnalysisTestimonialsStatsItem"
                >
                  <div className="locationAnalysisTestimonialsStatsNumber">
                    {stat.number}
                  </div>
                  <div className="locationAnalysisTestimonialsStatsText">
                    {stat.text}
                  </div>
                  <div className="locationAnalysisTestimonialsStatsDescription">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysisTestimonials;
