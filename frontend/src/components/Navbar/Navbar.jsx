import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const checkScroll = () => {
    setIsScrolled(window.scrollY > 5);
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll(); // Żeby działało też od razu

  return () => window.removeEventListener('scroll', checkScroll);
}, []);



  // Ustaw klasę na podstawie scrolla
  const navbarClass = isScrolled ? 'navbar scrolled' : 'navbar';
  
  return (
    <div className={navbarClass}>
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