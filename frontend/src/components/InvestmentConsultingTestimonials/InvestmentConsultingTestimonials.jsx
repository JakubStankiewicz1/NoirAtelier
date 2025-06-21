import React from "react";
import "./investmentConsultingTestimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const InvestmentConsultingTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Piotr Kowalski",
      position: "Inwestor Prywatny",
      company: "Kowalski Holdings",
      rating: 5,
      text: "Dzięki strategii inwestycyjnej opracowanej przez NoirAtelier zwiększyłem zwrot z mojego portfela nieruchomości o 35% w ciągu 2 lat. Ich doradztwo było kluczowe dla mojego sukcesu finansowego.",
      image:
        "https://img.freepik.com/premium-photo/portrait-man-white_67651-2612.jpg?semt=ais_hybrid&w=740",
      investment: "Portfolio 8 nieruchomości - 5.2M PLN",
    },
    {
      id: 2,
      name: "Maria Nowak",
      position: "Dyrektor Finansowy",
      company: "TechCorp Sp. z o.o.",
      rating: 5,
      text: "Konsultacje inwestycyjne NoirAtelier pomogły nam zdywersyfikować aktywa firmy w nieruchomości. Ich profesjonalne podejście i szczegółowe analizy dały nam pewność w podejmowaniu decyzji.",
      image:
        "https://i.pinimg.com/474x/4d/8a/cb/4d8acb3d351a127cc823135ff3c3d421.jpg",
      investment: "Biurowiec korporacyjny - 12M PLN",
    },
    {
      id: 3,
      name: "Tomasz Wiśniewski",
      position: "Przedsiębiorca",
      company: "WisDev Group",
      rating: 5,
      text: "NoirAtelier to najlepsi eksperci od inwestycji nieruchomościowych w Polsce. Ich strategia dywersyfikacji portfela pozwoliła mi osiągnąć stabilny dochód pasywny przekraczający 20% rocznie.",
      image:
        "https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-14467.jpg",
      investment: "Kompleks apartamentowy - Gdańsk",
    },
    {
      id: 4,
      name: "Anna Zielińska",
      position: "Fundusz Inwestycyjny",
      company: "Real Estate Capital",
      rating: 5,
      text: "Współpraca z NoirAtelier to gwarancja profesjonalizmu i wysokich zwrotów. Ich analiza ryzyka i strategia inwestycyjna pozwalają nam optymalizować portfel dla naszych inwestorów.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      investment: "Portfolio instytucjonalne - 250M PLN",
    },
  ];

  const stats = [
    {
      number: "25%",
      text: "Średni zwrot ROI",
      description: "Nasze strategie generują średnio 25% zwrotu rocznie",
    },
    {
      number: "300+",
      text: "Zadowolonych inwestorów",
      description: "Ponad 300 inwestorów zaufało naszemu doradztwo",
    },
    {
      number: "20+",
      text: "Lat doświadczenia",
      description: "Ponad 20 lat doświadczenia w inwestycjach",
    },
    {
      number: "1.2B+",
      text: "Zarządzanych aktywów",
      description: "Ponad 1,2 miliarda PLN w zarządzanych inwestycjach",
    },
  ];

  return (
    <div className="investmentConsultingTestimonials">
      <div className="investmentConsultingTestimonialsContainer">
        {/* Header */}
        <div className="investmentConsultingTestimonialsHeader">
          <div className="investmentConsultingTestimonialsHeaderContainer">
            <p className="investmentConsultingTestimonialsHeaderSubtitle">
              Opinie Inwestorów
            </p>
            <h2 className="investmentConsultingTestimonialsHeaderTitle cormorant-garamond-regular">
              Sukces Naszych Klientów
            </h2>
            <p className="investmentConsultingTestimonialsHeaderDescription">
              Poznaj historie sukcesu inwestorów, którzy zaufali naszemu
              doradztwo i osiągnęli wyjątkowe rezultaty dzięki naszym strategiom
              inwestycyjnym.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="investmentConsultingTestimonialsStats">
          <div className="investmentConsultingTestimonialsStatsContainer">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="investmentConsultingTestimonialsStatsItem"
              >
                <h3 className="investmentConsultingTestimonialsStatsNumber cormorant-garamond-regular">
                  {stat.number}
                </h3>
                <p className="investmentConsultingTestimonialsStatsText">
                  {stat.text}
                </p>
                <p className="investmentConsultingTestimonialsStatsDescription">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="investmentConsultingTestimonialsGrid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="investmentConsultingTestimonialsCard"
            >
              <div className="investmentConsultingTestimonialsCardHeader">
                <div className="investmentConsultingTestimonialsCardQuote">
                  <FaQuoteLeft />
                </div>
                <div className="investmentConsultingTestimonialsCardRating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="investmentConsultingTestimonialsCardStar"
                    />
                  ))}
                </div>
              </div>

              <div className="investmentConsultingTestimonialsCardContent">
                <p className="investmentConsultingTestimonialsCardText">
                  "{testimonial.text}"
                </p>

                <div className="investmentConsultingTestimonialsCardInvestment">
                  <strong>Inwestycja:</strong> {testimonial.investment}
                </div>
              </div>

              <div className="investmentConsultingTestimonialsCardFooter">
                <div className="investmentConsultingTestimonialsCardProfile">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="investmentConsultingTestimonialsCardAvatar"
                  />
                  <div className="investmentConsultingTestimonialsCardInfo">
                    <h4 className="investmentConsultingTestimonialsCardName">
                      {testimonial.name}
                    </h4>
                    <p className="investmentConsultingTestimonialsCardPosition">
                      {testimonial.position}
                    </p>
                    <p className="investmentConsultingTestimonialsCardCompany">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentConsultingTestimonials;
