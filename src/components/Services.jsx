import React from 'react';
import webDev from '../assets/web-dev.png';
import optimize from '../assets/optimize.png';
import uiDesign from '../assets/ui.png';


const Services = () => {
    const services = [
        {icon: webDev, name: 'Web Development', description: 'Get you website quickly developed. From design to deployment, I\'ll handle everything while you relax.'},
        {icon: optimize, name: 'Website Maintenance', description: 'Keep your website fresh and flawless. I’ll take care of updates, fixes, and improvements so you don’t have to.'},
        {icon: uiDesign, name: 'UI/UX Design (Basic)', description: 'Clean, modern, and user-focused designs. I’ll craft intuitive layouts that look great and work smoothly on all devices.'}
    ]
   return( 
        <div id='Services' className='flex flex-col items-center justify-center flex-wrap'>
            <h1 className='text-[24px] mb-4'>My Services</h1>
            <div className='flex flex-wrap justify-center'>
                {services.map((service, index) => (
                    <div key={index} className='cursor-pointer rounded-md max-w-[250px] m-2 p-4 flex flex-col items-center border-black border-[2px] shadow-md duration-200 hover:transition-transform hover:scale-103 hover:shadow-lg active:transition-transform active:scale-103 active:shadow-lg'>
                        <img src={service.icon} alt='service' className='h-[100px] mb-6'/>
                        <div className='font-bold mb-2 text-center'>
                            <span>{service.name}</span>
                        </div>
                        <div className='text-justify'>
                            <span>{service.description}</span>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services