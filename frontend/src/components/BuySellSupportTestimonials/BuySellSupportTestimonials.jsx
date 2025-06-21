import React, { useState } from "react";
import "./buySellSupportTestimonials.css";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BuySellSupportTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      role: "Właścicielka Apartamentu",
      location: "Warszawa, Śródmieście",
      rating: 5,
      text: "Fantastyczne doświadczenie! Zespół NoirAtelier przeprowadził nas przez cały proces sprzedaży naszego apartamentu. Profesjonalny home staging i doskonała strategia marketingowa zaowocowały sprzedażą w rekordowym czasie za cenę przewyższającą nasze oczekiwania.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      property: "Apartament 120m²",
      transaction: "Sprzedaż"
    },
    {
      id: 2,
      name: "Michał Nowak",
      role: "Inwestor Nieruchomości",
      location: "Kraków, Kazimierz",
      rating: 5,
      text: "Kompleksowe wsparcie w zakupie nieruchomości inwestycyjnej. Eksperci NoirAtelier przeprowadzili szczegółową analizę rynku, pomogli w negocjacjach i zapewnili bezpieczną transakcję. Ich profesjonalizm i znajomość rynku są na najwyższym poziomie.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      property: "Kamienica 200m²",
      transaction: "Zakup"
    },
    {
      id: 3,
      name: "Ewa Zielińska",
      role: "Przedsiębiorca",
      location: "Gdańsk, Starówka",
      rating: 5,
      text: "Sprzedaż domu rodzinnego to był dla nas bardzo emocjonalny proces. Zespół NoirAtelier wykazał się nie tylko profesjonalizmem, ale także zrozumieniem i cierpliwością. Otrzymaliśmy doskonałą cenę i całkowicie bezbłędną obsługę prawną.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      property: "Dom 180m²",
      transaction: "Sprzedaż"
    },
    {
      id: 4,
      name: "Tomasz Wiśniewski",
      role: "Dyrektor Zarządzający",
      location: "Wrocław, Centrum",
      rating: 5,
      text: "Zakup mieszkania dla mojej rodziny przebiegł bez najmniejszych problemów dzięki NoirAtelier. Profesjonalne doradztwo, kompleksowa obsługa i dostęp do ekskluzywnych ofert sprawiły, że znaleźliśmy idealną nieruchomość w bardzo krótkim czasie.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      property: "Mieszkanie 95m²",
      transaction: "Zakup"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`} 
      />
    ));
  };

  return (
    <div className="buySellSupportTestimonials">
      <div className="buySellSupportTestimonialsContainer">
        {/* Header */}
        <div className="buySellSupportTestimonialsHeader">
          <p className="buySellSupportTestimonialsHeaderSubtitle cormorant-garamond-regular">Opinie Klientów</p>
          <h2 className="buySellSupportTestimonialsHeaderTitle cormorant-garamond-regular">
            Co Mówią o Nas <span className="highlight">Nasi Klienci</span>
          </h2>
          <p className="buySellSupportTestimonialsHeaderDescription">
            Poznaj doświadczenia naszych klientów, którzy powierzyli nam proces kupna lub sprzedaży swoich nieruchomości. 
            Ich satysfakcja to najlepsza rekomendacja naszych usług.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="buySellSupportTestimonialsSlider">
          <div className="buySellSupportTestimonialsSliderContainer">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`buySellSupportTestimonialsSlide ${index === currentTestimonial ? 'active' : ''}`}
              >
                <div className="buySellSupportTestimonialsCard">
                  <div className="buySellSupportTestimonialsCardQuote">
                    <FaQuoteLeft className="buySellSupportTestimonialsCardQuoteIcon" />
                  </div>
                  
                  <div className="buySellSupportTestimonialsCardContent">
                    <div className="buySellSupportTestimonialsCardRating">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="buySellSupportTestimonialsCardText">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="buySellSupportTestimonialsCardClient">
                      <div className="buySellSupportTestimonialsCardClientImage">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="buySellSupportTestimonialsCardClientInfo">
                        <h4 className="buySellSupportTestimonialsCardClientName cormorant-garamond-regular">
                          {testimonial.name}
                        </h4>
                        <p className="buySellSupportTestimonialsCardClientRole">
                          {testimonial.role}
                        </p>
                        <p className="buySellSupportTestimonialsCardClientLocation">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="buySellSupportTestimonialsCardTransaction">
                        <div className="buySellSupportTestimonialsCardTransactionType">
                          {testimonial.transaction}
                        </div>
                        <div className="buySellSupportTestimonialsCardTransactionProperty">
                          {testimonial.property}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="buySellSupportTestimonialsNavigation">
            <button 
              className="buySellSupportTestimonialsNavButton prev"
              onClick={prevTestimonial}
            >
              <FaChevronLeft />
            </button>
            
            <div className="buySellSupportTestimonialsDots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`buySellSupportTestimonialsDot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            
            <button 
              className="buySellSupportTestimonialsNavButton next"
              onClick={nextTestimonial}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="buySellSupportTestimonialsStats">
          <div className="buySellSupportTestimonialsStatsContainer">
            <div className="buySellSupportTestimonialsStatItem">
              <div className="buySellSupportTestimonialsStatNumber cormorant-garamond-regular">98%</div>
              <div className="buySellSupportTestimonialsStatLabel">Zadowolonych Klientów</div>
            </div>
            <div className="buySellSupportTestimonialsStatItem">
              <div className="buySellSupportTestimonialsStatNumber cormorant-garamond-regular">500+</div>
              <div className="buySellSupportTestimonialsStatLabel">Zrealizowanych Transakcji</div>
            </div>
            <div className="buySellSupportTestimonialsStatItem">
              <div className="buySellSupportTestimonialsStatNumber cormorant-garamond-regular">4.9</div>
              <div className="buySellSupportTestimonialsStatLabel">Średnia Ocena</div>
            </div>
            <div className="buySellSupportTestimonialsStatItem">
              <div className="buySellSupportTestimonialsStatNumber cormorant-garamond-regular">10+</div>
              <div className="buySellSupportTestimonialsStatLabel">Lat Doświadczenia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellSupportTestimonials;
