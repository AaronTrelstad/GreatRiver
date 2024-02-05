import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from "../headers/header"
import './services.css'
import Footer from '../footer/footer'

const Services = () => {
    {/* Records which box is clicked on */}
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        {/* This makes it so that if you click on the open box it will close */} 
        if (selected === i) {
            return setSelected(null)
        }
        {/* This makes it so the clicked on box opens */}
        setSelected(i)
    }

    return (
        <div>
        <Header />
        <div className='topspace'>
            <h4>Services</h4> 
        </div>
        <div className="serviceExamples">
            <Link to="https://motisfood.com">Click here to check out our recent work!</Link>
        </div>
        <div className='wrapper'>
            <div className='accordion'>

                {/* This iterates through the data (shown below) and creates a tab for all of them */}
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <serv>{item.service}</serv>
                            {/* This makes it so that when a tab is clicked on it displays a '-' and when unclicked '+' */}
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        
                        {/* This makes it so that intially the explaination of the service
                            is hidden untill the user clicks on the tab */}
                        <div className={selected === i ? 'content show' : 'content'}>{item.explain}</div>

                    </div>
                ))}
            </div>
        </div>
        <div className='bottomspace'/>
        <Footer />
        </div>
    )
}

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
]

export default Services
