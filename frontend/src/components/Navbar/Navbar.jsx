import React, { useState, useEffect } from 'react';
import "./navbar.css";

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}>
        <div className="navbarContainer">
            {/* Left Part */}
            <div className="navbarContainerLeft">
                <div className="navbarContainerLeftContainer">
                    <p className="navbarContainerLeftContainerText cormorant-garamond-regular">
                        Noit Atelier
                    </p>
                </div>
            </div>

            {/* Right Part */}
            <div className="navbarContainerRight">
                <div className="navbarContainerRightContainer">

                    <div className="navbarContainerRightContainerOne">

                        <div className="navbarContainerRightContainerOneElementOne">
                            <NavLink to="/" className={({isActive}) => isActive ? "navbarContainerRightContainerOneElementOneContainer active" : "navbarContainerRightContainerOneElementOneContainer"}>
                                <p className="navbarContainerRightContainerOneElementOneContainerText">
                                    Home
                                </p>
                            </NavLink>
                            <div className="navbarContainerRightContainerOneElementOneUnderline"/>
                        </div>
                        
                        <div className="navbarContainerRightContainerOneElementTwo">
                            <NavLink to="/properties" className={({isActive}) => isActive ? "navbarContainerRightContainerOneElementTwoContainer active" : "navbarContainerRightContainerOneElementTwoContainer"}>
                                <p className="navbarContainerRightContainerOneElementTwoContainerText">
                                    Properties
                                </p>
                            </NavLink>
                            <div className="navbarContainerRightContainerOneElementTwoUnderline"/>
                        </div>

                        <div className="navbarContainerRightContainerOneElementThree">
                            <NavLink to="/blog" className={({isActive}) => isActive ? "navbarContainerRightContainerOneElementThreeContainer active" : "navbarContainerRightContainerOneElementThreeContainer"}>
                                <p className="navbarContainerRightContainerOneElementThreeContainerText">
                                    Blog
                                </p>
                            </NavLink>
                            <div className="navbarContainerRightContainerOneElementThreeUnderline"/>
                        </div>

                        <div className="navbarContainerRightContainerOneElementFour">
                            <NavLink to="/about" className={({isActive}) => isActive ? "navbarContainerRightContainerOneElementFourContainer active" : "navbarContainerRightContainerOneElementFourContainer"}>
                                <p className="navbarContainerRightContainerOneElementFourContainerText">
                                    About
                                </p>
                            </NavLink>
                            <div className="navbarContainerRightContainerOneElementFourUnderline"/>
                        </div>

                        <div className="navbarContainerRightContainerOneElementFive">
                            <NavLink to="/faq" className={({isActive}) => isActive ? "navbarContainerRightContainerOneElementFiveContainer active" : "navbarContainerRightContainerOneElementFiveContainer"}>
                                <p className="navbarContainerRightContainerOneElementFiveContainerText">
                                    FAQ
                                </p>
                            </NavLink>
                            <div className="navbarContainerRightContainerOneElementFiveUnderline"/>
                        </div>

                    </div>


                    <div className="navbarContainerRightContainerTwo">
                        <div className="navbarContainerRightContainerTwoContainer">
                            <div className="navbarContainerRightContainerTwoContainerButton">
                                <div className="navbarContainerRightContainerTwoContainerButtonContainer">
                                    <p className="navbarContainerRightContainerTwoContainerButtonContainerText">
                                        Contact
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar