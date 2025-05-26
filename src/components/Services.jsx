import React, { useContext } from 'react';
import webDev from '../assets/coding.png';
import optimize from '../assets/optimize-2.png';
import uiDesign from '../assets/front-development.png';
import webDev_grad from '../assets/programing.png';
import optimize_grad from '../assets/optimize-1.png';
import uiDesign_grad from '../assets/ui-ux-design.png';
import { ThemeContext } from '../ThemeContext';


const Services = () => {
    const {darkMode} = useContext(ThemeContext);
    const services = [
        {icon: darkMode ? webDev_grad : webDev, name: 'Web Development', description: 'Get you website quickly developed. From design to deployment, I\'ll handle everything while you relax.'},
        {icon: darkMode ? optimize_grad : optimize, name: 'Website Maintenance', description: 'Keep your website fresh and flawless. I’ll take care of updates, fixes, and improvements so you don’t have to.'},
        {icon: darkMode ? uiDesign_grad : uiDesign, name: 'UI/UX Design (Basic)', description: 'Clean, modern, and user-focused designs. I’ll craft intuitive layouts that look great and work smoothly on all devices.'}
    ]
   return( 
        <div id='Services' className='flex flex-col items-center justify-center flex-wrap'>
            <h1 className='text-[24px] mb-4'>My Services</h1>
            <div className='flex flex-wrap justify-center'>
                {services.map((service, index) => (
                    <div key={index} className={`cursor-pointer rounded-md max-w-[250px] m-2 p-4 flex flex-col items-center border-black border-[2px] duration-200 transition-transform hover:scale-103 active:scale-103 ${darkMode ? 'shadow-[0_0_2px_#0ff,0_0_2px_#0ff,0_0_2px_#0ff] hover:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff] active:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff]' : 'shadow-md hover:shadow-lg active:shadow-lg'}`}>
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