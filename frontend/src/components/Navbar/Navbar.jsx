import React, { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll(); // Żeby działało też od razu

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  // Funkcja przewijania na górę
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Funkcja do toggleowania menu mobilnego
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Funkcja do zamknięcia menu mobilnego
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  // Effect do zamykania menu przy zmianie rozmiaru okna
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect do blokowania scrollowania gdy menu jest otwarte
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);  // Sprawdź czy jesteśmy na blog/:id lub stronie blogów, lub interior-design
  const isBlogPage = location.pathname === '/blog/';
  // const isBlogElement = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
  const isBlogElement = location.pathname.startsWith('/blog/');
  const isInteriorDesignPage = location.pathname === '/interior-design';
  const isFaqPage = location.pathname === '/faq';
  
  // FAQ should have dark background even when not scrolled
  const shouldUseLightTheme = (isBlogPage || isBlogElement || isInteriorDesignPage) && !isFaqPage;

  // Ustaw klasę na podstawie scrolla i ścieżki
  let navbarClass = "navbar";
  if (isScrolled) {
    navbarClass += " scrolled";
  } else if (shouldUseLightTheme) {
    navbarClass += " light";
  }
  return (
    <>
      <div className={navbarClass}>
        <div className="navbarContainer">
          {/* Left Part */}
          <div className="navbarContainerLeft">
            <NavLink to="/" className="navbarContainerLeftContainer" onClick={scrollToTop}>
              <p className="navbarContainerLeftContainerText cormorant-garamond-regular">Noit Atelier</p>
            </NavLink>
          </div>
          
          {/* Right Part - Desktop */}
          <div className="navbarContainerRight">
            <div className="navbarContainerRightContainer">
              <div className="navbarContainerRightContainerOne">
                <div className="navbarContainerRightContainerOneElementOne">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "navbarContainerRightContainerOneElementOneContainer active" : "navbarContainerRightContainerOneElementOneContainer"
                    }
                    onClick={scrollToTop}
                  >
                    <p className="navbarContainerRightContainerOneElementOneContainerText">Home</p>
                  </NavLink>
                  <div className="navbarContainerRightContainerOneElementOneUnderline" />
                </div>
                <div className="navbarContainerRightContainerOneElementTwo">
                  <NavLink
                    to="/properties"
                    className={({ isActive }) =>
                      isActive ? "navbarContainerRightContainerOneElementTwoContainer active" : "navbarContainerRightContainerOneElementTwoContainer"
                    }
                    onClick={scrollToTop}
                  >
                    <p className="navbarContainerRightContainerOneElementTwoContainerText">Properties</p>
                  </NavLink>
                  <div className="navbarContainerRightContainerOneElementTwoUnderline" />
                </div>
                <div className="navbarContainerRightContainerOneElementThree">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "navbarContainerRightContainerOneElementThreeContainer active"
                        : "navbarContainerRightContainerOneElementThreeContainer"
                    }
                    onClick={scrollToTop}
                  >
                    <p className="navbarContainerRightContainerOneElementThreeContainerText">Blog</p>
                  </NavLink>
                  <div className="navbarContainerRightContainerOneElementThreeUnderline" />
                </div>
                <div className="navbarContainerRightContainerOneElementFour">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "navbarContainerRightContainerOneElementFourContainer active" : "navbarContainerRightContainerOneElementFourContainer"
                    }
                    onClick={scrollToTop}
                  >
                    <p className="navbarContainerRightContainerOneElementFourContainerText">About</p>
                  </NavLink>
                  <div className="navbarContainerRightContainerOneElementFourUnderline" />
                </div>
                <div className="navbarContainerRightContainerOneElementFive">
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      isActive ? "navbarContainerRightContainerOneElementFiveContainer active" : "navbarContainerRightContainerOneElementFiveContainer"
                    }
                    onClick={scrollToTop}
                  >
                    <p className="navbarContainerRightContainerOneElementFiveContainerText">FAQ</p>
                  </NavLink>
                  <div className="navbarContainerRightContainerOneElementFiveUnderline" />
                </div>
              </div>
              <div className="navbarContainerRightContainerTwo">
                <div className="navbarContainerRightContainerTwoContainer">
                  <NavLink to="/contact" className="navbarContainerRightContainerTwoContainerButton" onClick={scrollToTop}>
                    <div className="navbarContainerRightContainerTwoContainerButtonContainer">
                      <p className="navbarContainerRightContainerTwoContainerButtonContainerText">Contact</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div 
            className={`mobileMenuButton ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobileMenuOverlay ${isMobileMenuOpen ? 'open' : ''} ${shouldUseLightTheme ? 'light' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `mobileMenuLink ${isActive ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) => `mobileMenuLink ${isActive ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Properties
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => `mobileMenuLink ${isActive ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `mobileMenuLink ${isActive ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => `mobileMenuLink ${isActive ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `mobileMenuLink ${isActive ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
