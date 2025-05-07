import React, { useState } from 'react'
import quickmark from '../assets/quickmark-1.png'

const Projects = () => {
  const [showDescription, setShowDescription] = useState(null);
  const projects = [
    {
      image: quickmark,
      name: 'Quickmark AI enabled bookmark manager',
      description:
        'Quickmark is a chrome extension for intelligently managing bookmarks in chrome browsers. It has AI feature for smartly naming bookmarks and categorizing them in relevant groups.',
      link: 'https://github.com/huzaifa25a/QuickMark-chrome-extension'
    },
    {
      image: quickmark,
      name: 'Shipkart - Online courier service',
      description:
        'Shipkart is an online courier service and management system that enables people to send and receive couriers from any part of India.',
      link: 'https://github.com/huzaifa25a/Shipkart'
    },
    {
      image: quickmark,
      name: 'Nutrigen',
      description:
        'Nutrigen is a diet recommendation app that allows users to get personalized diet and food recommendations and recipes based on their personal preferences and health conditions.',
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
            className={`cursor-pointer flex flex-col border-black rounded-sm border-[2px] p-4 w-[240px] shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg ${showDescription === index ? 'h-[270px]': 'h-[70px]'}`}
            onMouseEnter={() => setShowDescription(index)}
            onMouseLeave={() => setShowDescription(null)}
            onClick={() => setShowDescription(showDescription === index ? null : index)}
          >
              {/* <img src={project.image} alt='Quickmark extension' className='h-56 w-56 mb-4' /> */}
              <span className='font-semibold text-center mb-2'>{project.name}</span>
              <div
                className={`flex flex-col items-center text-justify overflow-hidden transition-all duration-500 ease-in-out ${
                  showDescription === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className='text-sm mt-2 mb-3'>{project.description}</p>
                <a href={project.link} target='_blank' rel="noopener noreferrer" className='transition-transform hover:scale-105 active:scale-105 duration-300'>Know more...</a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
