import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import River from '/qc.jpeg'

function Home() {
    return (
        <div>
            {/* Add image and text animation on top of the image, the image will be in the background and take up the entire*/}
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${River})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h5 className="text-white text-3xl sm:text-5xl font-light">
                            {/* This is the typing animation */}
                            <span className="animation-text">
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
            <div className="text-center py-12 px-4">
                <h1 className="text-3xl md:text-5xl font-light text-gray-700">Grow your company by <span className="text-blue-600">15%-50%</span></h1>
                <p className="text-gray-700 mt-4 mx-auto max-w-4xl">Studies have consistently shown that companies with a strong online presence experience remarkable growth, 
                    ranging from <span className="text-blue-600">15% to 50%</span>, in comparison to those without one. In 2021, the online commerce landscape witnessed an 
                    unprecedented surge, with <span className="text-blue-600">19% of all commercial transactions taking place online</span>, resulting in an astounding <span className="text-blue-600">$871.03 
                    billion </span>in online spending in the United States alone.
                </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-200 text-center py-12 px-4">
                <h1 className="text-blue-600 text-3xl md:text-5xl font-light">What we do</h1>
                <p className="text-gray-700 mt-4 mx-auto max-w-4xl">At Great River Solutions, we are a forward-thinking digital agency dedicated to transforming businesses with cutting-edge
                    website solutions. Through in-depth market research, innovative design, and a focus on user experience, 
                    we elevate your online presence, helping your company thrive in the competitive landscape.
                </p>
            </div>

            {/* Advertising users to sign up for newsletter*/}
            <div className="bg-gray-300 text-center py-12 px-4">
                <h2 className="text-2xl md:text-3xl font-light text-blue-600">Unleash the Potential of your Business</h2>
            </div>
            <div className="bg-gray-300 flex justify-center pb-12">
                <a className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300" href="mailto:greatriversolutions@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
        </div> 
    )
}

export default Home;
