import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/3.png';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 transition-all duration-300 ${isTransparent ? 'bg-transparent text-white' : 'bg-white shadow-md text-gray-800'}`}>
      <div className="squarelogo">
        <img src={Logo} alt="Logo" className='h-12 md:h-16' />
      </div>
      
      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className={`text-lg text-blue-600 focus:outline-none border-2 border-blue-600 rounded-full p-2 ${isOpen ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 bg-white absolute top-16 left-0 right-0 shadow-md rounded-lg z-20`}>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 text-lg text-blue-600 hover:bg-blue-600 hover:text-white`}
        >
          Home
        </Link>
        <Link
          to="/services"
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 text-lg text-blue-600 hover:bg-blue-600 hover:text-white`}
        >
          Services
        </Link>
        <Link
          to="/aboutus"
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-3 text-lg text-blue-600 hover:bg-blue-600 hover:text-white`}
        >
          About Us
        </Link>
      </nav>
      
      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <Link
          to="/"
          className={`px-4 py-3 mx-2 rounded-lg text-lg ${isTransparent ? 'text-blue-600 border-blue-600 border-2 bg-white hover:bg-blue-600 hover:text-white' : 'text-blue-600 bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white'}`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`px-4 py-3 mx-2 rounded-lg text-lg ${isTransparent ? 'text-blue-600 border-blue-600 border-2 bg-white hover:bg-blue-600 hover:text-white' : 'text-blue-600 bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white'}`}
        >
          Services
        </Link>
        <Link
          to="/aboutus"
          className={`px-4 py-3 mx-2 rounded-lg text-lg ${isTransparent ? 'text-blue-600 border-blue-600 border-2 bg-white hover:bg-blue-600 hover:text-white' : 'text-blue-600 bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white'}`}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
