import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../headers/header";
import Footer from '../footer/footer';

const Services = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className='mt-32'>
                <h4 className="text-4xl font-light text-center text-gray-800 mb-4">Services</h4>
            </div>
            <div className="serviceExamples text-center mb-10">
                <Link to="https://motisfood.com" className="text-blue-600 underline">
                    Click here to check out our recent work!
                </Link>
            </div>
            <div className='wrapper flex flex-col items-center'>
                {data.map((item, index) => (
                    <div className='bg-white rounded-lg shadow-md p-6 mb-4 max-w-4xl w-full'>
                        <h3 className='bg-gray-200 py-2 px-4 rounded-lg mb-2 text-xl font-semibold text-gray-800'>{item.service}</h3>
                        <p className='text-gray-700'>{item.explain}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const data = [
    {
        service: 'User Experience and Interface Consultation',
        explain: 'How does a user interact with your website, and what type of experience do they have? These are fundamental questions that play a crucial role in converting online visitors into actual shoppers. At Great River Solutions, we conduct a thorough analysis of your website\'s interfaces and designs from the viewpoint of your customers. Our aim is to optimize the user experience and provide potential solutions to enhance their interactions. By understanding user behavior and preferences, we can make data-driven recommendations that will ultimately lead to improved customer engagement and increased conversions.',
    },
    {
        service: 'Website Remodeling',
        explain: 'Don\'t let an outdated website hold back your company. At Great River Solutions, we conduct in-depth market research to provide the latest concepts and ideas that will boost your online marketability. Our team analyzes industry trends, user preferences, and competitor performance to develop a cutting-edge strategy tailored to your specific needs. With our innovative approach and creative solutions, we will transform your website into a powerful digital asset that captivates your target audience and drives business growth.'
    },
    {
        service: 'Front End Website Creation',
        explain: 'Is your company missing an online presence? Well, this presents a significant opportunity for growth. At Great River Solutions, we conduct thorough competitor research to develop a website that sets your company apart from the rest. Our team will craft a unique online platform that not only showcases your brand\'s identity but also captivates your target audience. With a focus on user experience and modern design, we will ensure that your website becomes a powerful tool for attracting and engaging potential customers, ultimately driving your business to new heights. Embrace this opportunity for growth with our tailored website solutions.',
    },
];

export default Services;
