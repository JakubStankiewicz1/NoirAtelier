import React, { useState } from "react";
import "./luxuryRentalsTestimonials.css";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const LuxuryRentalsTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      position: "CEO, Tech Solutions",
      location: "Warszawa",
      rating: 5,
      comment:
        "Niesamowite doświadczenie! Apartament był dokładnie taki, jak na zdjęciach - luksusowy, czysty i perfekcyjnie wyposażony. Obsługa concierge była dostępna 24/7 i zawsze pomocna. Zdecydowanie polecam!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      property: "Luksusowy Apartament Marina",
    },
    {
      id: 2,
      name: "Michał Nowak",
      position: "Dyrektor Finansowy",
      location: "Kraków",
      rating: 5,
      comment:
        "Wynajmowałem penthouse na 6 miesięcy podczas relokacji do Krakowa. Wszystko było zorganizowane perfekcyjnie - od dokumentów po codzienną obsługę. Widok z tarasu był spektakularny!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      property: "Penthouse Sky Tower",
    },
    {
      id: 3,
      name: "Katarzyna Zielińska",
      position: "Inwestorka Nieruchomości",
      location: "Sopot",
      rating: 5,
      comment:
        "Willa nad morzem przekroczyła wszystkie nasze oczekiwania. Prywatny basen, piękny ogród i dostęp do plaży - to było jak wakacje przez cały rok. Profesjonalna obsługa na najwyższym poziomie.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      property: "Ekskluzywna Willa Seaside",
    },
    {
      id: 4,
      name: "Robert Wiśniewski",
      position: "Prezes Zarządu",
      location: "Gdańsk",
      rating: 5,
      comment:
        "Loft w Starym Mieście był idealny dla moich potrzeb biznesowych. Nowoczesne wyposażenie, szybki internet i świetna lokalizacja. Wszystkie szczegóły były dopracowane do perfekcji.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      property: "Apartament Loft Industrial",
    },
    {
      id: 5,
      name: "Magdalena Król",
      position: "Artystka",
      location: "Zakopane",
      rating: 5,
      comment:
        "Willa w Zakopanem była miejscem, gdzie mogłam w pełni się zrelaksować i skupić na twórczości. Widok na Tatry, sauna i kominek - wszystko czego potrzebowałam. Obsługa bardzo dyskretna i profesjonalna.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      property: "Willa Modern Luxury",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="luxuryRentalsTestimonials">
      <div className="luxuryRentalsTestimonialsContainer">
        {/* Header */}
        <div className="luxuryRentalsTestimonialsHeader">
          <div className="luxuryRentalsTestimonialsHeaderContainer">
            <p className="luxuryRentalsTestimonialsHeaderSubtitle">
              Opinie Klientów
            </p>
            <h2 className="luxuryRentalsTestimonialsHeaderTitle cormorant-garamond-regular">
              Co Mówią Nasi Klienci
            </h2>
            <p className="luxuryRentalsTestimonialsHeaderDescription">
              Poznaj opinie naszych zadowolonych klientów o luksusowych
              nieruchomościach do wynajmu
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="luxuryRentalsTestimonialsContent">
          <div className="luxuryRentalsTestimonialsCard">
            {/* Quote Icon */}
            <div className="luxuryRentalsTestimonialsQuote">
              <FaQuoteLeft />
            </div>

            {/* Rating */}
            <div className="luxuryRentalsTestimonialsRating">
              {[...Array(currentData.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Comment */}
            <p className="luxuryRentalsTestimonialsComment">
              "{currentData.comment}"
            </p>

            {/* Property */}
            <div className="luxuryRentalsTestimonialsProperty">
              <span>Nieruchomość: {currentData.property}</span>
            </div>

            {/* Client Info */}
            <div className="luxuryRentalsTestimonialsClient">
              <div className="luxuryRentalsTestimonialsClientImage">
                <img src={currentData.image} alt={currentData.name} />
              </div>
              <div className="luxuryRentalsTestimonialsClientInfo">
                <h4 className="luxuryRentalsTestimonialsClientName cormorant-garamond-regular">
                  {currentData.name}
                </h4>
                <p className="luxuryRentalsTestimonialsClientPosition">
                  {currentData.position}
                </p>
                <p className="luxuryRentalsTestimonialsClientLocation">
                  {currentData.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="luxuryRentalsTestimonialsNavigation">
            <button
              className="luxuryRentalsTestimonialsNavButton prev"
              onClick={prevTestimonial}
            >
              <FaChevronLeft />
            </button>
            <button
              className="luxuryRentalsTestimonialsNavButton next"
              onClick={nextTestimonial}
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="luxuryRentalsTestimonialsDots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`luxuryRentalsTestimonialsDot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRentalsTestimonials;
