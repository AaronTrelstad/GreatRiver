import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/3.png';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 transition-all duration-300 ${isTransparent ? 'bg-transparent text-white' : 'bg-white shadow-md text-gray-800'}`}>
      <div className="squarelogo">
        <img src={Logo} alt="Logo" className='h-16' />
      </div>
      
      <nav className="flex space-x-4">
        <Link
          to="/"
          className={`px-4 py-3 rounded-lg text-lg ${isTransparent ? 'text-blue-600 border-blue-600 border-2 bg-white hover:bg-blue-600 hover:text-white' : 'text-blue-600 bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white'}`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`px-4 py-3 rounded-lg text-lg ${isTransparent ? 'text-blue-600 border-blue-600 border-2 bg-white hover:bg-blue-600 hover:text-white' : 'text-blue-600 bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white'}`}
        >
          Services
        </Link>
        <Link
          to="/aboutus"
          className={`px-4 py-3 rounded-lg text-lg ${isTransparent ? 'text-blue-600 border-blue-600 border-2 bg-white hover:bg-blue-600 hover:text-white' : 'text-blue-600 bg-white border-blue-600 border-2 hover:bg-blue-600 hover:text-white'}`}
        >
          About Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
