import React, { useState } from 'react'
import quickmark from '../assets/quickmark.svg'
import shipkart from '../assets/shipkart-1.png'
import nutrigen from '../assets/nutrigen-1.png'
import rightIcon from '../assets/right-arrow.svg'
import '../App.css'

const Projects = () => {
  const [showDescription, setShowDescription] = useState(null);
  const projects = [
    {
      image: quickmark,
      name: 'Quickmark AI enabled bookmark manager',
      description:
        'Quickmark is a chrome extension for intelligently managing bookmarks in chrome browser. It has an AI feature for naming bookmarks and categorizing them into relevant groups.',
      link: 'https://github.com/huzaifa25a/QuickMark-chrome-extension'
    },
    {
      image: shipkart,
      name: 'Shipkart - Online courier service',
      description:
        'Shipkart is an online courier service that allows people to send and receive courier throughout the country. Get personalized quotations based on region and basic to premium services.',
      link: 'https://github.com/huzaifa25a/Shipkart'
    },
    {
      image: nutrigen,
      name: 'Nutrigen - Diet planner and recommendation app',
      description:
        'Nutrigen is a diet planner and recommendation app that allows users to get personalized diet recommendations and recipes based on their personal preferences and health conditions.',
      link: 'https://github.com/huzaifa25a/Nutrigen'
    },
  ];

  return (
    <div id='Projects' className='flex flex-col items-center justify-center flex-wrap'>
      <h1 className='text-[24px] mb-4'>My Projects</h1>
      <div className='flex flex-row flex-wrap gap-10 justify-center'>
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
              className="projectImage absolute inset-0 bg-cover bg-no-repeat bg-center z-0 transition-all duration-500 ease-in-out filter"
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
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex gap-2 transition-tranform hover:scale-105 duration-200 items-center hover:bg-[#e5e5e5a3] px-2 py-1 rounded-lg active:bg-[#e5e5e5a3]'
                  style={{color: '#e6e6e6'}}
                >
                  Know more 
                  <img src={rightIcon} alt='right arrow' className='h-[20px]'/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
