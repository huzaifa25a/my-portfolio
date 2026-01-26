import React, { useState } from 'react'
import quickmark from '../assets/quickmark.svg'
import shipkart from '../assets/shipkart-1.png'
import nutrigen from '../assets/nutrigen-1.png'
import countryApp from '../assets/world-app.gif'
import emirnest from '../assets/emirnest-2.png'
import rightIcon from '../assets/right-arrow.svg'
import '../App.css'

const Projects = () => {
  const [showDescription, setShowDescription] = useState(null);
  const projects = [
    {
      image: quickmark,
      name: 'Quickmark AI enabled bookmark manager',
      description:
        'Quickmark is a smart Chrome extension designed to simplify bookmark management. It lets users seamlessly add, edit, and remove bookmarks while offering advanced search and filtering capabilities for quickly locating saved websites.',
      github: 'https://github.com/huzaifa25a/QuickMark-chrome-extension',
      live: 'https://chromewebstore.google.com/detail/quickmark-extension/aekidkilaeamdkbaefbihcepeeoaehlh?hl=en-GB&authuser=0'
    },
    {
      image: countryApp,
      name: 'The World Explorer App',
      description:
        `Country App is an interactive web project that displays detailed information about every country in the world. Users can explore flags, populations, currencies, spoken languages, and other key facts in a visually engaging interface.`,
      github: 'https://github.com/huzaifa25a/country-app',
      live: 'https://country-app-ten-psi.vercel.app/'
    },
    {
      image: emirnest,
      name: 'Emirnest - UAE Real Estate Portal',
      description: 
        `Emirnest is a full-stack real estate platform designed for the UAE market, enabling users to browse, search, and list properties for rent or sale. The application supports secure authentication, role-based property management, dynamic search filters, and detailed property pages, providing a smooth and reliable real estate experience.`,
      github: 'https://github.com/huzaifa25a/Emirnest-Real-Estate',
      live: 'https://emirnest-real-estate.vercel.app/'
    },
    {
      image: shipkart,
      name: 'Shipkart - Online courier service',
      description:
        'Shipkart is a courier service web application that enables users to send and receive packages across the country. It provides real-time, personalized shipping quotes based on regions and offers various service levels—from basic to premium.',
      github: 'https://github.com/huzaifa25a/Shipkart',
      live: ''
    },
    {
      image: nutrigen,
      name: 'Nutrigen - Diet planner and recommendation app',
      description:
        `Nutrigen is a health-focused app that delivers personalized diet plans and recipe recommendations. It tailors suggestions according to the user's dietary preferences, fitness goals, and health conditions to promote better eating habits.`,
      github: 'https://github.com/huzaifa25a/Nutrigen',
      live: ''
    },
  ];

  return (
    <div id='Projects' className='flex flex-col items-center justify-center flex-wrap'>
      <h1 className='text-[24px] mb-6'>My Projects</h1>
      <div className='flex flex-row flex-wrap gap-10 justify-center max-w-[80vw]'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='text-white relative cursor-pointer rounded-[30px] w-[300px] h-[400px] overflow-hidden shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg'
            onMouseEnter={() => setShowDescription(index)}
            onMouseLeave={() => setShowDescription(null)}
            onClick={() => setShowDescription(showDescription === index ? null : index)}
          >
            {/* Background image with blur + dark overlay */}
            <div
              className="projectImage absolute inset-0 bg-cover bg-no-repeat bg-top z-0 transition-all duration-500 ease-in-out filter"
              style={{
                backgroundImage: `url(${project.image})`,
                filter: showDescription === index ? 'brightness(20%)' : 'brightness(100%)',
              }}
              onMouseEnter={() => setShowDescription(index)}
              onMouseLeave={() => setShowDescription(null)}
              onClick={() => setShowDescription(showDescription === index ? null : index)}
            ></div>

            {/* Dark gradient overlay at top */}
            {/* <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-transparent"></div> */}
          
            {/* Content over background */}
            <div className='relative z-999 p-4 text-white h-full flex flex-col justify-around'>
              <span 
                className={`font-semibold text-center mb-2 
                  ${showDescription === index ? 'opacity-100' : 'opacity-0'}`
                }
                style={{color: 'white'}}
              >
                {project.name}
              </span>
              <div
                className={`flex flex-col items-center text-justify transition-opacity duration-500 ease-in-out ${
                  showDescription === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p 
                  className='font-medium text-sm mt-2 mb-8'
                  style={{color: 'white'}}
                >
                  {project.description}
                </p>
                <div className='flex flex-row gap-6'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 transition-tranform hover:scale-105 duration-200 items-center hover:bg-[#e5e5e5a3] px-2 py-1 rounded-lg active:bg-[#e5e5e5a3]'
                    style={{color: '#e6e6e6'}}
                  >
                    GitHub
                    <img src={rightIcon} alt='right arrow' className='h-[20px]'/>
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex gap-2 transition-tranform hover:scale-105 duration-200 items-center hover:bg-[#e5e5e5a3] px-2 py-1 rounded-lg active:bg-[#e5e5e5a3]'
                    style={{color: '#e6e6e6'}}
                  >
                    Live
                    <img src={rightIcon} alt='right arrow' className='h-[20px]'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
