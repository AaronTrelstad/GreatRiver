import React, { useState } from 'react'
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
        <Footer />
        </div>
    )
}

const data = [
    {
        service: 'Full Stack Website Creation',
        explain: 'Website made from scratch that requires a back end server and connects to a database',
    },
    {
        service: 'Front End Website Creation',
        explain: 'Website made from scratch that does not require a back end server or database',
    },
    {
        service: 'User Experience and Interface Consultation',
        explain: 'Company already has website but wants to make changes',
    }
]

export default Services
