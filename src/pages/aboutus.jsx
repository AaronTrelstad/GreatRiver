import React from 'react';
import Header from '../headers/header';
import Bala from '../assets/bala.jpeg'
import Aaron from '../assets/Aaron.jpeg'
import './pages.css'
import Footer from '../footer/footer';

const About = () => {
    return (
        <>
            <Header />
            <div className='topspace'></div>
            <div className='aboutblock'>
                <h2about>Meet the Team</h2about>
            </div>
            <div className='about'>
                <div className='imgblock'>
                    <img src={Aaron} className='resized'/>
                    <pabout className='textbox'>Aaron Trelstad currently attends Iowa State University and is pursuing degrees in Computer Science and Mathematics.
                    He has previously worked in User Experience (UX) and has experience in Full Stack Web develpoment.
                    </pabout>
                </div>
                <div className='imgblock'>
                    <img src={Bala} className='resized'/>
                    <pabout className='textbox'>Abhyudaya Shukla currently attends the University of Wisconsin-Madison and is pursuing degrees in Computer Science and Finance.
                    He has experience in Web develpoment and Full Stack App develpoment.
                    </pabout>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
