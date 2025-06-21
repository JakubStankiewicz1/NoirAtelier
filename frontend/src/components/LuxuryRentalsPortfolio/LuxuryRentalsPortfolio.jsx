import React, { useState } from 'react';
import "./luxuryRentalsPortfolio.css";
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const LuxuryRentalsPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'apartments', name: 'Apartamenty' },
    { id: 'villas', name: 'Wille' },
    { id: 'penthouses', name: 'Penthousy' }
  ];

  const properties = [
    {
      id: 1,
      category: 'apartments',
      title: "Luksusowy Apartament Marina",
      location: "Warszawa, Śródmieście",
      price: "15,000 PLN",
      period: "/miesiąc",
      rating: 4.9,
      reviews: 23,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Balkon z widokiem", "Parking podziemny", "Concierge 24/7"]
    },
    {
      id: 2,
      category: 'villas',
      title: "Ekskluzywna Willa Seaside",
      location: "Sopot, Przy Plaży",
      price: "25,000 PLN",
      period: "/miesiąc",
      rating: 5.0,
      reviews: 15,
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Prywatny basen", "Ogród 1000m²", "Dostęp do plaży"]
    },
    {
      id: 3,
      category: 'penthouses',
      title: "Penthouse Sky Tower",
      location: "Kraków, Kazimierz",
      price: "20,000 PLN",
      period: "/miesiąc",
      rating: 4.8,
      reviews: 31,
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Taras 50m²", "Smart home", "Panoramiczny widok"]
    },
    {
      id: 4,
      category: 'apartments',
      title: "Apartament Loft Industrial",
      location: "Gdańsk, Stare Miasto",
      price: "12,000 PLN",
      period: "/miesiąc",
      rating: 4.7,
      reviews: 18,
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Industrialny design", "Wysokie sufity", "Ekskluzywne wyposażenie"]
    },
    {
      id: 5,
      category: 'villas',
      title: "Willa Modern Luxury",
      location: "Zakopane, Centrum",
      price: "18,000 PLN",
      period: "/miesiąc",
      rating: 4.9,
      reviews: 27,
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Widok na Tatry", "Sauna i jacuzzi", "Kominek"]
    },
    {
      id: 6,
      category: 'penthouses',
      title: "Penthouse Luxury Downtown",
      location: "Wrocław, Rynek",
      price: "22,000 PLN",
      period: "/miesiąc",
      rating: 4.8,
      reviews: 12,
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Widok na Rynek", "Prywatny windarz", "Luksusowa kuchnia"]
    }
  ];

  const filteredProperties = activeCategory === 'all' 
    ? properties 
    : properties.filter(property => property.category === activeCategory);

  return (
    <div className='luxuryRentalsPortfolio'>
      <div className="luxuryRentalsPortfolioContainer">
        
        {/* Header */}
        <div className="luxuryRentalsPortfolioHeader">
          <div className="luxuryRentalsPortfolioHeaderContainer">
            <p className="luxuryRentalsPortfolioHeaderSubtitle">Nasze Portfolio</p>
            <h2 className="luxuryRentalsPortfolioHeaderTitle cormorant-garamond-regular">
              Wybrane Luksusowe Nieruchomości
            </h2>
            <p className="luxuryRentalsPortfolioHeaderDescription">
              Odkryj naszą kolekcję najpiękniejszych i najbardziej ekskluzywnych nieruchomości do wynajmu
            </p>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="luxuryRentalsPortfolioFilter">
          <div className="luxuryRentalsPortfolioFilterContainer">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`luxuryRentalsPortfolioFilterButton ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="luxuryRentalsPortfolioGrid">
          {filteredProperties.map((property) => (
            <div key={property.id} className="luxuryRentalsPortfolioCard">
              <div className="luxuryRentalsPortfolioCardImage">
                <img src={property.image} alt={property.title} />
                <div className="luxuryRentalsPortfolioCardImageOverlay">
                  <div className="luxuryRentalsPortfolioCardPrice">
                    <span className="luxuryRentalsPortfolioCardPriceAmount">{property.price}</span>
                    <span className="luxuryRentalsPortfolioCardPricePeriod">{property.period}</span>
                  </div>
                  <div className="luxuryRentalsPortfolioCardRating">
                    <FaStar />
                    <span>{property.rating}</span>
                    <span>({property.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="luxuryRentalsPortfolioCardContent">
                <h3 className="luxuryRentalsPortfolioCardTitle cormorant-garamond-regular">
                  {property.title}
                </h3>
                <div className="luxuryRentalsPortfolioCardLocation">
                  <FaMapMarkerAlt />
                  <span>{property.location}</span>
                </div>
                <div className="luxuryRentalsPortfolioCardSpecs">
                  <div className="luxuryRentalsPortfolioCardSpec">
                    <FaBed />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="luxuryRentalsPortfolioCardSpec">
                    <FaBath />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="luxuryRentalsPortfolioCardSpec">
                    <FaRuler />
                    <span>{property.area}m²</span>
                  </div>
                </div>
                <div className="luxuryRentalsPortfolioCardFeatures">
                  {property.features.map((feature, index) => (
                    <span key={index} className="luxuryRentalsPortfolioCardFeature">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="luxuryRentalsPortfolioCardButton">
                  <span>Zobacz Szczegóły</span>
                  <div className="luxuryRentalsPortfolioCardButtonArrow">→</div>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default LuxuryRentalsPortfolio
