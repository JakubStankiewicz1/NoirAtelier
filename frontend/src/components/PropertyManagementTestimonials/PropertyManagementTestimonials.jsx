import React, { useState } from "react";
import "./propertyManagementTestimonials.css";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const PropertyManagementTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      role: "Owner of 3 properties",
      image: "https://media.istockphoto.com/id/1471845315/photo/happy-portrait-or-business-woman-taking-a-selfie-in-office-building-for-a-social-media.jpg?s=612x612&w=0&k=20&c=AOylBL01joI0zphCAFr6YVrsOgp_jd2XtVUychLXYho=",
      text: "Noir Atelier completely took over the management of my properties. Thanks to them, my profits increased by 30%, and I have more time for other investments.",
      rating: 5,
      location: "Warsaw"
    },
    {
      id: 2,
      name: "Marcin Nowak",
      role: "Real estate investor",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      text: "Working with Noir Atelier was the best investment decision. Their team is extremely competent, and the reports I receive allow me to make informed decisions about further investments.",
      rating: 5,
      location: "Krakow"
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      role: "Apartment owner",
      image: "https://media.istockphoto.com/id/1353379051/photo/portrait-of-beautiful-mature-african-woman-looking-at-camera-outdoor.jpg?s=612x612&w=0&k=20&c=87IkLpQc2INpv2sJRrH347-qVrNFmH2QM_da8J46y44=",
      text: "Thanks to Noir Atelier, my apartments are always in perfect condition, and tenants are satisfied. I can't remember the last time I had to worry about property problems.",
      rating: 5,
      location: "Gdansk"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="propertyManagementTestimonials">
      <div className="propertyManagementTestimonialsContainer">
        {/* Header */}        <div className="propertyManagementTestimonialsHeader">
          <p className="propertyManagementTestimonialsHeaderSubtitle cormorant-garamond-regular">Client Reviews</p>
          <h2 className="propertyManagementTestimonialsHeaderTitle cormorant-garamond-regular">What Our Clients Say About Us</h2>
          <p className="propertyManagementTestimonialsHeaderDescription">
            Discover the opinions of property owners who trusted our experience and professionalism
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="propertyManagementTestimonialsSlider">
          <div className="propertyManagementTestimonialsSliderContainer">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`propertyManagementTestimonialsSliderItem ${
                  index === activeTestimonial ? 'active' : ''
                }`}
              >
                <div className="propertyManagementTestimonialsSliderItemContent">
                  <div className="propertyManagementTestimonialsSliderItemQuote">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                      <path d="M0 15C0 6.7 6.7 0 15 0h10v15H15c-2.8 0-5 2.2-5 5s2.2 5 5 5h5v10H15C6.7 30 0 23.3 0 15z" fill="#AC6620"/>
                      <path d="M20 15C20 6.7 26.7 0 35 0h5v15H35c-2.8 0-5 2.2-5 5s2.2 5 5 5h5v10h-5C26.7 30 20 23.3 20 15z" fill="#AC6620"/>
                    </svg>
                  </div>
                  <p className="propertyManagementTestimonialsSliderItemText">
                    {testimonial.text}
                  </p>                  <div className="propertyManagementTestimonialsSliderItemRating">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} className="propertyManagementTestimonialsSliderItemStar" />
                    ))}
                  </div>
                </div>
                <div className="propertyManagementTestimonialsSliderItemAuthor">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="propertyManagementTestimonialsSliderItemAuthorImage"
                  />
                  <div className="propertyManagementTestimonialsSliderItemAuthorInfo">
                    <h4 className="propertyManagementTestimonialsSliderItemAuthorName cormorant-garamond-regular">
                      {testimonial.name}
                    </h4>
                    <p className="propertyManagementTestimonialsSliderItemAuthorRole">
                      {testimonial.role}
                    </p>                    <p className="propertyManagementTestimonialsSliderItemAuthorLocation">
                      <FaMapMarkerAlt /> {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}          <div className="propertyManagementTestimonialsSliderNavigation">
            <button 
              className="propertyManagementTestimonialsSliderNavigationButton prev"
              onClick={prevTestimonial}
            >
              <FaChevronLeft />
            </button>
            <div className="propertyManagementTestimonialsSliderNavigationDots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`propertyManagementTestimonialsSliderNavigationDot ${
                    index === activeTestimonial ? 'active' : ''
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
            <button 
              className="propertyManagementTestimonialsSliderNavigationButton next"
              onClick={nextTestimonial}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Stats */}        <div className="propertyManagementTestimonialsStats">
          <div className="propertyManagementTestimonialsStatsItem">
            <h3 className="propertyManagementTestimonialsStatsItemNumber cormorant-garamond-regular">98%</h3>
            <p className="propertyManagementTestimonialsStatsItemLabel">Satisfied Clients</p>
          </div>
          <div className="propertyManagementTestimonialsStatsItem">
            <h3 className="propertyManagementTestimonialsStatsItemNumber cormorant-garamond-regular">500+</h3>
            <p className="propertyManagementTestimonialsStatsItemLabel">Managed Properties</p>
          </div>
          <div className="propertyManagementTestimonialsStatsItem">
            <h3 className="propertyManagementTestimonialsStatsItemNumber cormorant-garamond-regular">4.9/5</h3>
            <p className="propertyManagementTestimonialsStatsItemLabel">Average Rating</p>
          </div>
          <div className="propertyManagementTestimonialsStatsItem">
            <h3 className="propertyManagementTestimonialsStatsItemNumber cormorant-garamond-regular">15+</h3>
            <p className="propertyManagementTestimonialsStatsItemLabel">Years in Business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementTestimonials;
