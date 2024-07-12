import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Connect With Us:</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Aaron Trelstad */}
          <div className="mb-6 md:mb-0 text-center">
            <h3 className="text-xl font-medium mb-2">Aaron Trelstad</h3>
            <div className="text-2xl">
              <a
                href="https://linkedin.com/in/aarontrelstad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>

          {/* Abhyudaya Shukla */}
          <div className="mb-6 md:mb-0 text-center">
            <h3 className="text-xl font-medium mb-2">Abhyudaya Shukla</h3>
            <div className="text-2xl">
              <a
                href="https://www.linkedin.com/in/abhyudaya-shukla-2578b6240/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>

          {/* Great River Solutions */}
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Great River Solutions</h3>
            <div className="flex justify-center space-x-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/abhyudaya-shukla-2578b6240/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="mailto:greatriversolutions@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
              >
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
