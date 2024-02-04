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
                    <pabout className='textbox'>Aaron Trelstad currently attends Iowa State University and is double majoring in Computer Science
                    and Mathematics along with a minor in Statistics. He has experience working in User Experience (UX) Design and Software Engineering.
                    </pabout>
                </div>
                <div className='imgblock'>
                    <img src={Bala} className='resized'/>
                    <pabout className='textbox'>Abhyudaya Shukla currently attends the University of Wisconsin-Madison and is pursuing degrees in Computer Science and Data Science.
                    He has experience in Full Stack App develpoment.
                    </pabout>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
