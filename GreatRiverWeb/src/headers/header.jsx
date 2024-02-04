import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import Logo from '../assets/3.png'

const Header = () => {
  {/* This makes it so that when the user is at the top of the page the header is transparent */}
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    {/* Then when user scrolls down the page the header returns to its normal color (white) */}
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {/* The className depends on the position of the page*/}
    <header className={`header ${isTransparent ? 'transparent' : ''}`}>
      <div className="squarelogo">
        <img src={Logo} className='squarelogo'></img>
      </div>
      
      {/* This are the buttons displayed on the top of the page*/}
      <div className="button_container">
        <Link to="/home" className='button'>
          Home
        </Link>
        <Link to="/services" className='button'>
          Services
        </Link>
        <Link to="/about" className='button'>
          About Us
        </Link>
      </div>
    </header>
    </>
  );
};

export default Header;
