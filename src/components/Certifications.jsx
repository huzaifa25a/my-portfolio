import React, { useContext, useState } from 'react'
import aws_ccp from '../assets/aws-certified-cloud-practitioner.png'
import az900 from '../assets/azure-fundamentals.png'
import { ThemeContext } from '../ThemeContext'
// import '../App.css'

const Projects = () => {
    const {darkMode} = useContext(ThemeContext);
  const Certifications = [
    {
      image: aws_ccp,
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/7c3f5589-b10b-495f-9b77-5339612c68d7/public_url'
    },
    {
      image: az900,
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      link: 'https://learn.microsoft.com/en-us/users/huzaifapachisa-0285/credentials/bbc8a14c32836a47'
    },
  ];

  const textStyle = {
    color: darkMode ? 'black' : 'white',
    borderColor: darkMode ? 'black' : 'white'
  }

  return (
    <div id='Certifications' className='flex flex-col items-center justify-center flex-wrap'>
      <h1 className='text-[24px] mb-6'>My Certifications</h1>
      <div className='flex flex-row flex-wrap gap-10 justify-center'>
        {Certifications.map((certificate, index) => (
          <div
            key={index}
            className={`flex flex-wrap justify-center items-center cursor-pointer rounded-[10px] max-w-[350px] w-auto h-auto gap-4 transition-all duration-500 ease-in-out hover:scale-105 active:scale-105 border-[2px] ${darkMode ? 'shadow-[0_0_2px_#0ff,0_0_2px_#0ff,0_0_2px_#0ff] hover:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff] active:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff] border-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff]' : 'shadow-md hover:shadow-lg active:shadow-lg border-black '}`}
          >
            <div className='p-2'>
              <img src={certificate.image} className='h-[250px]'/>
            </div>
            <div className={`flex flex-col p-4 w-full rounded-b-[8px] border-t-2 border-black ${darkMode ? 'bg-white opacity-90 shadow-[0_0_2px_#0ff,0_0_2px_#0ff,0_0_2px_#0ff] hover:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff] active:shadow-[0_0_2px_#0ff,0_0_5px_#0ff,0_0_10px_#0ff]' : 'bg-gray-500'}`}>
              <span className = 'font-semibold text-center mb-2' style={textStyle}>
                {certificate.name}
              </span>
              <div className={`flex flex-col items-center text-justify`}>
                <p className='font-medium text-sm mt-2 mb-6' style={textStyle}>
                  Issuer: {certificate.issuer}
                </p>
                <a
                  href={certificate.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`inline-block border-black border-[2px] px-1 py-0.5 rounded-md transition-transform duration-200 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.2)] hover:shadow-lg active:shadow-lg`}
                  style={textStyle}
                >
                  credential link
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
