import React, { useState, useEffect } from "react";
import "./interiorDesignPortfolio.css";
import { 
  FiHome, 
  FiStar, 
  FiArrowRight,
  FiMapPin,
  FiLayers,
  FiGrid
} from 'react-icons/fi';
import { 
  MdChair, 
  MdBed, 
  MdKitchen, 
  MdBathtub, 
  MdBusinessCenter 
} from 'react-icons/md';
import { HiSparkles, HiLightBulb, HiColorSwatch } from 'react-icons/hi';

const InteriorDesignPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const filters = [
    { id: 'all', label: 'Wszystkie', icon: <FiGrid /> },
    { id: 'living', label: 'Salony', icon: <MdChair /> },
    { id: 'bedroom', label: 'Sypialnie', icon: <MdBed /> },
    { id: 'kitchen', label: 'Kuchnie', icon: <MdKitchen /> },
    { id: 'bathroom', label: 'Łazienki', icon: <MdBathtub /> },
    { id: 'office', label: 'Biura', icon: <MdBusinessCenter /> }
  ];

  const projects = [
    {
      id: 1,
      category: 'living',
      title: 'Luksusowy Salon w Warszawie',
      location: 'Warszawa, Mokotów',
      area: '85m²',
      style: 'Nowoczesny',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large'
    },
    {
      id: 2,
      category: 'bedroom',
      title: 'Elegancka Sypialnia',
      location: 'Kraków, Stare Miasto',
      area: '45m²',
      style: 'Klasyczny',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium'
    },
    {
      id: 3,
      category: 'kitchen',
      title: 'Nowoczesna Kuchnia',
      location: 'Gdańsk, Wrzeszcz',
      area: '35m²',
      style: 'Minimalistyczny',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'small'
    },
    {
      id: 4,
      category: 'bathroom',
      title: 'Spa w Domu',
      location: 'Wrocław, Centrum',
      area: '25m²',
      style: 'Luksusowy',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'small'
    },
    {
      id: 5,
      category: 'office',
      title: 'Nowoczesne Biuro',
      location: 'Warszawa, Wilanów',
      area: '120m²',
      style: 'Industrialny',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large'
    },
    {
      id: 6,
      category: 'office',
      title: 'Nowoczesne Biuro',
      location: 'Warszawa, Wilanów',
      area: '120m²',
      style: 'Industrialny',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large'
    },
    {
      id: 7,
      category: 'office',
      title: 'Nowoczesne Biuro',
      location: 'Warszawa, Wilanów',
      area: '120m²',
      style: 'Industrialny',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large'
    },
    {
      id: 8,
      category: 'office',
      title: 'Nowoczesne Biuro',
      location: 'Warszawa, Wilanów',
      area: '120m²',
      style: 'Industrialny',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large'
    },
    {
      id: 9,
      category: 'office',
      title: 'Nowoczesne Biuro',
      location: 'Warszawa, Wilanów',
      area: '120m²',
      style: 'Industrialny',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'large'
    },
    {
      id: 10,
      category: 'living',
      title: 'Apartament z Widokiem',
      location: 'Poznań, Centrum',
      area: '95m²',
      style: 'Skandynawski',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium'
    },
    {
      id: 11,
      category: 'bedroom',
      title: 'Romantyczna Sypialnia',
      location: 'Łódź, Piotrków',
      area: '40m²',
      style: 'Prowansalski',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'small'
    },
    {
      id: 12,
      category: 'kitchen',
      title: 'Kuchnia z Wyspą',
      location: 'Katowice, Silesia City',
      area: '55m²',
      style: 'Nowoczesny',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium'
    },
    {
      id: 13,
      category: 'kitchen',
      title: 'Kuchnia z Wyspą',
      location: 'Katowice, Silesia City',
      area: '55m²',
      style: 'Nowoczesny',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      size: 'medium'
    }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="interiorDesignPortfolio">
      <div className="interiorDesignPortfolioContainer">
        {/* Header */}
        <div className="interiorDesignPortfolioHeader">
          <div className="interiorDesignPortfolioHeaderContent">            <span className="interiorDesignPortfolioHeaderBadge">
              <HiSparkles className="interiorDesignPortfolioHeaderBadgeIcon" />
              <span>Nasze Realizacje</span>
            </span>
            <h2 className="interiorDesignPortfolioHeaderTitle cormorant-garamond-regular">
              Portfolio Projektów
            </h2>
            <p className="interiorDesignPortfolioHeaderDescription">
              Odkryj naszą kolekcję wyjątkowych projektów wnętrz, które łączą funkcjonalność 
              z niepowtarzalnym stylem. Każdy projekt to unikalna historia przestrzeni.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="interiorDesignPortfolioFilters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`interiorDesignPortfolioFilter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="interiorDesignPortfolioFilterIcon">{filter.icon}</span>
              <span className="interiorDesignPortfolioFilterLabel">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="interiorDesignPortfolioGrid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`interiorDesignPortfolioItem ${project.size} animate-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="interiorDesignPortfolioItemImage">
                <img src={project.image} alt={project.title} />
                <div className="interiorDesignPortfolioItemImageOverlay">
                  <div className="interiorDesignPortfolioItemImageOverlayContent">
                    <div className="interiorDesignPortfolioItemImageOverlayTop">
                      <span className="interiorDesignPortfolioItemImageOverlayStyle">
                        {project.style}
                      </span>
                      <span className="interiorDesignPortfolioItemImageOverlayArea">
                        {project.area}
                      </span>
                    </div>
                    <div className="interiorDesignPortfolioItemImageOverlayBottom">
                      <h3 className="interiorDesignPortfolioItemImageOverlayTitle cormorant-garamond-regular">
                        {project.title}
                      </h3>                      <p className="interiorDesignPortfolioItemImageOverlayLocation">
                        <FiMapPin className="location-icon" /> {project.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="interiorDesignPortfolioItemImageHover">                  <button className="interiorDesignPortfolioItemImageHoverButton">
                    <span>Zobacz Projekt</span>
                    <FiArrowRight className="interiorDesignPortfolioItemImageHoverButtonArrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="interiorDesignPortfolioCTA">
          <div className="interiorDesignPortfolioCTAContent">
            <h3 className="interiorDesignPortfolioCTATitle cormorant-garamond-regular">
              Gotowy na Własny Projekt Marzeń?
            </h3>
            <p className="interiorDesignPortfolioCTADescription">
              Skontaktuj się z nami i stwórzmy razem przestrzeń, która będzie odbiciem Twojej osobowości
            </p>            <button className="interiorDesignPortfolioCTAButton">
              <span>Rozpocznij Projekt</span>
              <HiColorSwatch className="interiorDesignPortfolioCTAButtonIcon" />
            </button>
          </div>          <div className="interiorDesignPortfolioCTADecorative">
            <HiSparkles className="interiorDesignPortfolioCTADecorativeElement element1" />
            <HiColorSwatch className="interiorDesignPortfolioCTADecorativeElement element2" />
            <HiLightBulb className="interiorDesignPortfolioCTADecorativeElement element3" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default InteriorDesignPortfolio;
