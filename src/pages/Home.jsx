import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../headers/header'
import './pages.css'
import Footer from '../footer/footer'
import { TypeAnimation } from 'react-type-animation'
import { FaChevronCircleDown } from "react-icons/fa";
import River from '../assets/qc.jpeg'

function Home() {
    return (
        <div>
            <Header/>
            {/* Add image and text animation on top of the image */}
            <div className='imgbackground'>
                <img src={River} className='imageback'></img>
                <div className='overlay'></div>
                <div className='imagetext'>
                <div>
                    <h5 className='whitetext'>

                    {/* This is the typing animation */}
                    <span className='animation-text'>
                        <TypeAnimation
                        sequence={[
                        'We are Innovators.',
                        2000,
                        'We are Designers.',
                        2000,
                        'We are Creators.',
                        2000,
                        'We are Developers.',
                        2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                        display: 'inline-block'
                        }}
                        repeat={Infinity}
                        /> 
                    </span>
                    </h5>
                </div>
                </div>
            </div>
            {/* Top attention getter */}
            <div className='top'>
                <h1>Grow your company by <span className='bluetext'>15%-50%</span></h1>
                <p className='textbox'>Studies have consistently shown that companies with a strong online presence experience remarkable growth, 
                ranging from <span className='bluetext'>15% to 50%</span>, in comparison to those without one. In 2021, the online commerce landscape witnessed an 
                unprecedented surge, with <span className='bluetext'>19% of all commercial transactions taking place online</span>, resulting in an astounding <span className='bluetext'>$871.03 
                billion </span>in online spending in the United States alone.
                </p>
            </div>

            {/* Misson Statement */}
            <div className='misson'>
                <h1 className='bluetext'>What we do</h1>
                <p className='textbox'>At Great River Solutions, we are a forward-thinking digital agency dedicated to transforming businesses with cutting-edge
                 website solutions. Through in-depth market research, innovative design, and a focus on user experience, 
                 we elevate your online presence, helping your company thrive in the competitive landscape.
                </p>
            </div>

            {/* Advertising users to sign up for newsletter*/}
            <div className='signblock'>
                <h2signup>Unleash the Potential of your Business</h2signup>
            </div>
            <div className='signbox'>
                <a className="button2" href="mailto:greatriversolutions@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
            <Footer />
        </div> 
    )
}

export default Home;
