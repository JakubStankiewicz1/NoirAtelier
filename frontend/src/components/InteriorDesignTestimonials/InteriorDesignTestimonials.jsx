import React from "react";
import "./interiorDesignTestimonials.css";

const InteriorDesignTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Kowalska",
      role: "Właścicielka apartamentu",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b401?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Noir Atelier przekształciło mój dom w prawdziwe dzieło sztuki. Każdy detal został przemyślany.",
      rating: 5
    },
    {
      id: 2,
      name: "Jan Nowak",
      role: "Inwestor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Profesjonalizm i kreatywność na najwyższym poziomie. Polecam każdemu!",
      rating: 5
    },
    {
      id: 3,
      name: "Anna Wiśniewska",
      role: "Architekt",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Wspaniała współpraca. Zespół rozumie potrzeby klienta i tworzy unikalne rozwiązania.",
      rating: 5
    }
  ];

  return (
    <div className="interiorDesignTestimonials">
      <div className="interiorDesignTestimonialsContainer">
        <h2 className="interiorDesignTestimonialsTitle cormorant-garamond-regular">
          Opinie Klientów
        </h2>
        <div className="interiorDesignTestimonialsGrid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="interiorDesignTestimonialsCard">
              <div className="interiorDesignTestimonialsCardRating">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="interiorDesignTestimonialsCardText">
                "{testimonial.text}"
              </p>
              <div className="interiorDesignTestimonialsCardAuthor">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignTestimonials;
