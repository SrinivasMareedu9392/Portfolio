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
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`} id="header">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors">Srini<span className="text-teal-600">vas</span></a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li><a href="#home" className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group">Home<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#about" className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group">Projects<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group">Skills<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span></a></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl cursor-pointer text-gray-800 hover:text-teal-600 transition-colors" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          {/* Mobile Menu */}
          <div className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 md:hidden transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
            <a href="#home" className="text-lg font-medium text-gray-600 hover:text-teal-600 transition-colors" onClick={closeMenu}>Home</a>
            <a href="#about" className="text-lg font-medium text-gray-600 hover:text-teal-600 transition-colors" onClick={closeMenu}>About</a>
            <a href="#projects" className="text-lg font-medium text-gray-600 hover:text-teal-600 transition-colors" onClick={closeMenu}>Projects</a>
            <a href="#skills" className="text-lg font-medium text-gray-600 hover:text-teal-600 transition-colors" onClick={closeMenu}>Skills</a>
            <a href="#contact" className="text-lg font-medium text-gray-600 hover:text-teal-600 transition-colors" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
