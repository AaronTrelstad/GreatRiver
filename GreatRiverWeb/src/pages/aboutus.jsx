import React from 'react';
import Bala from '/bala.jpeg';
import Aaron from '/Aaron.jpeg';

const About = () => {
    return (
        <>
            <div className='mt-32'></div>
            <div className='text-center py-4'>
                <h2 className='text-3xl font-light text-gray-800'>Meet the Team</h2>
            </div>
            <div className='flex flex-col space-y-10 items-center'>
                <div className='flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl'>
                    <img src={Aaron} alt="Aaron Trelstad" className='w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6'/>
                    <div className='text-center md:text-left'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>Aaron Trelstad</h3>
                        <p className='text-gray-700'>Aaron Trelstad currently attends Iowa State University and is double majoring in Computer Science
                        and Mathematics along with a minor in Statistics. He has work experience in both Software Engineering and UX Design.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl'>
                    <img src={Bala} alt="Abhyudaya Shukla" className='w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6'/>
                    <div className='text-center md:text-left'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>Abhyudaya Shukla</h3>
                        <p className='text-gray-700'>Abhyudaya Shukla currently attends the University of Wisconsin-Madison and is pursuing degrees in Computer Science and Data Science.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
