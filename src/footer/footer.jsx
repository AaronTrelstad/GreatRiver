import React from 'react'
import './footer.css'
import { AiFillLinkedin } from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot'>
        <div className='footerblock'>
          <h7>Connect With Us:</h7>
        </div>
        <div className='footerblock'>
          <h7>Aaron Trelstad</h7>
          <div className='footer-links'>
          <a href="https://linkedin.com/in/aarontrelstad" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
          </div>
        </div>
        <div className='footerblock'>
          <h7>Abhyudaya Shukla</h7>
          <div className='footer-links'>
          <a href="https://www.linkedin.com/in/abhyudaya-shukla-2578b6240/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
          </div>
        </div>
        <div className='footerblock'>
          <h7>Great River Solutions</h7>
          <div className='footer-links'>
            <a href="https://www.linkedin.com/in/abhyudaya-shukla-2578b6240/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="mailto:greatriversolutions@gmail.com" target="_blank" rel="noopener noreferrer"><BiLogoGmail /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
