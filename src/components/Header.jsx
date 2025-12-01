import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
          <a href="#" className="logo">Srini<span>vas</span></a>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} id="navList">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
