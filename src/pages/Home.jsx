import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../headers/header'
import './pages.css'
import Bala from '../assets/bala.jpeg'
import Aaron from '../assets/Aaron.jpeg'
import Footer from '../footer/footer'
import { TypeAnimation } from 'react-type-animation'
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

            {/* Advertising users to create an account and sign up for newsletter*/}
            <div className='signblock'>
                <h2signup>Unleash the Potential of your Business</h2signup>
                <p className='psignup'>Sign Up to join our newsletter and to see exclusive promotions on our services</p>
            </div>
            <div className='signbox'>
                <Link to="/register" className='button2'>
                    Sign Up
                </Link>
            </div>
            <Footer />
        </div> 
    )
}

export default Home;
